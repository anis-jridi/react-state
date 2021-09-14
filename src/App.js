import './App.css';
import React, { Component } from 'react'


export default class App extends Component {
  state = { 
    person:{
  image:"./anis.jpg",
  name: "Anis Jridi",
  adress: "Sfax",
  profession: "Web Developper",
},
count:0,
isShow: true,
  }
  incriment=()=>{
    this.setState({count:this.state.count+1})
  }
  dicriment=()=>{
    this.setState({count:this.state.count-1})
  }
  handelShow=()=>{
  this.setState({isShow:!this.state.isShow,count:0})
  }
   
  componentDidMount(){
    setInterval(() => {this.setState({count:this.state.count+1})
      
    }, 1000);
  }
  render() {
    return (
      <div style={{ marginLeft:"300px", 
      height:"800px", 
      width:"700px", 
      backgroundColor: "yellow"}}>
         <button 
         style={{ backgroundColor:"green",
          borderRadius:"20px",
          width:"250",
           height:"50",
           fontSize:"20px",
           color:"blue", 
           marginLeft:"300px", 
           marginTop:"50px"}} 
         onClick={ this.handelShow}>{this.state.isShow?"hide":"show"}</button>
      {this.state.isShow&& <div> <img src= {this.state.person.image} 
      style={{height:"220px", width:"180px"}}alt="" />
        <p style={{ fontFamily:"inherit", fontSize:"25px", textAlign:"center" }}>{this.state.person.name} </p>
        <p style={{ fontFamily:"inherit", fontSize:"25px", textAlign:"center" }}>{this.state.person.adress}</p>
        <p style={{ fontFamily:"inherit", fontSize:"25px", textAlign:"center" }}>{this.state.person.profession}</p>
        <h1 style={{ fontFamily:"inherit", fontSize:"25px", textAlign:"center" }}> {this.state.count}</h1>
        <button 
        style={{ backgroundColor:"green",
         borderRadius:"20px",
         width:"250",
          height:"50",
          fontSize:"20px",
          color:"blue", 
          marginLeft:"300px"}}
        onClick={()=> this.incriment()}>+</button> 
        <button 
        style={{ backgroundColor:"green",
         borderRadius:"20px",
         width:"250", 
         height:"50",
         fontSize:"20px",
         color:"blue", 
         marginLeft:"50px"}}
        onClick={()=> this.dicriment()}>-</button></div>    
      }      
      </div>

    )
  }
}