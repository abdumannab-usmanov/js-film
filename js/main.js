let elList = document.querySelector(".js-list")



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