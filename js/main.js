let elList = document.querySelector(".js-list")
let  elSelect = document.querySelector('.js-select');
let  elForm = document.querySelector('.js-form');
let  elInput = document.querySelector('.js-input');
let  elBookmarkList = document.querySelector('.bokmark-list');
let  box = document.querySelector('.right-side');
let  elModal = document.querySelector(".modal")
let elTemplate = document.querySelector(".template").content




const localList = JSON.parse(window.localStorage.getItem("bookmark"))
let bookmark = localList || []


const moviesFragment = document.createDocumentFragment()


function renderBookmark(arr, node){
    
    node.innerHTML = ""
    window.localStorage.setItem("bookmark", JSON.stringify(bookmark))
    
    arr.forEach(el => {

        let newLi = document.createElement("li")
        let newBtnDelete = document.createElement("button")
        
        newLi.textContent = el.title;
        newBtnDelete.textContent = "delete";
        
        newLi.setAttribute("class", "delete-item")
        newBtnDelete.classList.add("delete-bookmark")
        newBtnDelete.type = "button";
        newBtnDelete.dataset.filmId = el.id
        
        newLi.appendChild(newBtnDelete);
        node.appendChild(newLi)
        
    })
}
renderBookmark(localList, elBookmarkList)

elBookmarkList.addEventListener("click", evt => {
    let btnDelete = evt.target.matches(".delete-bookmark")
    
    if(btnDelete){
        let deleteId = evt.target.dataset.filmId
        
        let deleteFilmId = bookmark.findIndex(el => el.id == deleteId)
        
        bookmark.splice(deleteFilmId, 1 )
        console.log(deleteFilmId);
        renderBookmark(bookmark, elBookmarkList)
    }
    
    
})






function movie(arr,list){
    
    for(film of arr){
        

        let newTemplate = elTemplate.cloneNode(true)

        newTemplate.querySelector(".img").src = film.poster
        newTemplate.querySelector(".js-title").textContent = film.title
        newTemplate.querySelector(".js-text").textContent = film.overview.split(" ").slice(0,20).join(' ') + "..."
        newTemplate.querySelector(".new-bookmark").dataset.filmId = film.id
        newTemplate.querySelector(".modal-btn").dataset.modalId = film.id

        moviesFragment.appendChild(newTemplate)    
    }    
    list.appendChild(moviesFragment)
} 
movie(films,elList)


let result = [];
elSelect.addEventListener('change', function () {
    
    elList.innerHTML = "";
    result = []
    
    let selectValue = elSelect.value
    
    films.forEach((animal) => {
        if (animal.genres.includes(selectValue)) {
            result.push(animal);
        }
    });
    
    movie(result, elList)
});


let myArray = [];

for (item of films) {
    myArray.push(...item.genres);
}

let mySet = new Set(myArray);

for (const item of Array.from(mySet)) {
    let li = document.createElement("option");
    li.textContent = item;
    elSelect.appendChild(li);
}


let elSelect2 = document.querySelector(".js-select2")




elSelect2.addEventListener("change", function(){
    elList.innerHTML = "";
    let sort = [];
    
    
    sort = films.sort(function (a, b) {
        if (elSelect2.value === 'A-Z') {
            if (b.title > a.title) {
                return -1;
            }
        } else {
            return -1
        }
        return films
    });
    movie(sort, elList)
    
})


elList.addEventListener("click", (evt) => {
    
    let bookmarkButton = evt.target.matches(".new-bookmark")
    
    if (bookmarkButton){
        
        let filmId = evt.target.dataset.filmId
        
        let findFilm = films.find(element => element.id == filmId)
        
        
        
        if(!bookmark.includes(findFilm)){
            bookmark.push(findFilm)
            renderBookmark(bookmark , elBookmarkList)
        }
        
    }
    
    if(evt.target.matches(".modal-btn")){
        elModal.innerHTML = ''
        elModal.classList.add('open')
        let modalId = evt.target.dataset.modalId
        let element = films.find(e => e.id == modalId)
        
        let newBox = document.createElement("div")
        let newtitle = document.createElement("h3")
        let newtext = document.createElement("p")
        let newBtn = document.createElement("button")
        let newImg = document.createElement("img")
        let newGenres = document.createElement("p")
        
        
        
        
        newtitle.textContent = element.title
        newtext.textContent = element.overview
        newBtn.textContent = "X"
        newGenres.textContent = element.genres
        
        
        newBtn.setAttribute("class", "close-btn")
        newImg.setAttribute("src", element.poster)
        newtitle.setAttribute("class", "modal-title")
        newtext.setAttribute("class", "modal-text")
        newImg.classList.add("modal-img")
        newBox.classList.add("box")
        
        
        elModal.appendChild(newImg);
        elModal.appendChild(newBtn);
        newBox.appendChild(newtitle);
        newBox.appendChild(newtext);
        newBox.appendChild(newGenres);
        elModal.appendChild(newBox);
        
    }
})

elModal.addEventListener("click", function(evt){
    if (evt.target.matches(".close-btn")){
        elModal.classList.remove("open")
    }
})



