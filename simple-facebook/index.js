const dataUsers = [
  { username: "jeffry", password: "jeffry123" },
  { username: "sally", password: "123" },
  { username: "ingrid", password: "777" },
];

const dataPosts = [
  { username: "Bobby", content: "I'm tired learning Javascript" },
  { username: "Tanya", content: "I love programming!!!" },
  { username: "Daniel", content: "Logic is difficult!!!" },
];

function displayPosts() {
  for (let index = 0; index < dataPosts.length; index++) {
    const post = dataPosts[index];
    console.log(`${post.username}'s said ${post.content}.`);
  }
}

function signIn(usernameInput, passwordInput) {
  if (isUserValid(usernameInput, passwordInput)) {
    displayPosts();
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
  const usernamePrompt = prompt("What's your username?");
  const passwordPrompt = prompt("What's your password ");

  if (usernamePrompt && passwordPrompt) {
    signIn(usernamePrompt, passwordPrompt);
  }
}

runApp();
