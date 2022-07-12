let elList = document.querySelector(".js-list")
let  elSelect = document.querySelector('.js-select');
let  elForm = document.querySelector('.js-form');
let  elInput = document.querySelector('.js-input');
let  elBookmarkList = document.querySelector('.bokmark-list');
let  box = document.querySelector('.right-side');
let  modal = document.querySelector(".modal")



let bookmark = []
let modalArr = [];


function renderBookmark(arr, node){
    
    node.innerHTML = ""
    
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
        
        let elItem = document.createElement("li");
        let eldiv = document.createElement("div");
        let elTitle = document.createElement("h3");
        let elImg = document.createElement("img");
        let elText = document.createElement("p");
        let newBookmark = document.createElement("button")
        let newMore = document.createElement("button")
        
        
        // let elSubList = document.createElement("ul");
        
        
        // for (var genre of film.genres){
        
        
        //     let elSubItem = document.createElement("li");
        
        //     elSubItem.textContent = genre
        
        //     elSubItem.setAttribute("class", "subitem")
        
        //     elSubList.appendChild(elSubItem)
        // }
        
        
        
        elTitle.textContent = film.title;
        elText.textContent = film.overview.split(" ").slice(0,20).join(' ') + "...";
        newBookmark.textContent = "bookmark"
        newMore.textContent = "More-info"
        
        
        eldiv.setAttribute("class", "div")
        elItem.setAttribute("class", "js-item")
        elTitle.setAttribute("class", "js-title")
        elText.setAttribute("class", "js-text")
        // elSubList.setAttribute("class", "sublist")
        elImg.setAttribute("src", film.poster)
        elImg.setAttribute("class", "img")
        newBookmark.classList.add("new-bookmark")
        newBookmark.dataset.filmId = film.id
        
        
        
        
        elItem.appendChild(elImg)
        elItem.appendChild(eldiv)
        eldiv.appendChild(elTitle)
        eldiv.appendChild(elText)
        eldiv.appendChild(newBookmark)
        eldiv.appendChild(newMore) 
        // eldiv.appendChild(elSubList)
        list.appendChild(elItem)
        
    }    
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
})


// elList.addEventListener("click", (evt) => {
//     let btnInfo = evt.target.matches(".more-info")
    
//     if (btnInfo){
//         // modal.classList.add("del")
//         let moreBtnId = evt.target.dataset.moreId;
//         let findBtnIdMore = films.find(e => e.id == moreBtnId);
        

//         if(!modalArr.includes(findBtnIdMore)){
//             modalArr.push(findBtnIdMore);

//         };

    
        

//     }
    
    
// })


// function filmModal(movie, el){

//     for(film of info){

//         let item = document.createElement("div")



    
    
//     }

// }

