import React from 'react'
import spinner from './spinner.gif';

const spinnerStyle = {
	paddingTop: '100px',
	paddingBottom: '300px',
	width: '100px',
	margin: 'auto',
	display: 'block'
}

export const Spinner = () => {
	return (
		<img src={spinner} alt="spinner..." style={spinnerStyle}/>
	)
}

const miniSpinnerStyle = {
	width: '5rem',
	height: '5rem',
	margin: 'auto',
	display: 'block'
}

export const MiniSpinner = () => {
	return (
		<div className="text-center my-3">
			<div className="spinner-border text-primary" style={miniSpinnerStyle}></div>
		</div>
	)
}

