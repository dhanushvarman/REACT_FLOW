// CSS
import "./App.css";
import "@xyflow/react/dist/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Component
import ReactFlowWrapper from "./react-flow/ReactFlowWrapper";

/**
 * App
 */
function App() {
  return (
    <div className="App" style={{ height: "100vh", width: "200vh" }}>
      {/* React Flow Wrapper */}
      <ReactFlowWrapper />
    </div>
  );
}

export default App;
