import React, { Component } from 'react';
import { setTimeout } from 'timers';
const Promise = require('promise');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.promiseTest().then((result) => {
            console.log("result", result)
            console.log("process",process)
        }).catch((err) => {
            console.log("err:", err)
        })
    }
    promiseTest = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const str = "setTimeout"
                console.log(str)
                resolve(str)
            }, 1000)
        })
    }
    render() {
        return (
            <div>
                home
            </div>
        );
    }
}

export default Home;