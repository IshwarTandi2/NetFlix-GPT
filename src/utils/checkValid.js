

const checkValid = (email,password,fullName) => {

    
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPassValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    const isFullNameValid = /^[A-Za-z]+(?: [A-Za-z]+)+$/.test(fullName);

  
     if(!isEmailValid) return "Enter Valid Email";
     if(!isPassValid) return "Enter Valid Password";
     if(!isFullNameValid) return "Enter Valid Name";

     return null; // this means all parameters are valid
  
  
}

export default checkValid