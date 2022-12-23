const scriptURL = 'https://script.google.com/macros/s/AKfycbyAL1NVFqCdwDkXKe_hlwOVWbq9eOskcYM9gk3bHTfFmpNeokb51UqBVwmnSKFwr0OwIg/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})