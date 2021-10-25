function currentSelected(selectedItem) {
  itemName = selectedItem;
  switch (itemName) {
    case "pizza":
      itemPriceFormat = "$5.00";
      itemName = "Pizza";
      itemPrice = 5;
      break;
    case "hotdog":
      itemPriceFormat = "$3.50";
      itemName = "Hot Dog";
      itemPrice = 3.5;
      break;
    case "nachos":
      itemPriceFormat = "$3.00";
      itemName = "Nachos";
      itemPrice = 3;
      break;
    case "pretzel":
      itemPriceFormat = "$2.50";
      itemName = "Pretzel";
      itemPrice = 2.5;
      break;
    case "popcorn":
      itemPriceFormat = "$2.00";
      itemName = "Popcorn";
      itemPrice = 2;
      break;
    case "lgcandy":
      itemPriceFormat = "$3.00";
      itemName = "Lg Candy";
      itemPrice = 3;
      break;
    case "mdcandy":
      itemPriceFormat = "$2.00";
      itemName = "Md Candy";
      itemPrice = 2;
      break;
    case "smcandy":
      itemPriceFormat = "$0.50";
      itemName = "Sm Candy";
      itemPrice = 0.5;
      break;
    case "chips":
      itemPriceFormat = "$1.00";
      itemName = "Chips";
      itemPrice = 1;
      break;
    case "cheesecup":
      itemPriceFormat = "$0.50";
      itemName = "Cheese Cup";
      itemPrice = 0.5;
      break;
    case "soda":
      itemPriceFormat = "$3.00";
      itemName = "Soda";
      itemPrice = 3;
      break;
    case "gatorade":
      itemPriceFormat = "$3.00";
      itemName = "Gatorade";
      itemPrice = 3;
      break;
    case "energydrink":
      itemPriceFormat = "$4.00";
      itemName = "Energy Drink";
      itemPrice = 4;
      break;
    case "frappuccino":
      itemPriceFormat = "$4.00";
      itemName = "Frappuccino";
      itemPrice = 4;
      break;
    case "water":
      itemPriceFormat = "$1.50";
      itemName = "Water";
      itemPrice = 1.5;
      break;
    case "coffee":
      itemPriceFormat = "$2.00";
      itemName = "Coffee";
      itemPrice = 2;
      break;
    case "hotcocoa":
      itemPriceFormat = "$2.00";
      itemName = "Hot Cocoa";
      itemPrice = 2;
      break;
    case "finger":
      itemPriceFormat = "$5.00";
      itemName = "Foam Finger";
      itemPrice = 5;
      break;
  }
}
function addData(amount) {
  let i = 1;
  while (i <= amount) {
    var newRow = document.createElement("tr");
    var cellName = document.createElement("td");
    var cellPrice = document.createElement("td");
    cellName.innerHTML = itemName;
    cellName.classList.add("name");
    cellName.id = `item${itemNum}Name`;
    cellPrice.innerHTML = itemPriceFormat;
    cellPrice.classList.add("price");
    cellPrice.id = `item${itemNum}Price`;
    newRow.append(cellName);
    newRow.append(cellPrice);
    newRow.id = `item${itemNum}`;
    let clickEvent = "deleteItemConfirm('item" + itemNum + "');";
    newRow.setAttribute("onclick", clickEvent);
    document.getElementById("items").appendChild(newRow);
    totalPrice = totalPrice + itemPrice;
    if (totalPrice % 1 != 0) {
      totalPriceFormat = `${totalPrice}0`;
    } else {
      totalPriceFormat = `${totalPrice}.00`;
    }
    document.querySelector("#total").innerHTML = `$${totalPriceFormat}`;
    fileText.push(itemName, itemPrice + "\n");
    itemList[i] = `${itemName} for ${itemPriceFormat}`;
    // console.log(itemList)
    i++;
    itemNum++;
    getTime();
  }
  itemName = null;
  itemPrice = null;
  $("#quantityModal").modal("hide");
}
