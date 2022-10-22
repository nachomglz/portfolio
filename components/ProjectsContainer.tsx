import { useState } from "react";
import Toast from "./Toast";
import { Project } from "../utils/interfaces";
import TypescriptIcon from "../assets/icons/typescript.svg";
import LuaIcon from "../assets/icons/lua.svg";
import JavaScriptIcon from "../assets/icons/javascript.svg";

interface Props {
  data: Project[];
  type: "freelance" | "personal";
}

const FreelanceProjectsContainer = ({ data, type }: Props) => {
  const [showToast, setShowToast] = useState<boolean>(false);

  const getIcon = (name: string): string => {
    switch (name.toLowerCase()) {
      case "typescript":
        return TypescriptIcon;
      case "javascript":
        return JavaScriptIcon;
      case "lua" || "shell":
        return LuaIcon;
      default:
        return JavaScriptIcon;
    }
  };

  const cloneRepository = (clone_url: string) => {
    navigator.clipboard.writeText(clone_url);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return type === "freelance" ? (
    <div className='freelance-projects'>
      {data.map(
        (item: Project, i: number) =>
          i < 5 && (
            <div className='freelance-project' key={i}>
              <h2 className='freelance-project__name'>{item.name}</h2>
              <p className='freelance-project__description'>
                {item.description}
              </p>
              <a href={item.link} className='freelance-project__link'>
                Check it out!
              </a>
            </div>
          )
      )}
      <div className='freelance-project more-soon'>More projects soon...</div>
      <Toast isShowing={showToast} text='Copied clone url!' />
    </div>
  ) : (
    <div className='personal-projects'>
      {data.map(
        (item: Project, i: number) =>
          i < 5 && (
            <div className='personal-project' key={i}>
              <div className='top-section'>
                <a
                  href={item.html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='personal-project__name'
                >
                  {item.name}
                </a>
                <span className='project-last-push'>
                  Last push {item.pushed_at}
                </span>
              </div>
              <p className='personal-project__description'>
                {item.description}
              </p>
              <div className='bottom-section'>
                <button
                  onClick={() => cloneRepository(item.clone_url as string)}
                >
                  Clone repository
                </button>
                <div className='language-section'>
                  <img src={getIcon(item.language as string)} />
                  <span>{item.language}</span>
                </div>
              </div>
            </div>
          )
      )}
      <Toast isShowing={showToast} text='Copied clone url!' />
    </div>
  );
};

export default FreelanceProjectsContainer;
