function onServerMessageReady(text) {
    document.querySelector('#server-message').innerHTML = text
}

function send_form(e) {
    e.preventDefault()
    document.querySelector('#server-message').innerHTML = 'Please wait...'
    const fname = document.querySelector('#firstName').value
    const surname = document.querySelector('#surname').value
    const email = document.querySelector('#email').value
    const message = document.querySelector('#message').value
    const postbody = JSON.stringify({
        fname: fname,
        surname: surname,
        email: email,
        message: message
    })
    fetch('/receive-newsletter', {
        method: 'POST',
        body: postbody,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(onResponse).then(onServerMessageReady)
}

function start_send() {
    const button = document.querySelector('#submit')
    button.addEventListener('click', send_form)
}