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
const {description, pricing,  features, integrations, image_link, input_output_examples
}= data;


const DetailesData = document.getElementById('details')
DetailesData.innerHTML=`

<div class="flex justify-between gap-5">


<div class="border-2 border-orange-300 p-2 ">

<p class="font-semibold  ">Description : ${description}  </p>
<div class="flex mt-5 justify-between  gap-5 ">

<p class="font-bold text-red-400  border-0  shadow-2xl"> ${pricing[0].price}  ${pricing[0].plan}</P>
<p class="font-bold text-red-400  border-0  shadow-2xl"> ${pricing[1].price}  ${pricing[1].plan}</P>
<p class="font-bold text-blue-300 border-0  shadow-2xl" > ${pricing[2].price}  ${pricing[2].plan  }</P>

</div>

<div class="flex justify-between gap-3">
<div>
<p class="font-bold text-xl mt-5">Features</p>
<ol class="font-mono ...">
<li> 1. ${ features[1].feature_name} </li>
<li> 2. ${ features[2].feature_name} </li>
<li> 3. ${ features[3].feature_name} </li>

</ol>
</div>

<div>
<p class="font-bold text-xl mt-5">Integrations</p>
<ul class="font-mono ...">
<li> 1. ${ integrations[0]} </li>
<li> 1. ${ integrations[1]} </li>
<li> 3. ${integrations[2]} </li>

</ul>

</div>

</div>



</div>


<div class="h-9">
<img src="${image_link[0]}" alt="">
<h2 class="font-bold text-xl mt-5 text-centers">${input_output_examples[0].input}</h2>
<h2 class=" font-mono ... text-xl mt-3 w-full  mx-auto">${input_output_examples[0].output}</h2>

</div>


</div>





`

   
}


// Detailes section end





