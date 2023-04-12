import React, { Component } from 'react'

class GetApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mydata: []
        };
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.setState({ mydata: response });
            })
    }

    render() {

        return (
            <>
                <center>
                    {this.state.mydata.map((value, index) => {
                        return (<><div className="container">
                            {/* <div style={{height:'100px'}}> */}
                                <ul >
                                    <li key={index} >{value.title}</li>
                                    <li>{value.price}</li>
                                    <li>{value.description}</li>
                                    <li><img src={value.image}  style={{height:'100px'}}/></li>
                                </ul>
                            </div>
                        {/* </div> */}
                        </>
                        )
                    })}
                </center>
            </>
        );
    }
}

export default GetApi;
