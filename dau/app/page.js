import Image from "next/image";

export default function Home() {
  return (
    <nav className="flex flex-row justify-between h-24">
        <div className="flex items-center">
          <a href="#" class="logo">
            <Image src="../public/images/primary_logo.svg" alt="logo" width="100" height="100" />
          </a>
        </div>
        <div className="flex items-center">
          <a href="../about/about.html">ABOUT</a>
          <a href="#">EVENTS</a>
          <a href="#">RESOURCES</a>
          <a href="#">CONTACT</a>
          <a href="#">JOIN</a>
        </div>
    </nav>
  );
}
