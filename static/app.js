let btn = document.querySelector("#btn");
let messages = document.querySelector("#chatMessages");
let input = document.querySelector("#userinput");

// Input message(user/ai)
function addMsg(text, isUser) {
  const div = document.createElement("div");
  div.className = "msg" + (isUser ? " user" : "");
  div.innerHTML = `
  <div class="msg-avatar ${isUser ? "user-avatar" : "ai-avatar"}">
    ${isUser ? "U" : "N"} 
  </div>

  <div class="msg-bubble ${isUser ? "user-bubble" : "ai-bubble"}">
    ${isUser ? text : marked.parse(text)}
  </div>
  `;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

// show typing indicator
function showTyping() {
  const div = document.createElement("div");
  div.className = "msg";
  div.id = "typingIndicator";

  div.innerHTML = `
  <div class="msg-avatar ai-avatar">N</div>
  <div class="msg-bubble ai-bubble typing">
    <span></span>
    <span></span>
    <span></span>
  </div>
  `;

  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

// remove typing indicator
function removeTyping() {
  const t = document.getElementById("typingIndicator");
  if (t) t.remove();
}

// send message
btn.addEventListener("click", sendMessage);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});

// response from ai
async function sendMessage() {
  const msg = input.value.trim();

  if (!msg) return;
  addMsg(msg, true);

  input.value='';
  showTyping();

  const response = await fetch("/chat", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ message: msg }),
  });

  const data = await response.json();

  removeTyping();

  addMsg(data.reply, false);
}
