export type NodeKind = 'step' | 'focal' | 'result' | 'terminal' | 'decision' | 'focal-decision' | 'merge';
export type EdgeStyle = 'flow' | 'accent' | 'dashed';

export interface FlowNode {
  id: string;
  kind: NodeKind;
  cx: number;
  cy: number;
  w: number;
  h: number;
  title: string;
  subs?: string[];
  lines?: string[];
}

export interface FlowEdge {
  pts: [number, number][];
  style: EdgeStyle;
}

export interface FlowLabel {
  x: number;
  y: number;
  text: string;
  accent: boolean;
}

export interface FlowLane {
  name: string;
  cy: number;
}

export interface FlowSpec {
  id: string;
  viewBox: [number, number];
  lanes: FlowLane[];
  laneTop: number;
  laneH: number;
  left: number;
  x0: number;
  x1: number;
  title: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
  labels: FlowLabel[];
}
