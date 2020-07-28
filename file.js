addbtn = document.getElementsByClassName('add')[0];
delebtn=document.getElementsByClassName('delete')[0];
// console.log(addbtn)
shownotes();
addbtn.addEventListener('click', function (e) {
    addTxt = document.getElementsByClassName('addTxt')[0]
    notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = []
    }
    else {
        notesobj = JSON.parse(notes)
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj))
    addTxt.value ="";
    // console.log(notes);
    shownotes();
});
function shownotes(){
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = []
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = " ";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="column">
        <div class="card">
        <h3>Note - ${index + 1}</h3>
        <p>${element}</p>
        <a href="#" id="${index}" onclick="deleteNote(this.id)" class=" btn btn-primary btn2 delete">Delete</a>
      </div>
      </div>`

    });
    let notesElem = document.getElementById('notes');
    console.log(notesElem)
    if (notesElem.length != 0) {
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = `<h2>Add your notes</h2>`
    }
}
function deleteNote(index){
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = []
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj))
    shownotes();

}
search=document.getElementById('searchtxt');
search.addEventListener('input',function(e){
   let inputVal=search.value;
   console.log(inputVal);
   let notecard=document.getElementsByClassName("card");
   Array.from(notecard).forEach(function(element){
       let cardtxt=element.getElementsByTagName("p")[0].innerText;
       console.log(cardtxt);
       if(cardtxt.includes(inputVal)){
           element.style.display="block";
       }
       else{
        element.style.display="none";
       }
   })


})