import React from "react";

function AxisLeft({ yScale, width }: { yScale: any; width: any }) {
  const textPadding = -20;

  const axis = yScale.ticks(5).map((d: any, i: any) => (
    <g key={i} className="y-tick">
      <line
        style={{ stroke: "orange" }}
        y1={yScale(d)}
        y2={yScale(d)}
        x1={0}
        x2={width}
      />
      <text style={{ fontSize: 1 }} x={textPadding} dy=".32em" y={yScale(d)}>
        {d}
      </text>
    </g>
  ));
  return <>{axis}</>;
}

export default AxisLeft;
