import React, { Component } from 'react';
const bigdecimal = require("bigdecimal");

const imgList = [
	{ name: "close", imgUrl: require("../assets/images/close.png") },
	{ name: "star", imgUrl: require("../assets/images/star.png") }
]
class News extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value1: '',
			value2: '',
			value3: '',
			operator: "/"
		};
	}
	componentDidMount(){
		console.log("operator",this.state.operator)
	}
	input1Change(e) {
		this.setState({
			value1: e.target.value
		})
	}
	input2Change(e) {
		this.setState({
			value2: e.target.value
		})
	}
	input3Change(e) {

	}

	selectChange = e => {
		this.setState({
			operator: e.target.value
		})
	}
	calculation=(operator)=> {
		console.log("operator", operator)
		let { value1, value2 } = this.state;
		let value1Trans = new bigdecimal.BigDecimal(value1);
		let value2Trans = new bigdecimal.BigDecimal(value2);
		let result = '';
		// debugger
		switch (operator) {
			case '+':
				result = value1Trans.add(value2Trans);
				break;
			case '-':
				result = value1Trans.subtract(value2Trans);
				break;
			case '*':
				result = value1Trans.multiply(value2Trans);
				break;
			case '/':
				result = value1Trans.divide(value2Trans, 6, bigdecimal.BigDecimal.ROUND_HALF_UP);
				break;
			default:
				break;
		}
		console.log("result", result)
		this.setState({
			value3: result
		})
	}
	render() {
		let { value1, value2, value3, operator } = this.state
		return (
			<div className="news">
				{
					imgList.map((item, index) => {
						return <div key={index}>
							<img src={item.imgUrl} alt={item.star} />
						</div>
					})
				}
				<hr />
				<hr />
				<div>bigdecimal js浮点数计算</div>
				<div>
					<input type="text" value={value1} onChange={e => this.input1Change(e)} />
					<select name="operate" id="" value={operator} onChange={this.selectChange}>
						<option value="+">+</option>
						<option value="-">-</option>
						<option value="*">*</option>
						<option value="/">/</option>
					</select>
					<input type="text" value={value2} onChange={e => this.input2Change(e)} />
					<button onClick={this.calculation.bind(this,operator)}>=</button>
					<input type="text" value={value3} onChange={e => this.input3Change(e)} />
				</div>
			</div>
		);
	}
}

export default News;