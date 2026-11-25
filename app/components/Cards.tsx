import type { ReactNode } from "react";
import { FaUser } from "react-icons/fa";
import type { IconType } from "react-icons";

type CardProps = {
  title?: string;
  content?: string;
  className?: string;
  children?: ReactNode;
  iconClassName?: IconType;
};

export default function Cards({
  title,
  content,
  className = "",
  children,
  iconClassName: Icon = FaUser,
}: CardProps) {
  return (
    <div className={`rounded-xl p-6 bg-card/90 ${className} shadow-md shadow-black/20 border-1 border-white`}>
      {title && (
        <div className="flex items-center gap-3 mb-3">
          <Icon className="text-2xl text-title" aria-hidden="true" />
          <h2 className="text-2xl font-bold text-title">{title}</h2>
        </div>
      )}
      {content && <p className="text-stone-800 leading-7">{content}</p>}
      {children}
    </div>
  );
}