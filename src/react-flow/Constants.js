// Nodes
export const INITIAL_NODES = [
  // Node Types
  {
    id: "1",
    type: "input",
    position: { x: 0, y: 100 },
    data: { label: "Default Node" },
  },
  {
    id: "2",
    type: "default", // default, input, output, group
    position: { x: 0, y: 200 },
    data: { label: "Input Node" },
  },
  {
    id: "3",
    type: "output",
    position: { x: 0, y: 300 },
    data: { label: "Output Node" },
  },

  // Custom Nodes
  {
    id: "4",
    position: { x: 500, y: 0 },
    data: { label: "Custom Node - 1", description: "Another custom node" },
    type: "custom", // To Make this node as custom node, give type as key of the custom node from nodeTypes
  },
  {
    id: "5",
    position: { x: 500, y: 150 },
    data: { label: "Custom Node -2", description: "Another custom node" },
    type: "displayText",
  },
  {
    id: "6",
    position: { x: 500, y: 250 },
    data: { label: "Add or Remove Handlers" },
    type: "handlers",
  },
];

// Edges
export const INITIAL_EDGES = [
  { id: "1-2", source: "1", target: "2", animated: true },
  { id: "2-3", source: "2", target: "3", animated: true },
  { id: "4-5", source: "4", target: "5", animated: true },
];

// Group Nodes
export const GROUP_NODES = [
  // Parent Node
  {
    id: "4",
    type: "group",
    position: { x: 0, y: 400 },
    data: { label: "Group Node" },
    style: { width: 300, height: 200, padding: 10, border: "1px solid black" },
  },

  // Nodes inside the Group Node
  {
    id: "group-1",
    type: "default",
    position: { x: 120, y: 120 }, // Position relative to the group node
    data: { label: "Group Node 1" },
    parentNode: "4",
    extent: "parent", // Ensures the node stays within the group node
  },
  {
    id: "group-2",
    type: "default",
    position: { x: 220, y: 150 },
    data: { label: "Group Node 2" },
    parentNode: "4",
    extent: "parent",
  },

  // Edge inside the Group Node
  {
    id: "group-1-group-2",
    source: "group-1",
    target: "group-2",
    type: "default",
  },
];
