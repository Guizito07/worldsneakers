function validarFormulario(event) 
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") 
    {
        alert("Pelase write down all the information requiered");
        event.preventDefault(); 
    }
    //localStorage.setItem('username', username);
}