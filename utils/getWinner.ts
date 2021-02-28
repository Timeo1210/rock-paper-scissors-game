type GetWinnerType = (userItem: ItemTypes, houseItem: ItemTypes) => WhoWin;

const getWinner: GetWinnerType = (userItem, houseItem) => {
  if (userItem === "rock") {
    switch (houseItem) {
      case "paper":
        return "house";
      case "scissors":
        return "user";
    }
  } else if (userItem === "paper") {
    switch (houseItem) {
      case "rock":
        return "user";
      case "scissors":
        return "house";
    }
  } else if (userItem === "scissors") {
    switch (houseItem) {
      case "rock":
        return "house";
      case "paper":
        return "user";
    }
  }

  return "none";
};

export default getWinner;
