import './about.css';
import { useTranslation } from 'react-i18next';

const About = () => {
    const {t} = useTranslation();

    return (
        <div className='about'>
            <h1 className='tittle'>{t('about:tittle')}</h1>
            <p className="paragraph">
                {t('about:paragraph')} <a href="https://github.com/williamjesussierracordova" target="_blank" rel="noopener noreferrer" className="link">Github</a>.
            </p>
        </div>
    );
};

export default About;