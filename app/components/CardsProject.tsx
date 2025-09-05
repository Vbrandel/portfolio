import React from "react";

type CardProjectProps = {
  img?: string;
  title?: string;
  content?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function CardsProject({ title, content, className, img = "", children }: CardProjectProps) {
  return (
    <div
      className={`rounded-2xl shadow-md p-6 bg-amber-600 ${className}`}
    >
      {img && <img src={img}></img>}
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {content && <p className="text-gray-700">{content}</p>}
      {children}
    </div>
  );
}