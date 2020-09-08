import React, { Component } from 'react';
import './App.css';
//import Validation from './Validation/Validation';
import Char from './Char/Char';
//import Person from './Person/Person';

class App extends Component {
  state = {
    userInput: ""
  }
  inputChangeHandeler = (event)=> {
    this.setState({userInput: event.target.value});
  }
  deleteCharHandler = ( index ) =>{
const text =this.state.userInput.split('');
text.splice(index ,1);
const updatedText = text.join('');
this.setState({userInput: updatedText});
}

removeItem(index) {
  const list = this.state.list;

  list.splice(index, 1);
  this.setState({ list });
}
  render(){    
    const charList = this.state.userInput.split('').map((ch, index)=>{
      return <Char 
      character={ch}
      key={index}
      clicked = {() =>this.deleteCharHandler(index)}/>;
    });
  return (
    <div className="App">
      <ol>
           <li>Hello</li>
           <li>ganesh</li>
           <li>medge</li>
      </ol>
         <input type="text"
          onChange={this.inputChangeHandeler}
          value={this.state.userInput}/>
          <p>{this.state.userInput}</p>
          {charList}
    </div>
  );
}
}

export default App;
