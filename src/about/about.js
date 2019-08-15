import React, { Component } from 'react';
const axios = require('axios');
axios.defaults.baseURL = 'http://guanwang/api'
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stuInfo: []
        };
    }
    componentDidMount() {
        this.getStuAPI()
        this.postScoreAPI()
    }
    getStuAPI = () => {
        console.log("get");
        const params = { status: "all" }
        axios.get('/student',{params:params}).then(res => {
            console.log("res", res);
            this.setState({
                stuInfo: res.data
            })
        })
    }
    postScoreAPI = () => {
        console.log("post");
        axios.post('/score').then(res => {
            console.log("res", res);
        })
    }

    render() {
        return (
            <div>
                <div>About</div>
                <div>
                    {
                        this.state.stuInfo.map((item, index) => {
                            return <div key={index}>
                                <div>{item.name}</div>
                                <div>{item.age}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default About;