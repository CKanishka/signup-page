function showError(message,id){
  var errorDiv=document.getElementById(id)
  errorDiv.innerText=message
  errorDiv.style.display='block'
}

function reset(){
  var errorInputs = document.getElementsByClassName('form-input')
  for (var i = 0; i < errorInputs.length; i=i+1) {
    var currentElement = errorInputs[i]
    currentElement.style.border='none'
  }
  var errorSpans = document.getElementsByClassName('error-message')
  for (var i = 0; i < errorSpans.length; i=i+1) {
    var currentElement = errorSpans[i]
    currentElement.style.display='none'
  }

}
function validate(){
   var error=false
   reset()
   var form=document.forms['signup-form']
   var fname=form['f-name'].value
   var lname=form['l-name'].value
   var email=form['email'].value  
   var phone=form['phone'].value 
   var gender=form['gender'].value 
   var age=form['age'].value
   //extracting the selected country value
   var country=document.getElementById('country_select')
   var country_value=country.options[country.selectedIndex].value
   console.log(country_value,typeof(country_value))
        //firstname validation
        if(fname.includes(' ')){
          var errorDiv = document.getElementById('f-name')
          errorDiv.style.border='1px solid red'
          showError('First Name should not contain spaces','f-name-error')
          error=true
        }
        //lastname validation
        if(lname.includes(' ')){
          var errorDiv = document.getElementById('l-name')
          errorDiv.style.border='1px solid red'
          showError('Last Name should not contain spaces','l-name-error')
          error=true
        }   
        //phone number validation
        if(phone.length<10){
          var errorDiv = document.getElementById('phone')
          errorDiv.style.border='1px solid red'
          showError('Phone Number should contain minimum 10 digits','phone-error')
          error=true
        } 
        //age validation based on country
        if(country_value=='India' && age<12){
          var errorDiv = document.getElementById('age')
          errorDiv.style.border='1px solid red'
          showError("Age limit is 12 in India",'age-error')
          error=true
        }
        if(country_value=='USA' && age<18){
          var errorDiv = document.getElementById('age')
          errorDiv.style.border='1px solid red'
          showError("Age limit is 18 in USA",'age-error')
          error=true
        }
        if(country_value=='China' && age<15){
          var errorDiv = document.getElementById('age')
          errorDiv.style.border='1px solid red'
          showError("Age limit is 15 in China",'age-error')
          error=true
        }
        if(error){
          return false
        }
      return true  
}