import allPizza from "./ Pizza_List.json" assert { type: "json" };
const pizzasInformation = allPizza;

const pizzas = document.querySelector(".pizzas");

let typeOfPizzas = "Усі";

const body = document.querySelector(".body");
body.addEventListener("click", function(event){
let button = event.target;
switch(button.className){
   case "selectButtonText unselected":
      typeOfPizzas = button.textContent;
      PrintPizza();
      ChangeButtonStile(button);
      SaveData();
      break;
   case "buyButtonText":
      BuyButtonClicked(button);
      SaveData();
      break;
   case "plusButton":
      PlusButtonClicked(button);
      SaveData();
      break;
   case "minusButton":
      MinusButtonClicked(button);
      SaveData();
      break;
   case "cancelButton":
      CancelButtonClicked(button);
      SaveData();
      break;
   case "clearButton":
      DeleteOrderClicked();
      SaveData();
      break;
   case "confirm":
      OrderButtonClicked();
      SaveData();
      break;
   }
});

PrintPizza();

function PrintPizza(){
if(typeOfPizzas == "Усі"){
   let pizzasArray = Array.from(pizzas.querySelectorAll(".pizza"));
   let n = parseInt(pizzasArray.length);
   for(let i = n; i > 0; i--){
      pizzas.removeChild(pizzasArray[i - 1]);
   }
   for(let i = 0; i < pizzasInformation.length; i++){
      let pizza = document.createElement("section");
      pizza.setAttribute("class", "pizza");
      pizza.innerHTML = `
      <img src="${pizzasInformation[i].pizzaImg}" alt="pizza імпреза" class="pizzaImg">
      <section class="pizzaText">
         <article class="pizzaName">${pizzasInformation[i].pizzaName}</article>
         <article class="typeOfPizza">${pizzasInformation[i].type}</article>
         <article class="pizzaDescription">${pizzasInformation[i].description}</article>
      </section>
      <section class="buyPizza">
         <section class="buySmallPizza">
            <section class="diameter">
               <img class="diameterLabel" src="size-icon.svg" alt="diameter">
               <article class="text">${pizzasInformation[i].smallSize.diameter}</article>
            </section>
            <section class="weight">
               <img class="weightLabel" src="weight.svg" alt="weight">
               <article class="text">${pizzasInformation[i].smallSize.weight}</article>
            </section>
            <section class="price">
               <article class="textPrice">${pizzasInformation[i].smallSize.price}</article>
               <article class="textPriceUan">грн.</article>
            </section>
            <button class="buyButton small">
               <article class="buyButtonText">Купити</article>
            </button>
         </section>
         <section class="buyBigPizza">
            <section class="diameter">
               <img class="diameterLabel" src="size-icon.svg" alt="diameter">
               <article class="text">${pizzasInformation[i].bigSize.diameter}</article>
            </section>
            <section class="weight">
               <img class="weightLabel" src="weight.svg" alt="weight">
               <article class="text weight">${pizzasInformation[i].bigSize.weight}</article>
            </section>
            <section class="price">
               <article class="textPrice">${pizzasInformation[i].bigSize.price}</article>
               <article class="textPriceUan">грн.</article>
            </section>
            <button class="buyButton big">
               <article class="buyButtonText">Купити</article>
            </button>
         </section>
      </section>
      `;
      if(pizzasInformation[i].is_new == true){
         let labelNew = document.createElement("section");
         labelNew.setAttribute("class", "label new");

         let labelText = document.createElement("article");
         labelText.setAttribute("class", "labelText");
         labelText.textContent = "Нова";
         labelNew.appendChild(labelText);

         pizza.appendChild(labelNew);
      }else if(pizzasInformation[i].is_popular == true){
         let labelNew = document.createElement("section");
         labelNew.setAttribute("class", "label popular");

         let labelText = document.createElement("article");
         labelText.setAttribute("class", "labelText");
         labelText.textContent = "Популярна";
         labelNew.appendChild(labelText);

         pizza.appendChild(labelNew);
      }
      pizzas.appendChild(pizza);
   }
}else{
   let pizzasArray = Array.from(pizzas.querySelectorAll(".pizza"));
   let n = parseInt(pizzasArray.length);
   for(let i = n; i > 0; i--){
      pizzas.removeChild(pizzasArray[i - 1]);
   }
   for(let i = 0; i < pizzasInformation.length; i++){
      if(pizzasInformation[i].type == typeOfPizzas){
         let pizza = document.createElement("section");
         pizza.setAttribute("class", "pizza");
         pizza.innerHTML = `
         <img src="${pizzasInformation[i].pizzaImg}" alt="pizza імпреза" class="pizzaImg">
         <section class="pizzaText">
            <article class="pizzaName">${pizzasInformation[i].pizzaName}</article>
            <article class="typeOfPizza">${pizzasInformation[i].type}</article>
            <article class="pizzaDescription">${pizzasInformation[i].description}</article>
         </section>
         <section class="buyPizza">
            <section class="buySmallPizza">
               <section class="diameter">
                  <img class="diameterLabel" src="size-icon.svg" alt="diameter">
                  <article class="text">${pizzasInformation[i].smallSize.diameter}</article>
               </section>
               <section class="weight">
                  <img class="weightLabel" src="weight.svg" alt="weight">
                  <article class="text">${pizzasInformation[i].smallSize.weight}</article>
               </section>
               <section class="price">
                  <article class="textPrice">${pizzasInformation[i].smallSize.price}</article>
                  <article class="textPriceUan">грн.</article>
               </section>
               <button class="buyButton small">
                  <article class="buyButtonText">Купити</article>
               </button>
            </section>
            <section class="buyBigPizza">
               <section class="diameter">
                  <img class="diameterLabel" src="size-icon.svg" alt="diameter">
                  <article class="text">${pizzasInformation[i].bigSize.diameter}</article>
               </section>
               <section class="weight">
                  <img class="weightLabel" src="weight.svg" alt="weight">
                  <article class="text weight">${pizzasInformation[i].bigSize.weight}</article>
               </section>
               <section class="price">
                  <article class="textPrice">${pizzasInformation[i].bigSize.price}</article>
                  <article class="textPriceUan">грн.</article>
               </section>
               <button class="buyButton big">
                  <article class="buyButtonText">Купити</article>
               </button>
            </section>
         </section>
         `;
         if(pizzasInformation[i].is_new == true){
            let labelNew = document.createElement("section");
            labelNew.setAttribute("class", "label new");
   
            let labelText = document.createElement("article");
            labelText.setAttribute("class", "labelText");
            labelText.textContent = "Нова";
            labelNew.appendChild(labelText);
   
            pizza.appendChild(labelNew);
         }else if(pizzasInformation[i].is_popular == true){
            let labelNew = document.createElement("section");
            labelNew.setAttribute("class", "label popular");
   
            let labelText = document.createElement("article");
            labelText.setAttribute("class", "labelText");
            labelText.textContent = "Популярна";
            labelNew.appendChild(labelText);
   
            pizza.appendChild(labelNew);
         }
         pizzas.appendChild(pizza);
      }
   }
}
}

