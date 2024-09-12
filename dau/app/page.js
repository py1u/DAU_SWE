import Image from 'next/image';
import SecondaryLogo from "../public/images/secondary_logo.svg";
import Nav from "./components/Nav.js";
import Button from "./components/Button.js";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen bg-[url('../public/images/bg.png')] bg-cover bg-bottom bg-no-repeat">
        <Nav />
        <section className="w-screen h-[90vh] flex justify-center items-center flex-col">
          <Image src={SecondaryLogo} alt="DAU Secondary Logo"/>
          <p className="text-mission text-4xl text-center font-medium my-10">
            Empowering students interested in <span className="text-[#64A587]">UI/UX design</span><br/>
            at the University of California, Riverside
          </p>

          <div className="flex flex-row">
            <Button text="SIGN UP" bg="bg-[#73AD8D]"/>
            <Button text="LEARN MORE" bg="bg-[#ED8261]"/>
          </div>
        </section>
      </div>
      <p>rest of content here</p>
    </div>
  );
}
