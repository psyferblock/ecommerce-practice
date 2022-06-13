let category_id=document.getElementById("search-bar-btn")
let results_container=document.getElementById("results-container")

// code that loads categories 


  window.onload= function getCategory(e){
        console.log("something")
        e.preventDefault()
        axios({
            method:"get",
            url:"http://127.0.0.1:8000/api/get_products",
        }).then((response)=>{
        console.log("something")
            console.log(response)
            response.display
            for (var i=0;i<response.data.itemslength;i++){
                var id = response.data.items[i].id;
                var name = response.data.items[i].name;
                var category = response.data.items[i].category;
                var price = response.data.items[i].price;
                var image = response.data.items[i].image;

                // results_container.innerHTML+=`
                // <div class="item"id="${data.id}">
                //             <div class="item-input">
                //             <h3>name:${data.name}</h3>
                //             <h3>category:${data.email}</h3>
                //             <h3>price:${data.price}</h3>
                //             </div>
                //             <img src="${data.image}" alt="">
                            
                //         </div>
                // `

            }
        })
    }
//   getCategory()/
