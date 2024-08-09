// React Flow
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  useReactFlow,
} from "@xyflow/react";

// Custom Node Components
import CustomNode from "./CustomNode";
import DisplayTextCustomNode from "./DisplayTextCustomNode";
import HandlerCustomNode from "./HandlerCustomNode";
import { useOnConnect, useOnEdgesChanges, useOnNodesChanges } from "./hooks/useOnNodesChanges";
import { useSelector } from "react-redux";

// Node Types
const nodeTypes = { custom: CustomNode, displayText: DisplayTextCustomNode, handlers: HandlerCustomNode };

/**
 * React Flow Wrapper
 */
export default function ReactFlowWrapper() {
  // Nodes Selector State
  const nodes = useSelector((state) => state.reactFlow.nodes);
  const edges = useSelector((state) => state.reactFlow.edges);

  //
  const onNodesChange = useOnNodesChanges(updateNodes);
  function updateNodes(changes) {
    return applyNodeChanges(changes, nodes);
  }

  //
  const onEdgesChange = useOnEdgesChanges(updateEdges);
  function updateEdges(changes) {
    return applyEdgeChanges(changes, edges);
  }

  //
  const onConnect = useOnConnect(addNewEdge);
  function addNewEdge(changes) {
    return addEdge(changes, edges);
  }

  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        nodeTypes={nodeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        /**Available only in pro version */
        // elements={GROUP_NODES}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </ReactFlowProvider>
  );
}
