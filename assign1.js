window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#6200EA'; 
    } else {
        navbar.style.backgroundColor = '#333'; 
    }
});

var menuItems = document.querySelectorAll('.nav-list li');
menuItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        item.querySelector('a').style.color = 'yellow'; 
    });
    item.addEventListener('mouseout', function() {
        item.querySelector('a').style.color = 'white'; 
    });
});
