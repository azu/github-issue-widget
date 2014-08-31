# github-issue-widget

Showcase your Github(repository)'s issue list via iframe.

## Usage

This components are hosted via GitHub Pages, meaning all you need to do is include an iframe and you're set.
You can configure it with various options. Here's the include:

```html
<iframe src="https://azu.github.io/github-issue-widget/?user=efcl&repo=efcl.github.io&limit=3&random"
        allowtransparency="true" frameborder="0" scrolling="0" width="100%"></iframe>
```

### Parameters

- https://developer.github.com/v3/issues/#list-issues-for-a-repository

## Develop

Develop files are placed `src/`.

It's build by `gulp build` > `index.html`

``` sh
$ npm run build
# output to index.html
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT