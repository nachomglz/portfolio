import type { NextPage } from "next";
import Image from "next/image";
import GitHubIcon from "../assets/icons/github-icon.svg";
import InstagramIcon from "../assets/icons/instagram-icon.svg";
import LinkedinIcon from "../assets/icons/linkedin-icon.svg";
import TwitchIcon from "../assets/icons/twitch-icon.svg";
import YoutubeIcon from "../assets/icons/youtube-icon.svg";

const About: NextPage = () => {
	return (
		<section id='About' className='container'>
			<h1 className='page-title '>Who is Nacho?</h1>
			<p className='page-subtitle'>
				I’m a someone who loves building stuff with his computer, and want’s to
				know everything about them.
				<br /> I’m constantly trying to challenge myself with new interesting
				projects, and I love working on them until <br /> they’re finished.
				<br />
				<br /> I’m from Spain, and I like to go to a coffe shop a couple of days
				a week and spend time with my laptop,
				<br /> It could be thinking about new projects, designing them, or
				coding them.
				<br />
				<br />I also like content creation and post things that I do in my life,
				sometimes I code on stream and other <br /> times I do surveys to engage
				my followers to help me decide things for my projects. You can check out
				<br />
				my socials, I don’t have anything to hide!
			</p>

			<div className='about__socials'>
				<a
					href='https://instagram.com/nachomglz'
					target='_blank'
					rel='noreferrer'
					className='about__socials-social'
				>
					<Image height={25} width={25} src={InstagramIcon} alt='image' />
				</a>
				<a
					href='https://github.com/nachomglz'
					target='_blank'
					className='about__socials-social'
					rel='noreferrer'
				>
					<Image height={25} width={25} src={GitHubIcon} alt='image' />
				</a>
				<a
					href='https://linkedin.com/in/ignaciomglz'
					target='_blank'
					rel='noreferrer'
					className='about__socials-social'
				>
					<Image height={25} width={25} src={LinkedinIcon} alt='image' />
				</a>
				<a
					href='https://twitch.tv/nachetemartin'
					target='_blank'
					rel='noreferrer'
					className='about__socials-social'
				>
					<Image height={25} width={25} src={TwitchIcon} alt='image' />
				</a>
				<a className='about__socials-social'>
					<Image height={25} width={25} src={YoutubeIcon} alt='image' />
				</a>
			</div>
		</section>
	);
};

export default About;
