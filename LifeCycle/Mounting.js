// TYPE 1: constructor
import react from "react";

// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={favoritecolor:"red"};
//     }
//     render(){
//         return(
//             <>
//             my favorite color car is {this.state.favoritecolor} 
//             </>
//         )
//     }
// }


//TYPE 2: getDerivedStateFromProps

// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={favouritecolor:"red"};
//     }
//     static getDerivedStateFromProps(props, state){
//         return {favouritecolor:props.favcol};
//     }
//     render(){
//         return(
//             <>
//             my favorite color is {this.state.favouritecolor}
//             </>
//         );
//     }
// }
// export default Header


//TYPE:3 Render
// class Header extends React.Component {
//     render() {
//     return (
//     <h1>This is the content of the Header component</h1>
//     );
//     }
//    }
//    export default Header

//TYPE 4 componentDidMount

class Header extends react.Component{
    constructor(props){
        super(props);
        this.state= {favouritecolor:"red"};
    }
    componentDidMount(){
        setTimeout(()=> {
            setTimeout(()=>{
                this.setState({favouritecolor:"yellow"})
            },1000)
        })
    }
    render(){
        return(
            <>
            <h1>My favourite color is {this.state.favouritecolor}</h1>
            </>
        )        
    }
}
export default Header