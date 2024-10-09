console.log("HI SCRIPT FILE")

tailwind.config = {
    darkMode: 'class',
}

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkThemeToggle');
    const html = document.documentElement;

    darkModeToggle.addEventListener('click', () => {
        console.log("BUTTON CLICKED")
        html.classList.toggle('dark');
    });
});