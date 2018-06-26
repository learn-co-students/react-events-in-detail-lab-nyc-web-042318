// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
    
    // constructor(props){
    //     super(props)
    //     this.state = {
            
    //     }
    // }


    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render (){
        return (
            <button onClick={this.handleClick} >This is a button</button>
        )
    }
}

export default CoordinatesButton;