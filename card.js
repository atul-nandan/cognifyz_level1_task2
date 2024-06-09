const greeting = document.querySelector('.card');

greeting.addEventListener('click', () => {
  let timenow = new Date().getHours();
  console.log(timenow);
  let showalert;

  if (timenow < 12) {
    showalert = "Good Morning!";
  } else if (timenow < 18) {
    showalert = "Good Afternoon!";
  } else {
    showalert = "Good Evening!";
  }
  alert(showalert);
})
