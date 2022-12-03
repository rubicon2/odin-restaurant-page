const createNews = function(posts) {
    let main = document.createElement("main");
    for(let post of posts) {
        main.appendChild(createMainSection(post));
    }
    return main;
}

const createMainSection = function(postContent) {
    let s = document.createElement("section");
    s.classList.add("main-section");

    let h2 = document.createElement("h2");
    h2.innerText = postContent.title;
    s.appendChild(h2);

    let content = document.createElement("div");
    content.classList.add("post-content");
    s.appendChild(content);

    content.appendChild(createPostText(postContent.paragraphs));

    if (postContent.img != undefined) {
        let img = document.createElement("img");
        img.classList.add("main-img");
        img.src = postContent.img;
        content.appendChild(img);
    }

    return s;
}

const createPostText = function(paragraphs) {
    let postText = document.createElement("div");
    for (let p of paragraphs) {
        let pElement = document.createElement("p");
        pElement.innerText = p;
        postText.appendChild(pElement);
    }
    return postText;
};

export {
    createNews
}