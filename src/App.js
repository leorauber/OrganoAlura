import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react'
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {
  const times = [
    {title: 'Programação', colorPrim:'#57c278', colorSec:'#D9F7E9'},
    {title: 'Front-End', colorPrim:'#82cffa', colorSec:'#E8F8FF'},
    {title: 'Data Science', colorPrim:'#A6d157', colorSec:'#F0F8E2'},
    {title: 'Devops', colorPrim:'#e06b69', colorSec:'#FDE7E8'},
    {title: 'UX e Design', colorPrim:'#DB6ebf', colorSec:'#FAE9F5'},
    {title: 'Mobile', colorPrim:'#FFBA05', colorSec:'#FFF5D9'},
    {title: 'Inovação e Gestão', colorPrim:'#FF8A29', colorSec:'#FFEEDF'}
  ];
  const [colaboradores, setColaboradores] = useState([]);

  function onNewColabAdd(colaborador){
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Form onColaboradorCriado={colaborador => onNewColabAdd(colaborador)} times={times.map(time => time.title)}/>
      {times.map(time => {
        return (
          <Time 
            time={time} 
            key={time.title} 
            listColaboradores={colaboradores.filter(colaborador => colaborador.time === time.title)}
          />
        );
      })}
      <Rodape />
    </div>
  );
}

export default App;
