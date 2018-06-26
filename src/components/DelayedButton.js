// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {


    delayFn(event){
        return () => {
            this.props.onDelayedClick(event)
        }
    }

    handleEvent(event){
        event.persist();
        setTimeout(this.delayFn(event).bind(this), this.props.delay)
    }
    
    render(){
        return(
            <div> 
            <button onClick={this.handleEvent.bind(this)}/>
            </div>
        )
    }

}


export default DelayedButton;