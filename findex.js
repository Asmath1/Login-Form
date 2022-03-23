var userCredentials = {
    Username : "admin",
    Password : "1234",
};

var invalidLoginMessage = "Invalid Username or Password";
var emptyFieldMessage = "Please fill in all fields";


$("#login-form").submit(formSubmission);

function formSubmission(event){
    event.preventDefault();
    var Username =$("#Username").val();
    var Password =$("#Password").val();

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
    $("#error-message").text(message);
    setTimeout(function() {
      $("#error-message").text("");  
    }, 3000);

}