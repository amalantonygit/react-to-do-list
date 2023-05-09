import React from 'react';
import './style.css';

class TaskList extends React.Component{
    constructor(props) {
        super(props);
        this.SendInputToParent = this.SendInputToParent.bind(this);
        this.SendStateChangeToParent = this.SendStateChangeToParent.bind(this);
      }
      SendStateChangeToParent(e) {
        var index = e.target.parentElement.getAttribute('id');
        this.props.parentCallback(index,"state-change");
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
                    <input className="check" type="checkbox" checked={listitem["checked"]?true:false} onChange={(e)=>this.SendStateChangeToParent(e)}></input>
                    <p className={listitem["checked"]?"checked":"unchecked"}>{listitem['text']}</p>
                    <button className="delete" onClick={(e)=>this.SendInputToParent(e)}>Delete</button>
                </div>);
                },this)}
            </div>
        );
    }
}
export default TaskList;