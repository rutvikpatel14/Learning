import React, { Component } from "react";

class Sum extends Component {
    constructor(props) {
        super(props);
        this.state = { temp: "", };
    }



    changeProcess(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitProcess(event) {
        const { txt1, txt2, txt3 } = this.state;
        var d = parseInt(txt1) + parseInt(txt2) + parseInt(txt3);
        this.setState({ temp: d });
        event.preventDefault();
    }
    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}>Addition</h1>
                <div className="container my-5">
                    <form onSubmit={this.submitProcess.bind(this)}>
                        <label htmlFor="No1">No1: </label>
                        <input type="text" placeholder="Enter number" onChange={this.changeProcess.bind(this)} name="txt1" /><br></br>
                        <label htmlFor="No2">No2: </label>
                        <input type="text" placeholder="Enter number" onChange={this.changeProcess.bind(this)} name="txt2" /><br></br>
                        <label htmlFor="No3">No3: </label>
                        <input type="text" placeholder="Enter number" onChange={this.changeProcess.bind(this)} name="txt3" /><br></br>
                        <input type="submit" value='Addition' style={{marginTop:'10px',marginLeft:'70px'}} />
                    </form>
                    Ans = {this.state.temp}
                </div>
            </>
        );
    }
}

export default Sum;