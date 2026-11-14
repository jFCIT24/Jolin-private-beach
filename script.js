var pictures = ["images/beach.jpg", "images/chairs.jpg", "images/floats.jpg", "images/entrance.jpg"];
var texts = [
  "Our private beach",
  "Comfortable beach lounges",
  "Our floating water park",
  "Welcome to Jolin"
];
var current = 0;   

function showPicture() {
  document.getElementById("galleryImg").src = pictures[current];
  document.getElementById("galleryText").innerHTML = texts[current];
}

function nextPicture() {
  current = current + 1;
  if (current >= pictures.length) {
    current = 0;             
  }
  showPicture();
}

function previousPicture() {
  current = current - 1;
  if (current < 0) {
    current = pictures.length - 1;   
  }
  showPicture();
}

var tips = [
  "Use sunscreen every two hours",
  "Drink water regularly",
  "Swim only in the marked area",
  "Keep your things in a safe place"
];

function makeTips() {
  var list = document.getElementById("tipsList");
  for (var i = 0; i < tips.length; i++) {
    var item = document.createElement("li");   
    item.innerHTML = tips[i];
    list.appendChild(item);                    
  }
}

if (document.getElementById("tipsList")) {
  makeTips();
}

function checkLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var message = document.getElementById("message");

  if (email == "" || password == "") {
    message.innerHTML = "Please fill in all fields.";
    message.style.color = "red";
    return false;        
  }

  if (email.indexOf("@") == -1) {
    message.innerHTML = "Email must contain @";
    message.style.color = "red";
    return false;
  }

  if (password.length < 8) {
    message.innerHTML = "Password must be at least 8 characters.";
    message.style.color = "red";
    return false;
  }

  message.innerHTML = "Login successful!";
  message.style.color = "green";
  return false;
}

function checkSignup() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;
  var message = document.getElementById("message");

  message.style.color = "red";

  if (name.length < 3) {
    message.innerHTML = "Name must be at least 3 letters.";
    return false;
  }

  if (email.indexOf("@") == -1) {
    message.innerHTML = "Email must contain @";
    return false;
  }

  if (password.length < 8) {
    message.innerHTML = "Password must be at least 8 characters.";
    return false;
  }

  if (password != confirm) {
    message.innerHTML = "Passwords do not match.";
    return false;
  }

  message.innerHTML = "Account created for " + name + "!";
  message.style.color = "green";
  return false;
}