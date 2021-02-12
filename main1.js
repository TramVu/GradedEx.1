var name_products=["star3",""]
var abc =JSON.parse(localStorage.getItem(localStorage.key('productInCart')))
var cde=Object.keys(abc)
var name_abc=[]
var tags=[]
var button_delete=document.getElementsByClassName("delete")
for(let i=0 ; i <cde.length ; i++)
{
   
   var name_product = abc[cde[i]]["name"]
  
   var price_product = abc[cde[i]]["price"]
   name_abc.push(name_product)
   var total_product = abc[cde[i]]["inCart"]
   var tag_product =  abc[cde[i]]["tag"]
   tags.push(tag_product)
   var node= document.createElement("div");
   node.classList.add('product-container')
   var Content=`
   <div class="product-header"> 
       <h5 class ="product-title">${name_product}</h5>
       <h5 class ="price">${price_product}</h5>
       <h5 class="quantity" style="justify-content:center">${total_product}</h5>
       <h5 class ="total">${parseInt(price_product)*parseInt(total_product)}</h5>
       <button class="delete" >delete </button>
    </div>

      `
   node.innerHTML=Content

   document.getElementsByClassName("row-products")[0].appendChild(node)
   
//    node.getElementsByClassName('delete')[0].onclick = function(){
//       for(let m = 0 ; m < cde.length; m++)
//       {
//          if(tag_product == cde[m])
//          {
//             alert(tag_product)
//          }
//       }
//    }

 }





//Total

document.getElementById("Total_cart").innerHTML=localStorage.getItem('totalCost')

function remove(){
   
   for(let i =0 ; i <button_delete.length;i++)
   {
      
      button_delete[i].onclick=function(){
        
         var product_cards=document.getElementsByClassName("product-title")
       
         for(let m = 0 ; m<name_abc.length;m++)
         {
         
            if(product_cards[i+1].innerHTML == name_abc[m])
            {
               
              delete abc[tags[m]]
               // console.log(abc)
             localStorage.setItem("productInCart",JSON.stringify(abc))
               location.reload()
            }
         }
      }
   }
}
remove()