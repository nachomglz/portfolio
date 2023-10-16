import type { NextPage } from "next";
import { FC, useEffect, useState } from "react";
import { Repository } from "../../utils/interfaces";
import Toast from "../Toast";
import TypescriptIcon from "../../assets/icons/typescript.svg";
import RustIcon from "../../assets/icons/rust.svg";
import JavaScriptIcon from "../../assets/icons/javascript.svg";
import LuaIcon from "../../assets/icons/lua.svg";
import moment from 'moment'

const ReposContainer: FC<{ repositories: Repository[] }> = ({ repositories }) => {
  const [showToast, setShowToast] = useState<boolean>(false);

  const getIcon = (name: string | null): string => {
    console.log("Getting icon: ", name)
    switch (name?.toLowerCase()) {
      case "typescript":
        return TypescriptIcon;
      case "rust":
        return RustIcon;
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

  return (
    <div className='personal-repositories'>
      {repositories.map(
        (item: Repository, i: number) => (
          <div className="personal-repository">
            <div className="personal-repository__title-field">
              <h3 onClick={() => {
                window.location = item.html_url as unknown as Location
              }}>{item.full_name}</h3>
              <span className="repository-type">{item.private ? 'private' : 'public'}</span>
            </div>
            <div className="personal-repository__middle-field">
              <p className="personal-repository__description">{item.description}</p>
            </div>
            <div className="personal-repository__bottom-field">
              <img src={getIcon(item.language)} alt={`${item.language} logo`} />
              <span>Updated {moment(new Date(item.updated_at)).fromNow()}</span>
            </div>
          </div>
        ))}
      <Toast isShowing={showToast} text='Copied clone url!' />
    </div>
  );
};

export const Repositories: NextPage = () => {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await (await fetch("/api/repositories")).json() as Repository[]
        if (response) {
          setRepositories(response)
        }
      } catch (error) {
        console.error("Error: ", error)
      }
    }
    fetchRepositories()
  }, [])

  return (
    <section id='personal-repositories' className={`work-personal container `}>
      <h1 className='page-title'>Repositories</h1>
      <p className='page-subtitle'>
        I like to build stuff and my free time, and I love contributing to some open source projects as well.
        <br />
        These are my public repositories on GitHub
      </p>
      <ReposContainer repositories={repositories} />
    </section>
  );
};
