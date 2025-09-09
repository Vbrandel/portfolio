import React, { useState } from "react";
import Cards from "../components/Cards";
import CardsProject from "~/components/CardsProject";
import Tags from "~/components/Tags";
import { ContactUs } from "~/components/ContactUs";
import { Link } from "react-router-dom";
import Modal from "~/components/Modal";
// @ts-ignore
import projects from '../data/projects.json';

export default function Projets() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <main className="md:p-4 flex flex-col gap-4">
      <Link to="/" className="text-stone-800 bg-stone-200 p-3 rounded-xl font-bold md:size-fit text-center hover:bg-stone-100"><span className="fa-solid fa-arrow-left mr-2"></span>Revenir à l'accueil</Link>
      <Cards
      title="A propos de moi"
      iconClassName="fa-solid fa-book"
       className="col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4">
          {projects.map((project: any) => (
            <CardsProject
              key={project.title}
              img={project.img}
              title={project.title}
              content={project.content}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </Cards>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedProject && (
          <div>
          {selectedProject.img && (
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-[700px] h-[300px] md:h-[300px] object-cover rounded-xl mx-auto mb-4"
            />
          )}
          <h3 className="text-xl text-stone-800 font-bold mb-2">{selectedProject.title}</h3>
          <p className="mb-2">{selectedProject.description}</p>
          {selectedProject.stack && (
            <div className="mb-2">
              <div className="flex flex-wrap gap-2 mt-1 mb-6">
                {selectedProject.stack.map((tech: string) => (
                  <span
                    key={tech}
                    className="bg-stone-800 text-stone-200 px-2 py-1 rounded-xl text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          {selectedProject.link && (
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="text-stone-800 bg-stone-300 p-3 rounded-xl font-bold ">
              Voir le projet
            </a>
          )}
        </div>
        )}
      </Modal>
    </main>
  );
}
