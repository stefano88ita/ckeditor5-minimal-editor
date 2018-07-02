/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import MinimalEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';

export default class MinimalEditor extends MinimalEditorBase {}

MinimalEditor.build = {
	plugins: [
		EssentialsPlugin,
		AutoformatPlugin,
		BoldPlugin,
		ItalicPlugin,
		ParagraphPlugin
	],
	config: {
		toolbar: {
			items: [
				'bold',
				'italic',
				'undo',
				'redo'
			]
		},
		language: 'en'
	}
};
