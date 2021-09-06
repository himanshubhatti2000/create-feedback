import React, { Component } from 'react';
import StateContext from '../StateContext';
import {Link} from 'react-router-dom'
import Header from './Header';
class Home extends Component {
    static contextType=StateContext
    ListJSX = () => {
        return this.context.feedbacks.map(feedback => {
            return  <div key={feedback.title} className="feedback-approval">
            <div>
                <h3>{feedback.title}</h3>
                <p>{feedback.stageTitle}</p>
            </div>
            <div><button>fdf</button></div>
        </div>
        
    })
    }
    render() {
        return (
            <div>
                <Header title="Program Review" subText=" Create and monitor program reviews for your institute"/>
                <button>feedbak and approval </button>
                
                    <div className="title">
                        <h1>Feedback and Approval</h1>
                        <Link to="/create-feedback"><button>Create feedback flow</button></Link>
                    </div>
                    <section>
                    {this.ListJSX()}
               
                </section>
            </div>
        );
    }
}

export default Home;
