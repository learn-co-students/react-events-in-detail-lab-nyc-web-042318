// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component{
    handleEvent(event){
        let coor = [event.clientX, event.clientY];
        // console.log(this.props);
        this.props.onReceiveCoordinates(coor)
    }
    render(){
        return(
            <p>
                <button onClick={this.handleEvent.bind(this)}/>
                 </p>
        )
    }


}

export default CoordinatesButton;