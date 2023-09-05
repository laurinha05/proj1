import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component{
  state={

    estudantes:[
      {
        matricula:1,
        nome:'Sara dos Santos Paredes',
        curso:'Téc. Informática para internet',
        turma:'6D'
      },
      {
        matricula:2,
        nome:'Laura Honorato Oliveira',
        curso:'Téc. Informática para internet',
        turma:'6D'
      },
      {
        matricula:3,
        nome:'Emilly Palhano Garcia',
        curso:'Téc. Informática para internet',
        turma:'6D'
      },
    ]

  }

  render(){
    const {estudantes} = this.state;
    return(
      <div>
         {estudantes.map(post => (
         <div key={post.matricula}>
         <h1>{post.nome}</h1>
         <p>{post.curso}</p> 
         <p>{post.turma}</p> 
         </div>
         ))}
      </div>
    );
  }
}

export default App;
