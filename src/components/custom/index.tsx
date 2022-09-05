import React, { useRef, useState } from "react";

const initData = [
  { text: "1", color: "red" },
  { text: "2", color: "blue" },
  { text: "3", color: "yellow" },
  { text: "4", color: "grey" },
];

interface data {
  text: string;
  color: string;
}

function Custom() {
  const [data, setData] = useState(initData);
  const [item, setItem] = useState<data>();

  const dropParentElement: any = useRef(null);

  console.log(dropParentElement.current);

  const handleOnDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleOnDragOver = (e: any) => {
    e.preventDefault();
  };
  const handleOnDragStart = (itemDrag: any) => {
    // var result = data.findIndex((e, i) => e.text === itemDrag.text);
    setItem(itemDrag);

    // const findItem = data.findIndex((e: any) => e.text === itemDrag.text);
    // console.log("list", findItem);
    // const newList = data.splice(findItem, 1);
    // setData(newList);
  };
  const handleOnDropOutSide = (e: any) => {
    e.preventDefault();

    console.log(item);
    if (item?.text) {
      const findItem = data.filter((e, i) => e.text !== item.text);
      console.log("list", findItem);
      //   const newList = data.splice(findItem, 1);
      setData(findItem);
    }
    dropParentElement.current.style.backgroundColor = "white";
  };

  const handleOnDragOverParent = (e: any) => {
    e.preventDefault();
    if (dropParentElement.current) {
      dropParentElement.current.style.backgroundColor = "red";
    }
  };

  return (
    <div style={{ margin: "0 auto", width: 400, display: "flex" }}>
      <div
        ref={dropParentElement}
        style={{
          backgroundColor: "#5555",
          width: 400,
          height: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onDrop={handleOnDropOutSide}
        onDragOver={handleOnDragOverParent}
      >
        {data.map((e, i) => (
          <div
            style={{ width: 50, height: 50, backgroundColor: `${e.color}` }}
            draggable
            onDrop={handleOnDrop}
            onDragOver={handleOnDragOver}
            onDragStart={() => handleOnDragStart(e)}
          >
            {e.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Custom;
