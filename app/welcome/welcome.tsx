import Cards from "../components/Cards";
import CardsProject from "~/components/CardsProject";
import Tags from "~/components/Tags";

export function Welcome() {
  return (
  <main className="grid grid-cols-2 gap-4 pt-16 pb-4 px-4">
    {/* Card 1 */}
    <Cards
      title="A propos de moi"
      content=""
    />

    {/* Card 2 */}
    <Cards>
  <h3 className="text-lg font-semibold">Compétences</h3>
  <div className="flex flex-wrap justify-center gap-2">
    {["React", "JavaScript", "HTML", "CSS", "Tailwind", "Node.js", "Wordpress", "sexy"].map((skill) => (
      <Tags key={skill} title={skill} />
    ))}
  </div>
</Cards>


    {/* Card 3 (qui prend toute la largeur) */}
    <Cards className="col-span-2">
  <h3 className="text-lg font-semibold mb-4">Mes Projets</h3>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <CardsProject
      img="https://placehold.co/500x500"
      title="Projet 1"
      content="Ceci est le contenu de la première card."
    />
    <CardsProject
      img="https://placehold.co/500x500"
      title="Projet 2"
      content="Ceci est le contenu de la deuxième card."
    />
    <CardsProject
      img="https://placehold.co/500x500"
      title="Projet 3"
      content="Ceci est le contenu de la troisième card."
    />
    <CardsProject
      img="https://placehold.co/500x500"
      title="Projet 4"
      content="Ceci est le contenu de la quatrième card."
    />
    <CardsProject
      img="https://placehold.co/500x500"
      title="Projet 5"
      content="Encore un projet."
    />
    <CardsProject
      img="https://placehold.co/500x500"
      title="Projet 6"
      content="Encore un projet."
    />
    <CardsProject
      img="https://placehold.co/500x500"
      title="Projet 7"
      content="Encore un projet."
    />
    <CardsProject
      title="Retrouvez tout mes projets"
      content="cliquez ici."
    />
  </div>
</Cards>
  </main>

  );
}
