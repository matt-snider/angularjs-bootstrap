# angularjs-bootstrap

A [Bootstrap](https://getbootstrap.com) based component library for [AngularJS](https://angularjs.org/).

## Installation
Install `angularjs-bootstrap` with npm. The library additionally requires
* angularjs >= 1.6.0
* angular-animate >= 1.6.0
* angular-messages >= 1.6.0
* bootstrap (just for css) >= 4.0.0

Make sure `angularjs-bootstrap.js` (or `.min.js`) and `angularjs-bootstrap.main.css` are both imported by your app.

## Development
* Install via `npm install`
* Start docs in a webpack dev server with `npm start` (this is a good way to interactively build/change new components)


## Publishing to Github Pages

On the first checkout or docs deployment, ensure that a git worktree exists for the `gh-pages` branch:

```sh
$ git worktree add dist gh-pages
```

After that simply deploy via:

```sh
$ ./publish-docs.sh
```

