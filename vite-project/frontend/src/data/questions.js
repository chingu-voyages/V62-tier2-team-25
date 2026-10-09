const questions = [
  {
    id: 1,
    role: "Scrum Master",
    question: "How familiar are you with Agile or Scrum?",
    options: [
      { id: "a", text: "I've never worked with or studied Agile/Scrum" },
      {
        id: "b",
        text: "I've heard of Agile/Scrum and know some basic concepts",
      },
      {
        id: "c",
        text: "I've taken a course, participated in Scrum, or have some practical experience",
      },
    ],
  },
  {
    id: 2,
    role: "Scrum Master",
    question: "Which best describes your experience working on teams?",
    options: [
      {
        id: "a",
        text: "Mostly individual work with little team collaboration",
      },
      {
        id: "b",
        text: "I've worked on teams but haven't had much experience with Agile teams",
      },
      {
        id: "c",
        text: "I've regularly worked on collaborative, cross-functional teams",
      },
    ],
  },
  {
    id: 3,
    role: "Scrum Master",
    question:
      "How much experience do you have facilitating meetings or group discussions?",
    options: [
      { id: "a", text: "Little or none" },
      {
        id: "b",
        text: "I've occasionally facilitated meetings or discussions",
      },
      {
        id: "c",
        text: "I regularly facilitate meetings, workshops, or group discussions",
      },
    ],
  },
  {
    id: 4,
    role: "Scrum Master",
    question: "Which of these have you used or worked with?",
    options: [
      {
        id: "a",
        text: "I've used tools such as Jira, Azure DevOps, Trello, or Confluence",
      },
      {
        id: "b",
        text: "I've used these tools extensively to manage or facilitate team workflows",
      },
      { id: "c", text: "None of these" },
    ],
  },
  {
    id: 5,
    role: "Scrum Master",
    question:
      "What best describes why you're interested in becoming a Scrum Master?",
    options: [
      {
        id: "a",
        text: "I'm exploring the career and want to understand what the role involves",
      },
      {
        id: "b",
        text: "I already work in a related role and want to transition into Scrum",
      },
      {
        id: "c",
        text: "I've worked with Scrum/Agile and want to develop professionally in this area",
      },
    ],
  },
  {
    id: 6,
    role: "Product Owner",
    question:
      "How familiar are you with Product Ownership or Agile product development?",
    options: [
      { id: "a", text: "I'm completely new to it" },
      { id: "b", text: "I've studied or encountered some of the concepts" },
      { id: "c", text: "I've worked in or around product development" },
    ],
  },
  {
    id: 7,
    role: "Product Owner",
    question: "Which best describes your experience working with stakeholders?",
    options: [
      { id: "a", text: "Limited experience" },
      {
        id: "b",
        text: "I've communicated with stakeholders as part of my work",
      },
      {
        id: "c",
        text: "I regularly manage competing stakeholder needs and expectations",
      },
    ],
  },
  {
    id: 8,
    role: "Product Owner",
    question:
      "How familiar are you with Product Backlogs or similar lists of prioritized work?",
    options: [
      { id: "a", text: "I've never worked with one" },
      { id: "b", text: "I've seen or worked with them before" },
      { id: "c", text: "I've actively managed or prioritized backlogs" },
    ],
  },
  {
    id: 9,
    role: "Product Owner",
    question: "Which of these have you used?",
    options: [
      {
        id: "a",
        text: "Tools such as Jira, Azure DevOps, Trello, Productboard, or similar tools",
      },
      {
        id: "b",
        text: "I've regularly used product/project management tools to plan and prioritize work",
      },
      { id: "c", text: "None of these" },
    ],
  },
  {
    id: 10,
    role: "Product Owner",
    question: "What best describes your interest in becoming a Product Owner?",
    options: [
      { id: "a", text: "I'm exploring the career" },
      {
        id: "b",
        text: "I work in a related area and want to move into product management",
      },
      {
        id: "c",
        text: "I'm already involved in product development and want to become a stronger Product Owner",
      },
    ],
  },
  {
    id: 11,
    role: "Web Developer",
    question:
      "How would you describe your current experience with web development?",
    options: [
      { id: "a", text: "I'm completely new to it" },
      {
        id: "b",
        text: "I've experimented with it through courses, tutorials, or personal projects",
      },
      {
        id: "c",
        text: "I've built websites or applications and have practical experience",
      },
    ],
  },
  {
    id: 12,
    role: "Web Developer",
    question: "Which best describes your experience with JavaScript?",
    options: [
      { id: "a", text: "I've never programmed with JavaScript" },
      {
        id: "b",
        text: "I've followed tutorials or written some basic JavaScript",
      },
      {
        id: "c",
        text: "I've built projects using JavaScript and am comfortable writing my own code",
      },
    ],
  },
  {
    id: 13,
    role: "Web Developer",
    question: "How much experience do you have using Git or GitHub?",
    options: [
      { id: "a", text: "I've never used them" },
      {
        id: "b",
        text: "I've used them while following tutorials or working on small projects",
      },
      {
        id: "c",
        text: "I regularly use Git/GitHub for development and collaboration",
      },
    ],
  },
  {
    id: 14,
    role: "Web Developer",
    question: "Have you ever built something that communicates with an API?",
    options: [
      { id: "a", text: "No" },
      { id: "b", text: "I've followed a tutorial or experimented with APIs" },
      { id: "c", text: "I've independently integrated APIs into applications" },
    ],
  },
  {
    id: 15,
    role: "Web Developer",
    question: "What is your primary reason for learning web development?",
    options: [
      { id: "a", text: "I'm completely exploring the field" },
      {
        id: "b",
        text: "I want to build my own websites/apps or develop a new skill",
      },
      {
        id: "c",
        text: "I want to pursue web development professionally or transition into a developer role",
      },
    ],
  },
  {
    id: 16,
    role: "UX/UI Designer",
    question:
      "How would you describe your current experience with UX/UI design?",
    options: [
      { id: "a", text: "I'm completely new to it" },
      {
        id: "b",
        text: "I've explored it through courses, tutorials, or personal projects",
      },
      {
        id: "c",
        text: "I've designed digital products or interfaces in a professional or substantial project setting",
      },
    ],
  },
  {
    id: 17,
    role: "UX/UI Designer",
    question:
      "What is your experience with design tools such as Figma, Sketch, or Adobe XD?",
    options: [
      { id: "a", text: "I've never used them" },
      { id: "b", text: "I've experimented with one or more of them" },
      {
        id: "c",
        text: "I'm comfortable creating designs and prototypes with them",
      },
    ],
  },
  {
    id: 18,
    role: "UX/UI Designer",
    question:
      "How much experience do you have creating wireframes or prototypes?",
    options: [
      { id: "a", text: "None" },
      {
        id: "b",
        text: "I've created some through tutorials or personal projects",
      },
      {
        id: "c",
        text: "I've regularly created wireframes/prototypes for real or substantial projects",
      },
    ],
  },
  {
    id: 19,
    role: "UX/UI Designer",
    question: "Which of these have you worked with?",
    options: [
      {
        id: "a",
        text: "I've worked with wireframes, prototypes, user flows, personas, or journey maps",
      },
      {
        id: "b",
        text: "I've used several of these techniques in actual design projects",
      },
      { id: "c", text: "None of these" },
    ],
  },
  {
    id: 20,
    role: "UX/UI Designer",
    question: "What is your primary reason for learning UX/UI design?",
    options: [
      { id: "a", text: "I'm exploring the field" },
      {
        id: "b",
        text: "I want to improve my design skills or build a portfolio",
      },
      {
        id: "c",
        text: "I want to pursue UX/UI design professionally or transition into a design role",
      },
    ],
  },
  {
    id: 21,
    role: "Bonus-All",
    question: "How do you prefer to learn? Select up to 3.",
    options: [
      "Mostly videos",
      "Reading/documentation",
      "Hands-on projects",
      "Interactive tutorials",
      "Exercises/challenges",
      "Quizzes",
      "Real-world case studies",
      "Working with a mentor",
      "Group/community learning",
      "A combination of everything",
    ],
  },
  {
    id: 21,
    role: "Bonus-Web Developer",
    question: "Which of these have you used before? Select all that apply.",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Git/GitHub",
      "REST APIs",
      "SQL",
      "MongoDB",
      "Docker",
      "None of these",
    ],
  },
  {
    id: 21,
    role: "Bonus-UX/UI Designer",
    question: "Which of these have you used before? Select all that apply.",
    options: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "FigJam",
      "Miro",
      "Design systems",
      "Prototyping tools",
      "Usability testing",
      "User research",
      "Accessibility",
      "None of these",
    ],
  },
  {
    id: 21,
    role: "Bonus-Scrum Master",
    question: "Which of these have you used before? Select all that apply.",
    options: [
      "Scrum",
      "Kanban",
      "Jira",
      "Azure DevOps",
      "Confluence",
      "Sprint planning",
      "Sprint retrospectives",
      "Sprint reviews",
      "Backlog refinement",
      "User stories",
      "Agile coaching",
      "None of these",
    ],
  },
  {
    id: 21,
    role: "Bonus-Product Owner",
    question: "Which of these have you used before? Select all that apply.",
    options: [
      "Scrum",
      "Kanban",
      "Jira",
      "Product roadmaps",
      "User stories",
      "Product discovery",
      "User research",
      "A/B testing",
      "Product analytics",
      "MVP development",
      "Backlog management",
      "Stakeholder management",
      "None of these",
    ],
  },
];

export default questions;