function ChangeButtonStile(button){
   let selectedButtonText = document.querySelector(".selectButtonText.selected");
   let selectedButton = selectedButtonText.parentNode; 
   selectedButton.setAttribute("class", "selectButton unselected");
   selectedButtonText.setAttribute("class", "selectButtonText unselected");

   button.parentNode.setAttribute("class", "selectButton selected");
   button.setAttribute("class", "selectButtonText selected");
}

function BuyButtonClicked(button){
   let pizzasArray = Array.from(pizzas.querySelectorAll(".pizza"));
   let pizza = button.parentNode.parentNode.parentNode.parentNode;
   let name = pizza.querySelector(".pizzaName").textContent;
   let isEnd = false;
   let isFind = false;
   for(let i = 0; i < parseInt(pizzasArray.length); i++){
      for(let j = 0; j < pizzasInformation.length; j++){
         if(name === pizzasInformation[j].pizzaName){
            document.querySelector(".ordersTop").querySelector(".amount").textContent++;
            let orders = Array.from(document.querySelectorAll(".order"));
            for(let k = 0; k < orders.length; k++){
               if(orders[k].querySelector(".orderPizzaName").textContent.indexOf(name) != -1){
                  if((button.parentNode.className === "buyButton small") && (orders[k].querySelector(".orderPizzaName").textContent.indexOf("Мала") != -1)){
                     orders[k].querySelector(".amountText").textContent++;
                     orders[k].querySelector(".orderPrice.money").textContent = parseInt(orders[k].querySelector(".orderPrice.money").textContent) + pizzasInformation[j].smallSize.price;
                     document.querySelector(".sumInUAN.money").textContent = parseInt(document.querySelector(".sumInUAN.money").textContent) + pizzasInformation[j].smallSize.price;
                     isFind = true;
                     break;
                  }else if((button.parentNode.className ==="buyButton big") && (orders[k].querySelector(".orderPizzaName").textContent.indexOf("Велика") != -1)){
                     orders[k].querySelector(".amountText").textContent++;
                     orders[k].querySelector(".orderPrice.money").textContent = parseInt(orders[k].querySelector(".orderPrice.money").textContent) + pizzasInformation[j].bigSize.price;
                     document.querySelector(".sumInUAN.money").textContent = parseInt(document.querySelector(".sumInUAN.money").textContent) + pizzasInformation[j].bigSize.price;
                     isFind = true;
                     break;
                  }
               }
            }
            if(isFind == false){
               let order = document.createElement("section");
               order.setAttribute("class", "order");
               
               order.innerHTML= `
                  <section class="orderDiscription">
                     <article class="orderPizzaName">
                        ${name}
                     </article>
                     <section class="orderPizzaCharacteristic">
                        <section class="diameter">
                           <img class="diameterLabel" src="size-icon.svg" alt="diameter">
                           <article class="text">30</article>
                        </section>
                        <section class="weight">
                           <img class="weightLabel" src="weight.svg" alt="weight">
                           <article class="text weight">${button.parentNode.parentNode.querySelector(".weight").querySelector(".text").textContent}</article>
                        </section>
                     </section>
                     <section class="orderButtonGroup">
                        <section class="orderPriceSection">
                           <article class="orderPrice money">
                              ${button.parentNode.parentNode.querySelector(".price").querySelector(".textPrice").textContent}
                           </article>
                           <article class="orderPrice">
                              грн
                           </article>
                        </section>
                        <section class="orderAmount">
                           <button class="minusButton">–</button>
                           <article class="amountText">1</article>
                           <button class="plusButton">+</button>
                        </section>
                        <button class="cancelButton">&#10006;</button>
                     </section>
                  </section>
                  <section class="orderImg">
                  </section>
               `;
               let orderImg = order.querySelector(".orderImg");
               let orderPizzaImg = pizza.querySelector(".pizzaImg").cloneNode(true);
               orderPizzaImg.setAttribute("class", "orderPizzaImg");
               orderImg.appendChild(orderPizzaImg);

               if(button.parentNode.className == "buyButton small")
                  order.querySelector(".orderPizzaName").textContent += ("(Мала)");
               else
                  order.querySelector(".orderPizzaName").textContent += ("(Велика)");

               document.querySelector(".orders").appendChild(order);
               document.querySelector(".sumInUAN.money").textContent = parseInt(document.querySelector(".sumInUAN.money").textContent) + parseInt(button.parentNode.parentNode.querySelector(".textPrice").textContent);
            }
            isEnd = true;
            break;
         }
      }
      if(isEnd) break;
   }
}

