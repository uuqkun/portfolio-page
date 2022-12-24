const scriptURL = 'https://script.google.com/macros/s/AKfycbyAL1NVFqCdwDkXKe_hlwOVWbq9eOskcYM9gk3bHTfFmpNeokb51UqBVwmnSKFwr0OwIg/exec'
const form = document.forms['contact-form']
const sendBtn = document.querySelector('.send-btn');
const loadingBtn = document.querySelector('.loading-btn');
const alertMessage = document.querySelector('.alert-message')

form.addEventListener('submit', e => {
    e.preventDefault()

    sendBtn.classList.toggle('d-none')
    loadingBtn.classList.toggle('d-none')

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => { 
            sendBtn.classList.toggle('d-none')
            loadingBtn.classList.toggle('d-none')
            alertMessage.classList.toggle('d-none');

            form.reset();

            console.log('Success!', response) 
        })
        .catch(error => console.error('Error!', error.message))
})