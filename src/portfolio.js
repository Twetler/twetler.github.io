/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Túlio Wetler's Portfolio",
  description:
    "A energetic Data Scientist/Engineer that is passionate about knowing how to create insights through data, and present them clearly.",
  og: {
    title: "Tulio Wetler Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Túlio Wetler",
  logo_name: "Tulio C. Wetler",
  nickname: "Or just Túlio..",
  subTitle:
    "A energetic Data Scientist/Engineer that is passionate about knowing how to create insights through data, and present them clearly.",
  resumeLink:
    "https://drive.google.com/file/d/1PucHaCX2TNinlyrCkTkgjtllR4E3hHoC/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/Twetler",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Twetler",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tuliowetler/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:tuliowetler@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing Dynamic Pricing and Optimization systems into highly scalable platforms.",
        "⚡ Experience with Mathmatical and Statistical Data Modelling",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Scikit Learn",
          fontAwesomeClassname: "fa-sitemap",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Spark e Microsoft SQL Server",
          fontAwesomeClassname: "fa-database",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "AWS EC2, Redshift, S3 and Sagemaker",
          fontAwesomeClassname: "fa-amazon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Fullstack (Learning)",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using React",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Google Cloud Integration",
        "⚡ Hosting and maintaining websites on virtual machine instances.",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Udemy",
      iconifyClassname: "logos:udemy",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
    {
      siteName: "Coursera",
      iconifyClassname: "cib:coursera",
      style: {
        color: "#2EC866",
      },
    },
    {
      siteName: "Chemical Engineering, Universidade de São Paulo",
      iconifyClassname: "mdi:education-outline",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universidade de São Paulo",
      subtitle: "B.Eng. in Chemical Engineering",
      logo_path: "LogoEel.png",
      alt_name: "IIITDM Kurnool",
      duration: "2014 - 2021",
      descriptions: [
        "⚡ I have studied basic chemical engineering and phenomena modelling through computation.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Worked with biofuel and polymer kinetics modelling using Python and Matlab",
      ],
      website_link: "https://www.eel.usp.br/en",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Science",
      subtitle: "Professional Certificate",
      logo_path: "IBM_logo.svg.png",
      certificate_link:
        "https://coursera.org/share/607ca1f7f546944394e73944caa610cb",
      alt_name: "IBM",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I'm a chemical engineer that got drawn into data modelling and analytics throughout my professional years. Worked early in the chemical business analysis, creating reports in BI tools and forecasting models (Using Grid Search algorithms). Later had an experience as data science for a education marketplace, working on dynamic pricing and ranking algorithms. As of late I've been a working in a startup as data project coordinator, doing Q&A and machine learning models tuning and maintenance. Now I'm migrating to a TELCO company database infrastructure maintenance company. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Business Intelligence Intern",
          company: "Solvay Brazil",
          company_url: "https://www.solvay.com/en/",
          logo_path: "solvayLogo.png",
          duration: "Jan 2019 - Jan 2021",
          location: "São Paulo, Brazil",
          description:
            "Market analysis to prospect and plan offer and demand indicators, as well as wordwide detailed follow ups on the PA6 and PA66 feedstocks.-  Implementation of a programming routine for a big client's contract price modelling using parameter variation and least squares error. The simulation allowed good prices forecasting using Adipic Acid upstream prices provided by IHS Markitt. - Monthly market share KPI's presentation, supporting commercial intelligence decisions",
          color: "#0879bf",
        },
        {
          title: "Data Scientist",
          company: "Quero Educação",
          company_url: "https://querobolsa.com.br/",
          logo_path: "quero_logo.svg",
          duration: "Feb 2021 - Jan/22",
          location: "São Paulo, Brazil",
          description: `- Project coordination for the Dynamic Pricing Multi-Armed-Bandit algorithm. Contributed to the development of bayesian AB tests to statistically test new
            website marketplace features, in order to raise average revenue per user.
            - Contributed to the marketplace's ranking algorithm core new features.
            - Developed a fraud detection statistical model based on conversion rates from
            the marketplaces partners. The model would analyze the prices and conversion
            rates correlation over a time series to identify potential suspicious foul plays.
            - Acted as Scrum Master for Business Intelligence team.`,
          color: "#9b1578",
        },
        {
          title: "Data Projects Management",
          company: "Shooju",
          company_url: "https://www.shooju.com/",
          logo_path: "shooju_logo.svg",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description: `- Striving for client's sucesses in using our data platform to ease their workflows through data scraping, modelling and visualization.
            - Scrum master for brazillian team
            - All in one Machine Learning product development`,
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tulio_pic.jfif",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, Data Analysis/Engineering, Data Scraping and Market Analysis",
  },
  blogSection: {
    title: "LinkedIn Articles",
    subtitle:
      "I often like to write data analysis using my LinkedIn Profile, haven't been updating them for some time, but I pretend to be back soon",
    link: "https://www.linkedin.com/in/tuliowetler/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Rua Carlos de Oliveira 3, Lisboa",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/KtAMAu6FMUaajrsg8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
