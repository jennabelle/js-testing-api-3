import React, { Component } from 'react'

export default class Structure_BinarySearch extends Component {

	constructor(props) {
		super(props)

		this.state = { 
			binarySearch: ''
		}
	}
  render() {
      return (
      	<div>
				<h5>Structure:</h5>
				<samp>
					function doSearch(__) {'{'}
				</samp><br /><br />
				<samp>
					var begin = __;
				</samp><br />
				<samp>
					var end = __;
				</samp><br /><br />
				<samp>
					while (__) {'{'}
				</samp><br /><br />
				<samp>
					var mid = __;
				</samp><br /><br />
				<samp>
				    if (__ === __) {'{'}
				</samp><br /><br />
				<samp>
					}
				</samp><br />
				<samp>
					else if (__ {'<'} __) {'{'}
				</samp>
				<samp>
				   return __;

				{'}'}
				</samp>
			</div>
      );
  }
}
