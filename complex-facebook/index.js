const dataUsers = [{ username: "jeffry", password: "jeffry123" }];

// status: 1 is friend
// status: 0 is not friend
const dataPosts = [
  {
    username: "Bobby",
    content: "Javascript is so cool",
    status: "friend",
  },
  {
    username: "Alex",
    content: "JavaScript is EcmaScript",
    status: "friend",
  },
  {
    username: "John",
    content: "AI is the future",
    status: "not friend",
  },
];

function showDataPosts() {
  dataPosts.forEach((dataPosts) => {
    alert(`Username: ${dataPosts.username}, Status: ${dataPosts.status}`);
  });
}

function showPosts() {
  dataPosts.forEach((dataPosts) => {
    console.log(`Name: ${dataPosts.username} posted ${dataPosts.content}`);
  });
}

const searchFriends = dataPosts.filter((friends) => {
  return friends.status === "friend";
});

function displayPostsFriends() {
  askUser = confirm("Show only friends post?");
  if (askUser === true) {
    searchFriends.forEach((postFriend) => {
      console.log(
        `Friends: ${postFriend.username} posted ${postFriend.content}`
      );
    });
  } else {
    showPosts();
  }
}

function userRegistration() {
  const addUsername = prompt("Enter desired username:");
  const addPassword = prompt("Enter desired password:");
  addUser = {
    username: addUsername,
    password: addPassword,
  };
  dataUsers.push(addUser);
  runApp();
}

function isUserValid(usernameInput, passwordInput) {
  for (let index = 0; index < dataUsers.length; index++) {
    const user = dataUsers[index];
    if (
      user.username.toLowerCase() === usernameInput.toLowerCase() &&
      user.password === passwordInput
    ) {
      return true;
    }
  }
  return false;
}

function signIn() {
  const usernameInput = prompt("What's your username?");
  const passwordInput = prompt("What's your password ");
  if (isUserValid(usernameInput, passwordInput)) {
    showDataPosts();
    displayPostsFriends();
  } else {
    alert("Sorry, wrong username and password");
  }
}

function isUserValid(usernameInput, passwordInput) {
  for (let index = 0; index < dataUsers.length; index++) {
    const user = dataUsers[index];
    if (
      user.username.toLowerCase() === usernameInput.toLowerCase() &&
      user.password === passwordInput
    ) {
      return true;
    }
  }
  return false;
}

function runApp() {
  const askUser = confirm(
    "Welcome to Complex Facebook, choose OK if you have registered, choose CANCEL to register"
  );
  if (askUser === true) {
    signIn();
  } else {
    userRegistration();
  }
}

runApp();
