# contentful-multitext

This is an extension for the [Contentful](https://www.contentful.com/) authoring environment.

It adds a new widget for "list of plain text entries" fields (that is, fields of type `Symbols`).
This widget allows adding, editing, reordering, and deleting entries.

It looks like this:

![screenshot](https://i.imgur.com/23kQz7C.png)

It's built with React and makes use of [React Sortable](https://github.com/clauderic/react-sortable-hoc).

## Installation

In Contentful, navigate to Settings -> Extensions and click on Add Extension -> Install from Github

<img src="https://i.imgur.com/itYB3Ly.png" width="219">

In the next dialog box, paste in this url: 

```
https://github.com/tremby/contentful-multitext/blob/master/extension.json
``` 

and click install. 

<img src="https://i.imgur.com/ZXW3yWl.png" width="534">

Viola! Click close on the next screen and go to Content Types and change the appearance of a short text list field to the new Multitext extension.

## Development

1. Run `npm start` to start the dev server over HTTPS
2. Go to the local URL it gives you to accept the self-signed certificate
   (note that the extension will not work in this context)
3. Install the extension to your Contentful space but point to this local server
   ([see the docs](https://www.contentful.com/developers/docs/extensibility/ui-extensions/managing-a-ui-extension/#4-testing-from-a-local-development-environment))
4. Go look in Contentful at an entry which uses this extension
