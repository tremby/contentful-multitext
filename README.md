# contentful-multitext

This is an extension for the [Contentful](https://www.contentful.com/) authoring environment.

It adds a new widget for "list of plain text entries" fields (that is, fields of type `Symbols`).
This widget allows adding, editing, reordering, and deleting entries.

It looks like this:

![screenshot](https://i.imgur.com/23kQz7C.png)

It's built with React and makes use of [React Sortable](https://github.com/clauderic/react-sortable-hoc).

## Installation

You'll need to build the project by installing dependencies then running `npm run build`.
The only necessary part of the output (which is put in the `build` directory) is the `index.html` file --
scripts and styles are inlined into this, as Contentful requires.

The best way to install is with the Contentful CLI;
[see their documentation](https://www.contentful.com/developers/docs/extensibility/ui-extensions/managing-a-ui-extension/).

## Development

1. Run `npm start` to start the dev server over HTTPS
2. Go to the local URL it gives you to accept the self-signed certificate
   (note that the extension will not work in this context)
3. Install the extension to your Contentful space but point to this local server
   ([see the docs](https://www.contentful.com/developers/docs/extensibility/ui-extensions/managing-a-ui-extension/#4-testing-from-a-local-development-environment))
4. Go look in Contentful at an entry which uses this extension
