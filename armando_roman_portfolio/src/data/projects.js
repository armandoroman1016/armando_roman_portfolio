import tacosMobile from "../assests/images/tacosMobile.png";
import tacosMac from "../assests/images/tacosMac.png";

export const projects = [
    {
        id: 1,
        hasMobileMock: true,
        projectName: "Celebratr",
        desktopMock:
            "https://screenpeek.nyc3.digitaloceanspaces.com/screenshots/51oe1k-celebratr-co.png",
        mobileMock:
            "https://screenpeek.nyc3.digitaloceanspaces.com/screenshots/5871m9-celebratr-co.png",
        projectDescription:
            "Celebratr is a web application that assists in planning and tracking events. For this project, I implemented an authentication system for both the client and server-side code bases. Also, I handled the state management system using Redux. This app is an iteration on a previous version I had built amongst a group of peers. The reason for rebuilding the project was that I felt the previous version on the app could use a more simple and intuitive UI.",
        techStack: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
        projectUrl: "https://celebratr.co",
        previousUrl: "https://elastic-jennings-52d92d.netlify.com/login",
        backendGithub: "https://github.com/armandoroman1016/party_planner_be",
        githubUrl: "https://github.com/armandoroman1016/party_planner_fe",
    },
    {
        id: 2,
        hasMobileMock: true,
        projectName: "Quarantine Cook",
        desktopMock:
            "https://screenpeek.nyc3.digitaloceanspaces.com/screenshots/2m60x8-quarantine-cook-com.png",
        mobileMock:
            "https://screenpeek.nyc3.digitaloceanspaces.com/screenshots/q4j31v-quarantine-cook-com.png",
        projectDescription:
            "A web app that gives you recipes with ingredients that you have on hand. In order to build Quarantine Cook, I had to grab and persist the users' ingredients and make HTTP requests to a third party API holding information on over 65,000 recipes across many sites.",
        techStack: ["React", "axios", "SCSS"],
        projectUrl: "https://quarantine-cook.com/kitchen",
        githubUrl: "https://github.com/armandoroman1016/quarantine-cook",
    },
    {
        id: 3,
        hasMobileMock: false,
        projectName: "Py City",
        desktopMock:
            "https://screenpeek.nyc3.digitaloceanspaces.com/screenshots/2o0jde-pycity-netlify-com.png",
        projectDescription:
            "PyCity is a Dungeon(MUD) multi-user game. It allows users to register and explore different areas of a procedurally generated map of buildings around the city. The players' moves are updated in the DB and allow other users to meet across the map. My contributions to the project included creating authentication pages and working with other team members to create a user map.",
        techStack: ["React", "axios", "Python", "OOP"],
        projectUrl: "https://pycity.netlify.com/register",
        githubUrl: "https://github.com/cs26-bw",
    },
    {
        id: 4,
        hasMobileMock: false,
        projectName: "Farm Fresh API",
        desktopMock:
            "https://screenpeek.nyc3.digitaloceanspaces.com/screenshots/5xjo9o-farm-fresh-bw-herokuapp-com.png",
        projectDescription:
            "Farm Fresh is an application that allows developers to create user interfaces for 2 user types. The API allows farmers to keep track of their inventory such as tools and produce. They can set prices and keep track of orders, which consumers place from the consumer side of the application. I was responsible for building and testing this API over a four day period during a build week at Lambda School while collaborating with 4 other developers.",
        techStack: ["Node.js", "Express", "PostgreSQL", "JSON Web Tokens"],
        projectUrl: "https://farm-fresh-bw.herokuapp.com/docs/",
        githubUrl: "https://github.com/armandoroman1016/farm_fresh_be",
    },

    {
        id: 5,
        hasMobileMock: true,
        projectName: "Todo Los Tacos",
        desktopMock: tacosMac,
        mobileMock: tacosMobile,
        projectDescription:
            "Todo Los Tacos is a simple website that is written in HTML, CSS, and Vanilla Javascript. While building this project, I wanted to increase the performance of the website that was using event listeners for scroll animations. I was able to do so via IntersectionObservers. I also integrated the Google Maps API.",
        techStack: ["HTML", "CSS3", "JavaScript"],
        projectUrl: "https://todoslostacos.netlify.com/",
        githubUrl: "https://github.com/armandoroman1016/tacos_site",
    },
];
