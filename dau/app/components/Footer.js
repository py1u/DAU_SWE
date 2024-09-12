import Image from 'next/image';
import FooterLogo from "../../public/images/dau_footer_logo.svg";
import CalendarIcon from "../../public/images/calendar-icon.svg";
import EmailIcon from "../../public/images/email-icon.svg";
import FacebookIcon from "../../public/images/facebook-icon.svg";
import InstagramIcon from "../../public/images/instagram-icon.svg";
import LinkedInIcon from "../../public/images/linkedin-icon.svg";
import SlackIcon from "../../public/images/slack-icon.svg";
import SpotifyIcon from "../../public/images/spotify-icon.svg";

const Footer = () => {
    return (
        <footer className="bg-[#78A38B] w-screen h-28 flex flex-row justify-between">
            <div className="flex flex-col items-start justify-center max-h-full text-white font-bold ml-4">
                <Image src={FooterLogo} alt="Footer Logo" style={{height: '40%'}}/>
                <p className="my-0 h-1/3 text-2xl">Keep in Touch!</p>
            </div>
            <div className="flex items-center">
                <a href="#"><Image src={SlackIcon} alt="Slack Icon" /></a>
                <a href="#"><Image src={InstagramIcon} alt="Instagram Icon" /></a>
                <a href="#"><Image src={LinkedInIcon} alt="LinkedIn Icon" /></a>
                <a href="#"><Image src={SpotifyIcon} alt="Spotify Icon" /></a>
                <a href="#"><Image src={EmailIcon} alt="Email Icon" /></a>
                <a href="#"><Image src={CalendarIcon} alt="Calendar Icon" /></a>
                <a href="#"><Image src={FacebookIcon} alt="Facebook Icon" /></a>
            </div>
        </footer>
    );
}

export default Footer;