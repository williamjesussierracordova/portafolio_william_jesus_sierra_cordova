import './skills.css';
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";
import { FaJira } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { SiPowerbi } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiGooglecolab } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { useTranslation } from 'react-i18next';


const skills = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className='skills'>
                <h1 className='tittle'>{t('skills:tittle')}</h1>
                <div className='skills_section'>
                    <p className='skills__header'>{t('skills:lenguajes')}</p>
                    <div className='skills__list'>
                        <p className='tag'>
                            <FaPython />&nbsp;Python
                        </p>
                        <p className='tag'>
                            <FaJava />&nbsp;Java
                        </p>
                        <p className='tag'>
                            <SiCplusplus />&nbsp;C++
                        </p>
                        <p className='tag'>
                            <SiCsharp />&nbsp;C#
                        </p>
                    </div>
                </div>
                <div className='skills_section'>
                    <p className='skills__header'>{t('skills:desarrollo')}</p>
                    <div className='skills__list'>
                        <p className='tag'>
                            <FaReact />&nbsp;React
                        </p>
                        <p className='tag'>
                            <FaHtml5 />&nbsp;HTML
                        </p>
                        <p className='tag'>
                            <FaCss3Alt />&nbsp;CSS
                        </p>
                        <p className='tag'>
                            <IoLogoJavascript />&nbsp;JavaScript
                        </p>
                        <p className='tag'>
                            <FaNodeJs />&nbsp;Node.js
                        </p>
                    </div>
                </div>
                <div className='skills_section'>
                    <p className='skills__header'>{t('skills:gestores')}</p>
                    <div className='skills__list'>
                        <p className='tag'>
                            <GrOracle />&nbsp;Oracle PL/SQL
                        </p>
                        <p className='tag'>
                            <GrMysql />&nbsp;MySQL
                        </p>
                        <p className='tag'>
                            <SiPostgresql />&nbsp;PostgreSQL
                        </p>
                        <p className='tag'>
                            <DiMsqlServer />&nbsp;SQL Server
                        </p>
                        <p className='tag'>
                            <IoLogoFirebase />&nbsp;Firebase
                        </p>
                    </div>
                </div>
                <div className='skills_section'>
                    <p className='skills__header'>{t('skills:software')}</p>
                    <div className='skills__list'>
                        <p className='tag'>
                            <FaGithub />&nbsp;GitHub
                        </p>
                        <p className='tag'>
                            <FaGitlab />&nbsp;GitLab
                        </p>
                        <p className='tag'>
                            <FaGitAlt />&nbsp;Git
                        </p>
                    </div>
                </div>
                <div className='skills_section'>
                    <p className='skills__header'>{t('skills:planning')}</p>
                    <div className='skills__list'>
                        <p className='tag'>
                            <FaTrello />&nbsp;Trello
                        </p>
                        <p className='tag'>
                            <FaJira />&nbsp;Jira
                        </p>
                    </div>
                </div>
                <div className='skills_section'>
                    <p className='skills__header'>{t('skills:otros')}</p>
                    <div className='skills__list'>
                        <p className='tag'>
                            <PiMicrosoftExcelLogoFill />&nbsp;Excel
                        </p>
                        <p className='tag'>
                            <SiPowerbi />&nbsp;Power BI
                        </p>
                        <p className='tag'>
                            <SiPandas />&nbsp;Pandas
                        </p>
                        <p className='tag'>
                            <SiNumpy />&nbsp;Numpy
                        </p>
                        <p className='tag'>
                            <SiGooglecolab />&nbsp;Google Colab
                        </p>
                        <p className='tag'>
                            <SiJupyter />&nbsp;Jupyter
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default skills;