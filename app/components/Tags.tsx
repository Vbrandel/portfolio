import React from "react";

type TagsProps = {
  title?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Tags({ title, className = "", children }: TagsProps) {
  return (
    <div
      className={`rounded-2xl shadow-md p-6 bg-amber-600 ${className}`}
    >
      {title && <h4 className="text-xl font-bold mb-2">{title}</h4>}
      {children}
    </div>
  );
}