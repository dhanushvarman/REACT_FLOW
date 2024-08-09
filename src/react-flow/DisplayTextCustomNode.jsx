import { Handle, Position } from "@xyflow/react";

/**
 * Display Text Custom Node
 */
export default function DisplayTextCustomNode({ data = {} }) {
  const { text = "Please enter value in custom node 1" } = data;

  return (
    <div style={{ width: "200px", height: "120px" }}>
      <Handle type="target" position={Position.Top} />

      <div className="border border-black rounded-1 p-1 bg-white overflow-auto nowheel card h-50">{text}</div>
    </div>
  );
}
