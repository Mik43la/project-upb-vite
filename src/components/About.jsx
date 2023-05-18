import lmao from "../images/about.jpeg"
import Title from "./Title";


const About = () => {
    return (

    <section className="section" id="about">
        <Title title= 'Sobre' subtitle="Nosotros"></Title>

        <div className="section-center about-center">
            <div className="about-img">
            <img
                src={lmao}
                className="about-photo"
                alt="awesome beach"
            />
            </div>
            <article className="about-info">
            <h3>Garantía de Excelencia</h3>
            <p>
            La Universidad Privada Boliviana (UPB) es una reconocida institución de educación superior ubicada en Bolivia. 
            Fundada en 1993, la UPB se destaca por su excelencia académica, 
            su enfoque en la formación integral de sus estudiantes y su compromiso con la innovación y el desarrollo del país.

            </p>
            <p>
            La UPB ofrece una amplia gama de programas de pregrado y posgrado en áreas como ingeniería, 
            ciencias económicas y empresariales, derecho, ciencias de la salud y ciencias sociales. 
            Sus programas académicos están diseñados para proporcionar a los estudiantes una sólida base teórica y práctica, 
            así como para fomentar habilidades de liderazgo, pensamiento crítico y espíritu emprendedor.

            </p>
            <a href="#" className="btn">Leer más</a>
            </article>
        </div>
        </section>

);

};
export default About;
