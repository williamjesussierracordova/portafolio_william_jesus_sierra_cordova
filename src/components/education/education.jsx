import './education.css';
import { useTranslation } from 'react-i18next';

const education = () => {

    const { t } = useTranslation();

    return (
        <>
            <div className='education'>
                <h1 className='tittle'>{t('educacion:tittle')}</h1>
                <div className='education_section'>
                    <span className='education__header'>
                        <p style={{color:'black'}}>{t('educacion:universidad')}</p>
                        <p>{t('educacion:fecha1')}</p>
                    </span>
                    <span className='education__course'>
                        <p>{t('educacion:carrera')}</p>
                    </span>
                    <span className='education__course'>
                        <p>{t('educacion:segmento')}</p>
                    </span>
                </div>
                <div className='education_section'>
                    <span className='education__header'>
                        <p style={{color:'black'}}>{t('educacion:universidad')}</p>
                        <p>{t('educacion:fecha2')}</p>
                    </span>
                    <span className='education__course'>
                        <p>{t('educacion:ingles')}</p>
                    </span>
                </div>
            </div>
        </>
    );
}

export default education;