var app = document.getElementById('app');
var newMessages = require('./messages');
//import Button from './Button';
import  { multiplyStuff } from './mathStuff';

var style = require('./style/globalStyle.css');

//import eshop from './Image';

//app.innerHTML = `<p>${newMessages.hi}  ${newMessages.event}</p>`;
//app.innerHTML = `<p> ${Button.button}</p>`;


var newMessage = multiplyStuff(3,3);
app.innerHTML = `3 * 3 is ${newMessage} `;

//app.innerHTML = `<p> ${eshop} </p>`;

//Button.attachEl();

if(module.hot) {
    module.hot.accept();
}