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
    .then(res => res.json())
    .then(json => {
      //debugger;
      this.setState({
        items    :   json,
        isLoaded :   true,
      })
    });
   
  }

  filterCats = () =>{
    var maleCats = [];
    var femaleCats = [];
    this.state.items.map((person)=>{
      person.pets && person.pets.map((pet)=>{
        if(pet.type == "Cat"){
            if(person.gender == "Male")
                maleCats.push(pet.name);
            else
                femaleCats.push(pet.name);
        }
      });
    });
    return ({maleCats, femaleCats});
  }

  renderCats = (filteredCats) =>{
    return filteredCats.sort().map((cat)=>{
      return(<li>{cat}</li>);
    });
  }

  render(){
    var {isLoaded, items} = this.state;
    if(!isLoaded){
      return <div>Loading...</div>
    }
    else{
      var filteredCats = this.filterCats();
      return (
        <div>
        <p> Male </p>
          {this.renderCats(filteredCats.maleCats)}
        <p> Female</p>
          {this.renderCats(filteredCats.femaleCats)}
         
        </div>
      )
    }

  }
}

export default App;