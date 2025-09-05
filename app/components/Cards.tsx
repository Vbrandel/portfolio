import React from "react";

type CardProps = {
  title?: string;
  content?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Cards({ title, content, className = "", children }: CardProps) {
  return (
    <div
      className={`rounded-2xl shadow-md p-6 bg-amber-800 ${className}`}
    >
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {content && <p className="text-gray-700">{content}</p>}
      {children}
    </div>
  );
}