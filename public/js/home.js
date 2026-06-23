let slideIndex = 0;
let slideTimeout; // Variable to hold timeout for easier control
showSlides();

// Function to display slides
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Proceed only if slides and dots exist
  if (slides.length === 0 || dots.length === 0) {
    console.error("No slides or dots found.");
    return;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Remove active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Increment the slide index and reset if we reach the end
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }    

  // Show the current slide and add active class to the corresponding dot
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  // Set a timer to change the slide every 5 seconds
  slideTimeout = setTimeout(showSlides, 5000); 
}

// Function to move to a specific slide when clicking on dots
function currentSlide(n) {
  clearTimeout(slideTimeout);
  slideIndex = n - 1;
  showSlides();
}
