const getApi = () => {
    fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json", { method: "GET" })
        .then((response) => {
            console.log(response, 'response of get Api');
        })
        .then((data) => {
            console.log(data, 'data from get Api');
        })
        .catch((error) => {
            console.error(error, 'error at get Api');
        });
};

const data= [
        {
            "category_name": "Men",
            "category_products": [
                {
                    "id": "1",
                    "title": "Mens Kurta",
                    "price": "1199",
                    "compare_at_price": "1299",
                    "vendor": "Manyvar",
                    "badge_text": "Wedding Special",
                    "image": "https://plus.unsplash.com/premium_photo-1682090786689-741d60a11384",
                    "second_image": "https://plus.unsplash.com/premium_photo-1682090781379-4d177df45267"
                },
                {
                    "id": "2",
                    "title": "RCB Tshirt",
                    "price": "2199",
                    "compare_at_price": "4299",
                    "vendor": "Puma",
                    "badge_text": null,
                    "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22462330/2023/3/22/27a1d087-dc81-46a0-9b86-505f6491b5931679431326265RoyalChallengersBangalore2023MensReplicaJersey1.jpg",
                    "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22462330/2023/3/22/e0ac3f07-f869-4d36-a8fa-47bab62c579e1679431326230RoyalChallengersBangalore2023MensReplicaJersey3.jpg"
                },
                {
                    "id": "3",
                    "title": "Green Charm",
                    "price": "1399",
                    "compare_at_price": "1499",
                    "vendor": "Myntra",
                    "badge_text": "On offer",
                    "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22372642/2023/3/16/52d27507-a870-456b-addd-e62aefa0f79a1678911375020ESSLogoRegularFitMensT-Shirt1.jpg",
                    "second_image": "empty"
                },
                {
                    "id": "4",
                    "title": "Mens Tshirt",
                    "price": "599",
                    "compare_at_price": "799",
                    "vendor": "Myntra",
                    "badge_text": "New season",
                    "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24055686/2023/7/26/215a939a-b567-4110-9a2b-33d0e191d5c61690363492956-Ess-Multicolor-Mens-T-shirt-971690363492544-1.jpg",
                    "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24055686/2023/7/26/51b94b0f-b2f1-4f40-a976-0a9b3110114c1690363492943-Ess-Multicolor-Mens-T-shirt-971690363492544-2.jpg"
                }
            ]
        },
        {
            "category_name": "Women",
            "category_products": [
                {
                    "id": "1w",
                    "title": "Women Kurti",
                    "price": "1199",
                    "compare_at_price": "1299",
                    "vendor": "Manyvar",
                    "badge_text": "New season",
                    "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24538028/2023/8/25/cb1a5027-184f-4c8a-a96b-154987ff47f31692955360626-HERENOW-Women-Kurtis-1661692955360126-1.jpg",
                    "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24538028/2023/8/25/3c5fdff6-e41a-4bbe-9539-11c9ea6a1c8f1692955360564-HERENOW-Women-Kurtis-1661692955360126-3.jpg"
                },
                {
                    "id": "2w",
                    "title": "Yellow casual dress",
                    "price": "199",
                    "compare_at_price": "299",
                    "vendor": "Myntra",
                    "badge_text": null,
                    "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19276232/2022/8/8/55497e43-260c-4a3f-865b-059d9edd861a1659942435451-Women-Yellow-Cotton-Mandarin-Collar-Top-3841659942434972-1.jpg",
                    "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19276232/2022/8/8/c8c6a172-cd4d-4637-9078-2e791cd7dbfe1659942435386-Women-Yellow-Cotton-Mandarin-Collar-Top-3841659942434972-4.jpg"
                },
                {
                    "id": "3w",
                    "title": "Women Black & Golden A-Line Kurti",
                    "price": "1399",
                    "compare_at_price": "1499",
                    "vendor": "Myntra",
                    "badge_text": "On offer",
                    "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12834502/2020/11/26/e50bd870-573d-4f6f-9ebc-938bda01edc31606382198225WomenBlackMultiColourPrintedKurti1.jpg",
                    "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12834502/2020/11/26/32c3c29c-5be7-4978-8e03-0851b2ed33601606382198380WomenBlackMultiColourPrintedKurti3.jpg"
                },
                {
                    "id": "4w",
                    "title": "METRO-FASHION",
                    "price": "1599",
                    "compare_at_price": "1799",
                    "vendor": "Myntra",
                    "badge_text": "New season",
                    "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19381372/2022/8/4/4dc24e8c-f86c-4a85-80a3-a4941c84453b1659612869086METRO-FASHIONWomenBhandhaniPrintedKurtaandPantSetPureCotton1.jpg",
                    "second_image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19381372/2022/8/4/4dc24e8c-f86c-4a85-80a3-a4941c84453b1659612869086METRO-FASHIONWomenBhandhaniPrintedKurtaandPantSetPureCotton1.jpg"
                }
            ]
        },
        {
            "category_name": "Kids",
            "category_products": [
                {
                    "id": "1k",
                    "title": "Chicco",
                    "price": "1199",
                    "compare_at_price": "1399",
                    "vendor": "Myntra",
                    "badge_text": "Wedding Special",
                    "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14075186/2021/4/12/85af90ad-db0a-47ee-b26f-4b2168cc31ae1618209422880ChiccoBoysWhite1.jpg",
                    "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14075186/2021/4/12/9a744074-86f3-4c0f-810b-2877e4bdf1701618209422918ChiccoBoysWhite3.jpg"
                },
                {
                    "id": "2k",
                    "title": "Girls White & Black Printed Sustainable Tracksuit",
                    "price": "2199",
                    "compare_at_price": "4299",
                    "vendor": "Myntra",
                    "badge_text": "New season",
                    "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15597052/2021/9/25/1fe8ff1f-6c80-402e-ac72-cbdccb8f77371632552170304Chicco1.jpg",
                    "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15597052/2021/9/25/fc288e63-8e9e-4f02-8e70-1a3b7452674f1632552170439Chicco2.jpg"
                },
                {
                    "id": "3k",
                    "title": "Custom t-shirt",
                    "price": "1399",
                    "compare_at_price": "1499",
                    "vendor": "Myntra",
                    "badge_text": "On offer",
                    "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16951678/2022/1/27/167ed0a2-7936-4d1a-955b-dfff4e53f1281643289347488Tshirts1.jpg",
                    "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16951678/2022/1/27/13822874-aa23-4eb6-ab6a-026021ea503a1643289347112Tshirts2.jpg"
                },
                {
                    "id": "4k",
                    "title": "Kids Tshirt",
                    "price": "599",
                    "compare_at_price": "799",
                    "vendor": "Myntra",
                    "badge_text": "New season",
                    "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16809172/2023/4/19/ebeec264-7dea-4f8c-88ed-1b9ccd6c6a301681901675455-mothercare-Infant-Girls-Pink--Blue-Printed-Cotton-Top-490168-1.jpg",
                    "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16809172/2023/4/19/ebeec264-7dea-4f8c-88ed-1b9ccd6c6a301681901675455-mothercare-Infant-Girls-Pink--Blue-Printed-Cotton-Top-490168-1.jpg"
                }
            ]
        }
    ]
