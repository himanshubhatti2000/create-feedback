import React, { Component, createRef } from 'react';
import StateContext from '../StateContext'
import Header from './Header';
class CreateFeedback extends Component {
    static contextType=StateContext
    constructor(props){
        super(props)
        this.title=createRef();
        this.stageTitle=createRef();
        this.prompt=createRef();
    }
    state={
        title: "",
        stageTitle: "",
        prompt: ""
    }
    componentDidMount=()=>{
        console.log(this.context)
    }
    onSave=async()=>{
        
        if(this.state.title===""){
            this.title.current.style.border="1px solid red"
        }
        else{
            this.title.current.style.border=""
            alert(this.state.title)
            await this.context.save({title:this.state.title, 
                stageTitle: this.state.stageTitle,
                 prompt: this.state.prompt})
        }
    }
    onSaveFlow=async()=>{
        if(this.state.title===""){
            this.title.current.style.border="1px solid red"
        }
        else if(this.state.stageTitle===""){
            this.stageTitle.current.style.border="1px solid red"
            this.title.current.style.border=""
            this.prompt.current.style.border=""
        }
        else if(this.state.prompt===""){
            this.prompt.current.style.border="1px solid red"
            this.title.current.style.border=""
            this.stageTitle.current.style.border=""
        }
        else{
            this.title.current.style.border=""
            this.stageTitle.current.style.border=""
            this.prompt.current.style.border=""
            alert(`title: ${this.state.title},
            stage:${this.state.stageTitle},
            prompt:${this.state.prompt}`)
            await this.context.save({
                title: this.state.title,
                stageTitle: this.state.stageTitle,
                prompt: this.state.prompt 
            })
        }
    }
    componentDidMount(){
        console.log(this.input)
    }
   
    render() {
        return (
            <div className="create-feedback">
                 <Header title="create feedback flow" subText=" Create and monitor program reviews for your institute" page="createFeedback" saveFlow={this.onSaveFlow.bind(this)}/>
                 <p style={{textAlign:'center'}}>field marked with <span style={{color:"red"}}>*</span> are required</p>
                 <section>
                     <div className="input">
                     <p>feedback flow title<span style={{color:"red"}}>*</span></p>
                         <h5></h5>
                         <input ref={this.title} value={this.state.title} onChange={(e)=>this.setState({title: e.target.value})} />
                     </div>
                     <div className="stage">
                        <h1>Stage 1</h1>
                     <div className="input">
                         <p>Stage title<span style={{color:"red"}}>*</span></p>
                         <input ref={this.stageTitle} value={this.state.stageTitle} onChange={(e)=>this.setState({stageTitle: e.target.value})} />
                     </div>
                     <div className="input">
                     <p>Prompt<span style={{color:"red"}}>*</span></p>
                         <input ref={this.prompt} value={this.state.prompt} onChange={(e)=>this.setState({prompt: e.target.value})} />
                     </div>
                     </div>
                 </section>
                 <div className="btn-div">
                 <button className="middle-btn"> Add stage</button>
                 <button className="save" onClick={this.onSave}>save</button>
                 </div>
               
            </div>
        );
    }
}

export default CreateFeedback;
