import React, { Component } from 'react';
import grapesjs from 'grapesjs';
import './Gjs.css';


class Gjs extends Component {

	render() {
			this.do = grapesjs.init({
			container : '#gjs',
			components: '<div class="txt-red">Hello world!</div>',
			height: '100%',
			style: '.txt-red{color: red}',
			plugins: ['gjs-blocks-basic','gjs-plugin-forms'],
			pluginsOpts: {
				'gjs-blocks-basic': {},
				'gjs-plugin-forms': {}
			}
			});

		return (
			<div ref="this.do"></div>
		);
	}
}

export default Gjs;
