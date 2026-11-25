import React from "react";

type TagsProps = {
  title?: string;
  className?: string;
  colorClassName?: string;
  children?: React.ReactNode;
};

export default function Tags({
  title,
  className = "",
  colorClassName = "bg-stone-600",
  children,
}: TagsProps) {
  return (
    <div
      className={`rounded-xl p-3 ${colorClassName} transition duration-300 hover:scale-110 ${className}`}
    >
      {title && <h4 className="text-md font-bold text-slate-800">{title}</h4>}
      {children}
    </div>
  );
}