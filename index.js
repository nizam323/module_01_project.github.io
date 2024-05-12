let randomNum1 = Math.random() * 5 + 1;
let pDR1 = randomNum1.toFixed(0);

let randomNum2 = Math.random() * 5 + 1;
let pDR2 = randomNum2.toFixed(0);

let randomNum3 = Math.random() * 5 + 1;
let pDR3 = randomNum3.toFixed(0);

let randomNum4 = Math.random() * 5 + 1;
let pDR4 = randomNum4.toFixed(0);

let randomNum5 = Math.random() * 5 + 1;
let pDR5 = randomNum5.toFixed(0);

let randomNum6 = Math.random() * 5 + 1;
let pDR6 = randomNum6.toFixed(0);

let randomNum7 = Math.random() * 5 + 1;
let pDR7 = randomNum7.toFixed(0);

let randomNum8 = Math.random() * 5 + 1;
let pDR8 = randomNum8.toFixed(0);

let randomNum9 = Math.random() * 5 + 1;
let pDR9 = randomNum9.toFixed(0);

let randomNum10 = Math.random() * 5 + 1;
let pDR10 = randomNum10.toFixed(0);


let products = [
    {
        proName: "DNK Yellow Shoes",
        proImg: "images/product-1.jpg",
        proCategory: "Men",
        proSalePrice: "$150.00",
        proPrice: "$120.00",
        proColor: "yes",
        proRating: pDR1,
    },
    {
        proName: "DNK Blue Shoes",
        proImg: "images/product-2.jpg",
        proCategory: "Men",
        proSalePrice: "no",
        proPrice: "$200.00 – $240.00",
        proColor: "",
        proRating: pDR2,
    },
    {
        proName: "Dark Brown Jeans",
        proImg: "images/product-3.jpg",
        proCategory: "Men",
        proSalePrice: "no",
        proPrice: "$150.00",
        proColor: "",
        proRating: pDR3,
    },
    {
        proName: "Blue Denim Jeans",
        proImg: "images/product-4.jpg",
        proCategory: "Women",
        proSalePrice: "no",
        proPrice: "$150.00",
        proColor: "",
        proRating: pDR4,
    },
    {
        proName: "Basic Gray Jeans",
        proImg: "images/product-5.jpg",
        proCategory: "Women",
        proSalePrice: "no",
        proPrice: "$150.00",
        proColor: "",
        proRating: pDR5,
    },
    {
        proName: "Blue Denim Shorts",
        proImg: "images/product-6.jpg",
        proCategory: "Women",
        proSalePrice: "$150.00",
        proPrice: "$130.00",
        proColor: "",
        proRating: pDR6,
    },
    {
        proName: "Anchor Bracelet",
        proImg: "images/product-7.jpg",
        proCategory: "Accessories",
        proSalePrice: "no",
        proPrice: "$150.00 – $180.00",
        proColor: "yes",
        proRating: pDR7,
    },
    {
        proName: "Boho Bangle Bracelet",
        proImg: "images/product-8.jpg",
        proCategory: "Accessories",
        proSalePrice: "no",
        proPrice: "$150.00 – $170.00",
        proColor: "yes",
        proRating: pDR8,
    },
    {
        proName: "Light Brown Purse",
        proImg: "images/product-9.jpg",
        proCategory: "Accessories",
        proSalePrice: "no",
        proPrice: "$150.00",
        proColor: "",
        proRating: pDR9,
    },
    {
        proName: "Bright Red Bag",
        proImg: "images/product-10.jpg",
        proCategory: "Accessories",
        proSalePrice: "no",
        proPrice: "$100.00 – $140.00",
        proColor: "yes",
        proRating: pDR10,
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
    let proRealPrice = document.createElement("div");
    let proPrice = document.createElement("div");
    let proColor = document.createElement("div");
    let proRating = document.createElement("div");
    let imgAnchohr = document.createElement("a");
    let nameAnchohr = document.createElement("a");
    // let icon2 = document.createElement("i");
    // let icon3 = document.createElement("i");
    // let icon4 = document.createElement("i");
    // let icon5 = document.createElement("i");

    // assigning css class to created elements

    proCard.classList.add("pro-card");
    proImg.classList.add("pro-img");
    proTxtParent.classList.add("pro-txt-parent");
    proName.classList.add("pro-name");
    proCategory.classList.add("pro-category");
    proPrice.classList.add("pro-price");
    proColor.classList.add("pro-color");
    proRating.classList.add("pro-rating");
    proRealPrice.style.display = "inline";
    nameAnchohr.classList.add("anchor"),
    // icon1.classList.add("fa-solid", "fa-star");
    // icon2.classList.add("fa-solid", "fa-star");
    // icon3.classList.add("fa-solid", "fa-star-half-stroke");
    // icon4.classList.add("fa-regular", "fa-star");
    // icon5.classList.add("fa-regular", "fa-star");

    // assinging text 

    img.setAttribute("src", items.proImg);
    img.setAttribute("width", "100%");
    img.setAttribute("height", "100%");
    imgAnchohr.setAttribute("href","")
    nameAnchohr.setAttribute("href","")
    proName.innerText = items.proName;
    proCategory.innerText = items.proCategory;
    proRealPrice.innerText = items.proPrice;

    // making cards through javascript

    container.appendChild(proCard);
    proCard.appendChild(proImg);
    proImg.appendChild(imgAnchohr);
    imgAnchohr.appendChild(img);
    proCard.appendChild(proTxtParent);
    proTxtParent.appendChild(nameAnchohr);
    nameAnchohr.appendChild(proName);
    proTxtParent.appendChild(proCategory);
    proTxtParent.appendChild(proPrice);
    proPrice.appendChild(proRealPrice)
    proTxtParent.appendChild(proColor);
    proTxtParent.appendChild(proRating);
    // proRating.appendChild(icon1);
    // proRating.appendChild(icon2);
    // proRating.appendChild(icon3);
    // proRating.appendChild(icon4);
    // proRating.appendChild(icon5);


    if (items.proColor == "yes") {
        let proColorPicker1 = document.createElement("div");
        let proColorPicker2 = document.createElement("div");
        let proColorPicker3 = document.createElement("div");
        proColorPicker1.classList.add("pro-color-picker");
        proColorPicker1.style.backgroundColor = "#f49922";
        proColorPicker2.classList.add("pro-color-picker");
        proColorPicker2.style.backgroundColor = "#ce25e8";
        proColorPicker3.classList.add("pro-color-picker");
        proColorPicker3.style.backgroundColor = "#1fb1c1";
        proColor.appendChild(proColorPicker1);
        proColor.appendChild(proColorPicker2);
        proColor.appendChild(proColorPicker3);
    }

    if (items.proSalePrice !== "no") {
        let proSalePrice = document.createElement("strike");
        proSalePrice.innerText = items.proSalePrice;
        proRealPrice.style.paddingLeft = "10px";
        proPrice.insertAdjacentElement("afterbegin", proSalePrice)
    }

    if (items.proRating == 1) {

        let icon1 = document.createElement("i");
        let icon2 = document.createElement("i");
        let icon3 = document.createElement("i");
        let icon4 = document.createElement("i");
        let icon5 = document.createElement("i");

        icon1.classList.add("fa-solid", "fa-star");
        icon2.classList.add("fa-regular", "fa-star");
        icon3.classList.add("fa-regular", "fa-star");
        icon4.classList.add("fa-regular", "fa-star");
        icon5.classList.add("fa-regular", "fa-star");

        proRating.appendChild(icon1);
        proRating.appendChild(icon2);
        proRating.appendChild(icon3);
        proRating.appendChild(icon4);
        proRating.appendChild(icon5);

    }

    if (items.proRating == 2) {

        let icon1 = document.createElement("i");
        let icon2 = document.createElement("i");
        let icon3 = document.createElement("i");
        let icon4 = document.createElement("i");
        let icon5 = document.createElement("i");

        icon1.classList.add("fa-solid", "fa-star");
        icon2.classList.add("fa-solid", "fa-star");
        icon3.classList.add("fa-regular", "fa-star");
        icon4.classList.add("fa-regular", "fa-star");
        icon5.classList.add("fa-regular", "fa-star");

        proRating.appendChild(icon1);
        proRating.appendChild(icon2);
        proRating.appendChild(icon3);
        proRating.appendChild(icon4);
        proRating.appendChild(icon5);

    }


    if (items.proRating == 3) {

        let icon1 = document.createElement("i");
        let icon2 = document.createElement("i");
        let icon3 = document.createElement("i");
        let icon4 = document.createElement("i");
        let icon5 = document.createElement("i");

        icon1.classList.add("fa-solid", "fa-star");
        icon2.classList.add("fa-solid", "fa-star");
        icon3.classList.add("fa-solid", "fa-star");
        icon4.classList.add("fa-regular", "fa-star");
        icon5.classList.add("fa-regular", "fa-star");

        proRating.appendChild(icon1);
        proRating.appendChild(icon2);
        proRating.appendChild(icon3);
        proRating.appendChild(icon4);
        proRating.appendChild(icon5);

    }

    if (items.proRating == 4) {

        let icon1 = document.createElement("i");
        let icon2 = document.createElement("i");
        let icon3 = document.createElement("i");
        let icon4 = document.createElement("i");
        let icon5 = document.createElement("i");

        icon1.classList.add("fa-solid", "fa-star");
        icon2.classList.add("fa-solid", "fa-star");
        icon3.classList.add("fa-solid", "fa-star");
        icon4.classList.add("fa-solid", "fa-star-half-stroke");
        icon5.classList.add("fa-regular", "fa-star");

        proRating.appendChild(icon1);
        proRating.appendChild(icon2);
        proRating.appendChild(icon3);
        proRating.appendChild(icon4);
        proRating.appendChild(icon5);

    }

    if (items.proRating == 5) {

        let icon1 = document.createElement("i");
        let icon2 = document.createElement("i");
        let icon3 = document.createElement("i");
        let icon4 = document.createElement("i");
        let icon5 = document.createElement("i");

        icon1.classList.add("fa-solid", "fa-star");
        icon2.classList.add("fa-solid", "fa-star");
        icon3.classList.add("fa-solid", "fa-star");
        icon4.classList.add("fa-solid", "fa-star");
        icon5.classList.add("fa-solid", "fa-star");

        proRating.appendChild(icon1);
        proRating.appendChild(icon2);
        proRating.appendChild(icon3);
        proRating.appendChild(icon4);
        proRating.appendChild(icon5);

    }
    // console.log(proTxtParent.children[0].setAttribute("href","55"))

    
});


// console.log(products[3].proImg+products[3].proName)