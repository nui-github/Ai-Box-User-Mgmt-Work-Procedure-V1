// "Ai-Box Development Process" — System Development Workflow (Design / Implement / Production).
// Three phase columns instead of swimlanes. Coordinates are SVG units; edit here to move nodes/edges.
// Node ids are referenced by DEV_PROCESS in content.ts.
import { EdgeStyle, FlowEdge, FlowNode, FlowSpec, NodeKind } from '../flow-diagram/flow.types';

const node = (id: string, kind: NodeKind, cx: number, cy: number, w: number, h: number, title: string, subs?: string[], lines?: string[]): FlowNode => ({
  id,
  kind,
  cx,
  cy,
  w,
  h,
  title,
  subs: subs ?? [],
  ...(lines ? { lines } : {}),
});
const merge = (id: string, cx: number, cy: number): FlowNode => node(id, 'merge', cx, cy, 8, 8, '');
const edge = (style: EdgeStyle, ...pts: [number, number][]): FlowEdge => ({ pts, style });

// column centres
const C1 = 190;
const C2 = 590;
const C3 = 975;

export const DEV_PROCESS_GEOMETRY: FlowSpec = {
  id: 'dev-process',
  viewBox: [1160, 960],
  lanes: [],
  laneTop: 0,
  laneH: 0,
  left: 0,
  x0: 0,
  x1: 0,
  title: 'System Development Workflow (Design / Implement / Production)',
  phases: [
    { no: '01', name: 'Design', x0: 20, x1: 360 },
    { no: '02', name: 'Implement', x0: 400, x1: 780 },
    { no: '03', name: 'Production', x0: 826, x1: 1124 },
  ],
  phaseY: 40,
  phaseDivider: [64, 924],
  nodes: [
    // ---- 01 Design
    node('start', 'terminal', C1, 120, 110, 36, 'Start'),
    node('feedback', 'step', 108, 195, 150, 44, 'Customer Feedback'),
    node('roadmap', 'step', 272, 195, 150, 44, 'Business Roadmap'),
    merge('m1', C1, 232),
    node('pipeline', 'step', C1, 270, 220, 44, 'PO - Add to Pipeline'),
    node('review', 'step', C1, 342, 220, 44, 'Internal Review'),
    node('dor1', 'step', C1, 414, 220, 44, 'Meeting: DOR / Non-DOR'),
    node('dor2', 'step', C1, 486, 220, 44, 'Meeting: DOR / Non-DOR'),
    node('estimate', 'step', C1, 559, 220, 44, 'Estimate: PO, DEV, QA'),
    node('uxui', 'step', 108, 653, 150, 44, 'UX/UI Figma'),
    node('journey', 'step', 272, 653, 150, 44, 'User Journey Flow'),
    merge('m2', C1, 691),
    node('plan', 'focal', C1, 728, 220, 44, 'Plan'),

    // ---- 02 Implement
    node('story', 'step', C2, 180, 200, 44, 'PO - Create User Story'),
    node('dev', 'step', 502, 266, 164, 44, 'DEV Implement'),
    node('qa-design', 'step', 678, 266, 164, 44, 'QA - Design Test Case'),
    node('standup', 'step', C2, 335, 200, 48, 'DEV / QA / PO', ['Stand-up Meeting']),
    merge('m3', C2, 385),
    node('qa-test', 'step', C2, 424, 200, 44, 'QA - Test'),
    node('issue', 'decision', C2, 490, 130, 60, '', undefined, ['Issue?']),
    node('qa-close', 'step', C2, 567, 200, 44, 'QA - Close Test Case'),
    node('prepare', 'step', C2, 634, 230, 44, 'DEV - Prepare for Production'),
    node('uat', 'step', C2, 700, 200, 44, 'UAT - Internal'),
    node('error', 'decision', C2, 778, 130, 60, '', undefined, ['Error?']),
    node('on-prod', 'result', C2, 857, 200, 44, 'On Production'),

    // ---- 03 Production
    node('deploy', 'step', C3, 196, 200, 44, 'Production Deploy'),
    node('post-test', 'step', C3, 288, 200, 44, 'Post-Deploy Testing'),
    node('retro', 'step', C3, 380, 200, 44, 'Sprint Retrospective'),
    node('backlog', 'step', C3, 472, 200, 44, 'Keep Backlog Issue'),
    node('end', 'terminal', C3, 560, 110, 36, 'End'),
  ],
  edges: [
    // ---- 01 Design
    edge('flow', [C1, 138], [C1, 157], [108, 157], [108, 173]),
    edge('flow', [C1, 138], [C1, 157], [272, 157], [272, 173]),
    edge('flow', [108, 217], [108, 232], [186, 232]),
    edge('flow', [272, 217], [272, 232], [194, 232]),
    edge('flow', [C1, 236], [C1, 248]),
    edge('flow', [C1, 292], [C1, 320]),
    edge('flow', [C1, 364], [C1, 392]),
    edge('flow', [C1, 436], [C1, 464]),
    edge('flow', [C1, 508], [C1, 537]),
    edge('flow', [C1, 581], [C1, 606], [108, 606], [108, 631]),
    edge('flow', [C1, 581], [C1, 606], [272, 606], [272, 631]),
    edge('flow', [108, 675], [108, 691], [186, 691]),
    edge('flow', [272, 675], [272, 691], [194, 691]),
    edge('flow', [C1, 695], [C1, 706]),
    // handoff 01 → 02
    edge('accent', [C1, 750], [C1, 800], [368, 800], [368, 121], [C2, 121], [C2, 158]),

    // ---- 02 Implement
    edge('flow', [C2, 202], [C2, 222], [502, 222], [502, 244]),
    edge('flow', [C2, 202], [C2, 222], [678, 222], [678, 244]),
    edge('dashed', [540, 288], [540, 311]),
    edge('flow', [432, 288], [432, 385], [586, 385]),
    edge('flow', [748, 288], [748, 385], [594, 385]),
    edge('flow', [C2, 389], [C2, 402]),
    edge('flow', [C2, 446], [C2, 460]),
    edge('flow', [C2, 520], [C2, 545]),
    edge('flow', [C2, 589], [C2, 612]),
    edge('flow', [C2, 656], [C2, 678]),
    edge('flow', [C2, 722], [C2, 748]),
    edge('flow', [C2, 808], [C2, 835]),
    // Yes loops back to DEV Implement
    edge('flow', [525, 490], [408, 490], [408, 266], [420, 266]),
    edge('flow', [525, 778], [408, 778], [408, 494]),
    // handoff 02 → 03
    edge('accent', [C2, 879], [C2, 898], [791, 898], [791, 121], [C3, 121], [C3, 174]),

    // ---- 03 Production
    edge('flow', [C3, 218], [C3, 266]),
    edge('flow', [C3, 310], [C3, 358]),
    edge('flow', [C3, 402], [C3, 450]),
    edge('flow', [C3, 494], [C3, 542]),
  ],
  labels: [
    { x: C2, y: 104, text: 'Plan approved', accent: true },
    { x: C3, y: 104, text: 'Release ready', accent: true },
    { x: 462, y: 478, text: 'Yes', accent: false },
    { x: 462, y: 766, text: 'Yes', accent: false },
    { x: 606, y: 532, text: 'No', accent: false },
    { x: 606, y: 821, text: 'No', accent: false },
    { x: C3, y: 606, text: 'Backlog feeds the next cycle', accent: false },
  ],
};
