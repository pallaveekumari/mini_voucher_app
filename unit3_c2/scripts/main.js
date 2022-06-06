function voucher(n,e,a,am)
{
    this.name=n;
    this.email=e;
    this.address=a;
    this.amount=am;
}



function myfunction()
{

event.preventDefault();
var form=document.getElementById("userform")
var name=form.name.value;
var email=form.email.value;
var address=form.address.value;
var amount=form.amount.value;

var userdetails=JSON.parse(localStorage.getItem("user")) || []

var obj= new voucher(name,email,address,amount)

userdetails.push(obj);

localStorage.setItem("user",JSON.stringify(userdetails));
form.name.value="";
form.email.value="";
form.address.value="";
form.amount.value="";
}