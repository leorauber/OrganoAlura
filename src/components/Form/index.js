import Button from '../Button';
import CampoTexto from '../CampoTexto'
import SelectList from '../SelectList';
import './Form.css'
import {useState} from 'react'

export default function Form(props) {
  
    const [name, setName] = useState('');
    const [cargo, setCargo] = useState('');
    const [image, setImage] = useState('');
    const [time, setTime] = useState('');

    function CreateCard(e){
        e.preventDefault();
        props.onColaboradorCriado({
            name,cargo,image,time
        })
        setName('');
        setCargo('');
        setImage('');
        setTime('');
    }
    return (
        <section className='form'>
            <form onSubmit={CreateCard}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto valor={name} onChange={valor => setName(valor)} required={true} label='Nome' placeholder='Digite seu nome' />
                <CampoTexto valor={cargo} onChange={valor => setCargo(valor)} required={true} label='Cargo' placeholder='Digite seu cargo' />
                <CampoTexto valor={image} onChange={valor => setImage(valor)} required={false} label='Imagem' placeholder='Informar o endereço da imagem' />

                <SelectList valor={time} onChange={valor => setTime(valor)} required={true} times={props.times} label='Time'/>
                <Button text='Criar Card'/>
            </form>
        </section>
    );
}