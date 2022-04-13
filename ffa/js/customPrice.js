function customPrice() {
  let valueFormat;
  let value = parseFloat(document.querySelector("#customAmount").value);
  if (isNaN(value)) {
    value = 0;
    valueFormat = "Note";
  } else {
    if (value % 1 != 0) {
      valueFormat = `$${value}0`;
    } else {
      valueFormat = `$${value}.00`;
    }
  }
  let note = document.getElementById("customName").value.toString();
  if (!note) {
    note = "Custom";
  }
  console.log(note);
  var newRow = document.createElement("tr");
  var cellName = document.createElement("td");
  var cellPrice = document.createElement("td");
  cellName.innerHTML = `${note}`;
  cellName.classList.add("name");
  cellName.id = `item${itemNum}Name`;
  cellPrice.innerHTML = valueFormat;
  cellPrice.classList.add("price");
  cellPrice.id = `item${itemNum}Price`;
  newRow.append(cellName);
  newRow.append(cellPrice);
  newRow.id = `item${itemNum}`;
  let clickEvent = "deleteItemConfirm('item" + itemNum + "');";
  newRow.setAttribute("onclick", clickEvent);
  document.getElementById("items").appendChild(newRow);
  totalPrice = totalPrice + value;
  if (totalPrice % 1 != 0) {
    totalPriceFormat = `${totalPrice}0`;
  } else {
    totalPriceFormat = `${totalPrice}.00`;
  }
  document.querySelector("#total").innerHTML = `$${totalPriceFormat}`;
  itemNum++;
  document.querySelector("#customAmount").value = "";
  document.querySelector("#customName").value = "";
}