function PlusButtonClicked(button){
   let pizzaOrder = button.parentNode.parentNode.parentNode;
   let name = pizzaOrder.querySelector(".orderPizzaName").textContent;
   button.parentNode.querySelector(".amountText").textContent++;

   for(let i = 0; i < pizzasInformation.length; i++){
      if(name.indexOf(pizzasInformation[i].pizzaName) != -1){
         if(name.indexOf("(Мала)") != -1){
            button.parentNode.parentNode.querySelector(".orderPrice.money").textContent = parseInt(button.parentNode.parentNode.querySelector(".orderPrice.money").textContent) + pizzasInformation[i].smallSize.price;
            document.querySelector(".sumInUAN.money").textContent = parseInt(document.querySelector(".sumInUAN.money").textContent) + pizzasInformation[i].smallSize.price;
         }
         else{
            button.parentNode.parentNode.querySelector(".orderPrice.money").textContent = parseInt(button.parentNode.parentNode.querySelector(".orderPrice.money").textContent) + pizzasInformation[i].bigSize.price;
            document.querySelector(".sumInUAN.money").textContent = parseInt(document.querySelector(".sumInUAN.money").textContent) + pizzasInformation[i].bigSize.price;
         }
         document.querySelector(".ordersTop").querySelector(".amount").textContent++;
      }
   }
}

