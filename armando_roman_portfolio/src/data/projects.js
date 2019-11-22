import PartyPlanner from '../assests/images/party_planner_iphone.png'
import MissionControl from '../assests/images/use-mission-control-com.png'

export const projects = [
    {
        id: 2,
        hasMobileMock: true,
        projectName: "Party Planner",
        projectImg: PartyPlanner,
        projectDescription: 'Party Planner is an application that allows users to plan and update the status of event keeping track of the events guests, theme, date, and budget.',
        techStack: ['ReactJS', 'Redux', 'Node', 'ExpressJs', 'PostgresQL'],
        projectUrl: 'https://elastic-jennings-52d92d.netlify.com/login',
        githubUrl: 'https://github.com/build-week-party-planner/Front-End'
    },
    {
        id: 3,
        hasMobileMock: false,
        projectName: "Mission Control",
        projectImg: MissionControl,
        projectDescription: `Mission Control is a system that provisions, tracks, monitors and controls all of the IT resources (virtual, physical, non-physical and logical) for every product built and maintained by Lambda X & Lambda Labs.`,
        techStack: ['ReactJS', 'Redux', 'Node', 'ExpressJs', 'PostgresQL', 'GraphQl', 'Prisma', 'AWS'],
        projectUrl: 'https://use-mission-control.com/login',
        githubUrl: 'https://github.com/orgs/Lambda-School-Labs/teams/labs-17-mission-control/repositories'
    }
]