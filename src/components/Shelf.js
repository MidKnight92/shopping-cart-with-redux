import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';


export default class Shelf extends Component {
	constructor(props){
		super(props);
		this.state = {
			shelfItems: [
				"Bananas",
				"Frozen Pizza",
				"Flamin' Hot Cheetos",
				"Arugula"
			]
		}
	}
	render(){
		const shelfItems = this.state.shelfItems.map((item, id) => {
			return (
				<li key={id}>
				{item}
				<Button onClick={() => {
					this.props.addItem(item)}}><AddCircleIcon /></Button>
				</li>
			)
		})
		return (
			<div>
				<h2>Store Inventory</h2>
				<ul>
					{shelfItems}
				</ul>
			</div>
		)
	}
}