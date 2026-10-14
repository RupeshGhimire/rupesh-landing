export const PERSON = {
  name: "Rupesh Ghimire",
  firstName: "Rupesh",
  lastName: "Ghimire",
  handle: "RupeshGhimire",
  email: "rupacegh@gmail.com",
  github: "https://github.com/RupeshGhimire",
  linkedin: "https://www.linkedin.com/in/rupesh-ghimire-121586163/",
  photo: new URL("../../profile_headshot.jpg", import.meta.url).href,
  githubApi: "https://api.github.com/users/RupeshGhimire/repos?sort=updated&per_page=100",
  since: 2015,
  publicRepos: 14,
};

export const SOCIALS = [
  { label: "GitHub", href: PERSON.github, kind: "github" as const },
  { label: "LinkedIn", href: PERSON.linkedin, kind: "linkedin" as const },
  { label: "Email", href: `mailto:${PERSON.email}`, kind: "email" as const },
];
