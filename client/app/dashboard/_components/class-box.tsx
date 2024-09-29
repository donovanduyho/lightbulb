import React from "react";

interface ClassBoxProps {
  classCode: string
}

export default function ClassBox({classCode}: ClassBoxProps) {
  return (
    <>
      <div className="card bg-[#D9D9D9] text-primary-content w-[150px] h-[100px] rounded-lg mt-5">
        <div className="card-body flex items-center justify-center h-full">
          <h2 className="class-code text-center">{classCode}</h2>
        </div>
      </div>
    </>
  );
}
