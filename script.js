const chatbox = document.getElementById("chatbox");

function addMessage(text,type){

const msg=document.createElement("div");
msg.classList.add("message",type);
msg.innerText=text;

chatbox.appendChild(msg);
chatbox.scrollTop=chatbox.scrollHeight;

}

async function getAnswer(question){

try{

const url="https://en.wikipedia.org/api/rest_v1/page/summary/"+encodeURIComponent(question);

const res=await fetch(url);
const data=await res.json();

if(data.extract){
return data.extract.substring(0,200)+"...";
}

return "I couldn't find a short answer for that.";

}

catch{

return "Unable to fetch information right now.";

}

}

async function sendMessage(){

const input=document.getElementById("userInput");
const text=input.value.trim();

if(text==="") return;

addMessage(text,"user");

addMessage("Searching...","bot");

const answer=await getAnswer(text);

chatbox.lastChild.innerText=answer;

input.value="";

}
