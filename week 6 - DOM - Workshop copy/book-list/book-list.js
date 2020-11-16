


var books = [{
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    isRead: false

},


{

    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    isRead: true

},
{
    title: "A Playful Introduction to Programming ",
    author: "Nick Morgan",
    isRead: true
}
];

window.addEventListener("load", function () {
    var bookListSection = document.getElementById("bookList");
    var bookList = document.createElement('ul');
    bookListSection.appendChild(bookList);

    for (var i = 0; i < books.length; i++) {
        displayBook(books[i], bookList);

    };
    var addBookButton = document.getElementById("addNewBook");

    addNewBook.onclick = function () {

        var titleInput = document.getElementsByName("title")[0];
        var authorInput = document.getElementsByName("author")[0];

        //remove the errors, after the input has value
        document.getElementById("bookTitle").addEventListener("keypress", hideError);
        document.getElementById("bookAuthor").addEventListener("keypress", hideError);


        console.log(titleInput.value, authorInput.value,);


        //validateForm(newBook, bookList)
        //display errors, which indicates which field is not completed
        validateForm(bookList);

        displayBook(newBook, bookList)
        //reset the form after adding an item 
        document.getElementById("myForm").reset();

        //validate duplicate items, if the book already exist in the list 
        //(has the same name and author) display an error, also hide this error when the input's value change
        duplicateBook = (books, bookTitle, bookAuthor) => {
            for (i = 0; i < books.length; i++) {

                if (books[i].title === bookTitle && books[i].author === bookAuthor) {
                    document.getElementById("errorForm").innerHTML = "This book is alredy added!"
                    document.getElementById("errorForm").style.display = "block";
                    return true;
                }
            }
        };
        books.push(newBook);
    };
});

function displayBook(book, list) {
    var listItem = document.createElement("li");
    var bookTitle = document.createElement("p");
    var bookAuthor = document.createElement("p");
    var isRead = document.createElement("input");
    var isReadLabel = document.createElement("label")

    isRead.setAttribute("type", "checkbox");

    isRead.checked = book.isRead;

    bookTitle.innerText = "Title: " + book.title;
    bookAuthor.innerText = "Author: " + book.author;
    isReadLabel.innerText = " Already Read";

    listItem.append(bookTitle, bookAuthor, isRead, isReadLabel);


    list.appendChild(listItem);

};

function validateForm(bookA, bookT, newBook) {
    var returnValue;
    var bookT = document.getElementById("bookTitle").value;
    var bookA = document.getElementById("bookAuthor").value;

    var returnValue = true;
    if (bookT !== "" && bookA !== "") {
        document.getElementById("errorForm").style.display = "none";
        returnValue = true;


    } else if (bookT === "" && bookA === "") {
        document.getElementById("errorForm").style.display = "block";
        document.getElementById("errorForm").innerHTML = " Fields are Required";
        returnValue = false;
    }
    else if (bookT === "") {
        document.getElementById("errorForm").style.display = "block";
        document.getElementById("errorForm").innerHTML = " Title field Required";
        returnValue = false;

    } else if (bookA === "") {
        document.getElementById("errorForm").style.display = "block";
        document.getElementById("errorForm").innerHTML = " Author field Required";
        returnValue = false;
    } else {
        var newBook = {
            title: titleInput.value,
            author: authorInput.value,
            isRead: false,
        };

    }

    return returnValue;

};


function hideError() {
    document.getElementById("errorForm").style.display = "none";
};











