// Functions or Methods
class Book {
  constructor(title, author, pages, read, img) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = read;
    this.imgSrc = img;
  }
//   static Function
  static addBookToLibrary(obj, arr) {
    let uuid = self.crypto.randomUUID();
    obj.id = uuid;
    arr.push(obj);
  }
// Public Function
  info = function () {
  this.haveRead = !this.haveRead;
};
}

function displayLibrary(Library) {
  container.innerHTML = "";

  for (const book of Library) {
    const lowerText = document.createElement("div");
    let bookItem = document.createElement("div");
    let bookTitle = document.createElement("h2");
    let bookAuthor = document.createElement("h3");
    let bookPages = document.createElement("p");
    let imagePreview = document.createElement("div");
    let readBook = document.createElement("button");
    let removeBtn = document.createElement("button");
    let topContain = document.createElement("div");

    bookItem.classList.add("item");
    bookItem.dataset.id = book.id;
    topContain.classList.add("topContain");
    lowerText.classList.add("lower");
    imagePreview.setAttribute("class", "imagePreview");
    removeBtn.setAttribute("class", "removeBtn");
    readBook.setAttribute("class", "reading");

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = "Pages : " + book.pages;
    removeBtn.textContent = "Remove";
    readBook.textContent = book.haveRead ? "Read" : "Not yet read";

    if (book.imgSrc) {
      const img = document.createElement("img");
      img.src = book.imgSrc;
      img.alt = book.title + " cover";
      imagePreview.innerHTML = "";
      imagePreview.appendChild(img);

      topContain.appendChild(imagePreview);
      bookTitle.classList.add("image-present");
    } else {
      imagePreview.innerHTML = "";
      topContain.classList.add("no-image");
    }

    topContain.appendChild(bookTitle);
    container.appendChild(bookItem);
    bookItem.appendChild(topContain);
    bookItem.appendChild(lowerText);
    lowerText.appendChild(bookAuthor);
    lowerText.appendChild(bookPages);
    lowerText.appendChild(readBook);
    lowerText.appendChild(removeBtn);
  }
}
const showDialog = (show) =>
  show ? bookDialog.showModal() : bookDialog.close();

// Variables
const myLibrary = [];
const bookDialog = document.querySelector("dialog");
const container = document.querySelector(".container");
const imageInput = document.querySelector("#imageInput");
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
  let imageFile = imageInput.files[0];
  const imageEntry = imageFile ? URL.createObjectURL(imageFile) : "";
  let book = new Book(
    titleEntry,
    authorEntry,
    pageEntry,
    isReadEntry,
    imageEntry
  );

  Book.addBookToLibrary(book, myLibrary);

  bookDialog.close();

  imageInput.value = "";
  authorInput.value = "";
  titleInput.value = "";
  pageInput.value = "";
  isBookReadInput.checked = false;

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

let book1 = new Book(
  "Code Geass",
  "Ichirō Ōkouchi",
  459,
  false,
  "images/Codegease.jpg"
);
let book2 = new Book(
  "FullMetal",
  "Hiromu Arakawa",
  329,
  true,
  "images/fullmetal.jpg"
);
let book3 = new Book(
  "Jujutsu Kaisen",
  "Gege Akutami",
  212,
  true,
  "images/Jujutsu_kaisen.jpg"
);
let book4 = new Book(
  "Hunter Hunter",
  "Yoshiro Togashi",
  563,
  false,
  "images/hunter x hunter.jpg"
);

Book.addBookToLibrary(book1, myLibrary);
Book.addBookToLibrary(book2, myLibrary);
Book.addBookToLibrary(book3, myLibrary);
Book.addBookToLibrary(book4, myLibrary);

console.log(myLibrary);

displayLibrary(myLibrary);
