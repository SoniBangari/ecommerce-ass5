interface CartItem {
    id: any;
    title: string;
    price: number;
    description:string;
    image: string;
    rating: { rate: number, count: number };
    category: string;
    gender?: string;
    quantity?: number;
}

interface cartdataModel {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
  }
  let allData: Array<CartItem> = [];
  let carted1: Array<CartItem> = [];
  let sortedContent : Array<CartItem> = [];
let carted: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

try {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        json.forEach(
          (element: {
            id: number;
            title: string;
            price: number;
            description: string;
            category: string;
            image: string;
            rating: {
              rate: number;
              count: number;
            };
          }) => {
            
            let data: CartItem = {
              id: element.id,
              title: element.title,
              price: element.price,
              description: element.description,
              category: element.category,
              image: element.image,
              rating: {
                rate: element.rating.rate,
                count: element.rating.count,
              },
            };
            allData.push(data);
          }
        );

function saveCartToLocalStorage() {

    localStorage.setItem('cart', JSON.stringify(carted));
}

const cart: CartItem[] = [];

function all(category: string) {
    const allCategories: Array<string> = ["all", "mens", "womens", "electronics", "jewelery"];
    allCategories.forEach((e) => {
        document.getElementById(e).style.backgroundColor = "grey";
        document.getElementById(e)?.classList.remove('active');
    });
    document.getElementById(category).style.backgroundColor = "red";
    document.getElementById(category)?.classList.add('active');
    if (category === "mens") category = "men's clothing";
    if (category === "womens") category = "women's clothing";

   
                var content = document.getElementsByClassName("content")[0];
                content.innerHTML = "";
                // json.forEach((element:any) => {
                    
                    
                //     if (category === "all" || element.category === category) {
                //         var pdiv = document.createElement("div");
                //         var img = document.createElement("img");
                //         img.setAttribute("src", element.image);
                //         pdiv.appendChild(img);

                //         var title = document.createElement("h5");
                //         title.innerHTML = element.title;
                //         pdiv.appendChild(title);

                //         var price = document.createElement("p");
                //         price.innerHTML = "$ " + element.price;
                //         pdiv.appendChild(price);

                //         var rating = document.createElement('p');
                //         rating.innerHTML = "Rating: " + element.rating.rate + "⭐⭐⭐⭐⭐ (" + element.rating.count + " reviews)";
                //         pdiv.appendChild(rating);

                        

                //         content.appendChild(pdiv);


                //         pdiv.addEventListener("click", () => {
                //             content.innerHTML = "";
                //             var div1 = document.createElement("div");
                //             var div2 = document.createElement("div");
                //             var img = document.createElement("img");
                //             img.setAttribute("src", element.image);
                //             img.style.width = "100%";
                //             img.style.height = "100%";
                //             div1.appendChild(img);
                //             div1.style.backgroundColor = "white";
                //             div2.style.backgroundColor = "white";
                //             div1.style.width = "35%";
                //             div2.style.width = "40%";
                //             div2.style.padding = "4vw";
                //             var heading = document.createElement("h5");
                //             heading.innerHTML = element.title;
                //             div2.appendChild(heading);

                //             var categorydesc = document.createElement('p');
                //             categorydesc.innerHTML = element.category;
                //             div2.appendChild(categorydesc);
                //             div2.appendChild(document.createElement('hr'));
                //             price.innerHTML = "Price: $ " + element.price;

                //             div2.appendChild(price);
                //             var rating = document.createElement('h6');
                //             rating.innerHTML = "Rating: " + element.rating.rate + "⭐⭐⭐⭐⭐ " + element.rating.count + " Reviews";
                //             div2.appendChild(rating);
                //             var desc = document.createElement('h6');
                //             desc.innerHTML = element.description;
                //             div2.appendChild(desc);
                //             var button = document.createElement("button");
                //             button.innerHTML = "Add to the Cart"
                //             button.setAttribute("id", "addcart");
                //             button.setAttribute("class", "btn btn-primary");
                //             button.style.alignSelf = "center";
                //             var reviews = document.createElement("h6");
                //             reviews.innerHTML = element.rating.count + " Reviews";
                //             div2.appendChild(reviews);
                            
    
                //             // var quantityLabel = document.createElement('label');
                //             // quantityLabel.innerHTML = 'Quantity:';
                //             // quantityLabel.setAttribute('for', `quantity-${element.id}`);
                //             // div2.appendChild(quantityLabel);
    
                //             // var quantityInput = document.createElement('input');
                //             // quantityInput.setAttribute('type', 'number');
                //             // quantityInput.setAttribute('min', '1');
                //             // quantityInput.setAttribute('id', `quantity-${element.id}`);
                //             // quantityInput.setAttribute('value', '1');
                //             // quantityInput.style.marginBottom = '5px';
                //             // div2.appendChild(quantityInput);

                //             button.addEventListener("click", () => {
                //                 window.alert("Added to the Cart");
                //                 carted.push(element);
                //                 saveCartToLocalStorage();
                //             });

                //             div2.appendChild(button);
                //             content.appendChild(div1);
                //             content.appendChild(div2);
                //         });
                //         content.appendChild(pdiv);


                //         //    function displayCart() {
                //         //             const cartItemsList: any = document.getElementById("cart-items");
                //         //             //cartItemsList.innerHTML = ""; // Clear the previous cart items

                //         //             cart.forEach((item, index) => {
                //         //                 const listItem = document.createElement("li");
                //         //                 listItem.innerHTML = `<span>${item.title}</span> - <span>$${item.price.toFixed(2)}</span>`;

                //         //                 const removeButton = document.createElement("button");
                //         //                 removeButton.innerText = "Remove";
                //         //                 removeButton.addEventListener("click", () => {
                //         //                     cart.splice(index, 1);
                //         //                     displayCart(); // Update the cart display
                //         //                 });

                //         //                 listItem.appendChild(removeButton);
                //         //                 cartItemsList.appendChild(listItem);
                //         //             });

                //         //             const cartElement: any = document.getElementById("cart");
                //         //             const cartTitle: any = cartElement.querySelector(".title");
                //         //             cartTitle.textContent = "CART";
                //         //             cartElement.style.display = cart.length > 0 ? "block" : "none";
                //         //         }
                //         function displayCart() {
                //             const allCategories: Array<string> = ["all", "mens", "womens", "electronics", "jewelry"];
                //             allCategories.forEach((e) => {
                //                 document.getElementById(e)?.classList.remove('active');
                //             });
                //             document.getElementById('cart')?.classList.add('active');
                //             var cartContent:any = document.getElementById("cart-content");
                //             cartContent.innerHTML = "";
                //             if (carted.length === 0) {
                //                 var p = document.createElement("p");
                //                 p.innerHTML = "Cart is currently empty";
                //                 cartContent.appendChild(p);
                //             } else {
                //                 carted.forEach((element: CartItem) => {
                //                     var pdiv = document.createElement("div");
                //                     var img = document.createElement("img");
                //                     img.setAttribute("src", element.image);
                //                     pdiv.appendChild(img);
                //                     var title = document.createElement("h5");
                //                     title.innerHTML = element.title;
                //                     pdiv.appendChild(title);
                //                     var price = document.createElement("p");
                //                     price.innerHTML = "$ " + element.price;

                //                     // Added quantity display and options to increase or decrease quantity
                //                     var quantityDiv = document.createElement('div');
                //                     quantityDiv.style.display = 'flex';
                //                     quantityDiv.style.gap = '10px';

                //                     var quantityLabel = document.createElement('label');
                //                     quantityLabel.innerHTML = 'Quantity:';
                //                     quantityLabel.style.marginBottom = '5px';
                //                     quantityLabel.style.marginRight = '5px';
                //                     quantityDiv.appendChild(quantityLabel);

                //                     var quantityInput = document.createElement('input');
                //                     quantityInput.setAttribute('type', 'number');
                //                     quantityInput.setAttribute('min', '1');
                //                     quantityInput.setAttribute('value', element.quantity ? element.quantity.toString() : '1');
                //                     quantityInput.style.marginBottom = '5px';
                //                     quantityDiv.appendChild(quantityInput);

                //                     var increaseButton = document.createElement('button');
                //                     increaseButton.innerHTML = '+';
                //                     increaseButton.onclick = function () {
                //                         const newQuantity: number = (element.quantity || 1) + 1;
                //                         element.quantity = newQuantity;
                //                         quantityInput.value = newQuantity.toString();
                //                         saveCartToLocalStorage();
                //                         updateCartTotal();
                //                     };
                //                     quantityDiv.appendChild(increaseButton);

                //                     var decreaseButton = document.createElement('button');
                //                     decreaseButton.innerHTML = '-';
                //                     decreaseButton.onclick = function () {
                //                         const newQuantity: number = (element.quantity || 1) - 1;
                //                         if (newQuantity > 0) {
                //                             element.quantity = newQuantity;
                //                             quantityInput.value = newQuantity.toString();
                //                             saveCartToLocalStorage();
                //                             updateCartTotal();
                //                         }
                //                     };
                //                     quantityDiv.appendChild(decreaseButton);

                //                     pdiv.appendChild(quantityDiv);
                //                     pdiv.appendChild(price);

                //                     var removeButton = document.createElement('button');
                //                     removeButton.innerHTML = 'Remove from Cart';
                //                     removeButton.onclick = function () {
                //                         removeEle(element);
                //                     };
                //                     pdiv.appendChild(removeButton);

                //                     cartContent.appendChild(pdiv);
                //                 });
                //             }
                //         }

                //         function updateCartTotal() {
                //             const cartTotal = document.getElementById('cart-total');
                //             let total: number = 0;
                //             carted.forEach((item) => {
                //                 total += item.price * (item.quantity || 1);
                //             });
                //             cartTotal.innerText = `$${total.toFixed(2)}`;
                //         }

                //         document.getElementById("all")?.addEventListener("click", () => {
                //             all("all");
                //         });
                //         document.getElementById("mens")?.addEventListener("click", () => {
                //             all("men's clothing");
                //         });
                //         document.getElementById("womens")?.addEventListener("click", () => {
                //             all("women's clothing");
                //         });
                //         document.getElementById("electronics")?.addEventListener("click", () => {
                //             all("electronics");
                //         });
                //         document.getElementById("jewelry")?.addEventListener("click", () => {
                //             all("jewelery");
                //         });
                //         document.getElementById("logo")?.addEventListener("click", () => {
                //             all("all");
                //         });
                //         document.getElementById("cart-button")?.addEventListener("click", () => {
                //             displayCart();
                //             updateCartTotal();
                //         });

                //         document.getElementById("title")?.addEventListener("click", () => { displayCart() })
                //     }
                // });
                sortedContent.forEach((element:any) => {
                    
                    
                    if (category === "all" || element.category === category) {
                        var pdiv = document.createElement("div");
                        var img = document.createElement("img");
                        img.setAttribute("src", element.image);
                        pdiv.appendChild(img);

                        var title = document.createElement("h5");
                        title.innerHTML = element.title;
                        pdiv.appendChild(title);

                        var price = document.createElement("p");
                        price.innerHTML = "$ " + element.price;
                        pdiv.appendChild(price);

                        var rating = document.createElement('p');
                        rating.innerHTML = "Rating: " + element.rating.rate + "⭐⭐⭐⭐⭐ (" + element.rating.count + " reviews)";
                        pdiv.appendChild(rating);

                        

                        content.appendChild(pdiv);


                        pdiv.addEventListener("click", () => {
                            content.innerHTML = "";
                            var div1 = document.createElement("div");
                            var div2 = document.createElement("div");
                            var img = document.createElement("img");
                            img.setAttribute("src", element.image);
                            img.style.width = "100%";
                            img.style.height = "100%";
                            div1.appendChild(img);
                            div1.style.backgroundColor = "white";
                            div2.style.backgroundColor = "white";
                            div1.style.width = "35%";
                            div2.style.width = "40%";
                            div2.style.padding = "4vw";
                            var heading = document.createElement("h5");
                            heading.innerHTML = element.title;
                            div2.appendChild(heading);

                            var categorydesc = document.createElement('p');
                            categorydesc.innerHTML = element.category;
                            div2.appendChild(categorydesc);
                            div2.appendChild(document.createElement('hr'));
                            price.innerHTML = "Price: $ " + element.price;

                            div2.appendChild(price);
                            var rating = document.createElement('h6');
                            rating.innerHTML = "Rating: " + element.rating.rate + "⭐⭐⭐⭐⭐ " + element.rating.count + " Reviews";
                            div2.appendChild(rating);
                            var desc = document.createElement('h6');
                            desc.innerHTML = element.description;
                            div2.appendChild(desc);
                            var button = document.createElement("button");
                            button.innerHTML = "Add to the Cart"
                            button.setAttribute("id", "addcart");
                            button.setAttribute("class", "btn btn-primary");
                            button.style.alignSelf = "center";
                            var reviews = document.createElement("h6");
                            reviews.innerHTML = element.rating.count + " Reviews";
                            div2.appendChild(reviews);
                            
    
                            // var quantityLabel = document.createElement('label');
                            // quantityLabel.innerHTML = 'Quantity:';
                            // quantityLabel.setAttribute('for', `quantity-${element.id}`);
                            // div2.appendChild(quantityLabel);
    
                            // var quantityInput = document.createElement('input');
                            // quantityInput.setAttribute('type', 'number');
                            // quantityInput.setAttribute('min', '1');
                            // quantityInput.setAttribute('id', `quantity-${element.id}`);
                            // quantityInput.setAttribute('value', '1');
                            // quantityInput.style.marginBottom = '5px';
                            // div2.appendChild(quantityInput);

                            button.addEventListener("click", () => {
                                window.alert("Added to the Cart");
                                carted.push(element);
                                saveCartToLocalStorage();
                            });

                            div2.appendChild(button);
                            content.appendChild(div1);
                            content.appendChild(div2);
                        });
                        content.appendChild(pdiv);


                        //    function displayCart() {
                        //             const cartItemsList: any = document.getElementById("cart-items");
                        //             //cartItemsList.innerHTML = ""; // Clear the previous cart items

                        //             cart.forEach((item, index) => {
                        //                 const listItem = document.createElement("li");
                        //                 listItem.innerHTML = `<span>${item.title}</span> - <span>$${item.price.toFixed(2)}</span>`;

                        //                 const removeButton = document.createElement("button");
                        //                 removeButton.innerText = "Remove";
                        //                 removeButton.addEventListener("click", () => {
                        //                     cart.splice(index, 1);
                        //                     displayCart(); // Update the cart display
                        //                 });

                        //                 listItem.appendChild(removeButton);
                        //                 cartItemsList.appendChild(listItem);
                        //             });

                        //             const cartElement: any = document.getElementById("cart");
                        //             const cartTitle: any = cartElement.querySelector(".title");
                        //             cartTitle.textContent = "CART";
                        //             cartElement.style.display = cart.length > 0 ? "block" : "none";
                        //         }
                        function displayCart() {
                            const allCategories: Array<string> = ["all", "mens", "womens", "electronics", "jewelry"];
                            allCategories.forEach((e) => {
                                document.getElementById(e)?.classList.remove('active');
                            });
                            document.getElementById('cart')?.classList.add('active');
                            var cartContent:any = document.getElementById("cart-content");
                            cartContent.innerHTML = "";
                            if (carted.length === 0) {
                                var p = document.createElement("p");
                                p.innerHTML = "Cart is currently empty";
                                cartContent.appendChild(p);
                            } else {
                                carted.forEach((element: CartItem) => {
                                    var pdiv = document.createElement("div");
                                    var img = document.createElement("img");
                                    img.setAttribute("src", element.image);
                                    pdiv.appendChild(img);
                                    var title = document.createElement("h5");
                                    title.innerHTML = element.title;
                                    pdiv.appendChild(title);
                                    var price = document.createElement("p");
                                    price.innerHTML = "$ " + element.price;

                                    // Added quantity display and options to increase or decrease quantity
                                    var quantityDiv = document.createElement('div');
                                    quantityDiv.style.display = 'flex';
                                    quantityDiv.style.gap = '10px';

                                    var quantityLabel = document.createElement('label');
                                    quantityLabel.innerHTML = 'Quantity:';
                                    quantityLabel.style.marginBottom = '5px';
                                    quantityLabel.style.marginRight = '5px';
                                    quantityDiv.appendChild(quantityLabel);

                                    var quantityInput = document.createElement('input');
                                    quantityInput.setAttribute('type', 'number');
                                    quantityInput.setAttribute('min', '1');
                                    quantityInput.setAttribute('value', element.quantity ? element.quantity.toString() : '1');
                                    quantityInput.style.marginBottom = '5px';
                                    quantityDiv.appendChild(quantityInput);

                                    var increaseButton = document.createElement('button');
                                    increaseButton.innerHTML = '+';
                                    increaseButton.onclick = function () {
                                        const newQuantity: number = (element.quantity || 1) + 1;
                                        element.quantity = newQuantity;
                                        quantityInput.value = newQuantity.toString();
                                        saveCartToLocalStorage();
                                        updateCartTotal();
                                    };
                                    quantityDiv.appendChild(increaseButton);

                                    var decreaseButton = document.createElement('button');
                                    decreaseButton.innerHTML = '-';
                                    decreaseButton.onclick = function () {
                                        const newQuantity: number = (element.quantity || 1) - 1;
                                        if (newQuantity > 0) {
                                            element.quantity = newQuantity;
                                            quantityInput.value = newQuantity.toString();
                                            saveCartToLocalStorage();
                                            updateCartTotal();
                                        }
                                    };
                                    quantityDiv.appendChild(decreaseButton);

                                    pdiv.appendChild(quantityDiv);
                                    pdiv.appendChild(price);

                                    var removeButton = document.createElement('button');
                                    removeButton.innerHTML = 'Remove from Cart';
                                    removeButton.onclick = function () {
                                        removeEle(element);
                                    };
                                    pdiv.appendChild(removeButton);

                                    cartContent.appendChild(pdiv);
                                });
                            }
                        }

                        function updateCartTotal() {
                            const cartTotal = document.getElementById('cart-total');
                            let total: number = 0;
                            carted.forEach((item) => {
                                total += item.price * (item.quantity || 1);
                            });
                            cartTotal.innerText = `$${total.toFixed(2)}`;
                        }

                        document.getElementById("all")?.addEventListener("click", () => {
                            all("all");
                        });
                        document.getElementById("mens")?.addEventListener("click", () => {
                            all("men's clothing");
                        });
                        document.getElementById("womens")?.addEventListener("click", () => {
                            all("women's clothing");
                        });
                        document.getElementById("electronics")?.addEventListener("click", () => {
                            all("electronics");
                        });
                        document.getElementById("jewelry")?.addEventListener("click", () => {
                            all("jewelery");
                        });
                        document.getElementById("logo")?.addEventListener("click", () => {
                            all("all");
                        });
                        document.getElementById("cart-button")?.addEventListener("click", () => {
                            displayCart();
                            updateCartTotal();
                        });

                        document.getElementById("title")?.addEventListener("click", () => { displayCart() })
                    }
                });
                
               
    
}
function cartItems() {
    const allCategories = ["all", "mens", "womens", "electronics", "jewelery"];
    allCategories.forEach((e) => {
        document.getElementById(e).style.backgroundColor = "grey";
    });
    var main = document.getElementsByClassName("content")[0];
    main.innerHTML = "";
    var buttonContinue = document.createElement("button");
    buttonContinue.setAttribute("class", "btn btn-secondary");
    buttonContinue.innerHTML = "Keep Shopping";
    buttonContinue.addEventListener("click", () => all('all'));
    main.appendChild(buttonContinue);

    if (carted.length === 0) {
        var noitem = document.createElement("p");
        noitem.innerHTML = "Please add items to the cart!!";
        main.appendChild(noitem);
    }
    else {
        let totalCost = 0;
        var table = document.createElement("table");
        table.setAttribute("class", "table");
        var tbody = document.createElement("tbody");

        carted.forEach(element => {
            var trow = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerHTML = "";
            var td2 = document.createElement("td");
            td2.innerHTML = element.title;
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var divx = document.createElement("div");
            divx.setAttribute("class", "btn-group btn-group-sm");
            divx.setAttribute("role", "group");
            divx.setAttribute("aria-label", "Small button group");
            var button1 = document.createElement("button");
            button1.setAttribute("type", "button");
            button1.setAttribute("class", "btn btn-outline-primary");
            button1.innerHTML = "-";
            var button2 = document.createElement("button");
            button2.setAttribute("type", "button");
            button2.setAttribute("class", "btn btn-outline-primary");
            button2.innerHTML = "" + element.quantity;
            var button3 = document.createElement("button");
            button3.setAttribute("type", "button");
            button3.setAttribute("class", "btn btn-outline-primary");
            button3.innerHTML = "+";
            divx.appendChild(button1);
            divx.appendChild(button2);
            divx.appendChild(button3);
            td4.appendChild(divx);

            button1.addEventListener("click", () => {
                if(element.quantity===1){
                  removeEle(element);
                }
                else if (element.quantity > 1) {
                  element.quantity = element.quantity - 1;
                  button2.innerHTML = "" + element.quantity;
                  totalCost -= element.price;
                  totalCost = Math.round(totalCost);
                  document.getElementById("total")!.innerHTML =
                    "Total Amount " + totalCost;
                }
              });
        
              //event listner for decrease quantity of a item
  
              button3.addEventListener("click", () => {
                element.quantity = element.quantity + 1;
                button2.innerHTML = "" + element.quantity;
                totalCost += element.price;
                totalCost = Math.round(totalCost);
                document.getElementById("total")!.innerHTML =
                  "Total Amount " + totalCost;
              });
            var image = document.createElement("img");
            image.setAttribute("src", element.image);
            image.style.width = "60px";
            image.style.height = "60px";
            td1.appendChild(image);
            var td2 = document.createElement("td");
            td2.innerHTML = element.title;
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            td4.innerHTML = "";
            totalCost += element.price;
            td3.innerHTML = "$ " + element.price;
            var td5 = document.createElement("td");

            var removeElement = document.createElement("button");
            removeElement.setAttribute("class", "btn");
            removeElement.setAttribute("type", "button");
            removeElement.innerHTML = "Remove Item";
            removeElement.addEventListener("click", () => removeEle(element));
            td5.appendChild(removeElement);
            trow.appendChild(td1);
            trow.appendChild(td2);
            trow.appendChild(td3);
            trow.appendChild(td4);
            trow.appendChild(td5);
            tbody.appendChild(trow);
        });

        table.appendChild(tbody);
        main.appendChild(table);

        var button = document.createElement('button');
        button.innerHTML = "CHECKOUT";
        var subtotal = document.createElement('h3');
        subtotal.style.display = "flex";
        subtotal.style.justifyContent = "space-between";
        var span1 = document.createElement('span');
        var span2 = document.createElement('span');
        span1.innerHTML = " Total Amount  $ ";
        span2.innerHTML = "" + Math.round(totalCost);
        subtotal.appendChild(span1);
        subtotal.appendChild(span2);
        subtotal.style.gap = "2vw";
        main.appendChild(document.createElement('hr'));
        main.appendChild(subtotal);
        main.appendChild(document.createElement('hr'));
        main.appendChild(button);
    }

}
function clearTheDialog() {
    var dialog = document.getElementsByClassName("modal fade show")[0];
    dialog.innerHTML = "";
    cartItems();
}
function removeEle(item: any) {
    carted = carted.filter(element => element != item);
    cartItems();
}
//Sort by functions 
function sortInOrder(condition : string){
    if(condition==="high"){
      sortedContent.sort((a: CartItem, b: CartItem) => b.price - a.price);

    }
    else if (condition === "low"){
      sortedContent.sort((a: CartItem, b: CartItem) => a.price - b.price);

    }
    else if(condition === "Popularity"){
      sortedContent.sort((a: CartItem, b: CartItem) => b.rating.count - a.rating.count);

    }
    else if(condition === "rating-high"){
      sortedContent.sort((a: CartItem, b: CartItem) => b.rating.rate - a.rating.rate);
    }
    else if (condition === "rating-low"){
      sortedContent.sort((a: CartItem, b: CartItem) => a.rating.rate - b.rating.rate);
    }
      all("all");
  }

  //filter Items on rating 

  function filterInOrder(condition : string){
    sortedContent = allData;
    if(condition==="rating-4"){

      let filtered = sortedContent.filter((item) => item.rating.rate > 4.0);
      sortedContent = filtered;
    }
    else if (condition === "rating-3"){
      let filtered = sortedContent.filter((item) => item.rating.rate >= 3.0 && item.rating.rate < 4.0);
      sortedContent = filtered;
    }
    else if(condition === "rating-2"){
      let filtered = sortedContent.filter((item) => item.rating.rate >= 2.0 && item.rating.rate < 3.0);
      sortedContent = filtered;
    }
    else if(condition === "rating-1"){
      let filtered = sortedContent.filter((item) => item.rating.rate >= 1.0 && item.rating.rate < 2.0);
      sortedContent = filtered;
    }
      all("all");
  }


all("all");
document.getElementById("all")?.addEventListener("click", () => all("all"));
document.getElementById("mens")?.addEventListener("click", () => all("mens"));
document.getElementById("womens")?.addEventListener("click", () => all("womens"));
document.getElementById("electronics")?.addEventListener("click", () => all("electronics"));
document.getElementById("jewelery")?.addEventListener("click", () => all("jewelery"));
document.getElementById("logo")?.addEventListener("click", () => all("all"));
document
      .getElementById("logo")!
        .addEventListener("click", () => all("all"));
      document
        .getElementById("high")!
        .addEventListener("click", () => sortInOrder("high"));
      document
        .getElementById("low")!
        .addEventListener("click", () => sortInOrder("low"));
      document
        .getElementById("Popularity")!
        .addEventListener("click", () => sortInOrder("Popularity"));
      document
        .getElementById("rating-high")!
        .addEventListener("click", () => sortInOrder("rating-high"));
      document
        .getElementById("rating-low")!
        .addEventListener("click", () => sortInOrder("rating-low"));     
      document
        .getElementById("reset")!
        .addEventListener("click", () => filterInOrder("reset"));
      document
        .getElementById("rating-4")!
        .addEventListener("click", () => filterInOrder("rating-4"));
      document
        .getElementById("rating-3")!
        .addEventListener("click", () => filterInOrder("rating-3"));
      document
        .getElementById("rating-2")!
        .addEventListener("click", () => filterInOrder("rating-2"));
      document
        .getElementById("rating-1")!
        .addEventListener("click", () => filterInOrder("rating-1"));

      all("all");
      
      
var x: any = document.getElementsByClassName("btn btn-primary position-relative")[0];
x.addEventListener("click", () =>
    cartItems()
);
var startpage: any = document.getElementById("logo");
startpage.addEventListener("click", () => all("all"));
});
} catch (e) {
    console.log(e);
}
