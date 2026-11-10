import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  computed,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { LucideAngularModule, Maximize, ZoomIn, ZoomOut } from 'lucide-angular';
import { FlowDiagramComponent } from '../flow-diagram/flow-diagram.component';
import { FlowSpec, flowBounds } from '../flow-diagram/flow.types';

const MIN_ZOOM = 0.25;
const MAX_ZOOM = 2.5;
const STEP = 1.25;
const PAD = 32; // equal framing on every side of the diagram
const CANVAS_PAD = 16;
const DRAG_THRESHOLD = 3;

/** Full-screen diagram viewer: pan by dragging, zoom with wheel (anchored at cursor) or buttons. */
@Component({
  selector: 'app-flow-viewer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule, FlowDiagramComponent],
  templateUrl: './flow-viewer.component.html',
  styleUrl: './flow-viewer.component.css',
})
export class FlowViewerComponent implements AfterViewInit {
  readonly spec = input.required<FlowSpec>();
  readonly active = input<string | null>(null);
  readonly picked = output<string>();

  readonly pad = PAD;
  readonly icons = { zoomIn: ZoomIn, zoomOut: ZoomOut, fit: Maximize };

  private readonly cdr = inject(ChangeDetectorRef);
  private readonly canvas = viewChild.required<ElementRef<HTMLElement>>('canvas');
  private readonly sizer = viewChild.required<ElementRef<HTMLElement>>('sizer');

  /** Natural size, read from the cropped viewBox. */
  readonly natural = computed(() => {
    const b = flowBounds(this.spec(), PAD);
    return { w: Math.round(b.w), h: Math.round(b.h) };
  });

  readonly zoom = signal(1);
  readonly percent = computed(() => Math.round(this.zoom() * 100));
  readonly sizerW = computed(() => this.natural().w * this.zoom());
  readonly sizerH = computed(() => this.natural().h * this.zoom());

  readonly panning = signal(false);
  readonly noAnim = signal(false);

  private pointerId: number | null = null;
  private startX = 0;
  private startY = 0;
  private startLeft = 0;
  private startTop = 0;
  private moved = false;
  private wheelTimer: ReturnType<typeof setTimeout> | undefined;

  ngAfterViewInit(): void {
    // The modal animates open; wait a frame so the canvas has its final width.
    requestAnimationFrame(() => this.fit());
  }

  /** Zoom that makes the diagram exactly fit the canvas width. */
  private fitZoom(): number {
    const avail = this.canvas().nativeElement.clientWidth - CANVAS_PAD * 2;
    return this.clamp(avail / this.natural().w);
  }

  fit(): void {
    this.noAnim.set(true);
    this.zoom.set(this.fitZoom());
    this.cdr.detectChanges();
    const el = this.canvas().nativeElement;
    el.scrollLeft = 0;
    el.scrollTop = 0;
    this.noAnim.set(false);
    this.cdr.markForCheck();
  }

  zoomIn(): void {
    this.zoomAtCenter(this.zoom() * STEP);
  }

  zoomOut(): void {
    this.zoomAtCenter(this.zoom() / STEP);
  }

  private zoomAtCenter(next: number): void {
    const r = this.canvas().nativeElement.getBoundingClientRect();
    this.zoomTo(next, r.left + r.width / 2, r.top + r.height / 2);
  }

  /** Change zoom keeping the content point under (clientX, clientY) fixed. */
  private zoomTo(next: number, clientX: number, clientY: number): void {
    const z1 = this.zoom();
    const z2 = this.clamp(next);
    if (z2 === z1) return;
    const el = this.canvas().nativeElement;
    // No width/height transition while anchoring (it would skew the measurement) or while the wheel keeps turning.
    this.noAnim.set(true);
    clearTimeout(this.wheelTimer);
    this.wheelTimer = setTimeout(() => {
      this.noAnim.set(false);
      this.cdr.markForCheck();
    }, 150);
    this.cdr.detectChanges();
    const s1 = this.sizer().nativeElement.getBoundingClientRect();
    const ux = (clientX - s1.left) / z1;
    const uy = (clientY - s1.top) / z1;
    this.zoom.set(z2);
    this.cdr.detectChanges(); // apply the new sizer size before measuring again
    const s2 = this.sizer().nativeElement.getBoundingClientRect();
    el.scrollLeft += s2.left + ux * z2 - clientX;
    el.scrollTop += s2.top + uy * z2 - clientY;
  }

  onWheel(e: WheelEvent): void {
    e.preventDefault();
    const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? this.canvas().nativeElement.clientHeight : 1;
    const next = this.zoom() * Math.exp(-e.deltaY * unit * 0.0015);
    this.zoomTo(next, e.clientX, e.clientY);
  }

  onPanStart(e: PointerEvent): void {
    if (e.button !== 0) return;
    const el = this.canvas().nativeElement;
    this.pointerId = e.pointerId;
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.startLeft = el.scrollLeft;
    this.startTop = el.scrollTop;
    this.moved = false;
  }

  onPanMove(e: PointerEvent): void {
    if (this.pointerId !== e.pointerId) return;
    const dx = e.clientX - this.startX;
    const dy = e.clientY - this.startY;
    const el = this.canvas().nativeElement;
    if (!this.moved) {
      if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
      this.moved = true;
      // Capture only once it is a real drag, so a plain click still reaches the diagram nodes.
      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        // synthetic / already-released pointer: panning still works while the cursor stays over the canvas
      }
      this.panning.set(true);
    }
    el.scrollLeft = this.startLeft - dx;
    el.scrollTop = this.startTop - dy;
  }

  onPanEnd(e: PointerEvent): void {
    if (this.pointerId !== e.pointerId) return;
    const el = this.canvas().nativeElement;
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    this.pointerId = null;
    this.panning.set(false);
    // `moved` stays set until the next pointerdown so the click that follows a drag is ignored.
  }

  onPick(id: string): void {
    if (this.moved) return;
    this.picked.emit(id);
  }

  private clamp(z: number): number {
    return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z));
  }
}
