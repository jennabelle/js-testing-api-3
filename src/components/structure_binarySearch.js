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
				<pre><code className='javascript'>
				function binarySearch(__) {'{'}

					var begin = __;
					var end = __;
	
					while (__) {
						
					  // var mid = Math.floor( (begin+end) / 2 );
					  
				   //    if (arr[mid] < num) {
				   //    	begin = mid + 1;
				   //    }
				   //    else if (arr[mid] == num) {
				   //    	return mid;
				   //    }
				   //    else {
				   //    	end = mid - 1;
				   //    }
					}

				   return __;

				{'}'}
				</code></pre>
			</div>
      );
  }
}
