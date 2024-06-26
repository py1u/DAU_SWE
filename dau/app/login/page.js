export default function Login() {
    return(
        <div>
            <img class="primary-logo" src="../media/images/primary_logo.svg"/>
                <img class="secondary-logo" src="../media/images/secondary_logo.svg"/>
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