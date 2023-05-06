import React from 'react';
import './style.css';

class TaskList extends React.Component{
    constructor(props) {
        super(props);
        this.SendInputToParent = this.SendInputToParent.bind(this);
      }
    SendInputToParent(e) {
        var index = e.target.parentElement.getAttribute('id');
        this.props.parentCallback(index,"delete");
    }
    render(){
        return(
            <div id='listItemsContainer'>
                {this.props.listitems.map(function(listitem, index){
                    return(<div className="listItem" id={index} key={index}>
                    <input className="check" type="checkbox"></input>
                    <p>{listitem['text']}</p>
                    <button className="delete" onClick={(e)=>this.SendInputToParent(e)}>Delete</button>
                </div>);
                },this)}
            </div>
        );
    }
}
export default TaskList;