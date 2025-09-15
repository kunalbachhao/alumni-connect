document.addEventListener("DOMContentLoaded", () => {
    const postInput = document.getElementById("postInput");
    const postButton = document.getElementById("postButton");
    const postsContainer = document.getElementById("postsContainer");

    // Load saved posts
    loadPosts();

    // Add new post
    postButton.addEventListener("click", () => {
        const text = postInput.value.trim();
        if (!text) return;

        const newPost = {
            author: "You",
            time: new Date().toLocaleString(),
            text
        };

        // Save to localStorage
        const posts = getPosts();
        posts.unshift(newPost); // latest first
        localStorage.setItem("forumPosts", JSON.stringify(posts));

        postInput.value = "";
        renderPosts(posts);
    });

    function getPosts() {
        try {
            return JSON.parse(localStorage.getItem("forumPosts")) || [];
        } catch {
            return [];
        }
    }

    function loadPosts() {
        renderPosts(getPosts());
    }

    function renderPosts(posts) {
        postsContainer.innerHTML = "";
        posts.forEach(p => {
            const div = document.createElement("div");
            div.className = "post-card";
            div.innerHTML = `
        <div class="post-header">
          <span class="post-author">${p.author}</span>
          <span class="post-time">${p.time}</span>
        </div>
        <div class="post-text">${p.text}</div>
      `;
            postsContainer.appendChild(div);
        });
    }
});
