import { useHistory } from 'react-router-dom';

const Login = ({
    history
}) => {
    // useHistory дава достъп до копие на историята, което може да се използва за навигация.
    let historyHook = useHistory();

    // при логин ни връща на начална страница
    const onFormSubmit = (e) => {
        e.preventDefault();
        history.push('/')
    };
    
    return (
        <section id="login-page" className="auth">
  {/*    закачаме submit  функцията на формата */}
            <form id="login" onSubmit={onFormSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="name@email.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" placeholder="your password"/>
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>For Registration click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}

export default Login;
