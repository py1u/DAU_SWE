import Image from 'next/image';
import PrimaryLogo from "../../public/primary_logo.svg";
import SecondaryLogo from "../../public/secondary_logo.svg";

export default function Login() {
    return(
        <div className="bg-white flex flex-col items-center">
            <Image src={PrimaryLogo}/>
                <Image className="-mt-80 mb-30" src={SecondaryLogo}/>
                <header class="w-96 h-20 rounded-t-2xl bg-teal-950 flex justify-center items-center"><p>Sign In</p></header>
                <section class="log-in-container">
                    <div>
                            <label for="email">email</label>
                            <input type="text" id="email" placeholder="johndoe@gmail.com"/>
                    </div>
                    <div>
                        <label for="password">password</label>
                        <input type="password" id="password" placeholder="password"/>
                    </div>
                    <span id="divider">
                        <hr class="solid"/>
                        OR
                        <hr class="solid"/>
                    </span>
                    <button>create an account</button>
                </section>

        </div>
    );
}