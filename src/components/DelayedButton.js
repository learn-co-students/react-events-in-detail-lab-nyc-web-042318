// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
    
    // constructor(props){
    //     super(props)
    //     this.state = {}
    // }

    clickHandler = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
    
    render(){
        return(
            <button onClick={this.clickHandler} >Another Button</button>
        )
    }
}

export default DelayedButton;