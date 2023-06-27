import { Component } from 'react';
import logo from './logo.svg';

import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[
        {
          name:'linda'
        },
  
        {
          name:'Kakai'
        },
  
      {
          name:'ScaryMan'
        },
        {
          name:'Man'
        }
      ]
   
    }
  }
 
  render(){
    return (
      <div className="App">
      
       
        {
          this.state.monsters.map((monster)=>{
            return <h1>{monster.name}</h1>

          })
        }
        
      <button onClick={()=>{
        this.setState({
        //  name:{firstname:'Kwame',lastname:'pol'}
        })
    
        console.log(this.state)
      }}>Change Name</button>

      </div>
    );
  }
    
  }
  
  
  
 


export default App;
