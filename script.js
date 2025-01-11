const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailMessage = document.getElementById('emailMessage');
const passwordMessage = document.getElementById('passwordMessage');
const form = document.getElementById('signupForm');

emailInput.addEventListener('input',()=>{
    const emailValue = emailInput.value;

    if(emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')){
        emailMessage.textContent="All good to go";
        emailMessage.className='success';

    }else{
        emailMessage.textContent="Make sure email is more than 3 characters and has @ and .";
        emailMessage.className='error';
    }
});

passwordInput.addEventListener('input',()=>{
    const passwordValue = passwordInput.value;
    if(passwordValue.length >8){
        passwordMessage.textContent = "All good to go";
        passwordMessage.className='success';
    }else{
        passwordMessage.textContent="Make sure password is more than 8 characters.";
        passwordMessage.className='error';
    }
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    emailValid = emailMessage.className === 'success' ;
    passwordValid = passwordMessage.className === 'success';
    
    if(emailValid && passwordValid){
        const confirmSubmission = confirm("Do you want to submit the form? ");
        if(confirmSubmission){
            alert(`Successful signup!`);
        }else{
            form.reset();
            emailMessage.textContent ="Make sure email is more than 3 characters and has @ andd .";
            emailMessage.className ='error';
            passwordMessage.textContent="Make sure password is more than 8 characters.";
            passwordMessage.className='error';
         }
    }else{
        alert(`Please fix the errors before submitting.`);
    }
    });