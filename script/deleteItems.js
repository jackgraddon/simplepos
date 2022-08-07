function deleteItemConfirm(item) {
  var offCanvasDelete = document.querySelector("#deleteItemConfirm");
  var bsOffCanvas = new bootstrap.Offcanvas(offCanvasDelete);
  bsOffCanvas.show();
  let itemEmoji = "";
  let deleteConfirmBtn = document.querySelector("#confirmDelete");
  let idName = `${item}Name`;
  let idPrice = `${item}Price`;
  itemName = document.getElementById(idName).innerHTML;
  let itemPrice;
  switch (itemName) {
    case "Pizza":
      itemEmoji = "🍕";
      itemPrice = 5;
      break;
    case "Hot Dog":
      itemEmoji = "🌭";
      itemPrice = 3.5;
      break;
    case "Nachos":
      itemEmoji = "🧀";
      itemPrice = 3;
      break;
    case "Pretzel":
      itemEmoji = "🥨";
      itemPrice = 2.5;
      break;
    case "Popcorn":
      itemEmoji = "🍿";
      itemPrice = 2;
      break;
    case "Lg Candy":
      itemEmoji = "🍫";
      itemPrice = 3;
      break;
    case "Md Candy":
      itemEmoji = "🍭";
      itemPrice = 2;
      break;
    case "Sm Candy":
      itemEmoji = "🍬";
      itemPrice = 0.5;
      break;
    case "Chips":
      itemEmoji = "🥔";
      itemPrice = 1;
      break;
    case "Cheese Cup":
      itemEmoji = "🍯";
      itemPrice = 0.5;
      break;
    case "Soda":
      itemEmoji = "🥤";
      itemPrice = 3;
      break;
    case "Gatorade":
      itemEmoji = "🧃";
      itemPrice = 3;
      break;
    case "Energydrink":
      itemEmoji = "🥤";
      itemPrice = 4;
      break;
    case "Frappuccino":
      itemEmoji = "🥛";
      itemPrice = 4;
      break;
    case "Water":
      itemEmoji = "🥤";
      itemPrice = 1.5;
      break;
    case "Coffee":
      itemEmoji = "☕";
      itemPrice = 2;
      break;
    case "Hot Cocoa":
      itemEmoji = "☕";
      itemPrice = 2;
      break;
    case "Foam Finger":
      itemEmoji = "☝️";
      itemPrice = 5;
      break;
    default:
      itemEmoji = "➕";
      itemPrice = parseFloat(itemPrice);
      break;
  }
  let itemEmojiField = document.querySelector("#itemEmoji");
  let itemNameField = document.querySelector("#itemName");
  itemEmojiField.innerHTML = itemEmoji;
  itemNameField.innerHTML = itemName;
  let clickEvent = "deleteItem('" + item + "'," + itemPrice + ");";
  deleteConfirmBtn.setAttribute("onclick", clickEvent);
}

