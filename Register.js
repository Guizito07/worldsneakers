function validateForm(event) {
    event.preventDefault(); // Impede o envio do formulário para validação

    // Obter os valores dos campos
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Validar se todos os campos estão preenchidos
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please write down all the information required');
        return;
    }

    // Validar se a palavra-passe e a confirmação são iguais
    if (password !== confirmPassword) {
        alert('The passwords do not match. Try agin');
        return;
    }
    //localStorage.setItem('username', username);

    // Se todas as validações forem passadas, redirecionar para a página principal
    window.location.href = 'index.html'; // Redirecionar para a página principal
}