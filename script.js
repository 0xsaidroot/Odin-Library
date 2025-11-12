// Functions or Methods
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = read;
}
function addBookToLibrary(obj, arr) {
    let uuid = self.crypto.randomUUID();
    obj.id = uuid;
    arr.push(obj);
}
function displayLibrary(Library) {
    container.innerHTML = "";

    for (const book of Library) {
        const lowerText = document.createElement("div");
        let bookItem = document.createElement("div");
        let bookTitle = document.createElement("h2");
        let bookAuthor = document.createElement("h3");
        let bookPages = document.createElement("p");
        let imagePreview = document.createElement('div');
        let readBook = document.createElement("button");
        let removeBtn = document.createElement("button");
        let topContain = document.createElement('div');

        bookItem.classList.add("item");
        bookItem.dataset.id = book.id;
        topContain.classList.add('topContain')
        lowerText.classList.add("lower");
        imagePreview.setAttribute('class','imagePreview');
        removeBtn.setAttribute("class", "removeBtn");
        readBook.setAttribute("class", "reading");

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        removeBtn.textContent = "Remove";
        readBook.textContent = book.haveRead ? "Read" : "Not yet read";

        // If book has an image (data URL), display it inside imagePreview
        if (book.image) {
            const img = document.createElement('img');
            img.src = book.image;
            img.alt = book.title + ' cover';
            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);
        } else {
            imagePreview.innerHTML = '';
        }

        container.appendChild(bookItem);
        topContain.appendChild(bookTitle);
        bookItem.appendChild(topContain)
        bookItem.appendChild(lowerText);
        topContain.appendChild(imagePreview);
        lowerText.appendChild(bookAuthor);
        lowerText.appendChild(bookPages);
        lowerText.appendChild(readBook);
        lowerText.appendChild(removeBtn);
    }
}
const showDialog = (show) =>
    show ? bookDialog.showModal() : bookDialog.close();

Book.prototype.info = function () {
    this.haveRead = !this.haveRead;
};
// Variables
const myLibrary = [];
const bookDialog = document.querySelector("dialog");
const container = document.querySelector(".container");
const imageInput =document.querySelector('#imageInput'); 
const isBookReadInput = document.querySelector("#isRead");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pageInput = document.querySelector("#pages");
const addBtn = document.querySelector("#addBook");

addBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let authorEntry = authorInput.value;
    let titleEntry = titleInput.value;
    let pageEntry = pageInput.value;
    let isReadEntry = isBookReadInput.checked ? true : false;
    let book = new Book(titleEntry, authorEntry, pageEntry, isReadEntry);

    const file = imageInput.files && imageInput.files[0];
    if (file) {
        if (file.type && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                book.image = e.target.result; // data URL
                addBookToLibrary(book, myLibrary);
                bookDialog.close();

                authorInput.value = "";
                titleInput.value = "";
                pageInput.value = "";
                isBookReadInput.checked = false;
                imageInput.value = "";

                displayLibrary(myLibrary);
            }
            reader.readAsDataURL(file);
            return; // wait for FileReader to finish
        } else {
            console.warn('Selected file is not an image. Ignoring file.');
        }
    }

    // No image selected or invalid file type
    addBookToLibrary(book, myLibrary);
    bookDialog.close();

    authorInput.value = "";
    titleInput.value = "";
    pageInput.value = "";
    isBookReadInput.checked = false;
    imageInput.value = "";

    displayLibrary(myLibrary);
});
container.addEventListener("click", (event) => {
    let target = event.target;

    if (target.className === "removeBtn") {
        let item = target.closest(".item");

        for (let index = 0; index < myLibrary.length; index++) {
            const element = myLibrary[index];

            if (element.id === item.dataset.id) {
                myLibrary.splice(index, 1);
                displayLibrary(myLibrary);
            }

        }
    } else if (target.className === "reading") {
        let item = target.closest(".item");

        for (let index = 0; index < myLibrary.length; index++) {
            const element = myLibrary[index];
            if (element.id === item.dataset.id) {
                element.info();

                displayLibrary(myLibrary);
            }
        }


    }
    return;
});
// We read the selected file when the user clicks Add (using FileReader)
// so no per-input handler is required here. If you want a live preview
// inside the dialog before Add, we can add a preview element to the form
// and set its src here.


let book1 = new Book(",o", "ij", "bgbunun", false);
let book2 = new Book(",o", "ij", "unun", false);
let book3 = new Book(",o", "ij", "unun", false);
let book4 = new Book(",o", "ij", "unun", false);

addBookToLibrary(book1, myLibrary);
addBookToLibrary(book2, myLibrary);
addBookToLibrary(book3, myLibrary);
addBookToLibrary(book4, myLibrary);
addBookToLibrary(book1, myLibrary);
addBookToLibrary(book1, myLibrary);



console.log(myLibrary);

displayLibrary(myLibrary);
