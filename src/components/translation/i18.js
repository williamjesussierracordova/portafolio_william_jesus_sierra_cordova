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
          "paragraph":"He co-creado y desarrollado varios proyectos tecnológicos, desde aplicaciones de aprendizaje automático hasta plataformas web, enfocándome en brindar soluciones innovadoras. Con experiencia en análisis de datos y desarrollo de aplicaciones web utilizando tecnologías como React, Node.js, Firebase y Python, he creado proyectos como una aplicación web de detección de cáncer de mama utilizando redes neuronales convolucionales con una precisión de 0.78. Continúo ampliando mi conocimiento a través de la investigación sobre clasificación socioeconómica utilizando aprendizaje automático y explorando nuevos desafíos en el panorama del desarrollo de software. Puedes encontrar mis proyectos en mi"
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
        publicaciones:{
          "tittle":"Publicaciones",
          publicacion1:{
            "title":"Aplicación de Redes Neuronales Convolucionales para la Clasificación de Carcinoma Ductal Invasivo en Imágenes Histopatológicas de Cáncer de Mama",
            "description":"El carcinoma ductal invasivo (IDC) es el tipo más común de cáncer de mama, representando aproximadamente el 80% de los casos. Un diagnóstico preciso y temprano del IDC es crítico para un tratamiento efectivo y una mejor tasa de supervivencia del paciente. Este estudio explora el uso de redes neuronales convolucionales (CNN) para la clasificación del IDC en imágenes histológicas del tejido mamario, con el objetivo de desarrollar un sistema de diagnóstico asistido por computadora (CAD) que pueda apoyar a los patólogos en la identificación de tejidos cancerosos. Utilizando un conjunto de datos público de 5,547 imágenes etiquetadas, redimensionadas a 50x50 píxeles para equilibrar la eficiencia computacional y la retención de características relevantes para el diagnóstico, entrenamos un modelo CNN optimizado para clasificación binaria (IDC vs. no-IDC). Los pasos de preprocesamiento incluyeron normalización de imágenes y balanceo de clases, con conjuntos de entrenamiento y validación divididos en una proporción 80:20. La arquitectura CNN utilizó tres capas convolucionales con normalización por lotes y max-pooling, una capa densa con activación ReLU y una capa final con activación sigmoide. El modelo logró una precisión del 78%, con precisión, recall y F1-scores todos en 0.78, y un área bajo la curva ROC (AUC) de 0.84, indicando una discriminación efectiva entre clases. Estos resultados sugieren que los modelos basados en CNN tienen potencial para ayudar en el diagnóstico del IDC, aunque se necesita más investigación para mejorar el rendimiento del modelo. El trabajo futuro se centrará en explorar arquitecturas avanzadas, aumento de datos y aprendizaje por transferencia para mejorar la sensibilidad y aplicabilidad clínica.",
            "doi":"DOI: 10.54364/JAIAI.2024.1115",
            "link":"Leer más"
          }
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
          "paragraph":"I have co-created and developed several technological projects, from machine learning applications to web platforms, focusing on providing innovative solutions. With experience in data analysis and web application development using technologies such as React, Node.js, Firebase, and Python, I have created projects such as a web application for breast cancer detection using convolutional neural networks with an accuracy of 0.78. I continue to expand my knowledge through research on socioeconomic classification using machine learning and exploring new challenges in the software development landscape. You can find my projects on my"	
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
        publicaciones:{
          "tittle":"Publications",
          publicacion1:{
            "title":"Application of Convolutional Neural Networks for Classifying Invasive Ductal Carcinoma in Breast Cancer Histopathological Images",
            "description":"Invasive ductal carcinoma (IDC) is the most common type of breast cancer, accounting for approximately 80% of cases. Accurate and early diagnosis of IDC is critical for effective treatment and improved patient survival rates. This study explores the use of convolutional neural networks (CNN) for the classification of IDC in histological breast tissue images, aiming to develop a computer-aided diagnostic (CAD) system that can support pathologists in identifying cancerous tissues. Using a public dataset of 5,547 labeled images, resized to 50x50 pixels to balance computational efficiency and the retention of diagnostically relevant features, we trained a CNN model optimized for binary classification (IDC vs. non-IDC). The preprocessing steps included image normalization and class balancing, with training and validation sets split in an 80:20 ratio. The CNN architecture utilized three convolutional layers with batch normalization and max-pooling, a dense layer with ReLU activation, and a final sigmoid-activated output layer. The model achieved an accuracy of 78%, with precision, recall, and F1-scores all at 0.78, and an area under the ROC curve (AUC) of 0.84, indicating effective discrimination between classes. These results suggest that CNN-based models hold promise for aiding in IDC diagnosis, although further research is needed to improve model performance. Future work will focus on exploring advanced architectures, data augmentation, and transfer learning to improve sensitivity and clinical applicability.",
            "doi":"DOI: 10.54364/JAIAI.2024.1115",
            "link":"Read more"
          }
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