const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon')

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuIcon.classList.toggle('transform');
  menuIcon.classList.toggle('rotate-90');

});

function downloadCV() {
  const confirmDownload = confirm("Do you want to download the file 'CV ABAYOMI 2024.pdf'?");

  if (confirmDownload) {
    const link = document.createElement("a");
    link.href = "./credentials/CV ABAYOMI 2024.pdf"; // 
    link.download = "CV ABAYOMI 2024.pdf"; 
    link.click();
  } else {
    alert("Download canceled.");
  }
}


let currentSlide = 0;
const slides = document.querySelectorAll('#carousel img');
const totalSlides = slides.length;

function showSlide(index) {
  const newIndex = (index + totalSlides) % totalSlides;
  document.getElementById('carousel').style.transform = `translateX(-${newIndex * 100}%)`;
  currentSlide = newIndex;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

// Automatically change slide every 3 seconds
setInterval(nextSlide, 3000);


