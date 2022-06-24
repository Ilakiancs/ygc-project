function alert(){
    alert("Happy to see you");
}
function updateInput() {
    window.alert("Emotionadamage");
    var userName = document.getElementById("signInUserName").value;
    window.alert(userName);
}
var submitBtn = document.getElementById(submitBtn);
submitBtn.onclick(updateInput);