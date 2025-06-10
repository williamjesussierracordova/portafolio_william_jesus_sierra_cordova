import './publications.css';
import { useTranslation } from 'react-i18next';

const publications = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className='publications'>
                <h1 className='tittle'>{t('publicaciones:tittle')}</h1>
                <div className='publications_section'>
                    <div className='publication'>
                        <p className='publication_title'>
{t('publicaciones:publicacion1.title')}</p>
                        <p className='publication_description'> {t('publicaciones:publicacion1.description')}</p>
                        <a className='publication_doi'>{t('publicaciones:publicacion1:doi')}</a>
                        <br />
                        <a href='https://dx.doi.org/10.54364/JAIAI.2024.1115' className='publication_link' target='_blank' rel='noopener noreferrer'>{t('publicaciones:publicacion1:link')}</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default publications;