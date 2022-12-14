console.log("Welcome to console");

//Constructor 
function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
 }

 //Display Constructor
function Display(){

}

//Add methods to display prototype
Display.prototype.add=function(book){
    console.log("Adding to UI");
    let tableBody=document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
                    tableBody.innerHTML+=uiString;
}
//Implement the clear function
Display.prototype.clear=function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset()
}
//Implement the validate function
Display.prototype.validate=function(book){
if (book.name.length<2||book.author.length<2){
    return false;
}
else
{
    return true;
}
}
Display.prototype.show=function(type,displayMessage){
  let message=document.getElementById('message');
  message.innerHTML =`<div class="alert alert-${type}" role="alert">${displayMessage}</div>
                    `;
                    setTimeout(function(){
                        message.innerHTML=''},2000);
}
//Add submit event Listener to ibraryyForm
let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e){
    console.log("submitted");
    let name=document.getElementById('bookName').value;
    let author=document.getElementById('author').value;
    let fiction=document.getElementById('fiction');
    let programmming=document.getElementById('programming');
    let cooking=document.getElementById('cooking');
    let type;
    if(fiction.checked){
        type=fiction.value;
    }
    else if (programmming.checked) {
      type = programmming.value;
    }
    else if(cooking.checked) {
      type = cooking.value;
    }

    let book=new Book(name,author,type);
    console.log(book);
    let display=new Display();
    if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('success','Your book has been succesfully added');
    }else
    {
        //show error to the user
        display.show('danger','Sorry you cannot add this book.');
    }
    e.preventDefault();
}