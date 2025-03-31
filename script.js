function postMessage() {
    let text = document.querySelector(".post-box textarea").value;
    if (text.trim() === "") return;

    let post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `
        <p>${text}</p>
        <button onclick="likePost(this)">Like</button> <span>0</span> Likes
    `;

    document.getElementById("posts").prepend(post);
    document.querySelector(".post-box textarea").value = "";
}

function likePost(button) {
    let span = button.nextElementSibling;
    let likes = parseInt(span.innerText);
    span.innerText = likes + 1;
}
