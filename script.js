function AddNewCTField(){
    // console.log("Adding data");
 
     let newNode= document.createElement('textarea');
     newNode.classList.add('form-control');
     newNode.classList.add('ctField');
     newNode.classList.add('mt-3');
     newNode.setAttribute('placeholder','Enter Here');
 
     let ctOb=document.getElementById('ct');
     let ctAddButtonOb=document.getElementById('ctAddButton');
 
     ctOb.insertBefore(newNode, ctAddButtonOb);
 
 }
 
 function AddNewWEField(){
     let newNode= document.createElement('textarea');
     newNode.classList.add('form-control');
     newNode.classList.add('weField');
     newNode.classList.add('mt-3');
     newNode.setAttribute('placeholder','Enter Here');
 
     let weOb=document.getElementById('we');
     let weAddButtonOb=document.getElementById('weAddButton');
 
     weOb.insertBefore(newNode, weAddButtonOb);
 
 
 }
 
 function AddPJField(){
  
     let newNode= document.createElement('textarea');
     newNode.classList.add('form-control');
     newNode.classList.add('pjField');
     newNode.classList.add('mt-3');
     newNode.setAttribute('placeholder','Enter Here');
 
     let pjOb=document.getElementById('pj');
     let pjAddButtonOb=document.getElementById('pjAddButton');
 
     pjOb.insertBefore(newNode, pjAddButtonOb);
 
 
 }
 
 function AddEDField(){
  
     let newNode= document.createElement('textarea');
     newNode.classList.add('form-control');
     newNode.classList.add('eqField');
     newNode.classList.add('mt-3');
     newNode.setAttribute('placeholder','Enter Here');
 
     let eqOb=document.getElementById('eq');
     let eqAddButtonOb=document.getElementById('eqAddButton');
 
     eqOb.insertBefore(newNode, eqAddButtonOb);
 
 
 }
 
 //generating CV
 function generateCV(){
     //console.log("Generating CV");
 
     let Name= document.getElementById('Name').value;
     
     let nameT1= document.getElementById('nameT1');
       
     nameT1.innerHTML= Name;
 
     //direct
     document.getElementById("nameT2").innerHTML = Name;
 
     //DOB 
 
     let DOB= document.getElementById('DOB').value;
     let dobT= document.getElementById('dobT');
     dobT.innerHTML= DOB;
 
     //contact
 
     document.getElementById("contactT").innerHTML=document.getElementById("contactdetails").value;
     
     //Email ID
 
     document.getElementById("emailT").innerHTML=document.getElementById("EmailID").value;
 
     //address
 
     document.getElementById("addressT").innerHTML=document.getElementById("AddressField").value;
 
     //important links
 
     document.getElementById("fbT").innerHTML=document.getElementById("FBField").value;
     document.getElementById("instaT").innerHTML=document.getElementById("InstaField").value;
     document.getElementById("twT").innerHTML=document.getElementById("TwitField").value;
     document.getElementById("linkT").innerHTML=document.getElementById("LinkinField").value;
     document.getElementById("GithubT").innerHTML=document.getElementById("GithubField").value;
 
     //career Objective
     document.getElementById('ObjT').innerHTML=document.getElementById("Objective").value;
 
 
     
     //work Experience
 
     let wes= document.getElementsByClassName('weField');
     let str='';
 
     for(let e of wes)
 {
     str = str +`<li> ${e.value} </li>`;
 }
     document.getElementById('weT').innerHTML= str;
 
     // Educational Details
     let eqs= document.getElementsByClassName("eqField");
 
     str1='';
     for(let e of eqs){
         str1 = str1 + `<li> ${e.value} </li>`;
     }
 
     document.getElementById('edT').innerHTML= str1;
 
     //Certification
 
     let cs= document.getElementsByClassName("ctField");
 
     str2 = '';
     for (let e of cs){
         str2= str2 + `<li> ${e.value} </li>`;
     }
 
     document.getElementById('ctT').innerHTML =str2;
 
    //project 
    let ps=document.getElementsByClassName("pjField");
    str3='';
    for(let e of ps){
        str3= str3+ `<li> ${e.value} </li> `;
    }
     document.getElementById('pT').innerHTML= str3;

     //code for your image
     let file= document.getElementById('imgField').files[0];
     console.log(file);

     let r=new FileReader();
     r.readAsDataURL(file);
     console.log(r.result);

     //set image into template
     r.onloadend= function(){
     document.getElementById('imgT').src=r.result;

     }
 
     document.getElementById('cv-form').style.display='none';
     document.getElementById('CV-template').style.display='block';
 
 }
 function printCV(){
     window.print();
 }