// there is a problem in api regarding cors error that's why i used data

const filterData=(filterItem)=>{
    // Get the div with id "main"
    var mainDiv = document.getElementById("main");
    if(mainDiv)
    {
        while (mainDiv.firstChild) {
            mainDiv.firstChild.remove();
        }
    }
    document.getElementById("Men").style.color="black";
    document.getElementById("Women").style.color="black";
    document.getElementById("Kids").style.color="black";
    document.getElementById("Men").style.backgroundColor="white";
    document.getElementById("Women").style.backgroundColor="white";
    document.getElementById("Kids").style.backgroundColor="white";
    document.getElementById("Meni").style.display="none";
    document.getElementById("Womeni").style.display="none";
    document.getElementById("Kidsi").style.display="none";

    var targetParagraph = document.getElementById(filterItem);
    // Apply CSS styles using JavaScript
    targetParagraph.style.color = "white";
    targetParagraph.style.backgroundColor = "black";
    document.getElementById(`${filterItem}i`).style.display="inline";





    for(let i=0;i<filterItem.length;i++)
    {
        if(data[i].category_name==filterItem)
        {   
            console.log(data[i].category_products,'products')
            for(let j=0;j<data[i].category_products.length;j++)
            {
            // Create a new div to hold the product information
            var productDiv = document.createElement("div");
            productDiv.classList.add("product"); // You can add additional styling with a CSS class
            productDiv.id="product";
            // Create and append elements for each property in the productData

            var ImageElement = document.createElement("div");
            ImageElement.id="imageContainer";
            var image=document.createElement("img");
            image.innerHTML = data[i].category_products[j].image;
            image.src = data[i].category_products[j].image;
            image.alt = "Description of the title";
            image.id="image";
            ImageElement.appendChild(image);

            var badgeElement = document.createElement("p");
            badgeElement.innerHTML = data[i].category_products[j].badge_text;
            badgeElement.id="badge_text";
            ImageElement.appendChild(badgeElement)
            productDiv.appendChild(ImageElement);

            var productDetail = document.createElement('div');
            productDetail.id="productDetail";

            var element = document.createElement("p");
            element.innerHTML = data[i].category_products[j].title;
            element.id="title";
            productDetail.appendChild(element);

            var element = document.createElement("p");
            element.id="dot";
            productDetail.appendChild(element);

            var element = document.createElement("p");
            element.innerHTML = data[i].category_products[j].vendor;
            element.id="vendor";
            productDetail.appendChild(element);

            productDiv.appendChild(productDetail);

            const priceDiv = document.createElement("div");
            priceDiv.id="priceDiv";

            var element = document.createElement("p");
            element.innerHTML = data[i].category_products[j].price;
            element.id="price";
            priceDiv.appendChild(element);

            var element = document.createElement("p");
            element.innerHTML = data[i].category_products[j].compare_at_price;
            element.id="comparePrice";
            priceDiv.appendChild(element);

            var element = document.createElement("p");
            element.innerHTML = "50% Off";
            element.id="off";
            priceDiv.appendChild(element);

            productDiv.appendChild(priceDiv);

           

          

            var element = document.createElement("p");
            element.innerHTML = "Add to Cart";
            element.id="cart";
            productDiv.appendChild(element);

            // Append the productDiv to the mainDiv
            mainDiv.appendChild(productDiv);
            }
        }
    }
}
filterData("Men");

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
