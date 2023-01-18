var database = [
  { username: "jeffry", password: "jeffry123" },
  { username: "sally", password: "123" },
  { username: "ingrid", password: "777" },
];

var newsFeed = [
  { username: "Bobby", timeline: "I'm tired learning Javascript" },
  { username: "Tanya", timeline: "I love programming!!!" },
  { username: "Daniel", timeline: "Logic is difficult!!!" },
];

function containsUppercase(username) {
  return /[A-Z]/.test(username);
}

function convertToLowerCase(username) {
  if (containsUppercase(username)) {
    return username.toLowerCase();
  } else {
    return username;
  }
}

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === convertToLowerCase(username) &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

readNewsFeed = [];

for (let index = 0; index < newsFeed.length; index++) {
  const news = newsFeed[index];
  const readNews = {
    name: `${news.username}`,
    posting: `${news.timeline}`,
  };
  readNewsFeed[index] = readNews;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    for (let index = 0; index < readNewsFeed.length; index++) {
      const news = readNewsFeed[index];
      console.log(`${news.name}'s said ${news.posting}.`);
    }
  } else {
    alert("Sorry, wrong username and password");
  }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password ");

signIn(userNamePrompt, passwordPrompt);
