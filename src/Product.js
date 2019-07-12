import React from 'react';

function Product(props) {

	const item = props.item

	return <figure>
		<img src={item.image} alt="product"/>
		<figcaption>
			<p>{item.name} | ${item.price} per day</p>
		</figcaption>
		<button onClick={() => {
			/*selectItem method triggers on click of purchase button*/
			props.onSelectItem(item)
		}}>Purchase</button>
	</figure>
}

export default Product