let products = [
    {
        proName: "DNK Yellow Shoes",
        proImg: "images/product-1.jpg",
        proCategory: "Men",
        proSalePrice: "$150.00",
        proPrice: "$120.00",
        proColor: "yes",
    },
    {
        proName: "DNK Blue Shoes",
        proImg: "images/product-2.jpg",
        proCategory: "Men",
        proSalePrice: "",
        proPrice: "$200.00 – $240.00",
        proColor: "",
    },
    {
        proName: "Dark Brown Jeans",
        proImg: "images/product-3.jpg",
        proCategory: "Men",
        proSalePrice: "",
        proPrice: "$150.00",
        proColor: "",
    },
    {
        proName: "Blue Denim Jeans",
        proImg: "images/product-4.jpg",
        proCategory: "Women",
        proSalePrice: "",
        proPrice: "$150.00",
        proColor: "",
    },
    {
        proName: "Basic Gray Jeans",
        proImg: "images/product-5.jpg",
        proCategory: "Women",
        proSalePrice: "",
        proPrice: "$150.00",
        proColor: "",
    },
    {
        proName: "Blue Denim Shorts",
        proImg: "images/product-6.jpg",
        proCategory: "Women",
        proSalePrice: "$150.00",
        proPrice: "$130.00",
        proColor: "",
    },
    {
        proName: "Anchor Bracelet",
        proImg: "images/product-7.jpg",
        proCategory: "Accessories",
        proSalePrice: "",
        proPrice: "$150.00 – $180.00",
        proColor: "yes",
    },
    {
        proName: "Boho Bangle Bracelet",
        proImg: "images/product-8.jpg",
        proCategory: "Accessories",
        proSalePrice: "",
        proPrice: "$150.00 – $170.00",
        proColor: "yes",
    },
    {
        proName: "Light Brown Purse",
        proImg: "images/product-9.jpg",
        proCategory: "Accessories",
        proSalePrice: "",
        proPrice: "$150.00",
        proColor: "",
    },
    {
        proName: "Bright Red Bag",
        proImg: "images/product-10.jpg",
        proCategory: "Accessories",
        proSalePrice: "",
        proPrice: "$100.00 – $140.00",
        proColor: "yes",
    }
];

let container = document.querySelector(".pro-cards-sec");

products.map((items) => {



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
    // let proColorPicker1 = document.createElement("div");
    // let proColorPicker2 = document.createElement("div");
    // let proColorPicker3 = document.createElement("div");
    let proRating = document.createElement("div");
    let icon1 = document.createElement("i");
    let icon2 = document.createElement("i");
    let icon3 = document.createElement("i");
    let icon4 = document.createElement("i");
    let icon5 = document.createElement("i");

    // assigning css class to created elements

    proCard.classList.add("pro-card");
    proImg.classList.add("pro-img");
    proTxtParent.classList.add("pro-txt-parent");
    proName.classList.add("pro-name");
    proCategory.classList.add("pro-category");
    proPrice.classList.add("pro-price");
    proColor.classList.add("pro-color");
    // proColorPicker1.classList.add("pro-color-picker");
    // proColorPicker2.classList.add("pro-color-picker");
    // proColorPicker3.classList.add("pro-color-picker");
    proRating.classList.add("pro-rating");
    proRealPrice.style.display = "inline";
    proRealPrice.style.padding = "0 0 0 10px";
    icon1.classList.add("fa-solid", "fa-star");
    icon2.classList.add("fa-solid", "fa-star");
    icon3.classList.add("fa-solid", "fa-star-half-stroke");
    icon4.classList.add("fa-regular", "fa-star");
    icon5.classList.add("fa-regular", "fa-star");

    // assinging text 

    img.setAttribute("src", items.proImg);
    img.setAttribute("width", "100%");
    img.setAttribute("height", "100%");
    proName.innerText = items.proName;
    proCategory.innerText = items.proCategory;
    proRealPrice.innerText = items.proPrice;
    proSalePrice.innerText = items.proSalePrice;


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
    // proColor.appendChild(proColorPicker1);
    // proColor.appendChild(proColorPicker2);
    // proColor.appendChild(proColorPicker3);
    proTxtParent.appendChild(proRating);
    proRating.appendChild(icon1);
    proRating.appendChild(icon2);
    proRating.appendChild(icon3);
    proRating.appendChild(icon4);
    proRating.appendChild(icon5);


    if(items.proColor=="yes"){
        let proColorPicker1 = document.createElement("div");
        let proColorPicker2 = document.createElement("div");
        let proColorPicker3 = document.createElement("div");
        proColorPicker1.classList.add("pro-color-picker");
        proColorPicker2.classList.add("pro-color-picker");
        proColorPicker3.classList.add("pro-color-picker");
        proColor.appendChild(proColorPicker1);
        proColor.appendChild(proColorPicker2);
        proColor.appendChild(proColorPicker3);
    }

});