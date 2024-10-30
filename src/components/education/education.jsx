import './education.css';

const education = () => {
    return (
        <>
            <div className='education'>
                <h1 className='tittle'>Educación</h1>
                <div className='education_section'>
                    <span className='education__header'>
                        <p style={{color:'black'}}>Universidad San Ignacio de Loyola</p>
                        <p>2021-actualidad</p>
                    </span>
                    <span className='education__course'>
                        <p>Carrera profesional de Ingenieria de Software</p>
                    </span>
                    <span className='education__course'>
                        <p>Segmento academico - Quinto superior</p>
                    </span>
                </div>
                <div className='education_section'>
                    <span className='education__header'>
                        <p style={{color:'black'}}>Universidad San Ignacio de Loyola</p>
                        <p>2021-2024</p>
                    </span>
                    <span className='education__course'>
                        <p>Ingles - nivel intermedio</p>
                    </span>
                </div>
            </div>
        </>
    );
}

export default education;