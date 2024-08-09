import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_EDGES, INITIAL_NODES } from "../Constants";

const initialState = {
  nodes: INITIAL_NODES,
  edges: INITIAL_EDGES,
};

const ReactFlowSlice = createSlice({
  name: "ReactFlow",
  initialState,
  reducers: {
    updateNodes: (state, action) => {
      state.nodes = action.payload.nodes;
    },

    updateEdges: (state, action) => {
      state.edges = action.payload.edges;
    },
  },
});

export const ReactFlowReducer = ReactFlowSlice.reducer;

export const ReactFlowActions = ReactFlowSlice.actions;
