import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded : false,
    }
  }

  componentDidMount(){
    const url="https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json";
    fetch(url)
    .then(res=> res.json())
    .then(json => { 
      this.setState({
        items    :   json,
        isLoaded :   true,
      })
    });
    
  }


   render(){
    var {isLoaded, items} = this.state;
    if(!isLoaded){
      return <div>Loading...</div>
    }
    else{
      return (
      <div>
          <b>MALE</b>
          <ul>
          {items.filter((e)=> e.gender === "Male" && e.pets != null).
          map((item)=>(item.pets.filter(e=>e.type ==="Cat").
          map(e=>(e.name))).sort().join("  ")).sort().join(" \n")}
          </ul>



             <b>Male</b> 
         {items.filter((e)=> e.gender === "Male" && e.pets != null).map((ee, index) => {
          return <p>{ee.pets.filter(e=>e.type ==="Cat").map((e)=> {
            return <li>{e.name}</li>
          })}</p>
         })}
      </div>   
      )
    }

  }
}

export default App;
