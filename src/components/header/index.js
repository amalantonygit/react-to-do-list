import React from 'react';
import './style.css';

class Header extends React.Component{
    render(){
        return(
            <div>
                <span className='title'>Simple ToDo App</span>
                <p className='instruction'>Please add to-dos item(s) through the input field : </p>
            </div>
        )
    }
}
export default Header;