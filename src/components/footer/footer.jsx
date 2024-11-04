import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const{ t } = useTranslation();
    return (
        <>
            <div className="footer">
                <div className="footer-text">
                    <p> {t('footer:text')} <a href="https://github.com/williamjesussierracordova" target="_blank" rel="noopener noreferrer" className="link">William Sierra</a>  </p>
                </div>
                <div className="footer-social">
                    <a href="https://github.com/williamjesussierracordova" target="_blank" rel="noopener noreferrer" className="github_footer">
                        <FaGithub />
                    </a>
                    <a href="mailto:williamjsc@hotmail.com" className="mail_footer">
                        <FaMailBulk />
                    </a>
                    <a href="https://www.linkedin.com/in/william-jesus-sierra-cordova-65580128a/" target="_blank" rel="noopener noreferrer" className="linkedin_footer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;