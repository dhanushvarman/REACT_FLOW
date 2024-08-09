import { Handle, Position, useUpdateNodeInternals } from "@xyflow/react";
import { useCallback, useState } from "react";

// Constants
const HANDLER_POSITIONS = {
  left: "left",
  right: "right",
  top: "top",
  bottom: "bottom",
};

const DEFAULT_HANDLERS_COUNT = {
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
};

const HANDLER_CUSTOM_NODE_ID = "6";

// Page Components
function CounterInput({ poisiton = "", handlersCount = {}, setHandlersCount = () => {} }) {
  const updateNodeInternals = useUpdateNodeInternals();

  // ClassName
  const btnClassName = "border border-1 border-black rounded-5 px-1";

  const addHandlers = useCallback(
    (id = "", handlePosition = "", isIncreament = false) => {
      const handlerCount = handlersCount[poisiton];
      const count = isIncreament ? handlerCount + 1 : handlerCount - 1;

      if (count < 0) return 0;

      setHandlersCount((prev) => ({ ...prev, [handlePosition]: count }));

      updateNodeInternals(id);
    },
    [updateNodeInternals, handlersCount]
  );

  return (
    <div>
      <span onClick={() => addHandlers(HANDLER_CUSTOM_NODE_ID, poisiton, true)} className={`${btnClassName} me-1`}>
        +
      </span>
      <span className="border border-1 px-2">{handlersCount[poisiton]}</span>
      <span onClick={() => addHandlers(HANDLER_CUSTOM_NODE_ID, poisiton)} className={`${btnClassName} ms-1`}>
        -
      </span>
    </div>
  );
}

/**
 * Handler Custom Node
 */
export default function HandlerCustomNode({ data = {} }) {
  // State
  const [handlersCount, setHandlersCount] = useState(DEFAULT_HANDLERS_COUNT);
  const { left = 0, top = 0, right = 0, bottom = 0 } = handlersCount;

  const { label = "" } = data;

  // Function to handle style
  function handlerStyle(index = 0, isLeftAndRight = false) {
    const value = index * 10;

    if (isLeftAndRight)
      return {
        top: value,
      };

    return { left: value };
  }

  return (
    <>
      {Array.from({ length: left }).map((_, index) => (
        <Handle
          key={index}
          type="target"
          position={Position.Left}
          id={`handle-left-${index}`}
          style={handlerStyle(index, true)}
        />
      ))}

      {Array.from({ length: top }).map((_, index) => (
        <Handle
          key={index}
          type="target"
          position={Position.Top}
          id={`handle-top-${index}`}
          style={handlerStyle(index)}
        />
      ))}

      {Array.from({ length: right }).map((_, index) => (
        <Handle
          key={index}
          type="target"
          position={Position.Right}
          id={`handle-right-${index}`}
          style={handlerStyle(index, true)}
        />
      ))}

      {Array.from({ length: bottom }).map((_, index) => (
        <Handle
          key={index}
          type="target"
          position={Position.Bottom}
          id={`handle-bottom-${index}`}
          style={handlerStyle(index)}
        />
      ))}

      {/* Input */}
      <div className="border rounded-2 border-black p-2 bg-white ">
        <CounterInput
          poisiton={HANDLER_POSITIONS.top}
          handlersCount={handlersCount}
          setHandlersCount={setHandlersCount}
        />

        <div className="d-flex align-items-center">
          <CounterInput
            poisiton={HANDLER_POSITIONS.left}
            handlersCount={handlersCount}
            setHandlersCount={setHandlersCount}
          />
          <div className="p-3">{label}</div>
          <CounterInput
            poisiton={HANDLER_POSITIONS.right}
            handlersCount={handlersCount}
            setHandlersCount={setHandlersCount}
          />
        </div>

        <CounterInput
          poisiton={HANDLER_POSITIONS.bottom}
          handlersCount={handlersCount}
          setHandlersCount={setHandlersCount}
        />
      </div>
    </>
  );
}
