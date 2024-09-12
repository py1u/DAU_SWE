import Image from 'next/image';
import Logo from "../public/images/primary_logo.svg";
import SecondaryLogo from "../public/images/secondary_logo.svg";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen bg-[url('../public/images/bg.png')] bg-cover bg-bottom bg-center bg-no-repeat">
        <nav className="flex flex-row justify-between h-24">
            <div className="flex items-center"> 
                <Image src={Logo} alt="DAU Logo" className="w-32 h-32"/>
            </div>
            <div className="flex items-center space-x-6 text-accent font-bold text-2xl">
              <a href="../about/about.html">ABOUT</a>
              <a href="#">EVENTS</a>
              <a href="#">RESOURCES</a>
              <a href="#">CONTACT</a>
              <a href="#">JOIN</a>
            </div>
        </nav>
        <section id="main" className="w-screen h-[90vh] flex justify-center items-center flex-col">
          <Image src={SecondaryLogo} alt="DAU Secondary Logo"/>
        </section>
      </div>
      <p>HIHIHII</p>
    </div>
  );
}
