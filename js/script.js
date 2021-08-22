const title = document.getElementById('title');
const author = document.getElementById('author');
const book = document.getElementById('book');

const btn = document.querySelector('.add');
const deleteBtn = document.querySelector('.delete');

const pTitle = document.querySelector('.title');
const pAuthor = document.querySelector('.author');
const pBN = document.querySelector('.booknumber');
const box = document.querySelector('.box');

const resultBox = document.querySelector('.results__box');


btn.addEventListener('click', function(e){
    e.preventDefault();

   
    
    if(title !== '' || author !== '' || book !== 0) {
        const t1 = title.value;
        const t2 = author.value;
        const t3 = book.value;

        const div = document.createElement('div');
        div.classList.add('box');
        div.innerHTML = `<p class="title">${t1}</p>
        <p class="author">${t2}</p>
        <p class="booknumber">${t3}</p>
        <button class="newbtn delete">&times;</button>`;
 
        resultBox.appendChild(div);

        title.value = '';
        author.value = '';
        book.value = '';
    }
});


resultBox.addEventListener('click', (e) => {
    let x = e.target;

    if(x.classList.contains('delete')){
        x.parentElement.remove();
    }
});