function editContent() {
  var contentElement = document.getElementById("content");
  var paragraph = contentElement.querySelector("p");
  var textArea = document.createElement("textarea");
  textArea.value = "66% of people (73% of Millennials) are willing to pay more for products and services from companies committed to positive social and environmental impact. cts and services from companies committed to positive social and environmental impact.";
  textArea.style.height = "200px";
  textArea.style.width = "100%";
  textArea.style.resize = "vertical";

  var replaceButton = document.createElement("button");
  replaceButton.innerText = "Edit";
  replaceButton.onclick = function() {
    replaceContentBack();
  };

  contentElement.removeChild(paragraph);
  contentElement.appendChild(textArea);
  contentElement.appendChild(replaceButton);
}

function replaceContent() {
  var contentElement = document.getElementById("content");
  var paragraph = contentElement.querySelector("p");
  var textArea = document.createElement("textarea");
  textArea.value = "66% of people (73% of Millennials) are willing to pay more for products and services from companies committed to positive social and environmental impact. cts and services from companies committed to positive social and environmental impact.";
  textArea.style.height = "200px";
  textArea.style.width = "100%";
  textArea.style.resize = "vertical";

  var replaceButton = document.createElement("button");
  replaceButton.innerText = "Replace";
  replaceButton.onclick = function() {
    replaceContentBack();
  };

  contentElement.removeChild(paragraph);
  contentElement.appendChild(textArea);
  contentElement.appendChild(replaceButton);
}

function replaceContentBack() {
  var contentElement = document.getElementById("content");
  var textArea = contentElement.querySelector("textarea");
  var paragraph = document.createElement("p");
  paragraph.innerText = textArea.value;

  var replaceButton = contentElement.querySelector("button");
  contentElement.removeChild(textArea);
  contentElement.removeChild(replaceButton);
  contentElement.appendChild(paragraph);
}

function showAlert() {
  alert("Let's, We Taking The Action");
}

function sendData() {
  try {
    document.getElementById("formsaran").addEventListener("submit", (e) => {
      e.preventDefault();
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      document.getElementById("nameShow").innerText = name;
      document.getElementById("emailShow").innerText = email;
      document.getElementById("messageShow").innerText = message;

      var div = document.getElementById("response");
          if (div.style.display === "none") {
              div.style.display = "block";
          } else {
              div.style.display = "none";
          }

    });
  } catch (err) {
    alert(err.message);
  }
}