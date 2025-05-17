// src/components/HeatmapChart.jsx
import React from 'react';

export default function HeatmapChart({ correlationData }) {
  return (
    <div>
      {/* Replace this with your heatmap library (like react-heatmap-grid or chart.js) */}
      <h3>Heatmap Placeholder</h3>
      <pre>{JSON.stringify(correlationData, null, 2)}</pre>
    </div>
  );
}
