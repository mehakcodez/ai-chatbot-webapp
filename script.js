const chatbox = document.getElementById("chatbox");

function addMessage(text, className){

const message = document.createElement("div");
message.classList.add("message", className);
message.innerText = text;

chatbox.appendChild(message);
chatbox.scrollTop = chatbox.scrollHeight;

}

function botReply(userText){

userText = userText.toLowerCase();

if(userText.includes("hello") || userText.includes("hi")){
return "Hello! How can I help you?";
}

else if(userText.includes("your name")){
return "I am a simple AI chatbot.";
}

else if(userText.includes("time")){
return "Current time is " + new Date().toLocaleTimeString();
}

else if(userText.includes("date")){
return "Today is " + new Date().toDateString();
}

else if(userText.includes("who made you")){
return "I was created by Mehak.";
}

else{
return "Sorry, I don't understand that yet.";
}

}

function sendMessage(){

const input = document.getElementById("userInput");
const userText = input.value.trim();

if(userText === "") return;

addMessage(userText,"user");

setTimeout(()=>{

const reply = botReply(userText);
addMessage(reply,"bot");

},500);

input.value = "";

}
