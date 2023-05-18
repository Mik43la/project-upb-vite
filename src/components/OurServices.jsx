import Service from "./Service";
import Title from "./Title";
import {services} from '../data/data';

export const OurServices = () => {
    return (
        <section className="section services" id = 'services'>
            <Title title= 'Nuestros Servicios en la UPB' subTitle=""></Title>

            <div className="section-center services-center">
                {services.map((service) => {
                    return<Service {...service} key={service.id}/>
                })}
            </div>
        </section>

        
       

    );
};
export default OurServices;