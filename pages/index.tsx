import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Work from "../components/Work";
import MySkills from "../components/MySkills";
import About from "../components/About";
import ParticlesComponent from "../components/Particles";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nacho Martin - Portfolio</title>
        <meta name='description' content="Nacho Martin's Web Portfolio" />
        <meta name='enconding' charSet='utf-8' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        {/*
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto$display=swap'
          rel='stylesheet'
        />
        */}
      </Head>
      <ParticlesComponent />
      <Navbar />
      <div className='wrapper'>
        <Welcome />
        <Work />
        <MySkills />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
