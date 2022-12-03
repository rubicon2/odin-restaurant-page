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

const createNav = function(navItems) {
    let nav = document.createElement("nav");
    nav.classList.add("header-nav")

    let navList = createLinksUnorderedList(navItems);
    nav.appendChild(navList);

    return nav;
}

const createLinksUnorderedList = function(navItems) {
    let list = document.createElement("ul");
    for (let i = 0; i < navItems.length; i++) {
        let item = navItems[i];
        let li = document.createElement("li");
        let a = document.createElement("a");
        li.classList.add("tab");

        if (i === 0) {
            li.classList.add("tab-selected");
        }

        a.href = item.href;
        a.innerText = item.innerText;
        li.appendChild(a);
        list.appendChild(li);

        li.addEventListener("click", function() {
            selectTab(this);
        });
    }
    return list;
}

const selectTab = function(tab) {
    let allTabs = document.querySelectorAll(".tab");
    for (let t of allTabs) {
        t.classList.remove("tab-selected");
    }
    tab.classList.add("tab-selected");

}

export {
    createHeader
};