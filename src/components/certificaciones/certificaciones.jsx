import './certificaciones.css';
import { useTranslation } from 'react-i18next';

const Certificaciones = () => {

    const { t } = useTranslation();

    return (
        <>
            <div className='certificaciones'>
                <h1 className='tittle'>{t('certificaciones:tittle')}</h1>
                <div className='certificacion_section'>
                    <span className='certificacion__header'>
                        <p >Databases for Developers : Foundations</p>
                        <a href='/assets/classcertofexcellence (1).pdf' target="_blank" rel="noopener noreferrer" >{t('certificaciones:verCertificado')}</a>
                    </span>
                    <span className='certificacion__provider'>
                        <p>Oracle</p>
                    </span>
                </div>
                <div className='certificacion_section'>
                    <span className='certificacion__header'>
                        <p>Databases for Developers : Next Level</p>
                        <a href='/assets/classcertofexcellence.pdf' target="_blank" rel="noopener noreferrer">{t('certificaciones:verCertificado')}</a>
                    </span>
                    <span className='certificacion__provider'>
                        <p>Oracle</p>
                    </span>
                </div>
                <div className='certificacion_section'>
                    <span className='certificacion__header'>
                        <p>Python Essentials 1</p>
                        <a href='https://www.credly.com/badges/b1945bc2-db3a-4470-b213-fc4e0762feef/linked_in_profile'>{t('certificaciones:verCertificado')}</a>
                    </span>
                    <span className='certificacion__provider'>
                        <p>Cisco</p>
                    </span>
                </div>
                <div className='certificacion_section'>
                    <span className='certificacion__header'>
                        <p>Python Essentials 2</p>
                        <a href='https://www.credly.com/badges/a6ad40c9-2018-414b-b598-086d94012076/linked_in_profile'>{t('certificaciones:verCertificado')}</a>
                    </span>
                    <span className='certificacion__provider'>
                        <p>Cisco</p>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Certificaciones;