import React, { useState } from "react";
import Cards from "../components/Cards";
import CardsProject from "~/components/CardsProject";
import Tags from "~/components/Tags";
import { ContactUs } from "~/components/ContactUs";
import { Link } from "react-router-dom";
import Modal from "~/components/Modal";
// @ts-ignore
import projects from '../data/projects.json';

export function Welcome() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // On ne garde que les 3 premiers projets pour l'accueil
  const projectsToShow = projects.slice(0, 3);

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-4">
      {/* Card 1 : A propos de moi */}
      <Cards
        title="A propos de moi"
        iconClassName="fa-solid fa-user"
        content="Je suis un développeur web basé à Rouen, passionné par la création d’interfaces modernes avec React. Actuellement en recherche d’une alternance, je souhaite rejoindre une équipe afin d’apporter ma créativité et de développer mes compétences sur des projets concrets"
      />
      {/* Card 2 : Compétences */}
      <Cards 
              title="Compétences"
              iconClassName="fa-solid fa-code"
      >
        <div className="flex flex-wrap justify-center gap-2">
          {["React", "JavaScript", "HTML", "CSS", "Tailwind", "Node.js", "Wordpress", "sexy"].map((skill) => (
            <Tags key={skill} title={skill} />
          ))}
        </div>
      </Cards>
      {/* Card 3 : Mes Projets (large) */}
      <Cards className="w-full md:col-span-2"
              title="Mes projets"
              iconClassName="fa-solid fa-book"
        >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {projectsToShow.map((project: any) => (
            <CardsProject
              key={project.title}
              img={project.img}
              title={project.title}
              content={project.content}
              onClick={() => handleProjectClick(project)}
            />
          ))}
          <CardsProject
            className="justify-center text-center"
          >
            <i className="fa-solid fa-laptop-code text-8xl text-stone-200"></i>
            <h3>Retrouvez tout mes projets</h3>
            <Link to="/projets" className="text-stone-800 bg-stone-200 p-3 rounded-xl font-bold text-center hover:bg-stone-100">Mes projets</Link>
          </CardsProject>
        </div>
      </Cards>
      {/* Card 4 : Contact (large) */}
      <Cards className="w-full md:col-span-2">
        <ContactUs />
      </Cards>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedProject && (
          <div>
            {selectedProject.img && (
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-[700px] h-[300px] md:h-[500px] rounded-xl mx-auto mb-4"
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
