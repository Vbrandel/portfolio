import React from "react";
import type { ReactNode, MouseEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-stone-200 rounded-xl shadow-lg m-3 p-8 relative min-w-[300px] w-[700px] text-stone-800"
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-stone-800 text-2xl font-bold cursor-pointer"
          onClick={onClose}
          aria-label="Fermer"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
