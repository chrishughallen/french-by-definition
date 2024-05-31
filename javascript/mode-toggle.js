let darkmode = true;

const darkModeToggleButton = document.getElementById("darkModeToggleButton")

function toggleDarkMode() {
  console.log('toggling dark mode')
  if(darkmode) {
    darkmode = false
    document.documentElement.setAttribute('data-bs-theme', 'light')
    darkModeToggleButton.innerText = "dark mode"
  } else {
    darkmode = true
    document.documentElement.setAttribute('data-bs-theme', 'dark')
    darkModeToggleButton.innerText = "light mode"
  }
}