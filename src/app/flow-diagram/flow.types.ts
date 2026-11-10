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

export interface FlowBounds {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** Tight bounds of a diagram's content plus equal padding on every side (used as the SVG viewBox). */
export function flowBounds(spec: FlowSpec, pad: number): FlowBounds {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  const add = (x0: number, y0: number, x1: number, y1: number) => {
    minX = Math.min(minX, x0);
    minY = Math.min(minY, y0);
    maxX = Math.max(maxX, x1);
    maxY = Math.max(maxY, y1);
  };
  if (spec.lanes.length) {
    add(spec.x0, spec.laneTop, spec.x1, spec.laneTop + spec.laneH * spec.lanes.length);
  }
  for (const n of spec.nodes) add(n.cx - n.w / 2, n.cy - n.h / 2, n.cx + n.w / 2, n.cy + n.h / 2);
  for (const e of spec.edges) for (const [x, y] of e.pts) add(x, y, x, y);
  for (const l of spec.labels) add(l.x - 40, l.y - 8, l.x + 40, l.y + 8);
  return { x: minX - pad, y: minY - pad, w: maxX - minX + pad * 2, h: maxY - minY + pad * 2 };
}
