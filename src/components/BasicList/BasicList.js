import React from 'react';
import './BasicList.css';
import propTypes from 'prop-types';

const BasicList = props => {
	return (
		<ul className="BasicList">
			{props.listData.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
};

BasicList.propTypes = {
	listData: propTypes.arrayOf(propTypes.string).isRequired,
};

export default BasicList;
