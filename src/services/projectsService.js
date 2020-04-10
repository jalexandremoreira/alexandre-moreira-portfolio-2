const projects = [
  {
    id: "p0004",
    name: "Harry Potter Quiz Web App",
    img: "/images/HP-quiz.png",
    description:
      "This is a made-for-fun project where you test your knowledge of Harry Potter, and (hopefully) chuckle at silly pop culture references. Interesting features to point out: a loading bar that animates once you choose an answer, randomly displayed questions with increasing level of difficulty, and perhaps the prettiest web app I've developed (not being a designer).",
    link: "https://harry-potter-quiz.now.sh/home",
  },
  {
    id: "p0003",
    name: "Match Match Web App",
    img: "/images/match-match-website.png",
    description:
      "This is a small web app, or game, where you try to match a pair of cards. It's a classic little game, and not a particularly complex one, but still a fun side-project for figuring out a few different programming “problems”.",
    link: "https://flip-card-game.now.sh/",
  },
  {
    id: "p0002",
    name: "Ruben Dieleman Website",
    img: "/images/ruben-website.png",
    description:
      "This website was built to showcase Ruben Dieleman's journalistic portfolio. It's a no-nonsense, to the point, simple website that focuses on having a professional and elegant look, while still keeping it not-too-formal with a playful gradient background. It also features an “Updates & News” section, that essentially functions as a blog. The website was built with React.js.",
    link: "https://www.rubendieleman.com/",
  },
  {
    id: "p0001",
    name: "Alexandre Moreira Music Portfolio",
    img: "/images/alexandre-website.png",
    description:
      "This website was my first big React.js project, and was built to showcase my own music portfolio. Here you can view the albums and singles I have worked on as a Music Producer and as a Sound Engineer. It features an updatable discography page that dynamically creates a page for each record one clicks on, automatically populating that page with the relevant information.",
    link: "https://alexandremoreira.se/",
  },
];

export const getProjects = () => {
  return JSON.parse(JSON.stringify(projects));
};

export function getProject(id) {
  return projects.find((p) => p.id === id);
}
