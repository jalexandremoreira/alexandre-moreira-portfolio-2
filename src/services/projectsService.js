const projects = [
  {
    id: 'p0007',
    name: 'Alexandre Moreira Music Portfolio',
    img: '/images/alexandre-website-2.png',
    description:
      "I decided to rebuild my own music portfolio. The original website was my first big React.js project, so I feld like I could make some major improvements. Here you can view the albums and singles I have worked on as a Music Producer and as a Sound Engineer. It features an updatable discography page that dynamically creates a page for each record one clicks on, automatically populating that page with the relevant information. Special emphasis on how the site was built entirely without the aid of Bootstrap or any other CSS framework, but instead each component was carefully developed with both desktop and mobile browsers in mind, and heavily relying on CSS's flexbox layout.",
    link: 'https://alexandremoreira.se/',
  },
  {
    id: 'p0006',
    name: 'Lúca Silva Website',
    img: '/images/lucia-website.png',
    description:
      'Lúcia Silva is an orchestral musician, so this website was built around demonstrating her skills and work experience, while displaying her contact information professionally yet in a relaxed manner. It’s a straight forward React.js project, with no bells and whistles, instead focusing on functionality and ease-of-use in mind.',
    link: 'https://luciavianadasilva.com/',
  },
  {
    id: 'p0005',
    name: 'Chocolate E-Shop',
    img: '/images/chocolate-eshop.png',
    description: `This was originally commissioned as an eshop capable product website. The initial project wasn’t finished, so I repurposed it for a generic, portfolio showpiece. It’s built using React.js and Redux for session persistence in the shopping cart. It also features a form in the “Enterprise” page, originally intended for bulk purchase and enterprise branding.`,
    link: 'https://chocolate-eshop.now.sh/',
  },
  {
    id: 'p0004',
    name: 'Harry Potter Quiz Web App',
    img: '/images/HP-quiz.png',
    description:
      "This is a made-for-fun project, built using React.js, where you test your knowledge of Harry Potter and (hopefully) chuckle at silly pop culture references. Interesting features to point out: a loading bar that animates once you choose an answer, randomly displayed questions with increasing level of difficulty, and perhaps the prettiest web app I've developed (not being a designer).",
    link: 'https://harry-potter-quiz.now.sh/home',
  },
  {
    id: 'p0003',
    name: 'Match Match Web App',
    img: '/images/match-match-website.png',
    description: `This is a small web app, built using React.js, where you try to match a pair of cards. It's a classic little game, and not a particularly complex one, but still a fun side-project for figuring out a few different programming “problems”.`,
    link: 'https://flip-card-game.now.sh/',
  },
  {
    id: 'p0002',
    name: 'Ruben Dieleman Website',
    img: '/images/ruben-website.png',
    description:
      "This website was built to showcase Ruben Dieleman's journalistic portfolio. It's a no-nonsense, to the point, simple website that focuses on having a professional and elegant look, while still keeping it not-too-formal with a playful gradient background. It also features an “Updates & News” section, that essentially functions as a blog. The website was built with React.js.",
    link: 'https://www.rubendieleman.com/',
  },
  // {
  //   id: "p0001",
  //   name: "Alexandre Moreira Music Portfolio",
  //   img: "/images/alexandre-website.png",
  //   description:
  //     "This website was my first big React.js project, and was built to showcase my own music portfolio. Here you can view the albums and singles I have worked on as a Music Producer and as a Sound Engineer. It features an updatable discography page that dynamically creates a page for each record one clicks on, automatically populating that page with the relevant information.",
  //   link: "https://alexandremoreira.se/",
  // },
];

export const getProjects = () => {
  return JSON.parse(JSON.stringify(projects));
};

export function getProject(id) {
  return projects.find((p) => p.id === id);
}
