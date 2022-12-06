const content = document.querySelector("#content");

const createMenu = function() {
    let main = document.createElement("main");
    main.classList.add("menu");

    main.appendChild(createStarters());
    main.appendChild(createMains());

    content.appendChild(main);
};

const createStarters = function() {
    let starters = createMenuSection();
    appendH2(starters, "Starters");
    starters.appendChild(createMenuItem("Toilet Soup", "2.90", "Our famous hearty soup. A pick me up at any time of year. Served with a chunky slice of toilet bread."));
    starters.appendChild(createMenuItem("Bleached Mushrooms", "4.50", "Mushrooms grilled and then doused in our delicious bleach-flavoured sauce."));
    return starters; 
};

const createMains = function() {
    let mains = createMenuSection();
    appendH2(mains, "Mains");
    mains.appendChild(createMenuItem("Toilet Pizza", "11.90", "Pizza dough created using our patented toilet-fermentation process and then stone baked to perfection."));
    mains.appendChild(createMenuItem("Marinated Loaf", "7.50", "Tender loaf deep fried and then marinated in our special Toilet Sauce."));
    mains.appendChild(createMenuItem("Plate of Brown", "8.50", "Exactly as it sounds."));
    return mains;
};

const createMenuSection = function() {
    let menuSection = document.createElement("div");
    menuSection.classList.add("menu-course");
    return menuSection;
};

const createMenuItem = function(itemName, itemPrice, itemDescription) {
    let menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    
    let itemNameSpan = document.createElement("span");
    itemNameSpan.innerText = itemName;

    let itemPriceSpan = document.createElement("span");
    itemPriceSpan.classList.add("menu-item-price");
    itemPriceSpan.innerText = itemPrice;

    let itemDescriptionSmall = document.createElement("small");
    itemDescriptionSmall.classList.add("menu-item-description");
    itemDescriptionSmall.innerText = itemDescription;

    menuItem.appendChild(itemNameSpan);
    menuItem.appendChild(itemPriceSpan);
    menuItem.appendChild(itemDescriptionSmall)

    return menuItem;
};

const appendH2 = function(parent, text) {
    let h2 = document.createElement("h2");
    h2.innerText = text;
    parent.appendChild(h2);
}

export {
    createMenu
};