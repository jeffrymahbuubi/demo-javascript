const dataUsers = [{ username: "jeffry", password: "jeffry123" }];

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

const friendsPosts = dataPosts.filter((friend) => {
  return friend.status === "friend";
});

function showAllUsers() {
  dataPosts.forEach((post) => {
    alert(`Username: ${post.username}, Status: ${post.status}`);
  });
}

function displayFriendsPosts() {
  const isShowFriendsPosts = confirm("Show only friendsPosts post?");
  if (isShowFriendsPosts === true) {
    friendsPosts.forEach((friendPost) => {
      console.log(
        `Friends: ${friendPost.username} posted ${friendPost.content}`
      );
    });
  } else {
    dataPosts.forEach((post) => {
      console.log(`Name: ${post.username} posted ${post.content}`);
    });
  }
}

function registerUser() {
  const username = prompt("Enter desired username:");
  const password = prompt("Enter desired password:");
  const user = {
    username,
    password,
  };
  dataUsers.push(user);
  runApp();
}

function validateUser(usernameInput, passwordInput) {
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

function signInUser() {
  const usernameInput = prompt("What's your username?");
  const passwordInput = prompt("What's your password ");

  const isUserValidated = validateUser(usernameInput, passwordInput);

  if (!isUserValidated) {
    alert("Sorry, wrong username and password");
    // return null
  }

  showAllUsers();
  displayFriendsPosts();
}

function runApp() {
  const askUser = confirm(
    "Welcome to Complex Facebook, choose OK if you have registered, choose CANCEL to register"
  );
  if (askUser === true) {
    signInUser();
  } else {
    registerUser();
  }
}

runApp();
