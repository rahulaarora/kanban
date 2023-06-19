import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Image from "next/image";
import TaskTag from "./TaskTag";
import ProfilesGroup from "../Common/ProfilesGroup";

const tasks = [
  { id: "1", content: "First task" },
  { id: "2", content: "Second task" },
  { id: "3", content: "Third task" },
  { id: "4", content: "Fourth task" },
  { id: "5", content: "Fifth task" }
];

const taskStatus = {
  requested: {
    name: "To Do",
    items: tasks
  },
  toDo: {
    name: "On Progress",
    items: []
  },
  inProgress: {
    name: "Done",
    items: []
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function App() {
  const [columns, setColumns] = useState(taskStatus);
  return (
    <div>
      <div
        className="flex justify-around h-full flex-col md:flex-row"
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                className="flex flex-col bg-[#F5F5F5] rounded-2xl p-5 flex-1 mx-4 mb-4"
                key={columnId}
              >
                <div className="flex items-center">
                  <div className="mr-2 w-[5px] h-[5px] rounded-full bg-[#5030E5]"></div>
                  <div className="font-medium">{column.name}</div>
                  <div className="ml-2 text-xs bg-[#E0E0E0] rounded-xl w-6 h-6 flex items-center justify-center">4</div>
                </div>
                <hr className="mb-7 mt-5 h-1 bg-[#5030E5]"></hr>
                <div>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "",
                            padding: 4,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        margin: "0 0 20px 0",
                                        minHeight: "50px",
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      <div className="flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm">
                                        <div className="flex justify-between">
                                          <TaskTag />
                                          <p>...</p>
                                        </div>
                                        <div className="flex items-start justify-between gap-2">
                                          <p className="text-[18px] font-semibold text-[#1F2633]">Brainstorming</p>
                                        </div>
                                        <p className="text-xs font-normal text-[#787486] mb-4">Brainstorming brings team members' diverse experience into play. </p>


                                        <div className="flex items-center justify-between">
                                          <ProfilesGroup dim={24} />
                                          <div className="flex items-center gap-1.5">
                                            <Image alt="Icon" src="/images/add-square.svg" width="16" height="16" className="cursor-pointer" /><p className="text-[10px] font-medium">14 comments</p>
                                            <Image alt="Icon" src="/images/add-square.svg" width="16" height="16" className="cursor-pointer" />
                                            <p className="text-[10px] font-medium">15 files</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
