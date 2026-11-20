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
      className={`rounded-xl p-6 bg-card ${className} shadow-lg shadow-black/4`}
    >
      {title && (
        <div className="flex items-center gap-3 mb-3">
          <i className={`${iconClassName} text-2xl text-title`} />
          <h2 className="text-2xl font-bold text-title">{title}</h2>
        </div>
      )}
      {content && <p className="text-stone-800 leading-7">{content}</p>}
      {children}
    </div>
  );
}