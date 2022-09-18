import type { NextPage } from "next";
import Link from "next/link";
import HomeIcon from "../assets/icons/Home.svg";

const Navbar: NextPage = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
