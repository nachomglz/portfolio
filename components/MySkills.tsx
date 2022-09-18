import type { NextPage } from "next";
import { ReactNode, useEffect, useState, useRef } from "react";
import { Skill } from "../utils/interfaces";
import TagSphere from "../utils/TagSphere";

// Import images to use in the tagsphere
import ReactLogo from "../assets/tagSphereItems/react-icon.svg";
import JavaIcon from "../assets/tagSphereItems/java-icon.svg";
import JavaScriptIcon from "../assets/tagSphereItems/javascript-icon.svg";
import NodeIcon from "../assets/tagSphereItems/node-icon.svg";
import PhpIcon from "../assets/tagSphereItems/php-icon.svg";
import PythonIcon from "../assets/tagSphereItems/python-icon.svg";
import SassIcon from "../assets/tagSphereItems/sass-icon.svg";
import TypeScriptIcon from "../assets/tagSphereItems/typescript-icon.svg";
import GitIcon from "../assets/tagSphereItems/git-icon.svg";
import NextIcon from "../assets/tagSphereItems/next-icon.svg";
import MongoIcon from "../assets/tagSphereItems/mongodb-icon.svg";

const tagSphereItems: Array<string | ReactNode> = [
  <img src={ReactLogo} />,
  <img src={GitIcon} />,
  <img src={NextIcon} />,
  <img src={MongoIcon} />,
  <img src={JavaIcon} />,
  <img src={JavaScriptIcon} />,
  <img src={NodeIcon} />,
  <img src={PhpIcon} />,
  <img src={PythonIcon} />,
  <img src={TypeScriptIcon} />,
  <img src={SassIcon} />,
];

const MySkills: NextPage = () => {
  const skillsObservedRef = useRef<any>();
  const sectionObservedRef = useRef<any>();

  const [isSkillsVisible, setIsSkillsVisible] = useState<boolean>(false);
  const [isSectionVisible, setIsSectionVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [skills, setSkills] = useState<Skill[]>([
    { name: "React", percentage: 95, currentPercentage: 0 },
    { name: "Node", percentage: 90, currentPercentage: 0 },
    { name: "Python", percentage: 75, currentPercentage: 0 },
    { name: "PHP", percentage: 70, currentPercentage: 0 },
    { name: "Java", percentage: 50, currentPercentage: 0 },
    { name: "SASS", percentage: 90, currentPercentage: 0 },
  ]);

  useEffect(() => {
    // initialize intersection observer for the skills section
    const skillsObserver = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsSkillsVisible(true);
      } else {
        setIsSkillsVisible(false);
      }
    });
    skillsObserver.observe(skillsObservedRef.current);

    // initialize intersection observer for the entire section
    const sectionObserver = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsSectionVisible(true);
      } else {
        setIsSectionVisible(false);
      }
    });
    sectionObserver.observe(sectionObservedRef.current);
  }, []);

  useEffect(() => {
    // console.log(document.querySelectorAll(".bottom-section__skills-skill hr"));
    if (loading && isSkillsVisible) {
      setTimeout(() => {
        let newSkillState: Skill[] = skills.map((value: Skill): Skill => {
          if (value.currentPercentage < value.percentage) {
            return { ...value, currentPercentage: value.currentPercentage + 1 };
          } else {
            return value;
          }
        });
        // if all the skill's currentPercentages have reached the max percentage, set loading to false
        if (
          newSkillState.filter(el => el.currentPercentage === el.percentage)
            .length === newSkillState.length
        ) {
          setLoading(false);
        }

        setSkills(newSkillState);
      }, 15);
    }
  }, [skills, isSkillsVisible]);

  return (
    <section
      id='MySkills'
      className={`container ${isSectionVisible ? "visible" : "hidden"}`}
    >
      <h1 className='page-title'>What am I good at?</h1>
      <p className={`page-subtitle `} ref={sectionObservedRef}>
        I like to work with the JavaScript ecosystem to develop most of my
        projects, but sometimes I like to experiment with other technologies.
      </p>

      <div className='bottom-section'>
        <div className='bottom-section__skills'>
          <h2>These are my most used technologies</h2>
          <div
            ref={skillsObservedRef}
            className='bottom-section__skills-container'
          >
            {skills.map((value: Skill, index: number) => (
              <div
                key={index}
                className={`bottom-section__skills-skill`}
                style={{ maxWidth: value.currentPercentage + "%" }}
              >
                <div className='skill__top-section'>
                  <h3>{value.name}</h3>
                  <span
                    className={`skill-percentage ${
                      value.currentPercentage >= 8 ? "shown" : "hidden"
                    }`}
                  >
                    {value.currentPercentage}%
                  </span>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
        <div className='bottom-section__tagcloud'>
          <TagSphere
            radius={270}
            fullWidth={true}
            fullHeight={true}
            /*texts={["React", "Node.js", "Python", "PHP", "Java", "Sass"]}*/
            texts={tagSphereItems}
          />
        </div>
      </div>
    </section>
  );
};

export default MySkills;