function MinusButtonClicked(button){
   let pizzaOrder = button.parentNode.parentNode.parentNode;
   let name = pizzaOrder.querySelector(".orderPizzaName").textContent;
   if(button.parentNode.querySelector(".amountText").textContent - 1 != 0){
      button.parentNode.querySelector(".amountText").textContent--;
      for(let i = 0; i < pizzasInformation.length; i++){
         if(name.indexOf(pizzasInformation[i].pizzaName) != -1){
            if(name.indexOf("(Мала)") != -1){
               button.parentNode.parentNode.querySelector(".orderPrice.money").textContent = parseInt(button.parentNode.parentNode.querySelector(".orderPrice.money").textContent) - pizzasInformation[i].smallSize.price;
               document.querySelector(".sumInUAN.money").textContent = parseInt(document.querySelector(".sumInUAN.money").textContent) - pizzasInformation[i].smallSize.price;
            }
            else{
               button.parentNode.parentNode.querySelector(".orderPrice.money").textContent = parseInt(button.parentNode.parentNode.querySelector(".orderPrice.money").textContent) - pizzasInformation[i].bigSize.price;
               document.querySelector(".sumInUAN.money").textContent = parseInt(document.querySelector(".sumInUAN.money").textContent) - pizzasInformation[i].bigSize.price;
            }
            document.querySelector(".ordersTop").querySelector(".amount").textContent--;
         }
      }
   }else{
      document.querySelector(".ordersTop").querySelector(".amount").textContent--;
      document.querySelector(".sumInUAN.money").textContent = parseInt(document.querySelector(".sumInUAN.money").textContent) - button.parentNode.parentNode.querySelector(".orderPrice.money").textContent;
      document.querySelector(".orders").removeChild(button.parentNode.parentNode.parentNode.parentNode);
   }
}

function CancelButtonClicked(button){
   document.querySelector(".ordersTop").querySelector(".amount").textContent = parseInt(document.querySelector(".ordersTop").querySelector(".amount").textContent) - parseInt(button.parentNode.querySelector(".amountText").textContent);
   document.querySelector(".sumInUAN.money").textContent = parseInt(document.querySelector(".sumInUAN.money").textContent) - parseInt(button.parentNode.parentNode.querySelector(".orderPrice.money").textContent);
   document.querySelector(".orders").removeChild(button.parentNode.parentNode.parentNode);
}

function DeleteOrderClicked(){
   document.querySelector(".ordersTop").querySelector(".amount").textContent = 0;
   document.querySelector(".sumInUAN.money").textContent = 0;
   let order = Array.from(document.querySelectorAll(".order"));
   let n = order.length;
   for(let i = 0; i < n; i++){
      document.querySelector(".orders").removeChild(order[i]);
   }
}

function OrderButtonClicked(){
   DeleteOrderClicked();
   alert("Ваш заказ успішно прийнятий!!!\n Зачекайте на підтверджуюче повідомлення");
}

