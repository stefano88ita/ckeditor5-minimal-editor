/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

module.exports = {
	// The editor creator to use.
	editor: '@ckeditor/ckeditor5-editor-inline/src/inlineeditor',

	// The name under which the editor will be exported.
	moduleName: 'MinimalEditor',

	// Plugins to include in the build.
	plugins: [
		'@ckeditor/ckeditor5-essentials/src/essentials',
		'@ckeditor/ckeditor5-autoformat/src/autoformat',
		'@ckeditor/ckeditor5-basic-styles/src/bold',
		'@ckeditor/ckeditor5-basic-styles/src/italic',
		'@ckeditor/ckeditor5-paragraph/src/paragraph'
	],

	// Editor config.
	config: {
		toolbar: {
			items: [
				'bold',
				'italic',
				'undo',
				'redo'
			]
		},

		// UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
		language: 'en'
	}
};
