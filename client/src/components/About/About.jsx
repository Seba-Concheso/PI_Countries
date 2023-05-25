import Style from './About.module.css';
import imageReact from "../../assets/Logo_react.png";
import imageRedux from "../../assets/Logo_Redux.png";
import imageNode from "../../assets/Logo_nodejs.png";
import imageSequelize from "../../assets/sequelize-logo.png";
import imagePostgreSQL from "../../assets/Logo_Postgre.png";
import imageCSS from "../../assets/Logo_CSS.png";
import imageHTML from "../../assets/HTML5_logo_resized.svg.png";
import javascript from "../../assets/js.png";

const About = ()    => {



    return (
        <div className={Style.divgral}>
            <div className={Style.title}>
                <div>
                <h3 className={Style.h1}>Henry countries</h3>
                <h4 className={Style.h2}>Proyecto individual</h4>
                </div>
                <div className={Style.logo}>
                
                </div>


            </div>
                <p className={Style.h3}>Soy Sebastián Concheso, estudiante de Henry</p>
                <p className={Style.p}>Es una aplicación web que muestra información de países, además se pueden ver y crear actividades para realizar en ellos.</p>
                <p className={Style.p}>Tecnologías utilizadas: React, Redux, Node, Express, Sequelize, Javascript, PostgreSQL, CSS, HTML</p>
                <div className={Style.lenguajes}>
                    <img src={imageReact} alt='image1' className={Style.leng}/>
                    <img src={imageRedux} alt='image2'className={Style.leng}/>
                    <img src={imageNode} alt='image3'className={Style.leng}/>
                    <img src={imageSequelize} alt='image4'className={Style.leng2}/>
                    <img src={imagePostgreSQL} alt='image5'className={Style.leng2}/>
                    <img src={imageCSS} alt='image6'className={Style.leng}/>
                    <img src={imageHTML} alt='image7'className={Style.leng3}/>
                    <img src={javascript} alt='image8'className={Style.leng}/>

                    
                </div>
                <p className={Style.p}>Para ver el código fuente, visitar mi repositorio en GitHub</p>
           <div className={Style.footer}>
             
            <a href="https://github.com/Seba-Concheso" target="_blank" rel="noreferrer">   
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className={Style.img}/> 
            </a>
            <a href="https://www.linkedin.com/in/sebastian-concheso-83b095246/" target="_blank" rel="noreferrer"> 
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className={Style.img}/>
            </a>
       

           </div>
        </div>
    )
    
}

export default About;