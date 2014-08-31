"use strict";
var params = function () {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0, length = hashes.length; i < length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        // support pram without value
        vars[hash[0]] = hash[1] || true;
    }
    // default : state is `"open"`
    if (typeof vars["state"] === "undefined") {
        vars["state"] = "open";
    }
    // default : limit is `"1"`
    if (typeof vars["limit"] === "undefined") {
        vars["limit"] = "1";
    }
    // default : random is `"false"`
    if (typeof vars["random"] !== "undefined") {
        vars["random"] = true;
    }
    return vars;
}();

function loadJSONP(path, callbackName) {
    var head = document.getElementsByTagName('head')[0];
    var el = document.createElement('script');
    el.src = path + '&callback=' + callbackName;
    head.insertBefore(el, head.firstChild);
}
// http://bost.ocks.org/mike/shuffle/
function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}
function APICallback(results) {
    var content = document.getElementById("js-main-content");
    var resultDataList = params["random"] ? shuffle(results.data) : results.data;
    var ul = document.createElement("ul");
    var paramLimit = parseInt(params["limit"], 10);
    var limit = Math.min(paramLimit, resultDataList.length);
    for (var i = 0; i < limit; i++) {
        var issue = resultDataList[i];
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = issue.html_url;
        a.textContent = issue.title;
        a.setAttribute("target", "_blank");
        li.appendChild(a);
        ul.appendChild(li);
    }
    content.appendChild(ul);
}
(function main() {
    // https://developer.github.com/v3/issues/#list-issues-for-a-repository
    var APIQueryKeyList = [
        "milestone", "state", "assignee", "creator", "mentioned", "labels", "sort", "direction", "since"
    ];
    var isAPIQueryKey = function (key) {
        return  APIQueryKeyList.indexOf(key) !== -1;
    };
    // key=value
    var APIQuery = Object.keys(params)
        .filter(isAPIQueryKey)
        .map(function (key) {
            return key + "=" + params[key];
        });
    //  /repos/:owner/:repo/issues
    var APIEndPoint = 'https://api.github.com/repos/' + params.user + '/' + params.repo + '/issues'
        + '?' + APIQuery.join("&");
    loadJSONP(APIEndPoint, "APICallback");
})();