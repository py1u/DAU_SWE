import Image from 'next/image';
import LinkedinIcon from "../../public/images/member_linkedin_icon.svg";
import EmailIcon from "../../public/images/member_email_icon.svg";
const AlumniMember = ({name, year}) => {
    return(
        <div className="mx-20 my-8">
            <div className="w-64 h-64 bg-white rounded-2xl shadow-button-shadow"></div>
            <p className="text-[#431D01] text-4xl font-semibold mt-4">{name}</p>
            <p className="text-[#431D01] text-4xl">Class of {year}</p>
            <div className="flex flex-row">
                <Image src={LinkedinIcon} alt="LinkedIn Icon" className="w-10 h-10"/>
                <Image src={EmailIcon} alt="Email Icon" className="w-10 h-10"/>
            </div>
        </div>
    )
}

export default AlumniMember;