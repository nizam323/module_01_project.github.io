// price counter prices will store in this array
let priceTotalArray = [];

// product rating stars will generate through the random number 
let randomNum1 = Math.random() * 5;
let pDR1 = randomNum1.toFixed(0);

let randomNum2 = Math.random() * 5;
let pDR2 = randomNum2.toFixed(0);

let randomNum3 = Math.random() * 5;
let pDR3 = randomNum3.toFixed(0);

let randomNum4 = Math.random() * 5;
let pDR4 = randomNum4.toFixed(0);

let randomNum5 = Math.random() * 5;
let pDR5 = randomNum5.toFixed(0);

let randomNum6 = Math.random() * 5;
let pDR6 = randomNum6.toFixed(0);

let randomNum7 = Math.random() * 5;
let pDR7 = randomNum7.toFixed(0);

let randomNum8 = Math.random() * 5;
let pDR8 = randomNum8.toFixed(0);

let randomNum9 = Math.random() * 5;
let pDR9 = randomNum9.toFixed(0);

let randomNum10 = Math.random() * 5;
let pDR10 = randomNum10.toFixed(0);

// products cards array

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

// making cards section

let container = document.querySelector(".pro-cards-sec");

products.map((items, index) => {

    //  creating cards through javascript

    let hoverAddToCart = document.createElement("div");
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
        hoverAddToCart.classList.add("addtocart-hover");

    // assinging text 

    img.setAttribute("src", items.proImg);
    img.setAttribute("width", "100%");
    img.setAttribute("height", "100%");
    proName.innerText = items.proName;
    proCategory.innerText = items.proCategory;
    proRealPrice.innerText = items.proPrice;
    hoverAddToCart.innerText = "icon";

    // making cards through javascript

    container.appendChild(proCard);
    proCard.appendChild(proImg);
    proImg.appendChild(imgAnchohr);
    imgAnchohr.appendChild(hoverAddToCart);
    imgAnchohr.appendChild(img);
    proCard.appendChild(proTxtParent);
    proTxtParent.appendChild(nameAnchohr);
    nameAnchohr.appendChild(proName);
    proTxtParent.appendChild(proCategory);
    proTxtParent.appendChild(proPrice);
    proPrice.appendChild(proRealPrice)
    proTxtParent.appendChild(proColor);
    proTxtParent.appendChild(proRating);

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

    // cards rating generator

    if (items.proRating == 0) {

        let icon1 = document.createElement("i");
        let icon2 = document.createElement("i");
        let icon3 = document.createElement("i");
        let icon4 = document.createElement("i");
        let icon5 = document.createElement("i");

        icon1.classList.add("fa-regular", "fa-star");
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

    // Set href attribute for image anchor
    // imgAnchohr.setAttribute("href", "product-page-" + index + ".html");

    // Set href attribute for name anchor
    nameAnchohr.setAttribute("href", "product-page-" + index + ".html");

    // Add event listener to each card
    proCard.addEventListener("click", function () {
        // Replace location with the URL of the clicked card
        // window.location.assign("product-page-" + index + ".html");
    });


    // cards hover addtocart btn

    let proImgHoverBtn = document.querySelectorAll(".pro-img");
    let hoverBtn = document.querySelectorAll(".addtocart-hover");

    proImgHoverBtn[index].addEventListener("mouseover", () => {
        hoverBtn[index].style.display = "block";
    });

    proImgHoverBtn[index].addEventListener("mouseout", () => {
        hoverBtn[index].style.display = "none";
    });

    // addtocart logic

    let add = document.querySelector(".addtocart-products-parent");

    function addtocartfunction(addImg, addName, addPrice) {

        // creating elements

        let addProductCon = document.createElement("div");
        let addProductImgDiv = document.createElement("div");
        let addProductImg = document.createElement("img");
        let addProductNameDiv = document.createElement("div");
        let addProductName = document.createElement("h2");
        let addProductPriceDiv = document.createElement("div");
        let addProductPrice = document.createElement("h3");
        let addProductQuantityDiv = document.createElement("div");
        let addProductQuantity = document.createElement("p");
        let addProductDeleteBtn = document.createElement("div");
        let qua = 1;

        // adding classes

        addProductCon.classList.add("addtocart-products");
        addProductImgDiv.classList.add("addtocart-products-img");
        addProductNameDiv.classList.add("addtocart-products-name");
        addProductPrice.classList.add("addtocart-products-price");
        addProductQuantity.classList.add("addtocart-products-quantity");
        addProductDeleteBtn.classList.add("addtocart-delete-btn");

        // setting attributes and innertext

        addProductImg.setAttribute("src", addImg)
        addProductImg.setAttribute("width", "100")
        addProductName.innerText = addName
        addProductPrice.innerText = addPrice
        addProductQuantity.innerText = "x" + qua++;
        addProductDeleteBtn.innerText = "+";

        // appending elements

        add.appendChild(addProductCon);
        addProductCon.appendChild(addProductImgDiv);
        addProductImgDiv.appendChild(addProductImg);
        addProductCon.appendChild(addProductNameDiv);
        addProductNameDiv.appendChild(addProductName);
        addProductNameDiv.appendChild(addProductPriceDiv);
        addProductPriceDiv.appendChild(addProductPrice);
        addProductNameDiv.appendChild(addProductQuantityDiv);
        addProductQuantityDiv.appendChild(addProductQuantity);
        addProductCon.appendChild(addProductDeleteBtn)

        // product price counter logic

        let priceCounter = document.querySelector(".nav-2nd-span");

        priceTotalArray.push(parseInt(addPrice.slice(1, 4)));
        let total = priceTotalArray.reduce((accum, curval) => {
            return accum + curval
        });

        let priceTotalArraysPrice = priceCounter.innerText = `$${total}.00`;

        // product counter logic

        let hideaddmsg = document.querySelector(".add-to-cart-msg-con");
        let asa = document.querySelector(".addtocart-products-parent");
        let proCounter = document.querySelector(".product-count");
        let asd = asa.children.length;
        proCounter.innerText = asd;

        // addtocart delete btn

        addProductDeleteBtn.addEventListener("click", () => {

            // product price minus logic
            let removedItem = addProductCon;
            let removedPriceText = removedItem.querySelector(".addtocart-products-price").innerText;
            let removedPrice = parseInt(removedPriceText.slice(1));
            let newTotal = 0;
            let cartItems = document.querySelectorAll(".addtocart-products");
            cartItems.forEach(item => {
                let itemPriceText = item.querySelector(".addtocart-products-price").innerText;
                let itemPrice = parseInt(itemPriceText.slice(1));
                newTotal += itemPrice;
            });

            // deleting pricetotalarray 

            let newTotalOfArray = priceCounter.innerText = `$${newTotal - removedPrice}.00`;
            priceTotalArraysPrice = newTotalOfArray;
            if (priceTotalArraysPrice == "$0.00") {
                priceTotalArray.splice(0, priceTotalArray.length);
            };

            // delete btn logic

            addProductCon.remove();

            // product counter minus 

            proCounter.innerText--;

            // empty cart msg unhide

            let asa = document.querySelector(".addtocart-products-parent");
            let asd = asa.children.length;
            let hideaddmsg = document.querySelector(".add-to-cart-msg-con");
            let checkOutBtn = document.querySelector("#checkout");
            if (asd == 0) {
                hideaddmsg.style.display = "flex";
                asa.style.display = "none";
                checkOutBtn.style.display = "none";
            };
        });
        
        // empty cart msg hide  
        
        if (asd != 0) {
            let checkOutBtn = document.querySelector("#checkout");
            checkOutBtn.style.display = "block";
            hideaddmsg.style.display = "none";
            asa.style.display = "block";
        }
    };

    // addtocart function eventlistner

    hoverBtn[index].addEventListener("click", () => addtocartfunction(items.proImg, items.proName, items.proPrice))

});

// amount cart side bar 

let addToCart = document.querySelector(".amount-cart");
let cartSideBar = document.querySelector(".cart-sidebar");
let addToCartCloseBtn = document.querySelector(".add-to-cart-btn");

addToCart.addEventListener("click", () => {
    cartSideBar.classList.toggle("cart-sidebar-toggle")
});
addToCartCloseBtn.addEventListener("click", () => {
    cartSideBar.classList.remove("cart-sidebar-toggle")
});

// nav burger btn side bar 

let navSideBarBtn = document.querySelector(".burger-icon-parent");
let navSideBar = document.querySelector(".nav-sidebar");
let navSideBarCloseBtn = document.querySelector(".nav-sidebar-close-btn");

navSideBarBtn.addEventListener("click", () => {
    navSideBar.classList.toggle("nav-sidebar-toggle")
});
navSideBarCloseBtn.addEventListener("click", () => {
    navSideBar.classList.remove("nav-sidebar-toggle")
});