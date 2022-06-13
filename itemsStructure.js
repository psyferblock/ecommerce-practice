let category_id=document.getElementById("search-bar-btn")


// code that loads categories 

getCategory()
 function getCategory(){
        console.log("something")
        // e.preventDefault()
        axios({
            method:"get",
            url:"http://127.0.0.1:8000/api/get_products",
        }).then((response)=>{
        console.log("something")
            console.log(response.data["results"] )
            response.display
            for (let i=0;i<response.data["results"].length;i++){
                var id =response.data["results"][i].id
                var name = response.data["results"][i].name;
                var category = response.data["results"][i].category;
                var price = response.data["results"][i].price;
                var image =response.data["results"][i].image;
                console.log(id,name,category,price,image)
                let results_container=document.getElementById("results-container")
                results_container.innerHTML+=`
                <div class="item"id="${id}">
                            <div class="item-input">
                            <h3>name:${name}</h3>
                            <h3>category:${category}</h3>
                            <h3>price:${price}</h3>
                            </div>
                            <img src="${image}" alt="">
                            
                        </div>
                `
                

            }
        })
    }
//   getCategory()/
