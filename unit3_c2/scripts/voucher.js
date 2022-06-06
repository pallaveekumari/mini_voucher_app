
var wallet=JSON.parse(localStorage.getItem("user")) ;
document.getElementById("wallet_balance").innerText=wallet[0].amount;

async function getdata()
{

    let url="https://masai-vouchers-api.herokuapp.com/api/vouchers";
    let res=await fetch(url);
    let data=await res.json();
     console.log(data)
    display(data[0].vouchers)
}
getdata()

var arr=JSON.parse(localStorage.getItem("purchase")) || []
function display(data)
{
    let container=document.getElementById("voucher_list")
    data.map(function(el)
    {
        let div=document.createElement("div")

        let name=document.createElement("h1")
        name.innerText=el.name;

        let image=document.createElement("img")
        image.src=el.image;

        let price=document.createElement("h3")
        price.innerText=el.price;

        let btn=document.createElement("button")
        btn.innerText="Buy Button"
        btn.setAttribute("class","buy_voucher")

        btn.addEventListener("click",function()
        {
              buy(el);
        })
        div.append(image,name,price,btn)
        container.append(div)
    })

}

function buy(el)
{
     
    

   if(el.price<=wallet[0].amount)
   {
       alert("Hurray! purchase successful")
       wallet[0].amount=wallet[0].amount-el.price;
       localStorage.setItem("user",JSON.stringify(wallet))
       arr.push(el)
       localStorage.setItem("purchase",JSON.stringify(arr))
       window.location.reload();
   }
   else
   {
       alert("Sorry! insufficient balance")
   }
     

}