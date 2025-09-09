let total = 0
let totalAmount = document.getElementById("total-amount").innerText
/* load Category */
const loadCategory =() =>{
fetch("https://openapi.programming-hero.com/api/categories")
.then((x) => x.json())
.then((y) => displayLoadCategories(y.categories))
}


/*Display Category  */

const displayLoadCategories = (x ) => {
    const categoryList = document.getElementById("load-category")
    categoryList.innerHTML=""
    x.forEach(cat => {
        const res = cat.category_name
        const newDiv = document.createElement("div")
        newDiv.innerHTML =`
        <div>
                    <ul class="pl-2 #1f2937 text-[#1f2937] text-[16px]">
                        <li class="cursor-pointer" onclick="loadCard(${cat.id})">${res}</li>
                    </ul>
                </div>
        `

    categoryList.append(newDiv)
        
        
        
    });
  
    
}

/* Load Card */

const loadCard = ((id) =>{
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch (url)
    .then (res => res.json())
    .then(data => displayLoadCard(data.plants)
    )
} ) 


const loadAllCard = () =>{
    const url = `https://openapi.programming-hero.com/api/plants`;
    fetch (url)
    .then (res => res.json())
    .then(data => displayLoadCard(data.plants)
    )
} 
// .then(y => displayLoadCard(y.plants)
// )


// {id: 4, image: 'https://i.ibb.co.com/1YzsVWjm/Gulmohar-min.jpg', name: 'Gulmohar', description: 'Known as the ‘Flame of the Forest’, this tree burs…mer. Perfect for beautifying avenues and gardens.', category: 'Flowering Tree', …}

/* plant Details */

/* Add cart money */



/* Display Card */
const displayLoadCard = (card => {
    const cardList = document.getElementById("load-card")
    cardList.innerHTML= "";
    card.forEach((getData) => {
        // console.log(getData);
        
        const newDiv = document.createElement("div")
        newDiv.innerHTML=`
          <div class="card bg-white">
              <div class="h-[180px] p-4">
                <img
                  class="h-full w-full object-cover"
                  src="${getData.image}"
                  alt=""
                />
              </div>
              <div class="font-semibold px-1 ">
                <h1 >${getData.name}</h1>
              </div>
              <div class="text-[#1f2937] text-[10px] px-1">
                <p>
                  ${getData.description}
                </p>
              </div>
              <div class="flex justify-between p-1">
              <button onclick="loadPlantDetails(${getData.id})" class="bg-[#dcfce7] text-[#15803d] p-2 rounded-3xl text-[10px] font-semibold">${getData.category}</button>
                <h1><i class="fa-solid fa-bangladeshi-taka-sign"></i> <span>${getData.price}</span></h1>
              </div >
              <button onclick="addCart('${getData.name}',${getData.id},${getData.price} )" class="btn btn-wide bg-[#15803d] rounded-2xl text-white">Add to cart</button>
            </div>
           
        `
        cardList.append(newDiv)
        

    })
    
})

const arr = []
const addCart =(( name,id,price )=> {
  const obj = {name , id , price}
  arr.push(obj)
  displayCart(arr)
  total += price
  document.getElementById("total-amount").innerText = total

  } )
  
 /* display money */

  

  const displayCart = x =>{
    const display  = document.getElementById("money")
    display.innerHTML =""
   
  // console.log(totalAmount);
  
    // let total = getAmount
    // getAmount -= price
  
   x.forEach((y) => {
    
   
    const newDiv = document.createElement("div")
    console.log(total , y.price);
    
    newDiv.innerHTML =`
    
            <div class="bg-[#f0fdf4]">
                <div class="flex justify-between px-1">
                <h1>${y.name}</h1>
                <h1 id ="remove-cart" onclick="removeCart(${y.price}, ${y.id})">❌</h1>
                </div>
                <div class="px-1">
                    <h1><i class="fa-solid fa-bangladeshi-taka-sign"></i><span id="price">${y.price}</span></h1>
                </div>
                

            </div>
            
    `
    display.append(newDiv)

   } )
    

   
  }

  /* remove */

  const removeCart = (price, id) =>{
  

    const index = arr.findIndex(item => item.id ===id)
    if(index !== -1){
      total -= price
      arr.splice(index, 1)
    }

    displayCart(arr)
    document.getElementById("total-amount").innerText = total
    console.log(id,arr);
    
    
  }

 

/* load plant details */

const loadPlantDetails = ((id )=> {
    const url = (`https://openapi.programming-hero.com/api/plant/${id}`)
    // console.log(url);
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoadPlantDetails(data.plants)
    )
})

 const displayLoadPlantDetails = ((get) =>{
    console.log(get);
    const detail = document.getElementById("detail-container")
    detail.innerHTML =`
    <div class="card bg-white space-y-4">
     <div class="font-semibold px-1 ">
                <h1 >${get.name}</h1>
              </div>
              <div class="h-[250px] p-4 ">
                <img
                  class="h-full w-full object-cover"
                  src="${get.image}"
                  alt=""
                />
              </div>
             
              <div class="text-[#1f2937] text-[10px] px-1">
                <p>
                  ${get.description}
                </p>
              </div>
              <div class="flex justify-between p-1">
              <button  class="bg-[#dcfce7] text-[#15803d] p-2 rounded-3xl text-[10px] font-semibold">${get.category}</button>
                <h1><i class="fa-solid fa-bangladeshi-taka-sign"></i> <span>${get.price}</span></h1>
              </div >
              
            </div>
    
    
    `
    document.getElementById("plant_modal").showModal()
   
    

 })
 loadAllCard()
loadCategory()
