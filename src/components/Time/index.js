import ColaboradorCard from '../ColaboradorCard';
import './Time.css'

export default function Time(props) {

    
    return (
        (props.listColaboradores.length > 0) && ( <section className='time' style={{backgroundColor: props.time.colorSec}}>
                <h3 style={{borderBottomColor: props.time.colorPrim}}>{props.time.title}</h3>
                <div className='colaboradores'>
                    {props.listColaboradores.map(colaborador => 
                        <ColaboradorCard 
                            key={colaborador.name}
                            colorPrim={props.time.colorPrim} 
                            name={colaborador.name} 
                            cargo={colaborador.cargo}
                            image={colaborador.image}
                        />
                    )}
                </div>
            </section>
        )
    );
}