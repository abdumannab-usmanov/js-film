let elList = document.querySelector(".js-list")
let  elSelect = document.querySelector('.js-select');



function movie(arr,list){
    
    for(film of arr){
        
        let elItem = document.createElement("li");
        let eldiv = document.createElement("div");
        let elTitle = document.createElement("h3");
        let elImg = document.createElement("img");
        let elText = document.createElement("p");
        let elSubList = document.createElement("ul");
        
        
        for (var genre of film.genres){
            
            
            let elSubItem = document.createElement("li");
            
            elSubItem.textContent = genre
            
            elSubItem.setAttribute("class", "subitem")
            
            elSubList.appendChild(elSubItem)
        }
        
        
        
        elTitle.textContent = film.title;
        elText.textContent = film.overview.split(" ").slice(0,20).join(' ')+ "...";
        
        
        eldiv.setAttribute("class", "div")
        elItem.setAttribute("class", "js-item")
        elTitle.setAttribute("class", "js-title")
        elText.setAttribute("class", "js-text")
        elSubList.setAttribute("class", "sublist")
        elImg.setAttribute("src", film.poster)
        elImg.setAttribute("class", "img")
        
        
        
        elItem.appendChild(elImg)
        elItem.appendChild(eldiv)
        eldiv.appendChild(elTitle)
        eldiv.appendChild(elText)
        eldiv.appendChild(elSubList)
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
        if (b.title > a.title, elSelect2.value === 'A-Z') {
            return -1;
        }
        else if(a.title > b.title){
            return -1
        }
        return films
    });
    movie(sort, elList)
    
})

