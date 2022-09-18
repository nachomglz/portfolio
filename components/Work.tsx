import type { NextPage } from "next";
import { LegacyRef, useEffect, useState, useRef } from "react";
import ProjectsContainer from "./ProjectsContainer";
import { Project } from "../utils/interfaces";

const freelanceProjects: Project[] = [
  {
    name: "Betobe Sport",
    description:
      "Web application to manage football/soccer players for a football/soccer agency",
    link: "#",
  },
  {
    name: "Namegoals",
    description: "Social media website for name lovers.",
    link: "#",
  },
  {
    name: "Betobe Sport",
    description:
      "Web application to manage football/soccer players for a football/soccer agency",
    link: "#",
  },
  {
    name: "Namegoals",
    description: "Social media website for name lovers.",
    link: "#",
  },
];

const githubRepos: Project[] = [
  {
    name: "betobe",
    html_url: "https://github.com/nachomglz/betobe",
    description: "Soccer player management app for betobesport.com",
    pushed_at: "2022-08-11 10:00:48",
    clone_url: "https://github.com/nachomglz/betobe.git",
    language: "TypeScript",
  },
  {
    name: "dotfiles",
    html_url: "https://github.com/nachomglz/dotfiles",
    description: "My personal dotfiles config for nvim, fish shell and iterm2",
    pushed_at: "2022-08-11 14:04:05",
    clone_url: "https://github.com/nachomglz/dotfiles.git",
    language: "Shell",
  },
  {
    name: "lessons-calendar",
    html_url: "https://github.com/nachomglz/lessons-calendar",
    description:
      "Nodejs app that connects to TimetreeAPI to register new lesson events on my personal calendar.",
    pushed_at: "2022-08-07 17:06:57",
    clone_url: "https://github.com/nachomglz/lessons-calendar.git",
    language: "TypeScript",
  },
  {
    name: "names-form",
    html_url: "https://github.com/nachomglz/names-form",
    description: "Form to create names in the names app",
    pushed_at: "2022-09-04 15:48:28",
    clone_url: "https://github.com/nachomglz/names-form.git",
    language: "TypeScript",
  },
  {
    name: "react-native-ped...",
    html_url: "https://github.com/nachomglz/react-native-pedometer-test",
    description: "Simple app that tracks your steps using an IOS device",
    pushed_at: "2022-08-03 21:30:43",
    clone_url: "https://github.com/nachomglz/react-native-pedometer-test.git",
    language: "JavaScript",
  },
  {
    name: "socket-io-test",
    html_url: "https://github.com/nachomglz/socket-io-test",
    description: "Simple test to try socket.io library in nodejs",
    pushed_at: "2022-08-03 21:39:23",
    clone_url: "https://github.com/nachomglz/socket-io-test.git",
    language: "JavaScript",
  },
  {
    name: "spotify-statistics",
    html_url: "https://github.com/nachomglz/spotify-statistics",
    description:
      "Easy to use app that gives you interesting data about your spotify account",
    pushed_at: "2022-08-03 21:40:43",
    clone_url: "https://github.com/nachomglz/spotify-statistics.git",
    language: "JavaScript",
  },
  {
    name: "top50-ig-account-scraping",
    html_url: "https://github.com/nachomglz/top50-ig-account-scraping",
    description: null,
    pushed_at: "2021-10-22 00:45:00",
    clone_url: "https://github.com/nachomglz/top50-ig-account-scraping.git",
    language: "JavaScript",
  },
];

const Work: NextPage = () => {
  const freelanceObservedRef = useRef<any>();
  const personalObservedRef = useRef<any>();

  const [isFreelanceVisible, setIsFreelanceVisible] = useState<boolean>(false);
  const [isPersonalVisible, setIsPersonalVisible] = useState<boolean>(false);

  useEffect(() => {
    // initialize intersection observer for the freelance projects section
    const freelanceObserver = new IntersectionObserver(entries => {
      const entry = entries[0];
      // Once the entry is intersecting, we can load the animations
      if (entry.isIntersecting) {
        setIsFreelanceVisible(true);
      } else {
        setIsFreelanceVisible(false);
      }
    });
    freelanceObserver.observe(freelanceObservedRef.current);

    // initialize intersection observer for the personal projects section
    const personalObserver = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsPersonalVisible(true);
      } else {
        setIsPersonalVisible(false);
      }
    });
    personalObserver.observe(personalObservedRef.current);
  }, []);

  return (
    <div id='Work'>
      <section
        className={`work-freelance container ${
          isFreelanceVisible ? "visible" : "hidden"
        }`}
      >
        <h1 className='page-title'>Freelancing</h1>
        <p className='page-subtitle' ref={freelanceObservedRef}>
          These are some of the freelance projects that I've worked in.
        </p>
        <ProjectsContainer type='freelance' data={freelanceProjects} />
      </section>
      <section
        className={`work-personal container ${
          isPersonalVisible ? "visible" : "hidden"
        }`}
      >
        <h1 className='page-title'>Personal projects</h1>
        <p className='page-subtitle' ref={personalObservedRef}>
          I like to build all types of stuff while on my free time, these are
          the repositories for my personal projects.
        </p>
        <ProjectsContainer type='personal' data={githubRepos} />
      </section>
    </div>
  );
};

export default Work;
