import React, { Component } from 'react'

class StudentMark extends Component {
    constructor(props) {
        super(props);
        this.state={}
        
    }
    changeProcess(event) {
        this.setState({[event.target.name]: parseInt((event.target.value))});
        
        
    }

    clickProcess(event){
        debugger;
        var myObject={
            marks1:document.getElementById('marks1'),
            marks2:document.getElementById('marks2'),
            marks3:document.getElementById('marks3'),
            marks4:document.getElementById('marks4'),
        }
        localStorage.setItem('myObject', JSON.stringify(myObject));
        console.log("Worksobject");
        const{marks1,marks2,marks3,marks4}=this.state;
        if(!marks1 || !marks2 || !marks3 || !marks4){
            alert("Please Enter marks");
        }


         else if((marks1>=35 && marks2>=35 && marks3>=35 && marks4>=35)){
           
            alert("Congratulations you are pass"); 
        }
        else{
           
            alert("Sorry you are failed, better luck next time"); 
        } 
    }

    render() { 
        return ( 
            <>
            <div className='container my-5'>
                <br />
                <form onChange={this.changeProcess.bind(this)}>
                    <input type='text' placeholder='Enter marks' onChange={this.changeProcess.bind(this)} name='marks1'/><br/>
                    <input type='text' placeholder='Enter marks' onChange={this.changeProcess.bind(this)} name='marks2'/><br/>
                    <input type='text' placeholder='Enter marks' onChange={this.changeProcess.bind(this)} name='marks3'/><br/>
                    <input type='text' placeholder='Enter marks' onChange={this.changeProcess.bind(this)} name='marks4'/><br/>
                    <button onClick={this.clickProcess.bind(this)}>Submit</button>
                </form>
            </div>
            </>
         );
    }
}
 
export default StudentMark;