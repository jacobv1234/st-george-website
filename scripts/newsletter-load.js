function onTextReady(text) {
    document.querySelector('body').innerHTML = text
    // setup other scripts (eventListeners)
    setup_navbar()
    start_send()
}

function onResponse(res) {
    return res.text()
}

fetch('/page-content/newsletter',{method:'GET'}).then(onResponse).then(onTextReady)