var mainBt=document.getElementById("mainbt");
var nameInput=document.getElementById("name");
var urlInput=document.getElementById("url");
var descInput=document.getElementById("desc");
var viait=document.getElementById("link");
var delurl=document.getElementById("inputImg");
var wrong= document.querySelector('p');

var allSites= [];
if(localStorage.getItem('sites')!=null)
{
    allSites=JSON.parse(localStorage.getItem('sites'));
    display();
}


function validation(){
    var rgexDesc=/^[a-zA-Z0-9\W]{2,50}$/
    var rgexname=/^[a-zA-Z0-9\W]{2,20}$/
    if(
        rgexname.test(nameInput.value)==true&&
        rgexDesc.test(descInput.value)==true&&
        urlInput!=""  
    ){
        return true;
    }else{
        return false;
    }

}

function addSite(){
if(validation()){
var site={
    siteName:nameInput.value,
    siteUrl:urlInput.value,
    siteDesc:descInput.value
}

allSites.push(site);
localStorage.setItem('sites',JSON.stringify(allSites));
display();
wrong.classList.replace("d-block","d-none");
clear();
}else{
   wrong.classList.replace("d-none","d-block");
}

}

function display(src){

    siteDiv=``;
    for(var i=0;i<allSites.length;i++){
    siteDiv+=`
    <div class="sites   col-lg-3 position-relative  mb-5 ">
    <div class="card ">
      <div class="card-body text-center">
     <h5 id="siteName" class="card-title mt-3 fw-bold">${allSites[i].siteName}</h5>
     <p class="card-text" id="siteDesc">${allSites[i].siteDesc}</p>
     <a href="${allSites[i].siteUrl}" id="link" class="text-decoration-none float-start  text-warning" target="_blank">visit ></a>
    </div></div>
    <div class="shap position-absolute bg-white rounded-circle start-50 top-0 translate-middle "></div>
    <input type="image"  onclick='deletesite(${i})' id="inputImg" class="position-absolute top-0 end-0 me-3 mt-2" src="img/x.png">  
    </div>`; 
}
document.getElementById('show').innerHTML=siteDiv; 
    
}

function deletesite(index){
    allSites.splice(index,1);
    localStorage.setItem('sites',JSON.stringify(allSites));
    display();

}

function clear(){
    nameInput.value="";
    urlInput.value="";
    descInput.value="";
}

mainBt.addEventListener('click',function(){
    addSite (); 
})
