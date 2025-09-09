import React from "react";

type TagsProps = {
  title?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Tags({ title, className = "", children }: TagsProps) {
  return (
    <div
      className={`rounded-xl p-3 bg-stone-600 transition duration-300 hover:scale-110 ${className}`}
    >
      {title && <h4 className="text-md font-bold ">{title}</h4>}
      {children}
    </div>
  );
}