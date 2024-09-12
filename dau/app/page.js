import Image from 'next/image';
import SecondaryLogo from "../public/images/secondary_logo.svg";
import Nav from "./components/Nav.js";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen bg-[url('../public/images/bg.png')] bg-cover bg-bottom bg-no-repeat">
        <Nav />
        <section className="w-screen h-[90vh] flex justify-center items-center flex-col">
          <Image src={SecondaryLogo} alt="DAU Secondary Logo"/>
          <p className="text-mission">
            Empowering students interested in <span >UI/UX design</span><br/>
            at the University of California, Riverside
          </p>

          <div className="flex flex-row">
            <button>SIGN UP</button>
            <button>LEARN MORE</button>
          </div>
        </section>
      </div>
      <p>HIHIHII</p>
    </div>
  );
}
