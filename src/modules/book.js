const content = document.querySelector("#content");

const createBookingScreen = function() {
    let main = document.createElement("main");
    main.classList.add("booking");

    let bookingForm = createBookingForm();

    main.appendChild(bookingForm);
    content.appendChild(main);
};

const createBookingForm = function() {
    let form = document.createElement("form");
    form.classList.add("booking-form");
    form.method = "post";
    form.action = "";

    form.appendChild(createFormItem("Name", "name", "name", true).formItem);

    let tableSize = createTableSizeInput();
    form.appendChild(tableSize);

    form.appendChild(createCalendarInput());

    let submitButton = createButton("submit", "Submit");
    submitButton.classList.add("submit-button");
    form.appendChild(submitButton);

    return form;
}

const createButton = function(type = "button", text) {
    let button = document.createElement("button");
    button.type = type;
    button.innerText = text;
    return button;
}

const createCalendarInput = function() {
    let calendar = createFormItem("Date", "date", "datetime-local", true);
    return calendar.formItem;
}

const createTableSizeInput = function() {
    let tableSize = createFormItem("Table Size", "table-size", "number", true);
    tableSize.input.value = 2;
    tableSize.input.min = 1;
    tableSize.input.max = 10;
    return tableSize.formItem;
}

const createFormItem = function(labelName = "New Input", inputName, inputType = "text", isRequired) {
    let formItem = document.createElement("div");
    formItem.classList.add("form-item");

    let inputField = document.createElement("input");
    inputField.type = inputType;
    inputField.id = inputName;
    inputField.name = inputName;
    inputField.required = Boolean(isRequired);

    let inputLabel = document.createElement("label");
    inputLabel.innerText = labelName;
    inputLabel.for = inputName;

    formItem.appendChild(inputLabel);
    formItem.appendChild(inputField);

    return {
        formItem: formItem,
        label: inputLabel,
        input: inputField
    };
};

export {
    createBookingScreen
};