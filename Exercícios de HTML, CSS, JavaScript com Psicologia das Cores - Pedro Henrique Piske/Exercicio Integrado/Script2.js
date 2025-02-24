document.getElementById('changeColorButton').addEventListener('click', function() {
    var textElement = document.getElementById('text');
    
    if (textElement.style.color === 'green' || textElement.style.color === 'blue') {
        textElement.style.color = '#333'; 
    } else {
        textElement.style.color = 'green'; 
    }
});
