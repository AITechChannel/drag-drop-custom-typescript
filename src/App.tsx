import React, { useState } from "react";
import Column from "./components/Column";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { styled } from "@stitches/react";
import Drag from "./components/Drag";
import Content from "./components/Content";
import Custom from "./components/custom";

const StyledColumns = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  margin: "10vh auto",
  width: "80%",
  height: "80vh",
  gap: "8px",
});

function App() {
  const initialColumns: any = {
    todo: {
      id: "todo",
      list: ["item 1", "item 2", "item 3", "item 4"],
    },
  };
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = ({ source, destination }: DropResult) => {
    console.log(source, destination);
    // if (destination === undefined) return;

    // if (destination === null) {
    //   setColumns({
    //     todo: {
    //       id: "todo",
    //       list: ["item 1"],
    //     },
    //   });
    //   console.log("outside");
    // } else {
    //   const start = columns[source.droppableId];
    //   const newList = start.list.filter(
    //     (_: any, idx: number) => idx !== source.index
    //   );
    //   // Then insert the item at the right location
    //   newList.splice(destination.index, 0, start.list[source.index]);
    //   // Then create a new copy of the column object
    //   const newCol = {
    //     id: start.id,
    //     list: newList,
    //   };
    //   // Update the state
    //   setColumns((state: any) => ({ ...state, [newCol.id]: newCol }));
    //   return null;
    // }

    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;
    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;
    // // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];
    // console.log("start", start, "end", end);

    // If start is the same as end, we're in the same column
    if (start === end) {
      console.log("inside");
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      );
      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);
      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList,
      };
      // Update the state
      setColumns((state: any) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before

      console.log("outside");
      const indexItemMove = start.list.findIndex(
        (e: any, i: any) => i === source.index
      );
      console.log(indexItemMove);

      const lisAfterDel = start.list.splice(indexItemMove, 1);
      console.log("list", lisAfterDel);
      console.log("oldList", start.list);

      //   const newStartList = start.list.filter(
      //     (_: any, idx: number) => idx !== source.index
      //   );
      //   // Create a new start column
      //   const newStartCol = {
      //     id: start.id,
      //     list: newStartList,
      //   };
      //   // Make a new end list array
      //   const newEndList = end.list;
      //   // Insert the item into the end list
      //   newEndList.splice(destination.index, 0, start.list[source.index]);
      //   // Create a new end column
      //   const newEndCol = {
      //     id: end.id,
      //     list: newEndList,
      //   };
      //   // Update the state
      //   setColumns((state: any) => ({
      //     ...state,
      //     [newStartCol.id]: newStartCol,
      //     [newEndCol.id]: newEndCol,
      //   }));
      //   return null;
    }
  };

  return (
    // <DragDropContext onDragEnd={onDragEnd}>
    //   <Droppable droppableId="a">
    //     {(provided) => (
    //       <div
    //         {...provided.droppableProps}
    //         ref={provided.innerRef}
    //         style={{
    //           width: 1000,
    //           height: 1000,
    //           backgroundColor: "blue",
    //           //   position: "fixed",
    //         }}
    //       >
    //         <Content data={columns} />
    //         {provided.placeholder}
    //       </div>
    //     )}
    //   </Droppable>
    // </DragDropContext>

    <Custom />
  );
}

export default App;
