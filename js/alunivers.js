const loadData = (limit)=>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data =>displayData(data.data.tools, limit))
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
        <label for="my-modal-3" class=" text-orange-500 " onclick=" loadDetailes('${id}')"><i class="fa-solid fa-arrow-right"></i></label>
      </div>
</div>
</div>

`


      cardSection.appendChild(div)
    });
}

// cardSection end 


// see all btn section  

const prosearchData =(limit)=>{

loadData(limit)    
}


document.getElementById('showall-btn').addEventListener('click', function(){
    prosearchData()
})

loadData('06')

// see all btn section end 



// Detailes section start

const loadDetailes = (id )=>{
    
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
     .then(res=> res.json())
    .then(data => displayDetials(data.data))


}

const displayDetials =(data)=>{
const {description, pricing,  features, integrations, image_link, input_output_examples, accuracy
  }= data;
console.log(data
    )




const DetailesData = document.getElementById('details')
DetailesData.innerHTML=`

<div class="flex justify-between gap-5">


<div class="border-2 border-orange-300  w-[60%] p-2 ">

<p class="font-semibold  ">Description : ${description}  </p>
<div class="flex mt-5 justify-between  p-0  gap-2 text-sm">

<p class="font-bold text-red-400  border-0  shadow-2xl"> ${pricing ?pricing[0].price : 'Not Found' }   ${pricing ?pricing[0].plan : 'Not Found'} </P>
<p class="font-bold text-green-400  border-0  shadow-2xl"> ${pricing ?pricing[1].price : 'Not Found' }   ${pricing ?pricing[1].plan : 'Not Found'} </P>
<p class="font-bold text-blue-400  border-0  shadow-2xl"> ${pricing ?pricing[2].price : 'Not Found' }   ${pricing ?pricing[2].plan : 'Not Found'} </P>


</div>

<div class="flex justify-between gap-3">
<div>
<p class="font-bold text-xl mt-5">Features</p>
<ol class="font-mono ... text-sm">
<li> 1. ${ features[1].feature_name} </li>
<li> 2. ${ features[2].feature_name} </li>
<li> 3. ${ features[3].feature_name} </li>

</ol>
</div>

<div>
<p class="font-bold text-xl mt-5">Integrations</p>
<ul class="font-mono ... text-sm">
<li> 1. ${ integrations ?  integrations[0] : 'Not Found' } </li>
<li> 1. ${  integrations ?  integrations[1] : 'Not Found'} </li>
<li> 3. ${ integrations ?  integrations[2] : 'Not Found'} </li>
<li> 4. ${ integrations ?  integrations[3] : 'Not Found'} </li>
<li> 5. ${ integrations ?  integrations[4] : 'Not Found'} </li>

</ul>

</div>

</div>


</div>


<div class="static">



<h2   class="absolute ... bg-orange-400 ml-24 text-white px-2 mt-2 h-5  rounded-md text-xs ">accuracy: 
${accuracy.score*100 ?accuracy.score*100 : "None"}%</h2>


      <img src="${image_link[0]}" alt="">
      
      <h2 class="font-bold text-xl mt-5 text-centers">${input_output_examples ? input_output_examples[0].input : 'Not Found' }</h2>
      <h2 class="  mt-5 text-centers text-sm">${input_output_examples ? input_output_examples[0].output : 'Not Found' }</h2>



</div> 




</div>





`




   
}



// Detailes section end






