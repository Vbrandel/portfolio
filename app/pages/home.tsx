import { useState } from "react";
import { Link } from "react-router-dom";

import Cards from "../components/Cards";
import CardsProject from "~/components/CardsProject";
import Tags from "~/components/Tags";
import { ContactUs } from "~/components/ContactUs";
import Modal from "~/components/Modal";

import projects from "../data/projects.json";
import tags from "../data/tags.json";

import { FaBriefcase, FaCode } from "react-icons/fa";
import { HiUser } from "react-icons/hi2";

export function Welcome() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Nombre de projets affichés sur la page d’accueil
  const projectsToShow = projects.slice(0, 3);

  return (
    <main className="grid grid-cols-1 gap-4 md:grid-cols-2 md:p-1">
      {/* À propos de moi */}
      <Cards
        title="À propos de moi"
        iconClassName={HiUser}
        content="Je suis un développeur web basé à Rouen, passionné par la création d’interfaces modernes avec React. Actuellement en recherche d’une alternance, je souhaite rejoindre une équipe afin d’apporter ma créativité et de développer mes compétences sur des projets concrets."
      />

      {/* Compétences */}
      <Cards title="Compétences" iconClassName={FaCode}>
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <Tags
              key={tag.name}
              title={tag.name}
              colorClassName={tag.color}
            />
          ))}
        </div>
      </Cards>

      {/* Mes projets */}
      <Cards
        className="w-full md:col-span-2"
        title="Mes projets"
        iconClassName={FaBriefcase}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 2xl:grid-cols-4">
          {projectsToShow.map((project) => (
            <CardsProject
              key={project.title}
              img={project.img}
              title={project.title}
              content={project.content}
              onClick={() => handleProjectClick(project)}
            />
          ))}

          <Link
            to="/projets"
            className="hidden rounded-xl bg-stone-600 p-3 text-center font-bold text-stone-200 hover:bg-stone-400 sm:block md:size-fit 2xl:hidden"
          >
            Mes autres projets{" "}
            <span className="fa-solid fa-arrow-right mr-2" />
          </Link>

          <CardsProject className="justify-center text-center md:hidden 2xl:flex">
            <i className="fa-solid fa-laptop-code text-8xl text-title" />
            <h3 className="text-title">Retrouvez tous mes projets</h3>
            <Link
              to="/projets"
              className="rounded-xl bg-stone-200 p-3 text-center font-bold text-title hover:bg-stone-100"
            >
              Mes projets
            </Link>
          </CardsProject>
        </div>
      </Cards>

      {/* Contact */}
      <Cards className="w-full md:col-span-2 contact-card">
        <ContactUs />
      </Cards>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedProject && (
          <div>
            {selectedProject.img && (
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="mx-auto mb-4 h-[300px] w-[700px] rounded-xl object-cover md:h-[300px]"
              />
            )}

            <h3 className="mb-2 text-xl font-bold text-stone-800">
              {selectedProject.title}
            </h3>
            <p className="mb-2">{selectedProject.description}</p>

            {selectedProject.stack && (
              <div className="mb-2">
                <div className="mb-6 mt-1 flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech: string) => (
                    <span
                      key={tech}
                      className="rounded-xl bg-stone-800 px-2 py-1 text-xs font-semibold text-stone-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-stone-300 p-3 font-bold text-stone-800 hover:bg-stone-300/60"
                >
                  <i className="fa-brands fa-github px-1 text-2xl" />
                </a>
              )}

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-stone-300 p-3 font-bold text-stone-800 hover:bg-stone-300/60"
                >
                  <i className="fa-solid fa-globe px-1 text-2xl" />
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
}