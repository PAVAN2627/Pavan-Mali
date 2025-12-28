// Working dark mode implementation
console.log('=== DARK MODE DEBUG ===');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Check if elements exist
    const themeButton = document.getElementById('theme-button');
    console.log('Theme button found:', !!themeButton);

    if (themeButton) {
        console.log('Theme button classes:', themeButton.className);
        
        // Load saved theme
        const savedTheme = localStorage.getItem('selected-theme');
        const savedIcon = localStorage.getItem('selected-icon');
        
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeButton.classList.remove('uil-moon');
            themeButton.classList.add('uil-sun');
        }
        
        // Add click listener
        themeButton.addEventListener('click', function() {
            console.log('Theme button clicked!');
            
            // Toggle dark theme
            document.body.classList.toggle('dark-theme');
            
            // Toggle icon
            if (this.classList.contains('uil-moon')) {
                this.classList.remove('uil-moon');
                this.classList.add('uil-sun');
                localStorage.setItem('selected-theme', 'dark');
                localStorage.setItem('selected-icon', 'uil-sun');
            } else {
                this.classList.remove('uil-sun');
                this.classList.add('uil-moon');
                localStorage.setItem('selected-theme', 'light');
                localStorage.setItem('selected-icon', 'uil-moon');
            }
            
            console.log('Body classes after toggle:', document.body.className);
            console.log('Theme saved:', localStorage.getItem('selected-theme'));
        });
        
        console.log('Click listener added successfully');
    } else {
        console.error('Theme button not found!');
    }

    // Check current theme
    console.log('Current body classes:', document.body.className);
    console.log('Is dark theme active:', document.body.classList.contains('dark-theme'));
});