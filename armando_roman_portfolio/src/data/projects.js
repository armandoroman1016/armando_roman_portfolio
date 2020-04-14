import celebratrMobile from "../assests/images/celebratrMobile.png";
import celebratrMac from "../assests/images/celebratrMac.png";
import farmFresh from "../assests/images/farmFresh.png";
import tacosMobile from "../assests/images/tacosMobile.png";
import tacosMac from "../assests/images/tacosMac.png";
export const projects = [
  {
    id: 2,
    hasMobileMock: true,
    projectName: "Celebratr",
    desktopMock: celebratrMac,
    mobileMock: celebratrMobile,
    projectDescription:
      "Celebratr is a full-stack web application that is and iteration of a previous application I had built amongst a group of peers. The reason for rebuilding this app was that I felt the previous version on the app could use a more simple and intuitive UI. ",
    techStack: ["ReactJS", "Redux", "NodeJS", "ExpressJS", "PostgresQL"],
    projectUrl: "https://celebratr.co",
    previousUrl: "https://elastic-jennings-52d92d.netlify.com/login",
    backendGithub: "https://github.com/armandoroman1016/party_planner_be",
    githubUrl: "https://github.com/armandoroman1016/party_planner_fe",
  },

  {
    id: 3,
    hasMobileMock: false,
    projectName: "Farm Fresh API",
    desktopMock: farmFresh,
    projectDescription: `Farm fresh is a Web API that allows developers to create an application for 2 user types - Farmers and Shoppers -. The API allows farmers to keep track of their inventory such as tools and produce. They can set prices and keep track of orders that consumers place from the consumer side of the application.`,
    techStack: ["NodeJs", "ExpressJs", "PostgresQL", "Json Web Token", "Knex"],
    projectUrl: "https://farm-fresh-bw.herokuapp.com/docs/",
    githubUrl: "https://github.com/armandoroman1016/farm_fresh_be",
  },

  {
    id: 5,
    hasMobileMock: false,
    projectName: "Py City",
    desktopMock:
      "https://screenpeek.nyc3.digitaloceanspaces.com/screenshots/2o0jde-pycity-netlify-com.png",
    projectDescription:
      "PyCity is a Multi User Dungeon - MUD - game. It allows users to register and explore different areas of a procedurally generated map of buildings around a town. The players moves are updated in the DB and allows for encounter of other users across the map",
    techStack: ["ReactJS", "Axios", "Python", "OOP"],
    projectUrl: "https://pycity.netlify.com/register",
    githubUrl: "https://github.com/cs26-bw",
  },
  {
    id: 4,
    hasMobileMock: true,
    projectName: "Todo Los Tacos",
    desktopMock: tacosMac,
    mobileMock: tacosMobile,
    projectDescription: `Todo Los Tacos is a simple website that is written in HTML, CSS, and Vanilla Javascript.`,
    techStack: ["HTML", "CSS3", "Javascript"],
    projectUrl: "https://todoslostacos.netlify.com/",
    githubUrl: "https://github.com/armandoroman1016/tacos_site",
  },
];
