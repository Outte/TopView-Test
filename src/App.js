import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
//Component only imported here as only App class will handle state

import Title from './Title'
import Catalog from './Catalog'
import Data from './bikerentals'

const items = Data
//JSON data passed down to Catalog class via props

class App extends Component {
	constructor() {
		super()
		this.state = {
			selectedItems: []
			//Product selections will be stored here
		}
		this.selectItem = this.selectItem.bind(this)
		//Restore usage of "this" keyword to selectItem
	}

	selectItem(itemSelected) {
		//Method passed down to Catalog class via props
		if (itemSelected.product_type === "bike") {
			//validate that selection is of bike product type
			this.setState((state) => ({
				selectedItems: state.selectedItems.concat([itemSelected])
				//Add selection to state managed selectedItems array
			}))
			alert("Bike Selected")
		} else {
			//if selection invalid, inform user via alert message
			alert("Out of stock")
		}
	}

	render() {
		return (
			<Container>
				<Title title={"Warren's Bike Rentals"} />
				<Catalog onSelectItem={this.selectItem} inventory={items.products} />
			</Container>
		)
	}
}

export default App