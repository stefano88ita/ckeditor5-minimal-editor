CKEditor 5 minimal Editor
==============================================

## Quick start

First, install the build from npm:

```bash
npm install --save @ckeditor/ckeditor5-minimal-editor
```

And use it in your website:

```html
<div id="editor">
	<p>This is the editor content.</p>
</div>
<script src="./node_modules/@ckeditor/ckeditor5-minimal-editor/build/ckeditor.js"></script>
<script>
	MinimalEditor
		.create( document.querySelector( '#editor' ) )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( err => {
			console.error( err.stack );
		} );
</script>
```

Or in your JavaScript application:

```js
import MinimalEditor from '@ckeditor/ckeditor5-minimal-editor';

// Or using the CommonJS version:
// const MinimalEditor = require( '@ckeditor/ckeditor5-minimal-editor' );

MinimalEditor
	.create( document.querySelector( '#editor' ) )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );
```