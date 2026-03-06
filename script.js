const chatbox = document.getElementById("chatbox");

function addMessage(text, className){
const message = document.createElement("div");
message.classList.add("message", className);
message.innerText = text;
chatbox.appendChild(message);
chatbox.scrollTop = chatbox.scrollHeight;
}

const knowledge = {

hello:"Hello! Ask me any question.",
hi:"Hi! How can I help you?",
howareyou:"I'm fine. How can I assist you?",

internet:"The internet is a global network that connects millions of computers.",
google:"Google is a search engine used to find information on the internet.",
github:"GitHub is a platform for hosting and sharing code repositories.",
html:"HTML is used to create the structure of web pages.",
css:"CSS is used to style and design web pages.",
javascript:"JavaScript adds interactivity to websites.",
python:"Python is a popular programming language used for web, AI, and automation.",

computer:"A computer is an electronic device that processes data.",
ai:"Artificial Intelligence allows machines to simulate human intelligence.",
robot:"A robot is a machine that can perform tasks automatically.",

earth:"Earth is the third planet from the Sun and supports life.",
sun:"The Sun is the star at the center of our solar system.",
moon:"The Moon is Earth's natural satellite.",

india:"India is a country in South Asia and the world's largest democracy.",
punjab:"Punjab is a state in northern India known for agriculture and culture.",

time:"Current time is " + new Date().toLocaleTimeString(),
date:"Today is " + new Date().toDateString()
};

function findAnswer(text){

text = text.toLowerCase();

for(let key in knowledge){
if(text.includes(key)){
return knowledge[key];
}
}

return null;
}

function sendMessage(){

const input = document.getElementById("userInput");
const userText = input.value.trim();

if(userText === "") return;

addMessage(userText,"user");

setTimeout(()=>{

const answer = findAnswer(userText);

if(answer){
addMessage(answer,"bot");
}
else{

addMessage("I don't know that yet. Searching Google...","bot");
window.open("https://www.google.com/search?q=" + userText);

}

},500);

input.value="";

}
