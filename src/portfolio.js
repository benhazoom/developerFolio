/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
// make our custom icons `./myicons` available in Font Awesome
// import {dom, library} from "@fortawesome/fontawesome-svg-core";
// import {
//   faAzure,
//   faBlockchain,
//   faCypress,
//   faLambda,
//   faServerless,
//   faTS
// } from "./assets/myicons";

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Binyamin Hazoom",
  title: "Shalom! I'm Binyamin",
  subTitle: emoji(
    `I'm a young web and softwere engineer from Kiryat-Gat Israel. I love to solve problems, research and learn new things. I'm a self-taught developer and I'm always looking for new challenges.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/18SCmxQFKgYQFrMLHznbVfBHJBGv27qlH/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/benhazoom",
  linkedin: "https://www.linkedin.com/in/binyamin-hazoom-223713226/",
  email: "benhazoom12@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Enthusiast Web Developer, at the beginning of my career.",
  skills: [
    emoji("⚡ Constantly study to become a better developer."),
    emoji(
      "⚡ Develop web platforms with the motivation to connect people (and bots 🤖)."
    ),
    emoji(
      "⚡ Automate processes for better performance and error preventions."
    ),
    emoji(
      "⚡ Solve complex problems using different Tools, if its by research, try and error or AI."
    ),
    emoji("⚡ Team work is dream work! I prefere to work as a part of a team.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    //front
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Nuxt.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Tailwind",
      fontAwesomeClassname: "fas fa-palette"
    },
    //back
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "Express.js",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "NestJS",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JWT",
      fontAwesomeClassname: "fas fa-key"
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    //data base
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Prisma",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-database"
    },
    //utilities
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "VSC",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Open University of Israel",
      // logo: require("./assets/images/hdaLogo.png"),
      subHeader: "Bsc in Computer Science (Incomplete)",
      duration: "",
      desc: ""
    }
  ]
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Automation",
      progressPercentage: "75%"
    },
    {
      Stack: "AI",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Automation Engineer",
      company: "Orda",
      companylogo: require("./assets/images/orda-logo.png"),
      date: "",
      desc: ``,
      descBullets: [
        `Automation Engineer • Automating printing processes, scripting in Java Python and JavaScript`
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github
  display: true // Set false to hide this section
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of my project that best represent my skills and experience",
  projects: [
    {
      image: require("./assets/images/EcommerceScreen.png"),
      projectName: "Ecommerce web platform",
      projectDesc: `Full stack application for a web eCommerce shop built using the MERN stack (MongoDB, Express, React, Node). With JWT Authentication Stored In An HTTP-Only Cookie. Admin area to manage customers products & orders. Full featured shopping cart with PayPal & credit/debit payments.Product Search, Carousel, Pagination & More.Product Rating & Review System
`,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://binyamin-mern-web-shop.onrender.com/"
        }
        //  you can add extra buttons here
      ]
    },
    {
      image: require("./assets/images/BudgetBuddy.png"),
      projectName: "Budgeting web platform",
      projectDesc: `Full stack application for budgeting. (Next.js (App Router), React, TypeScript, MUI, Next.js API Routes, MongoDB (Mongoose), Clerk Authentication)`,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://budget-buddy-self.vercel.app/"
        }
        //  you can add extra buttons here
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc...

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true.
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  resumeLink: "BinyaminHazoom_CV.pdf", // Set to empty to hide the button
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to collaborate? Feel free to reach out to me!",
  number: "+972 54-422-6456",
  email_address: "benhazoom12@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
