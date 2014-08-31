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

Name | Type | Description
-----|------|--------------
`user`|`string`| **Required**. Repository's user name. Example:  **azu**
`repo`|`string`| **Required**. Repository name. Example: **github-issue-widget**
`limit`|`integer`| Only issues limited number are showed. Default : 1
`random`|`bool`| If the param is set, randomize response issue list. Default : false
`milestone`|`string`| If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.
`state`|`string`| Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`. Default: `open`
`assignee`|`string`| Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.
`creator`|`string`| The user that created the issue.
`mentioned`|`string`| A user that's mentioned in the issue.
`labels`|`string`| A list of comma separated label names.  Example: `bug,ui,@high`
`sort`|`string`|  What to sort results by. Can be either `created`, `updated`, `comments`. Default: `created`
`direction`|`string`| The direction of the sort. Can be either `asc` or `desc`. Default: `desc`
`since`|`string` |Only issues updated at or after this time are returned. This is a timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.

via https://developer.github.com/v3/issues/#list-issues-for-a-repository

### Example

Show latest issue at random.

```html
<iframe src="https://azu.github.io/github-issue-widget/?user=efcl&repo=efcl.github.io&random"
        allowtransparency="true" frameborder="0" scrolling="0" width="100%"></iframe>
```

Show closed issues.

```html
<iframe src="https://azu.github.io/github-issue-widget/?user=efcl&repo=efcl.github.io&limit=10&state=closed"
        allowtransparency="true" frameborder="0" scrolling="0" width="100%"></iframe>
```


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