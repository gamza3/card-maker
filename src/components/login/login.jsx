import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';

const Login = ({authService}) => {

    const onLogin = (event) => {
        authService //
            .login(event.currentTarget.textContent)
            .then(console.log());
    }

    return (
        <section className={styles.login__wrapper}>
            <Header/>
            <section className={styles.login__section}>
                <h1>Login</h1>
                <ul className={styles.buttons}>
                    <li><button onClick={onLogin}>Google</button></li>
                    <li><button onClick={onLogin}>Github</button></li>
                </ul>
            </section>
            <Footer/>
        </section>
    );
};

export default Login;