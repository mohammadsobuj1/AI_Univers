
let sortData =[];

const loadData = (limit)=>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data =>{
      displayData(data.data.tools, limit)
     
      sortData = data.data.tools.sort((a, b)=>new Date(a.published_in)- new Date(b.published_in))
     
    })
   
}
// cardSection start





const displayData =(data, limit)=>{




const cardSection = document.getElementById('card-section')
cardSection.innerHTML='';
const seeallBtn =document.getElementById('seeall-btn')

if(limit && data.length > 6){
    data= data.slice(0, 6)
    seeallBtn.classList.remove('hidden')
    }
else{
    seeallBtn.classList.add('hidden')
}


    data.forEach(alltools => {
        const {image, features, name, published_in, id}=alltools;
        
      let featurediv =[];

      if(features != null){
  
       features.map((x)=>{
         const i =`<li>${x   }</li>`
       featurediv +=i 
        })
      }
    

      const div = document.createElement('div')
      div.classList.add("border-4")
   
      
div.innerHTML= `


<figure class="px-10 pt-10 ">
          
          <img src="${image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body ">
          <h2 class="card-title text-rose-500">Features</h2>
          <p class="text-sm "> ${featurediv} </p>
          
          
        <div class="flex justify-between">
        <div>
        <h2 class="text-xl font-bold mt-3 text-rose-500">${name}</h2>
        <p class="mt-2"><i class="fa-regular fa-calendar-days"></i> ${published_in}</p>
        </div>
        <div class="card-actions  mt-4 ">  
        <label for="my-modal-3" class=" text-orange-500 " onclick="  loadDetailes ('${id }')"><i class="fa-solid fa-arrow-right"></i></label>
      </div>
</div>
</div>

`


      cardSection.appendChild(div)
      loadersection(false)
    });
  
}

// cardSection end 




   
document.getElementById('sort-btn').addEventListener('click', function(){
  displayData(sortData)
 
})
  





// see all btn section  

const prosearchData =(limit)=>{
  
loadData(limit) 
 
}


document.getElementById('showall-btn').addEventListener('click', function(){

    prosearchData()
    
})

loadData('06')

// see all btn section end 



const loadersection =(isloading)=>{
  const loader = document.getElementById('loader')
  if(isloading ){
  
  loader.classList.add('hidden')
  }
 
  else{
    loader.classList.add('hidden')
  }
  }
  


// Detailes section start

const loadDetailes = (id )=>{
    
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
     .then(res=> res.json())
    .then(data => displayDetials(data.data))
    


}

// single Detailes section 

const displayDetials =(data )=>{

const {description, pricing,  features, integrations, image_link, input_output_examples, accuracy
  }= data;


// integration loop 

let integration =""

if(integrations != null){
  
  integrations.map((x)=>{
   const i =`<li>${x   }</li>`
  integration +=i 
  })
}


// modal section 

    const DetailesData = document.getElementById('details')
DetailesData.innerHTML='';

DetailesData.innerHTML=`

<div class="flex justify-between gap-5">


<div class="border-2 border-orange-300  bg-orange-50 rounded-lg w-[60%] p-2 ">

<p class="font-semibold  ">Description : ${description}  </p>
<div class="flex mt-5 justify-between  p-0  gap-2 text-sm bg-gray-100  ">

<p class="font-bold text-red-400  border-0  shadow-2xl mt-4"> ${pricing ?pricing?.[0].price !="No cost" ? pricing?.[0].price :'free of cost': 'Not Found' }   ${pricing?pricing?.[0].plan : 'Not Found'} </P>
<p class="font-bold text-red-400  border-0  shadow-2xl mt-4"> ${pricing ?pricing?.[1].price !="No cost" ? pricing?.[1].price :'free of cost': 'Not Found' }   ${pricing?pricing?.[1].plan : 'Not Found'} </P>

<p class="font-bold text-blue-400  border-0  shadow-2xl  "> ${pricing ?pricing[2].price : 'Not Found' }   ${pricing ?pricing[2].plan : 'Not Found'} </P>


</div>

<div class="flex justify-between gap-3">
<div>
<p class="font-bold text-xl mt-5  text-orange-400">Features</p>
<ol class="font-mono ... text-sm mt-2">
<li>  ${ features[1].feature_name} </li>
<li>  ${ features[2].feature_name} </li>
<li>  ${ features[3].feature_name} </li>

</ol>
</div>

<div>
<p class="font-bold text-xl mt-5  text-orange-400">Integrations</p>
<ul class="font-mono ... text-sm ml-4 mt-2">
<p >  ${  integration ? integration : 'Not found'} </p>
</ul>

</div>

</div>


</div>


<div class="static">



<div id="accuracy-btn" class="" >

 ${accuracy.score ?`<h2    class="absolute ... bg-orange-400 ml-24 text-white px-2 mt-2 h-5  rounded-md text-xs   ">accuracy: 
${accuracy.score*100}%</h2>` : ''}
</div>


      <img src="${image_link[0]}" alt="">
      
      <h2 class="font-bold text-xl mt-5 text-centers  text-orange-400">${input_output_examples ? input_output_examples[0].input : 'Not Found' }</h2>
      <h2 class="  mt-5 text-centers text-sm">${input_output_examples ? input_output_examples[0].output : 'Not Found' }</h2>



</div> 




</div>




`


}




// Detailes section end



