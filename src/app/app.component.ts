import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {
  Ban,
  CalendarClock,
  CalendarDays,
  Check,
  Copy,
  ExternalLink,
  FileText,
  Info,
  Layers,
  Link2,
  LucideAngularModule,
  Maximize2,
  MousePointerClick,
  ShieldCheck,
  TriangleAlert,
  UserCog,
  UserMinus,
  UserPlus,
  Workflow,
} from 'lucide-angular';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { FlowDiagramComponent } from './flow-diagram/flow-diagram.component';
import { FlowSpec } from './flow-diagram/flow.types';
import { FlowViewerComponent } from './flow-viewer/flow-viewer.component';
import {
  DEFINITIONS,
  DOC_META,
  FLOW_SECTIONS,
  NAV,
  ORG_NETBAY,
  ORG_SERVICE_PROVIDER,
  PRINCIPLES,
  PURPOSE,
  REVIEW_EVIDENCE_NOTE,
  SCOPE,
  SERVICE_PROVIDER_TEAMS,
  SHARED_RULE,
  SHARED_STEPS,
  SHARED_TECH_NOTE,
  TICKET_CHECKLIST,
  TICKET_MISMATCH,
} from './data/content';
import { FLOW_GEOMETRY } from './data/flows.geometry';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule, NzAnchorModule, NzModalModule, NzStepsModule, NzTableModule, NzTagModule, FlowDiagramComponent, FlowViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly meta = DOC_META;
  readonly nav = NAV;
  readonly purpose = PURPOSE;
  readonly scope = SCOPE;
  readonly definitions = DEFINITIONS;
  readonly principles = PRINCIPLES;
  readonly teams = SERVICE_PROVIDER_TEAMS;
  readonly orgSp = ORG_SERVICE_PROVIDER;
  readonly orgNetbay = ORG_NETBAY;
  readonly flows = FLOW_SECTIONS;
  readonly checklist = TICKET_CHECKLIST;
  readonly mismatch = TICKET_MISMATCH;
  readonly sharedRule = SHARED_RULE;
  readonly sharedSteps = SHARED_STEPS;
  readonly sharedTech = SHARED_TECH_NOTE;
  readonly reviewNote = REVIEW_EVIDENCE_NOTE;
  readonly companiesText = DOC_META.companies.join(', ');

  readonly icons = {
    ban: Ban,
    shield: ShieldCheck,
    layers: Layers,
    check: Check,
    file: FileText,
    calendar: CalendarDays,
    copy: Copy,
    external: ExternalLink,
    info: Info,
    link: Link2,
    pointer: MousePointerClick,
    warn: TriangleAlert,
    flow: Workflow,
    expand: Maximize2,
    'user-plus': UserPlus,
    'user-cog': UserCog,
    'user-minus': UserMinus,
    'calendar-clock': CalendarClock,
  };

  private readonly message = inject(NzMessageService);

  /** Copy the official PDF link and show a toast. */
  async copyDocLink(): Promise<void> {
    const url = this.meta.docUrl;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        this.legacyCopy(url);
      }
      this.message.success('คัดลอกลิงก์แล้ว');
    } catch {
      try {
        this.legacyCopy(url);
        this.message.success('คัดลอกลิงก์แล้ว');
      } catch {
        this.message.error('คัดลอกลิงก์ไม่สำเร็จ');
      }
    }
  }

  private legacyCopy(text: string): void {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    ta.remove();
    if (!ok) throw new Error('copy failed');
  }

  private readonly geometry =new Map<string, FlowSpec>(FLOW_GEOMETRY.map((g) => [g.id, g]));
  /** Active node per flow (id -> node id). Clicking a node or a step keeps both in sync. */
  readonly active = signal<Record<string, string | null>>(Object.fromEntries(FLOW_SECTIONS.map((f) => [f.id, f.steps[0].node])));

  /** Flow currently shown in the full-screen modal (null = closed). */
  readonly modalFlow = signal<string | null>(null);
  readonly modalSpec = computed(() => {
    const id = this.modalFlow();
    return id ? this.geometry.get(id) ?? null : null;
  });

  openModal(flowId: string): void {
    this.modalFlow.set(flowId);
  }

  closeModal(): void {
    this.modalFlow.set(null);
  }

  spec(id: string): FlowSpec {
    return this.geometry.get(id)!;
  }

  activeNode(flowId: string): string | null {
    return this.active()[flowId] ?? null;
  }

  stepIndex(flowId: string): number {
    const flow = this.flows.find((f) => f.id === flowId)!;
    const node = this.activeNode(flowId);
    return flow.steps.findIndex((s) => s.node === node);
  }

  selectNode(flowId: string, node: string | null): void {
    this.active.update((a) => ({ ...a, [flowId]: node }));
  }

  selectStep(flowId: string, index: number): void {
    const flow = this.flows.find((f) => f.id === flowId)!;
    this.selectNode(flowId, flow.steps[index]?.node ?? null);
  }

  readonly flowCards = computed(() => this.flows.map((f) => ({ no: f.no, title: f.title, en: f.en, anchor: f.anchor, icon: f.icon })));
}
