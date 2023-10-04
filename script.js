function loadComponent(component) {
    fetch(component)
        .then(response => response.text())
        .then(data => {
            document.getElementById('component-container').innerHTML = data;
        });
}

function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    
    
    
        passwordInput.type = "text";
      
}
