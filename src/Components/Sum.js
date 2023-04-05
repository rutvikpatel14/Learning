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
            <div className="container my-3">
                
                <form onSubmit={this.submitProcess.bind(this)}>
                    <input type="text" placeholder="Enter number" onChange={this.changeProcess.bind(this)} name="txt1" />
                    <input type="text" placeholder="Enter number" onChange={this.changeProcess.bind(this)} name="txt2" />
                    <input type="text" placeholder="Enter number" onChange={this.changeProcess.bind(this)} name="txt3" />
                    <input type="submit" />
                </form>
                {this.state.temp}
            </div>
        </>
    );
}
}

export default Sum;