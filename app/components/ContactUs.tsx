import React, { useRef, useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";


export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setStatus("idle");

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact-form" className="scroll-smooth">
      <div className="py-8 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-stone-700">
          Envoyez moi un message
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-800 sm:text-xl">
        Envie de collaborer avec moi ?<br></br>
        Contactez-moi ci-dessous
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              htmlFor="user_email"
              className="block mb-2 text-sm font-medium text-stone-800"
            >
              Votre mail
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              placeholder="nom@mail.com"
              className="shadow-sm bg-stone-800 border border-gray-300 text-white text-sm rounded-xl 
                         focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            />
          </div>

          <div>
            <label
              htmlFor="user_name"
              className="block mb-2 text-sm font-medium text-stone-800 dark:text-stone-800"
            >
              Votre nom
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              placeholder="Nom"
              className="shadow-sm bg-stone-800 border border-gray-300 text-white text-sm rounded-xl 
                         focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-stone-800 dark:text-stone-800"
            >
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Ecrivez votre message"
              className="shadow-sm bg-stone-800 border border-gray-300 text-white text-sm rounded-xl 
                         focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="py-3 px-5 text-sm font-medium text-center text-stone-200 rounded-xl 
                       bg-stone-800 sm:w-fit hover:bg-primary-800 
                       focus:ring-4 focus:outline-none focus:ring-primary-300 
                       dark:bg-stone-800 dark:hover:bg-stone-700 dark:focus:ring-primary-800 
                       disabled:opacity-50"
          >
            {loading ? "Envoi en cours" : "Envoyer"}
          </button>

          {status === "success" && (
            <p className="text-green-500 text-sm mt-4">
              Message envoyé avec succès !
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm mt-4">
              Petit bug ? Pas de souci, vous pouvez me contacter directement sur mes autres réseaux !
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
