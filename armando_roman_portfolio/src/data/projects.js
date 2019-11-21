import PartyPlanner from '../assests/images/party_planner_iphone.png'
import MissionControl from '../assests/images/use-mission-control-com.png'

export const projects = [
    {
        id: 2,
        hasMobileMock: true,
        projectName: "Party Planner",
        projectImg: PartyPlanner,
        projectDescription: 'This project was built using ReactJS and Redux was implemented for state management, the data consumed in this app is coming from Open Brewery DB Api using axios.',
        projectUrl: 'https://elastic-jennings-52d92d.netlify.com/login',
        githubUrl: 'https://github.com/build-week-party-planner/Front-End'
    },
    {
        id: 3,
        hasMobileMock: false,
        projectName: "Mission Control",
        projectImg: MissionControl,
        projectDescription: 'This project was built using ReactJS and Redux was implemented for state management, the data consumed in this app is coming from Open Brewery DB Api using axios.',
        projectUrl: 'https://use-mission-control.com/login',
        githubUrl: 'https://github.com/orgs/Lambda-School-Labs/teams/labs-17-mission-control/repositories'
    }
]