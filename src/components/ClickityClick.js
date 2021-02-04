// Code ClickityClick Component Here
import React from 'react'; 

class ClickityClick extends React.Component {
    state = {
        hasBeenClicked: false,
       
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true,

        }, () => console.log(this.state.hasBeenClicked))
        
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : "not"} has been clicked!</p>
                <button onClick={this.handleClick} >Click Me!</button>
            </div>
        )
    }
}

export default ClickityClick;