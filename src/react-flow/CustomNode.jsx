import { Handle, Position, useReactFlow } from "@xyflow/react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactFlowActions } from "./slice/ReactFlowSlice";

const DISPLAY_TEXT_CUSTOM_NODE_ID = "5";

/**
 * Custom Node
 */
export default function CustomNode({ data = {} }) {
  // Dispatch
  const dispatch = useDispatch();

  // Nodes Selector State
  const nodes = useSelector((state) => state.reactFlow.nodes);

  const { label = "", description = "" } = data;

  const handleStyle = { left: 10 };

  // Updating Nodes
  function updateNodes(nodes, value) {
    return nodes.map((node) => {
      const { id = "", data = {} } = node;

      // Updating the display text custom node with input value
      if (id === DISPLAY_TEXT_CUSTOM_NODE_ID) return { ...node, data: { ...data, text: value } };

      return node;
    });
  }

  //
  const handleChange = useCallback(
    (e) => {
      const value = e.target.value || "";

      const updatedNodes = updateNodes(nodes, value);

      dispatch(ReactFlowActions.updateNodes({ nodes: updatedNodes }));
    },
    [nodes]
  );

  return (
    <>
      <Handle type="target" position={Position.Top} />

      <div className="border rounded-2 border-black p-2 bg-white ">
        <h6>
          {label} ({description})
        </h6>

        {/* Input */}
        <textarea
          className="form-control form-control-sm overflow-auto nowheel nodrag"
          onChange={handleChange}
        ></textarea>
      </div>

      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
    </>
  );
}
