function sendDiscordMessage(orderNum, totalPriceFormat, dayTime, items) {
  var request = new XMLHttpRequest();
  let messageContent;

  if (!orderNum || !totalPriceFormat) {
    messageContent =
      "There was no input data, if this is an error - please check the code.";
  } else {
    if (orderNum == "test") {
      messageContent = [
        {
          type: "rich",
          title: `Receipt`,
          description: `A new order was placed at test`,
          color: 0xcff3a6,
          fields: [
            {
              name: `Total:`,
              value: `$test`,
              inline: true,
            },
            {
              name: `Number:`,
              value: `Order test from Window test`,
              inline: true,
            },
          ],
          thumbnail: {
            url: `https://simplepos.jackgraddon.page/icon.png`,
            height: 0,
            width: 0,
          },
        },
      ];
    } else {
      // let combined = "Coming soon in a later update."
      // console.log(items);
      let i = 1;
      let combined = items.join("\n");
      console.log(combined);
      messageContent = [
        {
          type: "rich",
          title: `Receipt`,
          description: `A new order was placed at ${dayTime}`,
          color: 0xcff3a6,
          fields: [
            {
              name: `Total:`,
              value: `$${totalPriceFormat}`,
              inline: true,
            },
            {
              name: `Number:`,
              value: `Order ${orderNum} from Window ${windowNum}`,
              inline: true,
            },
            {
              name: `Items:`,
              value: combined.toString(),
              inline: false,
            },
          ],
          thumbnail: {
            url: `https://simplepos.jackgraddon.page/icon.png`,
            height: 0,
            width: 0,
          },
        },
      ];
    }
  }

  var params = {
    username: "Lion's Den POS System",
    embeds: messageContent,
  };
  request.open(
    "POST",
    "https://discord.com/api/webhooks/882329119281524776/bhGlPcQW7D89tdTMkFC12XYVWKx2OL_QaPdYd35iOivbG_652vkiBdFpHg8ZCGnqU_mu"
  );
  request.setRequestHeader("Content-type", "application/json");
  try {
    request.send(JSON.stringify(params));
  } catch (e) {
    params = {
      username: "Lion's Den POS System",
      content: "Something went wrong, please check your code. \n" + e,
    };
    console.log;
    request.send(JSON.stringify(params));
  }
}
