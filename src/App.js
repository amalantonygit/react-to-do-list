import './App.css';
import React from 'react';
import Header from './components/header';
import Input from "./components/input";
import TaskList from './components/tasklist';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { listitems: [] };
  }
  receiveInput = (childData,operation) => {
    var tasklist;
    if (operation==='add')
    {
    tasklist = this.state.listitems.concat({text:childData,checked:false});
    this.setState({ listitems: tasklist });
    }
    else if (operation==='delete'){
    tasklist = this.state.listitems;
    tasklist.splice(childData,1);
    this.setState({ listitems: tasklist });
    }
    else if (operation==='state-change'){
      tasklist = this.state.listitems;
      tasklist[childData]['checked']=!tasklist[childData]['checked'];
      this.setState({ listitems: tasklist });
      }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Input parentCallback = {this.receiveInput}/>
        <TaskList listitems = {this.state.listitems} parentCallback = {this.receiveInput}/>
      </div>
    );
  }
}
export default App;
