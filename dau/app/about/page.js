import Image from 'next/image';
import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import BoardMember from "../components/BoardMember.js";
import GroupPicture from "../../public/images/group_picture.png";
export default function About(){
    return(
        // <div>
         <div className="bg-[url('../public/images/about_background.png')] w-screen min-h-screen bg-cover bg-bottom bg-no-repeat flex flex-col justify-between">
            <Nav />
                <h1 className="text-[#D45454] text-7xl font-semibold px-12 py-10">Meet the Board</h1>
                <section className="flex flex-row flex-wrap justify-center">
                    <BoardMember name="Name" position="Position"/>
                    <BoardMember name="Name" position="Position"/>
                    <BoardMember name="Name" position="Position"/>
                    <BoardMember name="Name" position="Position"/>
                    <BoardMember name="Name" position="Position"/>
                    <BoardMember name="Name" position="Position"/>
                    <BoardMember name="Name" position="Position"/>
                    <BoardMember name="Name" position="Position"/>
                </section>
                <Image src={GroupPicture} alt="Group Picture" className="m-auto"/>
                {/* <div className="h-screen"></div>
                <div className="h-screen"></div> */}
            <Footer />
        </div>
    )
}