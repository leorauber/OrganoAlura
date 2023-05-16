import './ColaboradorCard.css'

export default function ColaboradorCard({colorPrim , name, cargo, image}) {

    
    return(
        <div className='colaborador-card'>
            <div className='cabecalho' style={{backgroundColor: colorPrim}}>
                <img src={image ? image : 'https://i.imgur.com/Eyzrkg3b.jpg'} alt={name} />
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
}