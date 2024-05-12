let products = [
    {
        proName:"DNK Yellow Shoes",
        proImg:"images/product-1.jpg",
        proCategory:"Men",
        proSalePrice:"$150.00",
        proPrice:"$120.00",
        proColor:"",
        proRating:"",
    },
    {
        proName:"DNK Blue Shoes",
        proImg:"images/product-2.jpg",
        proCategory:"Men",
        proSalePrice:"",
        proPrice:"$200.00 – $240.00",
        proColor:"",
        proRating:"",
    },
    {
        proName:"Dark Brown Jeans",
        proImg:"images/product-3.jpg",
        proCategory:"Men",
        proSalePrice:"",
        proPrice:"$150.00",
        proColor:"",
        proRating:"",
    },
    {
        proName:"Blue Denim Jeans",
        proImg:"images/product-4.jpg",
        proCategory:"Women",
        proSalePrice:"",
        proPrice:"$150.00",
        proColor:"",
        proRating:"",
    },
    {
        proName:"Basic Gray Jeans",
        proImg:"images/product-5.jpg",
        proCategory:"Women",
        proSalePrice:"",
        proPrice:"$150.00",
        proColor:"",
        proRating:"",
    },
    {
        proName:"Blue Denim Shorts",
        proImg:"images/product-6.jpg",
        proCategory:"Women",
        proSalePrice:"$150.00",
        proPrice:"$130.00",
        proColor:"",
        proRating:"",
    },
    {
        proName:"Anchor Bracelet",
        proImg:"images/product-7.jpg",
        proCategory:"Accessories",
        proSalePrice:"",
        proPrice:"$150.00 – $180.00",
        proColor:"",
        proRating:"",
    },
    {
        proName:"Boho Bangle Bracelet",
        proImg:"images/product-8.jpg",
        proCategory:"Accessories",
        proSalePrice:"",
        proPrice:"$150.00 – $170.00",
        proColor:"",
        proRating:"",
    },
    {
        proName:"Light Brown Purse",
        proImg:"images/product-9.jpg",
        proCategory:"Accessories",
        proSalePrice:"",
        proPrice:"$150.00",
        proColor:"",
        proRating:"",
    },
    {
        proName:"Bright Red Bag",
        proImg:"images/product-10.jpg",
        proCategory:"Accessories",
        proSalePrice:"",
        proPrice:"$100.00 – $140.00",
        proColor:"",
        proRating:"",
    }
];

let container =document.querySelector(".pro-cards-sec");

products.map((items)=>{


    
//  creating cards through javascript

let proCard = document.createElement("div");
let proImg = document.createElement("div");
let img = document.createElement("img");
let proTxtParent = document.createElement("div");
let proName = document.createElement("div");
let proCategory = document.createElement("div");
let proSalePrice = document.createElement("strike");
let proRealPrice = document.createElement("div");
let proPrice = document.createElement("div");
let proColor = document.createElement("div");
let proColorPicker1 = document.createElement("div");
let proColorPicker2 = document.createElement("div");
let proColorPicker3 = document.createElement("div");
let proRating = document.createElement("div");

// assigning css class to created elements

proCard.classList.add("pro-card");
proImg.classList.add("pro-img");
proTxtParent.classList.add("pro-txt-parent");
proName.classList.add("pro-name");
proCategory.classList.add("pro-category");
proPrice.classList.add("pro-price");
proColor.classList.add("pro-color");
proColorPicker1.classList.add("pro-color-picker");
proColorPicker2.classList.add("pro-color-picker");
proColorPicker3.classList.add("pro-color-picker");
proRating.classList.add("pro-rating");
proRealPrice.style.display = "inline";
proRealPrice.style.padding = "0 0 0 10px";

// assinging text 

img.setAttribute("src",items.proImg);
img.setAttribute("width","100%");
img.setAttribute("height","100%");
proName.innerText=items.proName;
proCategory.innerText=items.proCategory;
proRealPrice.innerText=items.proPrice;
proSalePrice.innerText=items.proSalePrice;

// making cards through javascript

container.appendChild(proCard);
proCard.appendChild(proImg);
proImg.appendChild(img);
proCard.appendChild(proTxtParent);
proTxtParent.appendChild(proName);
proTxtParent.appendChild(proCategory);
proTxtParent.appendChild(proPrice);
proPrice.appendChild(proSalePrice);
proPrice.appendChild(proRealPrice)
proTxtParent.appendChild(proColor);
proColor.appendChild(proColorPicker1);
proColor.appendChild(proColorPicker2);
proColor.appendChild(proColorPicker3);
proTxtParent.appendChild(proRating);

});
/* <div class="pro-card">
    <div class="pro-img"></div>
    <div class="pro-txt-parent">
        <div class="pro-name">dnk red shoes</div>
        <div class="pro-category">men</div>
        <div class="pro-price"><strike>$150.00</strike>$120.00</div>
        <div class="pro-color">
            <div class="pro-color-picker"></div>
            <div class="pro-color-picker"></div>
            <div class="pro-color-picker"></div>
        </div>
        <div class="pro-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
            class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i><i
                class="fa-regular fa-star"></i></div>
    </div>
</div> */

