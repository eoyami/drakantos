import { useDroppable } from "@dnd-kit/core";
import React from "react";

type Props = {
  id: string;
  title?: string;
  children: React.ReactNode;
  color?: string;
};

const Droppable = ({ id, title, children, color }: Props) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="flex min-h-[150px] w-full rounded-lg border-2 transition-colors"
      style={{
        backgroundColor: isOver ? "rgba(34,197,94,0.3)" : "rgba(31,31,31,0.7)",
        borderColor: isOver ? "#22c55e" : "#555",
      }}
    >
      {title && (
        <div
          className="flex min-h-[50px] max-w-[150px] sm:min-h-[150px] sm:min-w-[50px] text-center items-center justify-center font-bold p-1 rounded" 
          style={{ backgroundColor: color || "#444" }}
        >
          <input type="text" id={title} className="text-center text-black outline-none h-full w-full" placeholder={title} maxLength={12} />
        </div>
      )}
      <div className="flex flex-wrap justify-start items-center">{children}</div>
    </div>
  );
};

export default Droppable;
