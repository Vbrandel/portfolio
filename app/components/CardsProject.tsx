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
      className={`rounded-xl overflow-hidden bg-white ${className} cursor-pointer flex flex-col transition duration-300 hover:scale-[1.02] shadow shadow-black/10`}
      onClick={onClick}
    >
      {img && <img src={img} alt={title ?? ""} loading="lazy" className="h-40 w-full object-cover" />}
      <div className="flex flex-col gap-3 p-4 flex-1">
        {title && <h3 className="text-lg font-bold text-stone-900">{title}</h3>}
        {content && <p className="text-sm text-stone-500">{content}</p>}
        {children}
      </div>
    </div>
  );
}