﻿/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all I'm Moiz",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks"
  ),
  resumeLink:
    "https://drive.google.com/open?id=1i6VgogE55oOOBb4Mgqo_qEfh1tP8m2eb",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/abdulmoizshaikh",
  linkedin: "https://www.linkedin.com/in/muhammad-moiz-489a04137/",
  gmail: "muhammadmoizshaikh@gmail.com",
  gitlab: "https://gitlab.com/muhammadmoizshaikh",
  facebook: "https://www.facebook.com/abdul.moiz.980967",
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift",
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python",
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker",
    // },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username",
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://i.ibb.co/DtHyGYT/capalogo.png",
      link: "https://www.linkedin.com/company/capazyte/about/",
    },
    {
      image: "https://i.ibb.co/BK0fmtM/xordlogo.png",
      link: "https://xord.one/",
    },
  ],
};

// Portfolio projects section
const portfolioProjectSection = {
  title: emoji("Portfolio Projects "),
  subtitle: "",
  // "Achievements, Certifications Award Letters and Some Cool Stuff that i have done !",

  portfolioProjectsCards: [
    {
      title: "Recipe Shopping List",
      subtitle: "",
      // "First Pakistani to be selected as Google Google-in Finalist from 4000 students from 77 diffrent countries",
      images: [
        "https://i.ibb.co/MRMPSZM/resipe1.png",
        "https://i.ibb.co/C98z3PM/2.png",
        "https://i.ibb.co/x7GJqFW/3.png",
      ],
      footerLink: [
        {
          name: "Details",
          url:
            "https://i.ibb.co/Dp4sT6v/76935584-2470918346508075-2975944283476983808-o-1.jpg",
        },
        // {
        //   name: "Award Letter",
        //   url:
        //     "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url:
        //     "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        // },
      ],
    },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url:
    //         "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
    //     },
    //   ],
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/",
    //     },
    //   ],
    // },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications Award Letters and Some Cool Stuff that i have done !",

  achivementsCards: [
    {
      title: "Full Stack Development",
      subtitle: "",
      // "First Pakistani to be selected as Google Google-in Finalist from 4000 students from 77 diffrent countries",
      image:
        "https://i.ibb.co/Dp4sT6v/76935584-2470918346508075-2975944283476983808-o-1.jpg",
      footerLink: [
        {
          name: "Certification",
          url:
            "https://i.ibb.co/Dp4sT6v/76935584-2470918346508075-2975944283476983808-o-1.jpg",
        },
        // {
        //   name: "Award Letter",
        //   url:
        //     "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url:
        //     "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        // },
      ],
    },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url:
    //         "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
    //     },
    //   ],
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/",
    //     },
    //   ],
    // },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff. i love to write and teach others what i have learned",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min.",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT Is The Best?",
      description:
        "React is a JavaScript library for building the user interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
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
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "+92-3045464742",
  email_address: "muhammadmoizshaikh@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  openSource,
  bigProjects,
  portfolioProjectSection,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
