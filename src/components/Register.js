const Register = () => {
    return (
        <section id="register-page" className="content auth">
            <form id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="name@email.com" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" placeholder="your password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="your password"/>

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>For Login click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}

export default Register;