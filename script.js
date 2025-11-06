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
    for (const book of Library) {

        const lowerText = document.createElement('div');
        let bookItem = document.createElement('div');
        let bookTitle = document.createElement('h2');
        let bookAuthor = document.createElement('h3');
        let bookPages = document.createElement('p');
        let readBook = document.createElement('p');
       

        bookItem.classList.add('item');
        lowerText.classList.add('lower');


        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        readBook.textContent = (book.haveRead) ? 'Read' : 'Not yet read';

        container.appendChild(bookItem);
        bookItem.appendChild(bookTitle);
        bookItem.appendChild(lowerText);
        lowerText.appendChild(bookAuthor);
        lowerText.appendChild(bookPages);
        lowerText.appendChild(readBook);
    }
}

const myLibrary = [];
const bookDialog = document.querySelector('dialog');
const container = document.querySelector('.container')
const showDialog = (show) => show ? bookDialog.showModal() : bookDialog.close();


let book1 = new Book(',o', 'ij', 'bgbunun', false);
let book2 = new Book(',o', 'ij', 'unun', false);
let book3 = new Book(',o', 'ij', 'unun', false);
let book4 = new Book(',o', 'ij', 'unun', false);



addBookToLibrary(book1, myLibrary);
addBookToLibrary(book2, myLibrary);
addBookToLibrary(book3, myLibrary);
addBookToLibrary(book4, myLibrary);


console.log(myLibrary);

displayLibrary(myLibrary);

