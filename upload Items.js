let item_name_id=document.getElementById("item-name-id")
let item_category_id=document.getElementById("item-category-id")
let item_price_id=document.getElementById("item-price-id")
let button_upload_pic_id=document.getElementById("button-upload-pic-id")
let button_submit_id=document.getElementById("button-submit-id")


// class items {
//     constructor(name,category,price,image){

//     this.name=name.value;
//     this.category=category;
//     this.price=price.value;
//     this.image=image.value;
//     }
// }


// let item = new items(item_name_id.value,item_category_id,item_price_id.value,button_upload_pic_id.value)

// console.log(JSON.stringify(item.name))

button_submit_id.addEventListener("click",submitEements)

function submitEements(){
    let data = new FormData(){
    data.append("name",item_name_id.value)
    data.append("category",item_category_id.value)
    data.append("price",item_price_id.value)
    data.append("image",button_upload_pic_id.value)

    }
}
