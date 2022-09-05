import React, { useRef } from "react";
import Item from "./Item";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { styled } from "@stitches/react";

function Content({ data }: any) {
  const element = useRef(null);

  return (
    <div>
      <Droppable droppableId="todo" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              width: 500,
              height: 500,
              backgroundColor: "red",
              display: "flex",
            }}
          >
            {data.todo.list.map((e: any, i: any) => (
              <Draggable draggableId={i.toString()} index={i} key={i}>
                {(a) => (
                  <div
                    className="item"
                    ref={a.innerRef}
                    {...a.draggableProps}
                    {...a.dragHandleProps}
                  >
                    <div
                      style={{
                        width: 100,
                        height: 100,
                        backgroundColor: "yellow",
                      }}
                    >
                      {e}
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* <Droppable droppableId="a">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              width: 1000,
              height: 1000,
              backgroundColor: "blue",
              //   position: "fixed",
            }}
          >
            {provided.placeholder}
          </div>
        )}
      </Droppable> */}
    </div>
  );
}

export default Content;
