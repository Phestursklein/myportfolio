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
      link.href = "./credentials/CV ABAYOMI 2024.pdf"; // Replace with the actual path to the CV file
      link.download = "CV ABAYOMI 2024.pdf"; // Replace with the desired file name
      link.click();
    } else {
      alert("Download canceled.");
    }
  }
