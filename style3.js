
function message() {
    
    const nom=document.getElementById('nom') ; 
    const email =document.getElementById('email');
    const msg=document.getElementById('msg');
     const success=document.getElementById('success');   
     const danger=document.getElementById('danger');

     if(nom.value ===  '' || email.value === '' || msg.value === ''){
        danger.style.display="block";
     }else{
        setTimeout(()=>{
            nom.value='';
            email.value='';
            msg.value='';
        },2000);
        success.style.display='block';
     }
    }message()


    function myscroll(){
        window.scroll({
            behavior:"smooth",
            left:0,
            top:element.offsettop
        });
        //VERS LE PRINCE
        document.querySelector('#seeprince').addEventListener('click',() => {
            myscrollFunc(document.querySelector(".prince"));

        })
    }
