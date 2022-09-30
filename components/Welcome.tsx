import type { NextPage } from "next";
import { argv0 } from "process";
import { useState, useEffect } from "react";

const Welcome: NextPage = () => {
  const [fullName, setFullName] = useState<string>("Nacho Martin");
  const [displayName, setDisplayName] = useState<string>("");

  useEffect(() => {
    updateName();
  }, []);

  const updateName = () => {
    let interval = setInterval(() => {
      setDisplayName(prev => fullName.substring(0, prev.length + 1));
      if (displayName.length === fullName.length) clearInterval(interval);
    }, 150);
  };

  return (
    <section id='Welcome' className='container'>
      <div className='Welcome-typing-animation'>
        <div className='hello-message'>
          Hello,&nbsp;
          <span className='hello-message-im'>
            I'm <span className='hello-message-im-name'>{displayName}</span>
            <span className='blinker'></span>
          </span>
        </div>
      </div>
      <div className='Welcome-quote'>
        <p>I'm a Fullstack developer based in Spain</p>
      </div>
      <div className='Welcome-buttons'>
        <a href='/#About'>Whoaim</a>
        <a href='/#Contact'>Wanna work with me?</a>
      </div>
    </section>
  );
};
export default Welcome;
