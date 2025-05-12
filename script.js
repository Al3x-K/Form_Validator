const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");

const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");


const CheckForm = input => 
{
    if (input.value === '') 
    {
        console.log("Please fill in all fields");
    }
}

sendBtn.addEventListener("click", (e) =>
{
    e.preventDefault();

    CheckForm(username);

});

clearBtn.addEventListener("click", (e) => 
{
    e.preventDefault();

    [username, password, password2, email].forEach(el => 
    {
        el.value = "";
    })
});

