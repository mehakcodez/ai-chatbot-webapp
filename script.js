const chatbox = document.getElementById("chatbox");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text,type){

const msg = document.createElement("div");
msg.classList.add("message",type);
msg.innerText = text;

chatbox.appendChild(msg);

chatbox.scrollTop = chatbox.scrollHeight;

}

async function fetchAnswer(question){

try{

const url =
"https://en.wikipedia.org/api/rest_v1/page/summary/" +
encodeURIComponent(question);

const res = await fetch(url);

const data = await res.json();

if(data.extract){
return data.extract.substring(0,180) + "...";
}

return "I couldn't find a clear answer.";

}

catch{

return "Unable to fetch information right now.";

}

}

async function sendMessage(){

const text = input.value.trim();

if(text === "") return;

addMessage(text,"user");

input.value = "";

addMessage("Searching...","bot");

const answer = await fetchAnswer(text);

chatbox.lastChild.innerText = answer;

}

sendBtn.addEventListener("click",sendMessage);

input.addEventListener("keypress",function(e){

if(e.key === "Enter"){
sendMessage();
}

});
