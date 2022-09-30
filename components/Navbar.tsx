import type { NextPage } from "next";
import { useState, useRef } from "react";
import Link from "next/link";
import HomeIcon from "../assets/icons/Home.svg";

const Navbar: NextPage = () => {
  const burgerButtonRef = useRef<any>();
  const burgerMenuRef = useRef<any>();

  return (
    <div className='Navbar'>
      <div className='content'>
        <Link className='left-side' href='#'>
          <img src={HomeIcon} className='Navbar__home-icon' alt='Home Icon' />
        </Link>
        <div className='right-side'>
          <nav className='navigation'>
            <Link href='#Work'>Work</Link>
            <Link href='#MySkills'>My skills</Link>
            <Link href='#About'>About</Link>
            <Link href='#Contact'>Contact</Link>
          </nav>
          <div
            className='burger-button'
            ref={burgerButtonRef}
            onClick={() => {
              burgerMenuRef.current.classList.toggle("opened");
              burgerButtonRef.current.classList.toggle("opened");
            }}
          >
            <span className='burger-stick'></span>
            <span className='burger-stick'></span>
          </div>
          <div className='mobile-navigation' ref={burgerMenuRef}>
            <nav>
              <Link href='#Work'>Work</Link>
              <Link href='#MySkills'>My skills</Link>
              <Link href='#About'>About</Link>
              <Link href='#Contact'>Contact</Link>
            </nav>
            <div className='background'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
