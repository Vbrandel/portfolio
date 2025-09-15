import React from "react";

type CardProps = {
  title?: string;
  content?: string;
  className?: string;
  children?: React.ReactNode;
  iconClassName?: string;
};

export default function Cards({ title, content, className = "", children, iconClassName = "fa-solid fa-user" }: CardProps) {
  return (
    <div
      className={`rounded-xl p-6 bg-stone-200 ${className}`}
    >
      {title && (
        <div className="flex items-center gap-3 mb-3">
          <i className={`${iconClassName} text-2xl text-stone-800`} />
          <h2 className="text-2xl font-bold text-stone-800">{title}</h2>
        </div>
      )}
      {content && <p className="text-stone-800 leading-7">{content}</p>}
      {children}
    </div>
  );
}