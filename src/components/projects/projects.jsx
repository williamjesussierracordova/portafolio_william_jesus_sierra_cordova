import './projects.css';
import { Grid, Card, Text, Badge, Container, Title, Button } from '@mantine/core';
import { FaGithub } from 'react-icons/fa';


const Projects = () => {
    
    const projects = [ 
        {
            title:'Breast cancer detection',
            description:'Una API de Flask para la detección de cáncer de mama - IDC (carcinoma ductal invasivo) utilizando deep learning.',
            description_en:'A Flask API for breast cancer - IDC (Invasive ductal carcinoma) detection using deep learning.',
            technologies: ['Python', 'Flask', 'Tensorflow', 'Keras', 'Scikit-learn','Numpy', 'Matplotlib', 'Seaborn','PIL'],
            href: 'https://github.com/williamjesussierracordova/prediction_breast_cancer'
        },
        {
            title:'API compare images',
            description:'API para comparar dos imágenes y devolver una imagen con las diferencias donde el color blanco representa la diferencia y el color negro representa las áreas similares.',
            description_en:'API to compare two images and return an image with the differences where the white color represents the difference and the black color represents the similar areas.',
            technologies: ['Python', 'Flask', 'cv2', 'Numpy', 'PIL'],
            href: 'https://github.com/williamjesussierracordova/api_compare_images'
        },
        {
            title:'Classification of virusses',
            description:'Una API de Flask para la clasificación de virus utilizando deep learning. Los virus incluidos en este trabajo son la influenza, el dengue, la hepatitis, el MERS y el SARS.',
            description_en:'A Flask API for virus classification using deep learning. The viruses included in this work are influenza, dengue, hepatitis, MERS, and SARS.',
            technologies: ['Python', 'Flask', 'Tensorflow', 'Keras', 'Scikit-learn','Numpy','Pandas','Biopython'],
            href: 'https://github.com/williamjesussierracordova/classification_viruses'
        },
        {
            title:'Ticketing System',
            description:'Un sistema de tickets para una empresa que brinda servicios a sus clientes. El sistema permite a la empresa gestionar los tickets y a los clientes crear tickets.',
            description_en:'A ticketing system for a company that provides services to its clients. The system allows the company to manage the tickets and the clients to create tickets.',
            technologies: ['HTML','CSS','Javascript','React','Firebase','Izipay','Mantine-UI'],
            href: 'https://github.com/williamjesussierracordova/sistema_ticketing'
        },
        {
            title:'Planet Miller Timer',
            description:'Este es un proyecto personal que muestra el paso del tiempo tanto en la Tierra como en el planeta de Miller de la película Interstellar desde su fecha de estreno. Al utilizar el concepto de dilatación del tiempo, la página web muestra dinámicamente el tiempo transcurrido en ambos lugares.',
            description_en:'This is a personal project that showcases the passage of time on both Earth and Miller`s planet from the movie Interstellar since its release date. By using the concept of time dilation, the web page dynamically displays the time that has elapsed in both locations. Explore this fascinating scientific concept through a real-time and engaging interface.',
            technologies: ['HTML','CSS','Javascript','React'],
            href: 'https://github.com/williamjesussierracordova/planet-miller-timer'
        },
    ];
    

    

    return (
        // <div className="projects">
        //     <h1 className='tittle'>Proyectos</h1>
        //     <Container size="xl" className="projects-container">
        //         <Grid gutter="md">
        //             {projects.map((project) => (
        //             <Grid.Col key={project.title} span={12} sm={6} lg={4}>
        //                 <Link to={project.href} className="project-link">
        //                 <Card className="project-card">
        //                     <div className="project-title">
        //                     <Text size="xl" weight={600}>{project.title}</Text>
        //                     <span className="status-dot"></span>
        //                     </div>
        //                     <Text color="dimmed" size="sm" className="project-description">
        //                         {project.description}
        //                     </Text>
        //                     <div className="project-technologies">
        //                     {project.technologies.map((tech) => (
        //                         <Badge key={tech} variant="light" className="tag">
        //                         {tech}
        //                         </Badge>
        //                     ))}
        //                     </div>
        //                 </Card>
        //                 </Link>
        //             </Grid.Col>
        //             ))}
        //         </Grid>
        //     </Container>
        // </div>
        <div className="projects">
            <h1 className="tittle">Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                <div href={project.href} key={project.title} className="project-card">
                    <Card className="project-card-wrapper">
                    <div className="project-card-content">
                        <div className="project-card-inner">
                        <div className="project-header">
                            <h2 className="project-title">{project.title}</h2>
                            <span className="project-status-indicator" />
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-technologies">
                            {project.technologies.map((tech) => (
                            <Badge
                                key={tech}
                                variant="secondary"
                                className="tag"
                            >
                                {tech}
                            </Badge>
                            ))}
                        </div>
                        <Button variant='filled'  radius="xl" className='button' onClick={() => window.open(project.href)}  color="black" >
                            <FaGithub/> Github
                        </Button>
                        </div>
                    </div>
                    </Card>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;