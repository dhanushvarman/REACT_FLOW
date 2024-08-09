import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactFlowActions } from "../slice/ReactFlowSlice";

export function useOnNodesChanges(onChange = () => {}) {
  // Dispatch
  const dispatch = useDispatch();

  // Nodes Selector State
  const nodes = useSelector((state) => state.reactFlow.nodes);

  return useCallback(
    (changes) => {
      const updatedNodes = onChange(changes);

      dispatch(ReactFlowActions.updateNodes({ nodes: updatedNodes }));
    },
    [nodes]
  );
}

export function useOnEdgesChanges(onChange = () => {}) {
  // Dispatch
  const dispatch = useDispatch();

  // Edges Selector State
  const edges = useSelector((state) => state.reactFlow.edges);

  return useCallback(
    (changes) => {
      const updatedEdges = onChange(changes);

      dispatch(ReactFlowActions.updateEdges({ edges: updatedEdges }));
    },
    [edges]
  );
}

export function useOnConnect(onChange = () => {}) {
  // Dispatch
  const dispatch = useDispatch();

  // Edges Selector State
  const edges = useSelector((state) => state.reactFlow.edges);

  return useCallback(
    (changes) => {
      const updatedEdges = onChange(changes);

      dispatch(ReactFlowActions.updateEdges({ edges: updatedEdges }));
    },
    [edges]
  );
}
