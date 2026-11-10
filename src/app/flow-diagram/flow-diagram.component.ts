import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { FlowEdge, FlowNode, FlowSpec, flowBounds } from './flow.types';

/** Renders a FlowSpec as an inline SVG (orthogonal connectors, swimlanes optional). */
@Component({
  selector: 'app-flow-diagram',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './flow-diagram.component.html',
  styleUrl: './flow-diagram.component.css',
})
export class FlowDiagramComponent {
  readonly spec = input.required<FlowSpec>();
  readonly active = input<string | null>(null);
  readonly picked = output<string>();

  /** Padding around the cropped content (viewBox). */
  readonly pad = input(16);
  /** Natural size: fixed pixel width/height from the viewBox (used by the zoomable viewer). */
  readonly natural = input(false);

  readonly box = computed(() => flowBounds(this.spec(), this.pad()));

  /** Below this width the diagram scrolls instead of shrinking further (keeps text >= ~10px). */
  readonly minWidth = computed(() => (this.natural() ? null : Math.min(this.box().w, 940)));

  readonly laneBottom = computed(() => {
    const s = this.spec();
    return s.laneTop + s.laneH * s.lanes.length;
  });

  readonly laneLines = computed(() => {
    const s = this.spec();
    return Array.from({ length: s.lanes.length + 1 }, (_, i) => ({
      y: s.laneTop + s.laneH * i,
      edge: i === 0 || i === s.lanes.length,
    }));
  });

  marker(style: string): string {
    return `url(#${this.spec().id}-arrow-${style})`;
  }

  /** Orthogonal polyline with rounded corners (r = 8). */
  pathD(e: FlowEdge): string {
    const p = e.pts;
    const r = 8;
    let d = `M ${p[0][0]},${p[0][1]}`;
    for (let i = 1; i < p.length - 1; i++) {
      const [x0, y0] = p[i - 1];
      const [x1, y1] = p[i];
      const [x2, y2] = p[i + 1];
      const l1 = Math.abs(x1 - x0) + Math.abs(y1 - y0);
      const l2 = Math.abs(x2 - x1) + Math.abs(y2 - y1);
      const rr = Math.min(r, l1, l2);
      const u1 = [(x1 - x0) / l1, (y1 - y0) / l1];
      const u2 = [(x2 - x1) / l2, (y2 - y1) / l2];
      d += ` L ${x1 - u1[0] * rr},${y1 - u1[1] * rr} Q ${x1},${y1} ${x1 + u2[0] * rr},${y1 + u2[1] * rr}`;
    }
    const last = p[p.length - 1];
    return d + ` L ${last[0]},${last[1]}`;
  }

  labelWidth(text: string): number {
    // Thai combining marks take no width.
    const n = [...text].filter((c) => !/[ัิ-ฺ็-๎]/.test(c)).length;
    return n * 6.2 + 14;
  }

  isDecision(n: FlowNode): boolean {
    return n.kind === 'decision' || n.kind === 'focal-decision';
  }

  diamond(n: FlowNode): string {
    const { cx, cy, w, h } = n;
    return `${cx},${cy - h / 2} ${cx + w / 2},${cy} ${cx},${cy + h / 2} ${cx - w / 2},${cy}`;
  }

  /** Y of the first text line for step-like nodes. */
  titleY(n: FlowNode): number {
    const subs = n.subs?.length ?? 0;
    const total = 15 + 13 * subs;
    return n.cy - total / 2 + 11;
  }

  subY(n: FlowNode, i: number): number {
    return this.titleY(n) + 15 + 13 * i;
  }

  lineY(n: FlowNode, i: number): number {
    const count = n.lines?.length ?? 1;
    return n.cy - (count - 1) * 7 + 4 + 14 * i;
  }

  ariaLabel(n: FlowNode): string {
    return this.isDecision(n) ? (n.lines ?? []).join(' ') : n.title;
  }

  pick(n: FlowNode): void {
    if (n.kind !== 'merge') this.picked.emit(n.id);
  }
}
