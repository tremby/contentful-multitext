# contentful-multitext

This is an extension for the [Contentful](https://www.contentful.com/) authoring environment.

It adds a new widget for "list of plain text entries" fields (that is, fields of type `Symbols`).
This widget allows adding, editing, reordering, and deleting entries.

It looks like this:

![screenshot](https://i.imgur.com/23kQz7C.png)

It's built with React and makes use of [React Sortable](https://github.com/clauderic/react-sortable-hoc).

## Installation

The [`extension.json`](/extension.json) file in the repository is set up to point to [unpkg](https://unpkg.com/),
which acts as a CDN for the latest version of this extension published to NPM.

This means all you have to do is point Contentful to this to this the `extension.json` file:

1. Space settings
2. "Add extension" button
3. Install from Github
4. `tremby/contentful-multitext/blob/master/extension.json`
5. "Install" button

## Development

1. Run `npm start` to start the dev server over HTTPS
2. Go to the local URL it gives you to accept the self-signed certificate
   (note that the extension will not work in this context)
3. Install the extension to your Contentful space but point to this local server:

       contentful extension create --space-id $SPACE_ID --src https://localhost:3000

   If you've previously installed this way you'll need to use the `update` command instead:

       contentful extension update --space-id $SPACE_ID --src https://localhost:3000 --force

   [See the docs](https://www.contentful.com/developers/docs/extensibility/ui-extensions/managing-a-ui-extension/#4-testing-from-a-local-development-environment)
   for more details.
4. Go look in Contentful at an entry which uses this extension

## Publication

1. Make and commit all changes
2. Bump version by running `npm version` with relevant arguments;
   this will make another commit and a tag
3. Push the commits and tags
4. Run `npm publish` to build, package, and publish
