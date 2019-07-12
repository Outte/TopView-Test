import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Title(props) {
	return <Row>
		<Col>
			<h1 className="text-center">{props.title}</h1>
			<h3 className="text-center title">(Caution: Only Bikes are available for rent at this time.)</h3>
		</Col>
	</Row>
}

export default Title;