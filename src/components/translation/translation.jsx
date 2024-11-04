import { MdTranslate } from "react-icons/md";
import './translation.css';
import { useTranslation } from 'react-i18next';


const TranslationButton = () => {
  const { t, i18n } = useTranslation();

  const handleTranslation = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
};

  return (
    <button
      onClick={handleTranslation}
      className="translation-button"
    >
      <MdTranslate className="globe-icon" />
    </button>
  );
};

export default TranslationButton;