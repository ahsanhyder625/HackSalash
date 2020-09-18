document.getElementById('addstd').addEventListener('click',function(){
    var x=document.getElementById('hello')
    if(x.style.display==="none"){
        x.style.display="block"
    }
    else{
        x.style.display="none"
    }
})

document.getElementById('dailyWork').addEventListener('click',function(){
    var x=document.getElementById('Work')
    if(x.style.display==="none"){
        x.style.display="block"
    }
    else{
        x.style.display="none"
    }
})
const scriptURL = 'https://script.google.com/macros/s/AKfycbzK0HSsBH5evjv5_Qn-2k7Xan2ld_CFH9X_h_tU3dPeTn0UMXg/exec'
        const form = document.forms['submit-to-google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })
document.getElementById('save').addEventListener('click',function(){
    var subject1=document.getElementById('subject1').value
    var Classwork1=document.getElementById('Classwork1').value
    var Homework1=document.getElementById('Homework1').value
    var subject2=document.getElementById('subject2').value
    var Classwork2=document.getElementById('Classwork2').value
    var Homework2=document.getElementById('Homework2').value
    var subject3=document.getElementById('subject3').value
    var Classwork3=document.getElementById('Classwork3').value
    var Homework3=document.getElementById('Homework3').value
    window.location.href=`http://127.0.0.1:5000/send?subject1=${subject1}&subject2=${subject2}&subject3=${subject3}&classwork1=${Classwork1}&classwork2=${Classwork2}&classwork3=${Classwork3}&homework1=${Homework1}&homework2=${Homework2}&homework3=${Homework3}`
})