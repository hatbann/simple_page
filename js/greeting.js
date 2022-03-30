const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const login = document.querySelector('.login');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const FLEX_CLASSNAME = 'flex';
const USERNAME_KEY = 'username';

//Greeting 표시하기
function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//Login 하기
function loginSubmit(event) {
  console.dir(event);
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  login.classList.remove(FLEX_CLASSNAME);
  loginForm.classList.remove(FLEX_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); //show the form
  loginForm.addEventListener('submit', loginSubmit);
} else {
  login.classList.remove(FLEX_CLASSNAME);
  loginForm.classList.remove(FLEX_CLASSNAME);
  paintGreetings(); //show the greetings
}
