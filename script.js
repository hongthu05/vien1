document.addEventListener('DOMContentLoaded', function() {
    function updateNav() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const loginLink = document.getElementById('loginLink');
        const registerLink = document.getElementById('registerLink');
        const readerLink = document.getElementById('readerLink');
        const bookLink = document.getElementById('bookLink');
        const borrowLink = document.getElementById('borrowLink');
        const logoutLink = document.getElementById('logoutLink');

        if (isLoggedIn) {
            loginLink.style.display = 'none';
            registerLink.style.display = 'none';
            readerLink.style.display = 'inline';
            bookLink.style.display = 'inline';
            borrowLink.style
