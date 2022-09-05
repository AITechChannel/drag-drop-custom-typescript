import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

function Drag() {
  return (
    <Droppable droppableId="todo">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={{ width: 500, height: 500, backgroundColor: "red" }}
        >
          <Draggable draggableId="item 1" index={2}>
            {(provided) => (
              <div
                style={{ width: 100, height: 100, backgroundColor: "yellow" }}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <div
                  style={{ width: 100, height: 100, backgroundColor: "yellow" }}
                >
                  fsfas
                </div>
              </div>
            )}
          </Draggable>
          <Draggable draggableId="item 2" index={3}>
            {(provided) => (
              <div
                style={{ width: 100, height: 100, backgroundColor: "yellow" }}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <div
                  style={{ width: 100, height: 100, backgroundColor: "yellow" }}
                >
                  fsfa2
                </div>
              </div>
            )}
          </Draggable>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Drag;
