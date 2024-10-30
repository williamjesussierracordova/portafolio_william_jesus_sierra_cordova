import './information.css';
import { TbWorld } from "react-icons/tb";
import { TbFileCv } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const information = () => {
    return (
        <>
            <div className='information'>
                {/* 70% sera de la parte izquierda y 30% de la parte izquierda */}
                <div className='information__left'>
                    <h1 className='tittle'>William Jesus Sierra Cordova</h1>
                    <p className='slogan'>
                    Apasionado por las nuevas tecnologías y el desarrollo de soluciones innovadoras, combinando el análisis de datos y la programación para crear proyectos con impacto real.
                    </p>
                    <p className='ubication'>
                       <TbWorld color='black'/> 
                       <a className='slogan' href='https://maps.app.goo.gl/GbRRa25zAzmM55tz8'>Lima, Perú</a>
                    </p>
                    <div className='iconos'>
                        <a className='icono' href='mailto:williamjsc@hotmail.com'>
                            <IoMdMail style={{color:'black'}}/>
                        </a>
                        <a className='icono' href='https://github.com/williamjesussierracordova'>
                            <FaGithub style={{color:'black'}}/>
                        </a>
                        <a className='icono' href='www.linkedin.com/in/william-jesus-sierra-cordova-65580128a'>
                            <FaLinkedin style={{color:'black'}}/>
                        </a>
                        {/* descargar curriculum */}
                        <a className='icono' href='../../public/CV_WILLIAM_JESUS_SIERRA_CORDOVA.pdf' download='CV William Jesus Sierra Cordova'>
                            <TbFileCv style={{color:'black'}}/>
                        </a>
                    </div>
                </div>
                <span className='information__right'>
                    <img className='foto' src="../../public/imagen.png"  alt='William Jesus Sierra Cordova' />
                </span>
            </div>
        </>
    );
}

export default information;