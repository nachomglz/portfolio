import type { NextPage } from "next";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Welcome: NextPage = () => {
  const [fullName, setFullName] = useState<string>("Nacho\u00A0Martin");
  const [displayName, setDisplayName] = useState<string>("");

  useEffect(() => {
    // Once the component loads, set the displayname to the first letter of the fullName
    if (displayName.length < fullName.length) {
      setTimeout(() => {
        setDisplayName(
          prev => prev + fullName.substring(prev.length, prev.length + 1)
        );
      }, 200);
    } else {
      return () => { };
    }
  }, [displayName, fullName]);

  return (
    <section id='Welcome' className='container'>
      <div className='Welcome-typing-animation'>
        <div className='hello-message'>
          Hello,&nbsp;
          <span className='hello-message-im'>
            I&apos;m{" "}
            <span className='hello-message-im-name'>{displayName}</span>
            <div className='blinker'></div>
          </span>
        </div>
      </div>
      <div className='Welcome-quote'>
        <p>I&apos;m a Full-Stack Software Engineer</p>
      </div>
      <div className='Welcome-buttons'>
        <Link href='/#About'>About me</Link>
      </div>
    </section>
  );
};
