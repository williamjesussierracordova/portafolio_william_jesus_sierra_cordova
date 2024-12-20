import './information.css';
import { TbWorld } from "react-icons/tb";
import { TbFileCv } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const information = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <div className='information'>
                {/* 70% sera de la parte izquierda y 30% de la parte izquierda */}
                <div className='information__left'>
                    <h1 className='tittle'>William Jesus Sierra Cordova</h1>
                    <p className='slogan'>
                        {t('information:slogan')}
                    </p>
                    <p className='ubication'>
                       <TbWorld color='black'/> 
                       <a className='slogan' href='https://maps.app.goo.gl/GbRRa25zAzmM55tz8'>Lima, Perú</a>
                    </p>
                    <div className='iconos'>
                        <a className='icono' href='mailto:williamjsc@hotmail.com'>
                            <IoMdMail style={{color:'black'}}/>
                        </a>
                        <a className='icono' href='https://github.com/williamjesussierracordova' target='_blank'>
                            <FaGithub style={{color:'black'}}/>
                        </a>
                        <a className='icono' href='https://www.linkedin.com/in/william-jesus-sierra-cordova-65580128a/' target='_blank'>
                            <FaLinkedin style={{color:'black'}}/>
                        </a>
                        {/* descargar curriculum */}
                        <a className='icono' href='/assets/CV_WILLIAM_JESUS_SIERRA_CORDOVA.pdf' target="_blank" rel="noopener noreferrer">
                            <TbFileCv style={{ color: 'black' }} />
                        </a>
                    </div>
                </div>
                <span className='information__right'>
                    <img className='foto' src="/assets/portfolio_2024.JPG"  alt='William Jesus Sierra Cordova' style={{width:'170px'}}/>
                </span>
            </div>
        </>
    );
}

export default information;