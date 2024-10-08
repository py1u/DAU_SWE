import Image from 'next/image';
import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import AlumniMember from "../components/AlumniMember.js";
import GroupPicture from "../../public/images/group_picture.png";
export default function Alumni(){
    return(

        <div className="bg-[url('../public/images/alumni_bg.png')] w-full min-h-screen bg-cover bg-bottom bg-no-repeat flex flex-col justify-between">
            <Nav />
            <h1 className="text-[#D45454] text-7xl font-semibold px-12">Alumni Contacts</h1>
            <p className="text-[#431D01] text-4xl font-semibold px-12 pb-10">Keep up with our alumni!</p>
            <section className="flex flex-row flex-wrap justify-center">
                <AlumniMember name="Name" year="0000"/>       
                <AlumniMember name="Name" year="0000"/>   
                <AlumniMember name="Name" year="0000"/>   
                <AlumniMember name="Name" year="0000"/>   
                <AlumniMember name="Name" year="0000"/>   
                <AlumniMember name="Name" year="0000"/>   
                <AlumniMember name="Name" year="0000"/>   
                <AlumniMember name="Name" year="0000"/>        

            </section>
            <div className="h-80"></div>
            <div className="h-80"></div>
            <Footer />
        </div>
    )
}