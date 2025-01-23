function calculateArea(length, width) {
    return length * width;
  }
  
  const area = calculateArea(5, 10);
  console.log(`The area is: ${area}`);

  let globalVariable = "I am global";

  function demonstrateScope() {
    let localVariable = "I am local";
    console.log(globalVariable); // Accessible
    console.log(localVariable); // Accessible
  }
  
  demonstrateScope();
  console.log(globalVariable); // Accessible
  // console.log(localVariable); // Not Accessible, throws an error

  function toggleAnimation() {
    const element = document.getElementById("animatedElement");
    element.classList.toggle("fade-in");
  }

  //add functionality to html
  document.querySelector("button").addEventListener("click", () => {
    const element = document.getElementById("animatedElement");
    element.classList.toggle("slide-down");
  });
  
