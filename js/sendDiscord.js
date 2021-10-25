if (!("fetch" in window)) {
  console.log("Fetch API not found, will be unable to send Discord logs.");
}

function sendDiscordMessage(orderNum, totalPriceFormat, dayTime, items) {
  let messageContent, combined;
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
            url: `https://simplepos.jackgraddon.page/images/icon.png`,
            height: 0,
            width: 0,
          },
        },
      ];
    } else {
      combined = items.join("\n");
      // console.log(combined);
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
            url: `https://simplepos.jackgraddon.page/images/icon.png`,
            height: 0,
            width: 0,
          },
        },
      ];
    }
  }

  let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: "Lion's Den POS Log",
        avatar_url: "https://simplepos.jackgraddon.page/images/appicon.png",
        embeds: messageContent,
      }),
    },
    url =
      "https://discord.com/api/webhooks/882329119281524776/bhGlPcQW7D89tdTMkFC12XYVWKx2OL_QaPdYd35iOivbG_652vkiBdFpHg8ZCGnqU_mu";
  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        console.log(
          `Order number ${orderNum} at window ${windowNum}:${combined}\n-----\nOrder finished with no errors.`
        );
      }
    })
    .catch((err) => {
      console.log(
        `Order number ${orderNum} at window ${windowNum}:\n${err}\n!!!!!\nOrder threw an error. Continuing without logging.`
      );
    });
}
