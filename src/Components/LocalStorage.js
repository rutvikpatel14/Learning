import React, { Component } from 'react'

class LocalStorage extends Component {
    constructor(props) {
        super(props);
        this.state = { temp:"" };
    }

    changeProcess(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    clickProcess(event) {
        const { no1, no2 } = this.state;
        var ans;

        if (!no1 || !no2) {
            alert("Enter Number");
        }

        if (event.target.name === "add") {
            ans = parseInt(no1) + parseInt(no2);
            this.setState({ temp: ans });
            event.preventDefault();
        }
        else if (event.target.name === "sub") {
            ans = parseInt(no1) - parseInt(no2);
            this.setState({ temp: ans });
            event.preventDefault();
        }
        else if (event.target.name === "mul") {
            ans = parseInt(no1) * parseInt(no2);
            this.setState({ temp: ans });
            event.preventDefault();
        }
        else if (event.target.name === "div") {
            ans = parseInt(no1) / parseInt(no2);
            this.setState({ temp: ans });
            event.preventDefault();
        }
    
}

    render() {
        return (
            <>
                <center>
                    <form onSubmit={this.clickProcess.bind(this)}>
                        <br />
                        No1: <input type="text" name="no1" placeholder='Enter Number' onChange={this.changeProcess.bind(this)} /><br></br>
                        No2: <input type="text" name="no2" placeholder='Enter Number' onChange={this.changeProcess.bind(this)} />
                        <br />
                        <div className='container my-3 '>
                            <input type='button'className='mx-2' value='+' name='add' onClick={this.clickProcess.bind(this)} />
                            <input type='button'className='mx-2' value='-' name='sub' onClick={this.clickProcess.bind(this)} /><br></br>
                            <input type='button'className='mx-2 my-2' value='*' name='mul' onClick={this.clickProcess.bind(this)} />
                            <input type='button'className='mx-2' value='/' name='div' onClick={this.clickProcess.bind(this)} />
                        </div>
                            Ans:{this.state.temp}
                    </form>
                </center>
            </>
        );
    }
}

export default LocalStorage;