const accessKey = "5xQ1eg54xlhxv1iE4qlHgshYM9q7zaMT6Py0idvtIzs";
const formElement = document.querySelector("form");
const searchBox = document.getElementById("search-button");
const inputElement = document.getElementById("inputText");
const searchResult = document.querySelector(".searchResults");
const showMore = document.getElementById("show-more-button")


let inputData = "";
let page = 1;

async function searchImage() {
    inputData = inputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=5xQ1eg54xlhxv1iE4qlHgshYM9q7zaMT6Py0idvtIzs&per_page=12`;
    // const url = `https://api.unsplash.com/search/photos?page=1&query=cat&client_id=5xQ1eg54xlhxv1iE4qlHgshYM9q7zaMT6Py0idvtIzs`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    console.log(results)


    if(page === 1){
        searchResult.innerHTML = ""
    };
    results.map((result)=>{
        const imagewapper = document.createElement("div");
        imagewapper.classList.add("searchResult");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html 
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;
        
        imagewapper.appendChild(image);
        imagewapper.appendChild(imageLink);
        searchResult.appendChild(imagewapper);
    });
    page++
    if(page >1){
        showMore.style.display = "block"
    }
    console.log(page)
}
searchBox.addEventListener("click",(e)=>{
    e.preventDefault()
    page = 1;
    searchImage();
})
showMore.addEventListener("click",(e)=>{
    searchImage();
})



// searchBox.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     page = 1;
//     searchImage();
// })

//     if(page === 1){
//         searchResults.innerHTML = "";

//     }
//     results.map((result)=>{
//         const imageWrapper = document.createElement("div");
//         imageWrapper.classList.add("searchResult");
//         const image = document.createElement("img");
//         image.src = result.urls.small;
//         image.alt = result.alt_description;
//         const imageLink = document.createElement("a");
//         imageLink.href = result.links.html 
//         imageLink.target = "_blank";
//         imageLink.textContent = result.alt_description;

//         imageWrapper.appendChild(image);
//         imageWrapper.appendChild(imageLink);
//         searchResults.appendChild(imageWrapper);
//     });
//     page++
//     if(page>1){
//         showMore.style.display = "block"
//     }

// }
// searchBox.addEventListener("click",(event)=>{
//     event.preventDefault();
//     page = 1;
//     searchImage()
// })
// showMore.addEventListener("click",(event)=>{
//     event.preventDefault();
//     page = 1;
//     searchImage()
// })