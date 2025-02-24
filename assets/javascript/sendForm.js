document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        $('#confirmationModal').modal('show');
    });
});
