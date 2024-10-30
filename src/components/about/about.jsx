import './about.css';
const About = () => {
    return (
        <div className='about'>
            <h1 className='tittle'>Sobre mi</h1>
            <p className="paragraph">
                He co-creado y desarrollado varios proyectos tecnológicos, desde aplicaciones de aprendizaje automático hasta plataformas web, enfocándome en brindar soluciones innovadoras. Con experiencia en análisis de datos y desarrollo de aplicaciones web utilizando tecnologías como React, Node.js, Firebase y Python, he creado proyectos como una aplicación web de detección de cáncer de mama utilizando redes neuronales convolucionales con una precisión de 0.93. Continúo ampliando mi conocimiento a través de la investigación sobre clasificación socioeconómica utilizando aprendizaje automático y explorando nuevos desafíos en el panorama del desarrollo de software. Puedes encontrar mis proyectos en mi <a href="https://github.com/williamjesussierracordova" target="_blank" rel="noopener noreferrer" className="link">Github</a>.
            </p>
        </div>
    );
};

export default About;