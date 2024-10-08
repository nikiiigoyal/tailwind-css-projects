document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkThemeToggle');
    const html = document.documentElement;

    darkModeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        
      
       
    });
});