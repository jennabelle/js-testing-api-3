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
				<samp>&nbsp;&nbsp;
					var begin = __;
				</samp><br />
				<samp>&nbsp;&nbsp;
					var end = __;
				</samp><br /><br />
				<samp>&nbsp;&nbsp;
					while (__) {'{'}
				</samp><br /><br />
				<samp>&nbsp;&nbsp;&nbsp;&nbsp;
					var mid = __;
				</samp><br /><br />
				<samp>&nbsp;&nbsp;&nbsp;&nbsp;
				    if (__ === __) {'{'}
				</samp><br /><br />
				<samp>&nbsp;&nbsp;&nbsp;&nbsp;
					}
				</samp><br />
				<samp>&nbsp;&nbsp;&nbsp;&nbsp;
					else if (__ {'<'} __) {'{'}
				</samp><br /><br />
				<samp>&nbsp;&nbsp;&nbsp;&nbsp;
					}
				</samp><br />
				<samp>&nbsp;&nbsp;&nbsp;&nbsp;
					else (__) {'{'}
				</samp><br /><br />
				<samp>&nbsp;&nbsp;&nbsp;&nbsp;
					}
				</samp><br />
				<samp>&nbsp;&nbsp;
					}
				</samp><br /><br />
				<samp>&nbsp;&nbsp;
				   return __;
				</samp><br />
				<samp>
				{'}'}
				</samp>
		</div>
      );
  }
}
