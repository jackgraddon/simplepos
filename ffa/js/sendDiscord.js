if (!("fetch" in window)) {
  console.log("Fetch API not found, will be unable to send Discord logs.");
}

function sendDiscordMessage(
  orderNum,
  totalPriceFormat,
  dayTime,
  items,
  statusIndicator,
  sendUrl
) {
  let messageContent, combined;
  if (!orderNum || !totalPriceFormat) {
    messageContent =
      "There was no input data, if this is an error - please check the code.";
  } else {
    if (orderNum == "test") {
      messageContent = [
        {
          type: "rich",
          title: `Test`,
          description: `This is a test embed to make sure everything is working.`,
          color: 0xcff3a6,
          fields: [
            {
              name: `Field`,
              value: `Field 1`,
              inline: true,
            },
            {
              name: `Field`,
              value: `Field 2`,
              inline: true,
            },
          ],
          thumbnail: {
            url: `https://github.com/jackgraddon/simplepos/blob/master/images/icon.png?raw=true`,
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
            url: `https://github.com/jackgraddon/simplepos/blob/master/images/icon.png?raw=true`,
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
        avatar_url:
          "https://raw.githubusercontent.com/jackgraddon/simplepos/master/images/appicon.png",
        embeds: messageContent,
      }),
    },
    url = sendUrl;
  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        statusIndicator.style.color = "#66ff78";
        console.log(
          `Order number ${orderNum} at window ${windowNum}:${combined}\n-----\nOrder finished with no errors.`
        );
      }
    })
    .catch((err) => {
      statusIndicator.style.color = "#ff4a5c";
      console.log(
        `Order number ${orderNum} at window ${windowNum}:\n${err.name}: ${err.message}\n!!!!!\nOrder threw an error. Continuing without logging.`
      );
    });
}
