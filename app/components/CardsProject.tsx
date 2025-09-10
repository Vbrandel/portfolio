import React from "react";

type CardProjectProps = {
  img?: string;
  title?: string;
  content?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function CardsProject({ title, content, className, img = "", children, onClick }: CardProjectProps) {
  return (
    <div
      className={`rounded-xl p-5 bg-stone-600 ${className} cursor-pointer flex flex-col gap-3 transition duration-300 hover:scale-101`}
      onClick={onClick}
    >
      {img && <img src={img} className="rounded-md h-50 box-content object-cover"></img>}
      {title && <h3 className="text-xl font-bold mb-2 text-stone-200">{title}</h3>}
      {content && <p className="text-stone-200">{content}</p>}
      {children}
    </div>
  );
}