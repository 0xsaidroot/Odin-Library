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

        const lowerText = document.createElement('div');
        let bookItem = document.createElement('div');
        let bookTitle = document.createElement('h2');
        let bookAuthor = document.createElement('h3');
        let bookPages = document.createElement('p');
        let readBook = document.createElement('p');
        let removeBtn = document.createElement('button');


        bookItem.classList.add('item');
        bookItem.dataset.id = book.id;
        lowerText.classList.add('lower');
        removeBtn.setAttribute('class', 'removeBtn')


        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        removeBtn.textContent = 'Remove';
        readBook.textContent = (book.haveRead) ? 'Read' : 'Not yet read';

        container.appendChild(bookItem);
        bookItem.appendChild(bookTitle);
        bookItem.appendChild(lowerText);
        lowerText.appendChild(bookAuthor);
        lowerText.appendChild(bookPages);
        lowerText.appendChild(readBook);
        lowerText.appendChild(removeBtn);
    }
}
const showDialog = (show) => show ? bookDialog.showModal() : bookDialog.close();

// Variables
const myLibrary = [];
const bookDialog = document.querySelector('dialog');
const container = document.querySelector('.container');

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pageInput = document.querySelector('#pages');
const addBtn = document.querySelector('#addBook');


addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let authorEntry = authorInput.value;
    let titleEntry = titleInput.value;
    let pageEntry = pageInput.Input;
    let book = new Book(titleEntry, authorEntry, pageEntry, false);
    addBookToLibrary(book, myLibrary);
    bookDialog.close();

    displayLibrary(myLibrary);

});
container.addEventListener('click', (event) => {
    let target = event.target;

   if(target.className === 'removeBtn'){
    let item = target.closest('.item');
    
    for (let index = 0; index < myLibrary.length; index++) {
        const element = myLibrary[index];
        if(element.id === item.dataset.id){
            myLibrary.splice(index,1);
            displayLibrary(myLibrary);
        }
        }
   }
   return;


})


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

