import styles from './Footer.module.css'
import Logo from '../Logo/Logo';
import { IoChatbubblesSharp as ChatIcon, IoCall as CallIcon, IoMail as MailIcon, IoLogoGithub as GithubIcon  } from "react-icons/io5";

function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.about} aria-labelledby='footer-about'>
                <Logo dark={true} small={true} />
                <p id='footer-about'>This is not a real store. This is the front-end of a hypothetical E-commerce app built in React for demonstration purposes only. Find the repository on <a href='https://github.com/Liam-JL/electronix-storefront'>GitHub</a></p>
            </section>

            <section className={styles.usefulLinks}>
                <h2>Useful Links</h2>
                <ul>
                    <li>
                        <a href='#'>Return Policy</a>
                    </li>
                    <li>
                        <a href='#'>Shipping Information</a>
                    </li>
                    <li>
                        <a href='#'>FAQ</a>
                    </li>
                    <li>
                        <a href='https://dummyjson.com/'>DummyJSON</a>
                    </li>
                </ul>
            </section>
            
            <section className={styles.contactLinks}>
                <h2>Contact Us</h2>
                <ul>
                    <li>
                        <MailIcon />
                        <a href="mailto:someone@example.com">help@electronix.com</a>
                    </li>
                    <li>
                        <CallIcon />
                        <a href="tel:1234567">Call 123-4567</a>
                    </li>
                    <li>
                        <ChatIcon />
                        <a href='#'>Chat With Us</a>
                    </li>
                    <li>
                        <GithubIcon />
                        <a href='https://github.com/Liam-JL'>Liam Lirson on GitHub</a>
                    </li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;