window.onscroll = function() {
   var scrolled = document.documentElement.scrollTop;
   if(scrolled !== 0){
     document.querySelector('.top').style.opacity = '0.95';
   }else{
     document.querySelector('.top').style.opacity = '1';
   };
 };

 function SaveData() {
   const data = getIncomeRows().map((row) => {
      return {
         name: row.querySelector(".orderPizzaName").textContent.trim(),
         amount: row.querySelector(".amountText").textContent,
         weight: row.querySelector(".text.weight").textContent,
         price: row.querySelector(".orderPrice").textContent,
      };
   });
 
   localStorage.setItem("orders", JSON.stringify(data));
 }
 
 function getIncomeRows() {
   return Array.from(document.querySelectorAll(".orders .order"));
 }

 function getOrders(){
   if (localStorage.getItem("products") == "[]") {

   }else{
      let orders = JSON.parse(localStorage.getItem("orders"));
      orders.forEach(function (order) {
      let newOrder = document.createElement("section");
      newOrder.setAttribute("class", "order");
      newOrder.innerHTML=`
         <section class="orderDiscription">
            <article class="orderPizzaName">
               ${order.name}
            </article>
            <section class="orderPizzaCharacteristic">
               <section class="diameter">
               </section>
               <section class="weight">
               </section>
            </section>
            <section class="orderButtonGroup">
               <section class="orderPriceSection">
                  <article class="orderPrice money">
                     ${order.price}
                  </article>
                  <article class="orderPrice">
                     грн
                  </article>
               </section>
               <section class="orderAmount">
                  <button class="minusButton">–</button>
                  <article class="amountText">${order.amount}</article>
                  <button class="plusButton">+</button>
               </section>
               <button class="cancelButton">&#10006;</button>
            </section>
         </section>
         <section class="orderImg">
         </section>
         `;
   
         let orderImg = document.createElement("img");
         orderImg.setAttribute("class", "orderPizzaImg");
         for(let i = 0; i < pizzasInformation.length; i++){
            if(order.name.indexOf(pizzasInformation[i].pizzaName) != -1){
               orderImg.setAttribute("src", pizzasInformation[i].pizzaImg);
               break;
            }
         }
         orderImg.setAttribute("alt", "картинка піци");
         newOrder.querySelector(".orderImg").appendChild(orderImg);
   
         let weightLabel = document.createElement("img");
         weightLabel.setAttribute("class", "diameterLabel");
         weightLabel.setAttribute("src", "weight.svg");
         weightLabel.setAttribute("alt", "diameter");
         newOrder.querySelector(".weight").appendChild(weightLabel);
   
         let textWeight = document.createElement("article");
         textWeight.setAttribute("class", "text weight");
         textWeight.textContent = order.weight;
         newOrder.querySelector(".weight").appendChild(textWeight);
   
         if(order.name.indexOf("(Мала)")){
            let diameterLabel = document.createElement("img");
            diameterLabel.setAttribute("class", "diameterLabel");
            diameterLabel.setAttribute("src", "size-icon.svg");
            diameterLabel.setAttribute("alt", "diameter");
            newOrder.querySelector(".diameter").appendChild(diameterLabel);
   
            let textDiameter = document.createElement("article");
            textDiameter.setAttribute("class", "text");
            textDiameter.textContent = 30;
            newOrder.querySelector(".diameter").appendChild(textDiameter);
         }else{
            let diameterLabel = document.createElement("img");
            diameterLabel.setAttribute("class", "diameterLabel");
            diameterLabel.setAttribute("src", "size-icon.svg");
            diameterLabel.setAttribute("alt", "diameter");
            newOrder.querySelector(".diameter").appendChild(diameterLabel);
   
            let textDiameter = document.createElement("article");
            textDiameter.setAttribute("class", "text");
            textDiameter.textContent = 40;
            newOrder.querySelector(".diameter").appendChild(textDiameter);
         }
         document.querySelector(".orders").appendChild(newOrder);
         document.querySelector(".sumInUAN.money").textContent = parseInt(document.querySelector(".sumInUAN.money").textContent) + parseInt(order.price);
         document.querySelector(".ordersTop").querySelector(".amount").textContent = parseInt(document.querySelector(".ordersTop").querySelector(".amount").textContent) + parseInt(order.amount);
      });
   }
}

document.addEventListener("DOMContentLoaded", getOrders());


