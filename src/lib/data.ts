export const PERSON = {
  name: "Rupesh Ghimire",
  firstName: "Rupesh",
  lastName: "Ghimire",
  handle: "RupeshGhimire",
  email: "rupacegh@gmail.com",
  github: "https://github.com/RupeshGhimire",
  linkedin: "https://www.linkedin.com/in/rupesh-ghimire-121586163/",
  photo:
    "https://media.licdn.com/dms/image/v2/D5603AQHFgByV3Kj-ZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710871870973?e=1789603200&v=beta&t=zPYQK4V_slxUELgSRTRIGpPEmgNVxXRw3tFe53xdCpg",
  githubApi: "https://api.github.com/users/RupeshGhimire/repos?sort=updated&per_page=100",
  since: 2015,
  publicRepos: 14,
};

export const SOCIALS = [
  { label: "GitHub", href: PERSON.github, kind: "github" as const },
  { label: "LinkedIn", href: PERSON.linkedin, kind: "linkedin" as const },
  { label: "Email", href: `mailto:${PERSON.email}`, kind: "email" as const },
];
