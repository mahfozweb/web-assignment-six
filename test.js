const arr = []
const addCart =(( name,id,price )=> {
  const obj = {name , id , price}
  arr.push(obj)
  displayCart(arr)
  

  } )
  
 
  const displayCart = x =>{
    const display  = document.getElementById("money")
    display.innerHTML =""
      let sum = 0
   x.forEach((y) => {
    console.log(y);
    sum = sum+ y.price

    const newDiv = document.createElement("div")
    newDiv.innerHTML =`
    
            <div class="bg-[#f0fdf4]">
                <div class="flex justify-between px-1">
                <h1>${y.name}</h1>
                <h1 id ="remove-cart" onclick="removeCart(${y.id})">❌</h1>
                </div>
                <div class="px-1">
                    <h1><i class="fa-solid fa-bangladeshi-taka-sign"></i><span id="price">${y.price}</span></h1>
                </div>
                

            </div>
            <div>
              <h1>Total : <span>${sum}</span></h1>
            </div>
    `
    display.append(newDiv)

   } )

   
  }
  /* remove */
  const removeCart = (id) =>{
    arr.splice(id, 1)
     displayCart() 
   
  }