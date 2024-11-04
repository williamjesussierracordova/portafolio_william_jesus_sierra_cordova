// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        information:{
          "slogan":"Apasionado por las nuevas tecnologías y el desarrollo de soluciones innovadoras, combinando el análisis de datos y la programación para crear proyectos con impacto real."
        },
        about:{
          "tittle":"Sobre mi",
          "paragraph":"He co-creado y desarrollado varios proyectos tecnológicos, desde aplicaciones de aprendizaje automático hasta plataformas web, enfocándome en brindar soluciones innovadoras. Con experiencia en análisis de datos y desarrollo de aplicaciones web utilizando tecnologías como React, Node.js, Firebase y Python, he creado proyectos como una aplicación web de detección de cáncer de mama utilizando redes neuronales convolucionales con una precisión de 0.93. Continúo ampliando mi conocimiento a través de la investigación sobre clasificación socioeconómica utilizando aprendizaje automático y explorando nuevos desafíos en el panorama del desarrollo de software. Puedes encontrar mis proyectos en mi"
        },
        educacion:{
          "tittle":"Educación",
          "universidad":"Universidad San Ignacio de Loyola",
          "carrera":"Carrera profesional de Ingenieria de Software",
          "segmento":"Segmento academico - Quinto superior",
          "ingles":"Ingles - nivel intermedio",
          "fecha1":"2021-actualidad", 
          "fecha2":"2021-2024"
        },
        certificaciones:{
          "tittle":"Certificaciones",
          "verCertificado":"Ver certificado"
        },
        skills:{
          "tittle":"Skills",
          "lenguajes":"Lenguajes de programación",
          "desarrollo":"Desarrollo web",
          "gestores":"Gestores de bases de datos",
          "software":"Software para el control de versiones",
          "planning":"Software planning",
          "otros":"Otros Softwares"
        },
        proyectos:{
          "tittle":"Proyectos",
        },
        footer:{
          "text":"Desarrollado por"
        }
      },
      en: {
        information:{
          "slogan":"Passionate about new technologies and the development of innovative solutions, combining data analysis and programming to create projects with real impact."
        },
        about:{
          "tittle":"About me",
          "paragraph":"I have co-created and developed several technological projects, from machine learning applications to web platforms, focusing on providing innovative solutions. With experience in data analysis and web application development using technologies such as React, Node.js, Firebase, and Python, I have created projects such as a web application for breast cancer detection using convolutional neural networks with an accuracy of 0.93. I continue to expand my knowledge through research on socioeconomic classification using machine learning and exploring new challenges in the software development landscape. You can find my projects on my"	
        },
        educacion:{
          "tittle":"Education",
          "universidad":"Universidad San Ignacio de Loyola",
          "carrera":"Software Engineering professional career",
          "segmento":"Academic segment - Fifth upper",
          "ingles":"English - intermediate level",
          "fecha1":"2021-present", 
          "fecha2":"2021-2024"
        },
        certificaciones:{
          "tittle":"Certifications",
          "verCertificado":"View certificate"
        },
        skills:{
          "tittle":"Skills",
          "lenguajes":"Programming languages",
          "desarrollo":"Web development",
          "gestores":"Database managers",
          "software":"Version control software",
          "planning":"Software planning",
          "otros":"Other Softwares"
        },
        proyectos:{
          "tittle":"Projects",
        },
        footer:{
          "text":"Developed by"
        }
      }
    },
    lng: "es", // idioma por defecto
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;



export const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
};