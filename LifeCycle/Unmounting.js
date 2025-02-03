//TYPE 1: componentWillUnmount
import React from "react";

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={show:true};

    }
    delHeader = () =>{
        this.setState({show:false})
    }
    render(){
        let myheader;
        if(this.state.show){
            myheader=<Child/>
        }
        return(
            <>
            {myheader}
            <h1>the favouritecolor is {this.state.favouritecolor}</h1>
            <button type="button" onClick={this.delHeader}>delete header</button>
            </>
        )
    }
}

class Child extends React.Component{
    componentWillUnmount(){
        alert("the componment named header is to be unmounted")
    }
    render(){
        return(
            <>
            <h1>hello world</h1>
            </>
        )
    }
}
export default Footer