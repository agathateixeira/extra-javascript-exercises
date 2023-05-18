let username = prompt("Enter a unsername:");
let password = prompt("Enter a password:");

while (username === password) {
  alert("The username and password must be different!");
  username = prompt("Enter a unsername:");
  password = prompt("Enter a password:");
}
alert("Username: " + username + "\n Password: " + password);
