import React, { Component } from 'react';
import{Link} from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <header>
                <div>
                {this.props.page==="createFeedback"?<div>
                   <Link to="/"> Program review</Link> {">"}  <Link to="create-feedback"> create feedback flow</Link>
                    </div>:null}
                <h1>{this.props.title}</h1>
                <p>{this.props.subText}</p>
                </div>
                {this.props.page==="createFeedback"?<div>
                    <Link to="/"><button>cancel</button></Link>
                    <button onClick={this.props.saveFlow}>save feedback flow</button> 
                    </div>:null}
            </header>
        );
    }
}

export default Header;
