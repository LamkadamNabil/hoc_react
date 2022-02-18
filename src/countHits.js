import React, { Component } from 'react';

const countHits = (WrappedComponent ,power)=>{

 class  CountHits extends Component {
    state ={
        hits :0
    }
    addone=()=>{
        this.setState((prevState)=>{
          return{
              hits :prevState.hits+1
          }
        })
    }
    componentDidUpdate(prevProps, prevState) {
      if(this.state !== prevState)
      {
        this.props.reducelife(WrappedComponent.name,power)
      }
    }
    
  render() {
    return   <WrappedComponent addone={this.addone} hocState={this.state} {...this.props}/>
           } 
  }
  return CountHits 
}

export default countHits ;