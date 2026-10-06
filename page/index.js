const form=document.getElementById('form')
const userName=document.querySelector("#uName")
const email=document.querySelector("#uName")
const password=document.querySelector("#pw")
const fileName=document.querySelector("#file")
const img=document.querySelector("#image")
const pf=document.querySelector(".name-pf")
const hidebtn=document.getElementById('btn-log')
const blogPf=document.getElementById('pf-blog')
const showForm=()=>{
    form.classList.remove('d-none')
}
const closeForm=()=>{
    form.classList.add('d-none')
    hidebtn.classList.add('d-none')
    blogPf.classList.remove('d-none')
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(userName.value)
    const file=fileName.files[0]
    pf.textContent=userName.value
      if (file) {
    const imgURL = URL.createObjectURL(file);
    image.src = imgURL; // display the image
  }
  form.reset();
})

const leaveIcon=document.getElementById('leave-icon')
leaveIcon.addEventListener('click',(e)=>{
     blogPf.classList.add('d-none')
      hidebtn.classList.remove('d-none')
})
const countShow=document.getElementById('count')
let count=0;

const updateCount=()=>{
 countShow.innerHTML=count;
}

const increseCount=()=>{
  const id=document.getElementById('cricle-count')
  id.classList.remove('d-none')
  count++;
  updateCount();
}

const heart=document.getElementById('heart')
 heart.addEventListener('click',()=>{
  heart.classList.add('text-danger')
 })