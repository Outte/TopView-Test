import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Product from './Product'

function Catalog(props) {
	/*map used to iterate and display the products
	selectItem method further passed down to Product class via props*/
	return <Row>
		{props.inventory.map((item, index) => 
		<Col key={index} sm={12} md={6} lg={4}>
			<Product key={index} item={item} onSelectItem={props.onSelectItem} />
		</Col>)}
	</Row>
}

export default Catalog