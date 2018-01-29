import React, { Component } from 'react';
import grapesjs from 'grapesjs';
import basic from 'grapesjs-blocks-basic'
import forms from 'grapesjs-plugin-forms'
import exportTemplate from 'grapesjs-plugin-export'
import './Gjs.css';


class Gjs extends Component {

	render() {
			this.do = grapesjs.init({
			container : '#gjs',
			components: '<div class="txt-red">Hello world!</div>',
			height: '100%',
			style: '.txt-red{color: red}',
			plugins: ['gjs-blocks-basic','gjs-plugin-forms', 'gjs-plugin-export'],
			pluginsOpts: {
				'gjs-blocks-basic': {},
				'gjs-plugin-forms': {},
                'gjs-plugin-export': {
                    btnLabel: 'EXPORT',
                    preHtml: '<!doctype><html><head><link rel="stylesheet" href="./css/style.css"></head><body>'
                }
			},
			storageManager: {autoload: 0}
			});
		return (
			<div ref="this.do"></div>
		);
	}
}

export default Gjs;
