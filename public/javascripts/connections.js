document.addEventListener("DOMContentLoaded", () => {
    const chatModal = document.getElementById("chatModal");
    const chatMessages = document.getElementById("chatMessages");
    const chatUserEl = document.getElementById("chatUser");
    const chatText = document.getElementById("chatText");
    const sendMessageBtn = document.getElementById("sendMessage");
    const closeChatBtn = document.getElementById("closeChat");
    const messageButtons = document.querySelectorAll(".message-btn");
    const connectionsList = document.getElementById("connectionsList");
    const searchInput = document.getElementById("searchConnections");

    let currentUser = null;

    // open chat
    messageButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".connection-card");
            const name = card.querySelector(".connection-info h3").innerText;
            openChat(name);
        });
    });

    function openChat(name) {
        currentUser = name;
        chatUserEl.textContent = `Chat with ${name}`;
        loadMessages(name);
        chatModal.style.display = "flex";
        chatText.focus();
    }

    // close chat
    closeChatBtn.addEventListener("click", closeChat);
    chatModal.addEventListener("click", e => {
        if (e.target === chatModal) closeChat();
    });
    function closeChat() {
        chatModal.style.display = "none";
        currentUser = null;
    }

    // storage
    function getStoredMessages(name) {
        try {
            return JSON.parse(localStorage.getItem("chat-" + name)) || [];
        } catch { return []; }
    }
    function saveStoredMessages(name, msgs) {
        localStorage.setItem("chat-" + name, JSON.stringify(msgs));
    }

    function loadMessages(name) {
        chatMessages.innerHTML = "";
        const msgs = getStoredMessages(name);
        msgs.forEach(m => appendMessageDom(m.text, m.from));
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function appendMessageDom(text, from) {
        const div = document.createElement("div");
        div.className = "message " + (from === "me" ? "sent" : "received");
        div.textContent = text;
        chatMessages.appendChild(div);
    }

    function sendMessage() {
        const txt = chatText.value.trim();
        if (!txt || !currentUser) return;
        appendMessageDom(txt, "me");
        const msgs = getStoredMessages(currentUser);
        msgs.push({ from: "me", text: txt });
        saveStoredMessages(currentUser, msgs);
        chatText.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            const reply = "Thanks — I'll get back to you soon.";
            appendMessageDom(reply, "them");
            const msgs2 = getStoredMessages(currentUser);
            msgs2.push({ from: "them", text: reply });
            saveStoredMessages(currentUser, msgs2);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1100);
    }

    sendMessageBtn.addEventListener("click", sendMessage);
    chatText.addEventListener("keydown", e => { if (e.key === "Enter") sendMessage(); });

    // search
    searchInput.addEventListener("input", () => {
        const q = searchInput.value.toLowerCase();
        Array.from(connectionsList.querySelectorAll(".connection-card")).forEach(card => {
            const name = card.querySelector("h3").innerText.toLowerCase();
            const details = card.querySelector("p").innerText.toLowerCase();
            card.style.display = (!q || name.includes(q) || details.includes(q)) ? "flex" : "none";
        });
    });
});
