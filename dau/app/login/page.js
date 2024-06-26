import Image from 'next/image';
import PrimaryLogo from "../../public/primary_logo.svg";
import SecondaryLogo from "../../public/secondary_logo.svg";

export default function Login() {
    return(
        <div>
            <Image class="w-100" src={PrimaryLogo}/>
                <Image class="w-100" src={SecondaryLogo}/>
                <header class="container-header"><p>Sign In</p></header>
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