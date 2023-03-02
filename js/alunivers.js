const loadData = ()=>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data =>displayData(data.data.tools))
}

const displayData =(data)=>{
    
const cardSection = document.getElementById('card-section')
const seeallBtn =document.getElementById('seeall-btn')

if( data.length > 6){
    data= data.slice(0, 6)
    seeallBtn.classList.remove('hidden')
    }
else{
    seeallBtn.classList.add('hidden')
}


    data.forEach(alltools => {
        const {image, features, name, published_in, id}=alltools;
      const div = document.createElement('div')
      div.classList.add("border-2")
   
      
div.innerHTML= `


<figure class="px-10 pt-10 ">
          
          <img src="${image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body ">
          <h2 class="card-title">Features</h2>
          <p>1. ${features[0]} </p>
          <p>2. ${features[1]} </p>
          <p class="border-0 border-b-4 ">3. ${features[2] ? features[2] : 'No feture' } </p>
          
        <div class="flex justify-between">
        <div>
        <h2 class="text-xl font-bold mt-3">${name}</h2>
        <p class="mt-2"><i class="fa-regular fa-calendar-days"></i> ${published_in}</p>
        </div>
        <div class="card-actions  mt-4 ">  
        <button class=" text-orange-500 " onclick=" loadDetailes('${id}')"><i class="fa-solid fa-arrow-right"></i></button>
      </div>
</div>
</div>

`


      cardSection.appendChild(div)
    });
}


document.getElementById('showall-btn').addEventListener('click', function(){
    console.log('click')
})


const loadDetailes = (id )=>{
    
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
     .then(res=> res.json())
    .then(data => displayDetials(data.data))

}

const displayDetials =(data)=>{

    
    console.log(data)
}






loadData()