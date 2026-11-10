import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  Ban,
  CalendarClock,
  CalendarDays,
  Check,
  FileText,
  Layers,
  LucideAngularModule,
  MousePointerClick,
  ShieldCheck,
  TriangleAlert,
  UserCog,
  UserMinus,
  UserPlus,
  Workflow,
} from 'lucide-angular';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { FlowDiagramComponent } from './flow-diagram/flow-diagram.component';
import { FlowSpec } from './flow-diagram/flow.types';
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
  imports: [LucideAngularModule, NzAnchorModule, NzStepsModule, NzTableModule, NzTagModule, FlowDiagramComponent],
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
    pointer: MousePointerClick,
    warn: TriangleAlert,
    flow: Workflow,
    'user-plus': UserPlus,
    'user-cog': UserCog,
    'user-minus': UserMinus,
    'calendar-clock': CalendarClock,
  };

  private readonly geometry = new Map<string, FlowSpec>(FLOW_GEOMETRY.map((g) => [g.id, g]));
  /** Active node per flow (id -> node id). Clicking a node or a step keeps both in sync. */
  readonly active = signal<Record<string, string | null>>(Object.fromEntries(FLOW_SECTIONS.map((f) => [f.id, f.steps[0].node])));

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
