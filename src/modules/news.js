import pizzaBurger from "../img/pizza-burger.jpeg";
import toilet from "../img/toilet.jpg";

let content = document.querySelector("#content");

const createNews = function() {

    let posts = [
        {
            title: "The only place you can grab a slice while shopping for a new toilet!",
            paragraphs: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            ],
            img: pizzaBurger,
        },
        {
            title: "Ham and Pineapple toilet controversially voted best flavour",
            paragraphs: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            ],
            img: toilet
        },
    ];

    let main = document.createElement("main");
    for(let post of posts) {
        main.appendChild(createMainSection(post));
    }
    content.appendChild(main);
};

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
};

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
};