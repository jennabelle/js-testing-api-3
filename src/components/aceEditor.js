import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Esprima from 'esprima'
import Estraverse from 'estraverse'
import ErrorMsgHelper from '../helpers/errorMsgHelper'
import RenderMsgs from './renderMsgs'
import Structure_BinarySearch from './structure_BinarySearch'

export default class AceEditor extends Component {

	constructor(props) {
		super(props)

		this.state = { userInput: '', whiteList: [], blackList: [], structure: [] }

		this.transformInputToAST = this.transformInputToAST.bind(this)
		this.validateSyntax = this.validateSyntax.bind(this)
	}

	static propTypes = {
	    mode: React.PropTypes.string,
	    content: React.PropTypes.string,
	};

	static defaultProps = {
	    mode: 'javascript',
	    code: '//write your code here',
	}

	componentDidMount() {

		// init a timeout variable to be used below
		let timeout = null

		// bind to component instead of editor
		let that = this

		const node = ReactDOM.findDOMNode(this.refs.codeEditor);
	    const editor = ace.edit(node);
	    editor.setTheme("ace/theme/clouds");
	    editor.getSession().setMode("ace/mode/javascript");
	    editor.setShowPrintMargin(false);
	    editor.setOptions({minLines: 25});
	    editor.setOptions({maxLines: 50});
	    editor.getSession().on('change', function(e) { 

	    	/** PURPOSE: wait for user to stop typing, then run javascript **/
	    	// clear timeout if it has already been set - this prevents the previous task from executing if it has been less than 600ms
			clearTimeout(timeout)

			// make new timeout set to go off in 700ms
			timeout = setTimeout( () => {

				that.setState({ userInput: editor.getValue() })

				that.transformInputToAST( that.state.userInput )
			}, 700)
	    })
	}
	transformInputToAST(userInput) { 

		let ast = Esprima.parse( userInput, {tolerant: true} )
		this.validateSyntax(ast)
	}
	validateSyntax(ast) { 

		// 1. test there are 2 params in function declaration (testing the structure)
		let numOfParams = 0

		Estraverse.traverse(ast, {
			enter: function(node) {
				if (node.hasOwnProperty('params')) {
					numOfParams = node['params'].length
				}
			}
		})

		/**********************************
		There are 3 possible outcomes here:
			1. numOfParams is 2 --> clear error msg (when user input is correct)
			2. numOfParams is 0 --> clear error msgs (when code editor is blank)
			3. numOfParams is not 0 or 2 --> show error msg (when user input is incorrect)
		***********************************/
		if (numOfParams > 0 && numOfParams !== 2) {
			this.setState({
				structure: [ ErrorMsgHelper.getErrorMsg('needTwoParams') ]
			})
		}
		else {
			this.setState({ structure: [] }) // clear error msgs
		}

		// 2. test the while loop inside function block (testing both whitelist and blacklist functionality)
		let numOfWhileLoops = 0

		Estraverse.traverse(ast, {
		   enter: function(node) {
		      if (node.type === 'WhileStatement') {
		         numOfWhileLoops++;
		      }
		    }
		})

		if (numOfWhileLoops === 0) {

		   this.setState({
		    	whiteList: [ ErrorMsgHelper.getErrorMsg('needWhileLoop') ]
		   })
		}
		else if (numOfWhileLoops > 1) {

			this.setState({ 
				blackList: [ ErrorMsgHelper.getErrorMsg('needOneWhileLoop') ]
			})
		}
		else if (numOfWhileLoops === 1) {

		   this.setState({ whiteList: [], blackList: [] }) // clear error msgs
		}
		
	}
	render() {
      return (
      	<div>
      		<h2>Implement binary search</h2>
      		<p className="lead">Return either the index of the location in the array, or <code>-1</code> if the array did not contain the targetValue</p>
      		<div className="row">
      			<div className="col-md-6">
		      		<RenderMsgs structure={ this.state.structure } whiteList={ this.state.whiteList } blackList={ this.state.blackList } />
		      		<div ref='codeEditor' className='aceEditor'>{ this.props.code }</div>
	      		</div>
	      		<div className="col-md-6">
	      			<Structure_BinarySearch />
	      		</div>
      		</div>
	   	</div>
      )
  }
}
