import styles from './Footer.module.css'
import Logo from '../Logo/Logo';
import { IoChatbubblesSharp as ChatIcon, IoCall as CallIcon, IoMail as MailIcon, IoLogoGithub as GithubIcon  } from "react-icons/io5";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.about} aria-label='About Section'>
                <Logo dark={true} small={true} />
                <p>This is not a real store. This is the front-end of a hypothetical E-commerce app built in React for demonstration purposes only. Find the repository on <a href='https://github.com/Liam-JL/electronix-storefront'>GitHub</a></p>
            </div>

            <div className={styles.usefulLinks}>
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
            </div>
            
            <div className={styles.contactLinks}>
                <h2>Contact Us</h2>
                <ul>
                    <li>
                        <MailIcon />
                    </li>
                    <li>
                        <CallIcon />
                    </li>
                    <li>
                        <ChatIcon />
                    </li>
                    <li>
                        <GithubIcon />
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;