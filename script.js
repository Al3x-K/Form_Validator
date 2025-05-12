const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');

const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup')

const showError = (input, msg) => 
{
    const formBox = input.parentElement;    // Get the parent element of the input field
    const errorMsg = formBox.querySelector('.error-text');

    formBox.classList.add('error'); // Add the error class to the parent element
    errorMsg.textContent = msg;
}

const clearError = (input) => 
{
    const formBox = input.parentElement;
    formBox.classList.remove('error'); // Remove the error class from the parent element
}

const checkForm = input => 
{
    input.forEach(el =>   // Loop through each input field  
    {
        if (el.value === '') 
        {
            showError(el, el.placeholder)   // Show error if the input is empty
        } 
        else 
        {
            clearError(el)
        };
    });
};

const checkLength = (input, min) => 
{
    if (input.value.length < min) 
    {
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} should contain at least ${min} characters.`)// Check if the input length is less than the minimum
    }
}

const checkPassword = (password, password2) => 
{
    if (password.value !== password2.value) 
    {
        showError(password2, 'Passwords do not match')
    }
}

const checkEmail = email => 
{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Regular expression for email validation

    if (re.test(email.value)) 
    {
        clearError(email)
    } 
    else 
{
        showError(email, 'Email is not valid')
    }
}

const checkErrors = () => 
{

    const allInputs = document.querySelectorAll('.form-box');
    let errorCount = 0;

    allInputs.forEach(el => 
    {
        if (el.classList.contains('error')) 
        {
            errorCount++
        }
    })

    if (errorCount === 0) 
    {
        popup.classList.add('show-popup')
    }
}


sendBtn.addEventListener('click', e => 
{
    e.preventDefault();

    checkForm([username, password, password2, email]) // Check if all inputs are filled
    checkLength(username, 3); // Check username length
    checkLength(password, 8); // Check password length
    checkPassword(password, password2) // Check if passwords match
    checkEmail(email);// Check if email is valid
    checkErrors()// Check if there are any errors
    // If there are no errors, show the popup

})

clearBtn.addEventListener('click', e => 
{
    e.preventDefault();

    [username, password, password2, email].forEach(el => 
    {
        el.value = ''
        clearError(el)
    })
})