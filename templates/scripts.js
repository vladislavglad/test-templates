﻿// Submit the search if ENTER was pressed:
function submitSearch() {
  if (event.which == 13 || event.keyCode == 13)
    document.getElementsByClassName("searchform")[0].submit();
}

let testAPI = async () => {
  const response = await fetch("http://127.0.0.1:5000/test/chalshaff12", {});
  const jsonData = await response.json();
  console.log(jsonData);
  const thing = document.querySelector(".trendingTitle");
  thing.textContent = "HELLO";
};
testAPI();

// // Change the color of the subscription button and what is written on it if it is pressed. Then, submit the form:
// function subscribe(x) {
//   var temp = x.id.substr(x.id.length - 1); // Fetch the last char. of the id of the calling button. This is its serial number given as a string.
//   if (x.value == "Subscribe") {
//     x.style.backgroundColor = "rgb(123, 34, 64)"; // It means the user is subscribed to the particular port. Color the calling button maroon, and
//     x.value = "Joined"; // Change the text on the button to 'joined'.
//   } // Otherwise, if the user clicked again (to unsubscribe):
//   else {
//     x.style.backgroundColor = "rgb(117, 117, 117)"; // Turn the color back to gray,
//     x.value = "Subscribe"; // Change the text on the button to 'Subscribe'.
//   }
//   document.getElementById("trendingForm").submit(); // Now submit this information
// }
