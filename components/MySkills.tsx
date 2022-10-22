import type { NextPage } from "next";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
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
  <Image src={ReactLogo} key={1} alt='image' />,
  <Image src={GitIcon} key={2} alt='image' />,
  <Image src={NextIcon} key={3} alt='image' />,
  <Image src={MongoIcon} key={4} alt='image' />,
  <Image src={JavaIcon} key={5} alt='image' />,
  <Image src={JavaScriptIcon} key={6} alt='image' />,
  <Image src={NodeIcon} key={7} alt='image' />,
  <Image src={PhpIcon} key={8} alt='image' />,
  <Image src={PythonIcon} key={9} alt='image' />,
  <Image src={TypeScriptIcon} key={10} alt='image' />,
  <Image src={SassIcon} key={11} alt='image' />,
];

const MySkills: NextPage = () => {
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
    // console.log(document.querySelectorAll(".bottom-section__skills-skill hr"));
    if (loading) {
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
  }, [skills]);

  return (
    <section id='MySkills' className={`container visible`}>
      <h1 className='page-title'>What am I good at?</h1>
      <p className={`page-subtitle `}>
        I like to work with the JavaScript ecosystem to develop most of my
        projects, but sometimes I like to experiment with other technologies.
      </p>

      <div className='bottom-section'>
        <div className='bottom-section__skills'>
          <h2>These are my most used technologies</h2>
          <div className='bottom-section__skills-container'>
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
            radius={
              typeof window !== "undefined" && window.innerWidth >= 1200
                ? 270
                : 150
            }
            /*radius={270}*/
            fullWidth={true}
            fullHeight={true}
            texts={tagSphereItems}
          />
        </div>
      </div>
    </section>
  );
};

export default MySkills;
