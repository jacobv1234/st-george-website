function onTextReady(text) {
    document.querySelector('body').innerHTML = text
    // setup navbar dropdown
    setup_navbar()
}

function onResponse(res) {
    return res.text()
}

fetch('/page-content/contents-1',{method:'GET'}).then(onResponse).then(onTextReady)