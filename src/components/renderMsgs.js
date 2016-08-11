import React, { Component } from 'react'

export default class renderMsgs extends Component {

	constructor(props) {
		super(props)
	}
  	render() {
      return (
      	<div>
      		<ul className='errorMsgs'>
      		{
      			this.props.structure.map(function(name, index) {
      				return (
      					<li key={ index }>{ name }</li>
      				)
      			}) 
      		}
      		{
      			this.props.whiteList.map(function(name, index) {
      				return (
      					<li key={ index }>{ name }</li>
      				)
      			})
      		}
      		{
      			this.props.blackList.map(function(name, index) {
      				return (
      					<li key={ index }>{ name }</li>
      				)
      			})
      		}
      		</ul>
      	</div>
      )
  	}
}
