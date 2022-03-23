
function _(id) {
    return document.getElementById(id);
}

var userCredentials = {
    Username : "admin",
    Password : "1234",

};

var invalidLoginMessage = "Invalid Username or Password";
var emptyFieldMessage = "Please fill in all fields";


_("login-form").addEventListener("submit",formSubmission);

function formSubmission(event){
    event.preventDefault();
    var Username =_("Username").value;
    var Password =_("Password").value;

    if(!Username || !Password){
        showError(emptyFieldMessage);
        return;
    }

    if(
        Username !== userCredentials.Username ||
        Password !== userCredentials.Password
      )
        {
        showError(invalidLoginMessage);
        return;
        }
    window.location.href = "./dashboard.html";
}

function showError(message){
    _("error-message").innerHTML= message;
    setTimeout(function() {
        _("error-message").innerHTML ="";
    }, 3000);

}