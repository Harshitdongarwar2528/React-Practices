import React from "react";
class MyCar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand:"ford",
            year:2003,
            model:"maruti",
            color:"black"
        };
        
        }
        changeColor = () =>{
            this.setState({color:"blue"});
}
render(){
    return(
        <>
       <h1>
        my {this.state.brand} is good
       </h1>
       <p> my car is {this.state.color}</p>
       <p>my car was build in {this.state.year}</p>
       <button type="button" onClick={this.changeColor}>changeColor</button>
        </>
    )
}
}
export default MyCar