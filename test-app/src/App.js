import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    catRegistration:[
      {
        "name": "Bob",
        "gender": "Male",
        "age": 23,
        "pets": [{"name": "Garfield", "type": "Cat"}, {"name": "Fido", "type": "Dog"}]
      },
      {"name": "Jennifer", "gender": "Female", "age": 18, "pets": [{"name": "Garfield", "type": "Cat"}]},
      {"name": "Steve", "gender": "Male", "age": 45, "pets": null},
      {
        "name": "Fred",
        "gender": "Male",
        "age": 40,
        "pets": [
          {"name": "Tom", "type": "Cat"},
          {"name": "Max", "type": "Cat"},
          {"name": "Sam", "type": "Dog"},
          {"name": "Jim", "type": "Cat"}
        ]
      },
      {"name": "Samantha", "gender": "Female", "age": 40, "pets": [{"name": "Tabby", "type": "Cat"}]},
      {
        "name": "Alice",
        "gender": "Female",
        "age": 64,
        "pets": [{"name": "Simba", "type": "Cat"}, {"name": "Nemo", "type": "Fish"}]
      }
    ]
  };

  catNamerFilterMale(){
    return this.state.catRegistration.filter((e)=> e.gender === "Male" && e.pets != null).map(ee=>{
      return(
        <div>
          {/* <p>The Owner's name is : {ee.name}</p> */}
          {/* <p>The Owner's gender is : {ee.gender}</p> */}
          <p>{ee.pets.filter(e=>e.type=="Cat").map(e=>e.name).join("\n")}</p>
        </div>
      )
    })
  }

  catNamerFilterFemale(){
    return this.state.catRegistration.filter((e)=> e.gender === "Female" && e.pets != null).map(ee=>{
      return(
        <div>
          {/* <p>The Owner's name is : {ee.name}</p>
          <p>The Owner's gender is : {ee.gender}</p> */}
          <p>{ee.pets.filter(e=>e.type=="Cat").map(e=>e.name).sort(e=>e.name)}</p>
          {console.log(ee.pets.filter(e=>e.type=="Cat").map(e=>e.name).sort(e=>e.name))}
        </div>
      )
    })
  }


  render(){
    return (
      <div>
        <p>Male</p>
        {this.catNamerFilterMale()}
        <p>Female</p>
        {this.catNamerFilterFemale()}
      </div>
    )
  }
}

export default App;
