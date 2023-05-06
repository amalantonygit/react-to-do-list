import React from 'react';
import './style.css';

class Input extends React.Component{
    constructor(props) {
        super(props)
        this.SendInputToParent = this.SendInputToParent.bind(this);
      }
      SendInputToParent() {
        var task = document.getElementById('task-text').value;
        if(task===""){
            return;
        }
        else{
            this.props.parentCallback(task,"add");
        }
        document.getElementById('task-text').value = "";
    }
    render(){
        return(
            <div className='input'>
                <input id='task-text' className='todo' type="text" placeholder="Add Task"></input>
                <button className='submit' onClick={this.SendInputToParent}>SUBMIT</button>
            </div>
        )
    }
}
export default Input;