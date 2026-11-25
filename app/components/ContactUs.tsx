import { IoIosSend } from "react-icons/io";

export const ContactUs = () => {
  return (
    <div className="flex items-center justify-between gap-6">
      <div>
        <h2 className="flex items-center gap-1 text-3xl font-bold text-title">
          <IoIosSend className="shrink-0" aria-hidden="true" />
          Envie de collaborer ?
        </h2>
        <p className="text-lg font-semibold text-title">
          Contactez-moi par mail ou sur mes réseaux
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <a
          href="mailto:tonadresse@mail.com"
          aria-label="M’envoyer un e-mail"
          className="flex items-center gap-2 rounded-lg bg-stone-800 px-6 py-3 text-base text-stone-200 transition hover:bg-stone-700"
        >
          <IoIosSend aria-hidden="true" />
          E-mail
        </a>

        <a
          href="https://github.com/ton-profil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center gap-2 rounded-lg border border-stone-400 px-6 py-3 text-base text-title transition hover:bg-stone-700/20"
        >
          <IoIosSend aria-hidden="true" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/ton-profil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center gap-2 rounded-lg bg-cyan-200 px-6 py-3 text-base font-semibold text-stone-900 transition hover:bg-cyan-100"
        >
          <IoIosSend aria-hidden="true" />
          Discutons-en →
        </a>
      </div>
    </div>
  );
};