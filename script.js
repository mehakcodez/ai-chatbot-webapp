const chatbox = document.getElementById("chatbox");

function addMessage(text,type){

const msg = document.createElement("div");
msg.classList.add("message",type);
msg.innerText = text;

chatbox.appendChild(msg);
chatbox.scrollTop = chatbox.scrollHeight;

}

function getAnswer(text){

text = text.toLowerCase();

/* greetings */

if(text.includes("hello") || text.includes("hi"))
return "Hello! Ask me anything.";

/* programming */

if(text.includes("html"))
return "HTML creates the structure of websites.";

if(text.includes("css"))
return "CSS styles websites and controls layout.";

if(text.includes("javascript"))
return "JavaScript adds interactivity to web pages.";

if(text.includes("python"))
return "Python is a versatile programming language used for AI, web, and automation.";

if(text.includes("github"))
return "GitHub is a platform for hosting and sharing code repositories.";

/* technology */

if(text.includes("ai"))
return "Artificial Intelligence allows machines to learn and solve problems.";

if(text.includes("internet"))
return "The internet connects computers worldwide to share information.";

if(text.includes("computer"))
return "A computer processes data and performs calculations.";

/* science */

if(text.includes("earth"))
return "Earth is the third planet from the Sun and supports life.";

if(text.includes("sun"))
return "The Sun is the star at the center of our solar system.";

if(text.includes("moon"))
return "The Moon is Earth's natural satellite.";

/* geography */

if(text.includes("india"))
return "India is a country in South Asia and the world's largest democracy.";

if(text.includes("punjab"))
return "Punjab is a state in northern India known for agriculture.";

/* time */

if(text.includes("time"))
return "Current time: " + new Date().toLocaleTimeString();

if(text.includes("date"))
return "Today is " + new Date().toDateString();

/* fallback */

return "I don't have full information about that yet, but I'm still learning.";

}

function sendMessage(){

const input = document.getElementById("userInput");
const text = input.value.trim();

if(text === "") return;

addMessage(text,"user");

setTimeout(()=>{
addMessage(getAnswer(text),"bot");
},400);

input.value="";

}
