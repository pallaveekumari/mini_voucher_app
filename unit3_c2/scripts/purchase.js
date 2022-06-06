var walletpaisa=JSON.parse(localStorage.getItem("user")) ;
document.getElementById("balance").innerText=walletpaisa[0].amount;


var array=JSON.parse(localStorage.getItem("purchase")) || []
function display(data)
{
    let container=document.getElementById("purchased_vouchers")
    data.map(function(el)
    {
        let div=document.createElement("div")

        let name=document.createElement("h1")
        name.innerText=el.name;

        let image=document.createElement("img")
        image.src=el.image;

        let price=document.createElement("h3")
        price.innerText=el.price;

      
        div.append(image,name,price)
        container.append(div)
    })

}
display(array)