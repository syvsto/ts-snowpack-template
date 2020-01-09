# Typescript Project Template

This template uses the new `snowpack` instead of a bundler to convert
Node modules for use in the browser. `TypeScript` has been installed
and set up for use with `snowpack`.  Additionally, `babel` is included
to flexibly transpile the TypeScript into Javascript.

`npx serve` can be used to serve the files.

## Commands

To install new dependencies, use the normal `npm install ...`
commands, then run `npx snowpack`.

 * `npm run build`: Start the babel watcher, which will automatically compile the code.
 * `npm run check`: Run the TypeScript checker.
