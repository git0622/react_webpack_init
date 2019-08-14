import React, { Component } from 'react';
const imgList = [
	{ name: "close", imgUrl: require("../assets/images/close.png") },
	{ name: "star", imgUrl: require("../assets/images/star.png") }
]
class News extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="news">
				{
					imgList.map((item, index) => {
						return <div key={index}>
							<img src={item.imgUrl} alt={item.star} />
						</div>
					})
				}

			</div>
		);
	}
}

export default News;