type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Curiate',
    description:
      'Museum and Art curation platform.',
    link: 'https://curiate.netlify.app/',
    video:
      'https://res.cloudinary.com/dp6t4sjob/video/upload/v1753896969/2025-06-08_23-07-07_lpfae4.mkv ',
    id: 'project1',
  },
  {
    name: 'TailGotchi',
    description: 'Gamifying pet care.',
    link: 'https://tailgotchi.netlify.app/',
    video: 'https://res.cloudinary.com/dp6t4sjob/video/upload/v1753896922/ytdl.canehill.info_-_TailGotchi_Demo_Video_Chris_Fagan_720p_dizm0k.mp4',
    id: 'project2',
  },
  {
    name: 'NC News',
    description: 'News platform',
    link: 'coming',
    video: 'coming',
    id: 'project3',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'Full-stack Developer',
    start: 'May 2025',
    end: 'June 2025',
    link: 'https://www.northcoders.com/',
    id: 'work1',
  },
  {
    company: 'NorthCoders',
    title: 'Student Full-stack Developer',
    start: 'October 2024',
    end: 'January 2025',
    link: 'https://www.northcoders.com/',
    id: 'work2',
  },
   {
    company: 'CGI',
    title: 'Support Desk Analyst',
    start: 'April 2022',
    end: 'October 2022',
    link: 'https://www.cgi.com/en',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Curiate - A Milestone in my Personal Development',
    description: 'A reflection on developing Curiate',
    link: 'https://www.linkedin.com/pulse/curiate-milestone-my-personal-development-fiadh-finnegan-krcte/',
    uid: 'blog-1',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/F1adh/',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/fiadh-finnegan-312594330',
  },
]

export const EMAIL = 'fiadhfinnegan@hotmail.com'
