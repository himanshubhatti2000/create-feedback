import { Component } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import StateContext from './StateContext'
import Home from './Components/Home'
import CreateFeedback from './Components/CreateFeedback';

class App extends Component{
  constructor(props){
    super(props)
    this.saveFeedback=async(data)=>{
      await this.setState({ feedbacks: [...this.state.feedbacks, data] }) 
      console.log(this.state.feedbacks)
    }
  
    this.state={
      feedbacks:[],
      save: this.saveFeedback
    }
  }
  
    render(){
      return (
        <StateContext.Provider value={this.state}>
        <div className="App">
          <Router>
            <Switch>
             
              <Route exact path="/" component={Home} />
              <Route path="/create-feedback" component={CreateFeedback} />
           
            </Switch>
            </Router>
    
        </div>
        </StateContext.Provider>
      );
    }
}

export default App;
