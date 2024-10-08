import Button from "../components/Button.js";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
export default function Designverse(){
    return(
        <div>
            <div className="bg-[url('../public/images/designverse-bg.png')] w-full min-h-screen bg-cover bg-bottom bg-no-repeat flex flex-col justify-between">
                <Nav />
                <h1 className="font-extrabold text-[#4D8F7B] text-7xl">What is <span className="text-[#0D755C]">DesignVerse?</span></h1>
                <div className="w-[884px] h-80 bg-white bg-opacity-70 rounded-[50px] flex items-center justify-center">
                    <p className="text-[#175E4D] text-xl w-[768px]">
                        <span className="text-[#175E4D] font-bold">DesignVerse</span> is the first ever <span className="text-[#175E4D] font-bold">24-hour beginner-friendly Design-a-Thon</span> hosted by the <span className="text-[#175E4D] font-bold">University of California, Riverside</span>. Designers are challenged to create the interface of an app or website through a given prompt, which would then be presented to a panel of industry professionals.
                        <br/><br/>
                        Our goal is to <span className="text-[#175E4D] font-bold">empower</span> students who are interested in design-like thinking and provide career developmental opportunities through workshops, mentorship, and networking events.
                    </p>
                </div>
                <div className="flex flex-row">
                    <Button text="Sign Up" bg="bg-[#659379]" shadow="shadow-button-shadow"></Button>
                    <Button text="Learn More" bg="bg-[#EFB7A4]" shadow="shadow-button-shadow"></Button>
                </div>

                <div className="h-96"></div>
                
            </div>
            <Footer />
        </div>
    )
}
