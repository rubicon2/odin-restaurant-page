import "./style.css";

import { createHeader } from "./modules/header";
import { createNews } from "./modules/news";
import { createMenu } from "./modules/menu";
import { createBookingScreen } from "./modules/book";

const content = document.querySelector("#content");

content.appendChild(createHeader("TOILET PIZZA PLAZA", [
    { href: "#", innerText: "News", onclick: createNews },
    { href: "#", innerText: "Menu", onclick: createMenu },
    { href: "#", innerText: "Book", onclick: createBookingScreen }
]));

createNews();
