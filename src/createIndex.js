const createHeader = function(title, navItems) {
    let h = document.createElement("header");
    h.classList.add("header-bar");

    let name = document.createElement("span");
    name.classList.add("restaurant-name-heading");
    name.innerText = title;

    h.appendChild(name);
    h.appendChild(createNav(navItems));

    return h;
}

const createNav = function(items) {
    let nav = document.createElement("nav");
    nav.classList.add("header-nav")

    let navList = createLinksUnorderedList(items);
    nav.appendChild(navList);

    return nav;
}

const createLinksUnorderedList = function(items) {
    let list = document.createElement("ul");
    for (let item of items) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = item.href;
        a.innerText = item.innerText;
        li.appendChild(a);
        list.appendChild(li);
    }
    return list;
}

const createMain = function(posts) {
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
    createHeader,
    createMain
};