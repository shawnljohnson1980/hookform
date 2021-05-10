import React, { useState } from "react";

const UserForm = (props) => {
  const [userName,setUserName]=useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [birthdayError, setBirthdayError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError,setPasswordError]=useState("");
  const [confirmPasswordError,setConfirmPasswordError]=useState("");
  const createUser= (e) =>{
    e.preventDefault();
    const newUser={birthday,userName,firstName,lastName,email,password,confirmPassword};
    console.log("welcome",newUser);
  }
const handleBirthday= e =>{
  setBirthday(e.target.value);
  if (e.target.value.length==null){
    setBirthdayError("A date must be selected.")
  }else setBirthdayError(" ")
}
const handleUserName= e =>{
  setUserName(e.target.value);
  if (e.target.value.length<5 ){
    setUserNameError("User Name must be at least 5 characters long.")
  }else if (e.target.value.length> 45){
    setUserNameError("User name cannot be longer than 45 characters long.")
  }else{
    setUserNameError(" ")
  }
  }
const handleFirstName = e =>{
setFirstName(e.target.value);
if(e.target.value.length<2 ){
  setFirstNameError("First Name Mustr be at least 2 characters in length.")
}else if(e.target.value.length> 45 ){
  setFirstNameError("First Name Cannot be longer than 45 characters in length")
}else{
  setFirstNameError(" ")
}
}
const handleLastName = e =>{
  setLastName(e.target.value);
  if(e.target.value.length<2 ){
    setLastNameError("Last Name Mustr be at least 2 characters in length.")
  }else if(e.target.value.length> 45 ){
    setLastNameError("Last Name Cannot be longer than 45 characters in length")
  }else{
    setLastNameError(" ")
  }
  }
  const handleEmail = e =>{
    setEmail(e.target.value);
    if(e.target.value.length<=" " ){
      setEmailError("Please Enter Your Email Address")
    }else if(e.target.value.length!==  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) {
      setEmailError("Please Enter A Valid Email Address")
    }else{
      setEmailError(" ")
    } 
    }
    const handlePassword = e =>{
      setPassword(e.target.value);
      if(e.target.value.length<8 ){
        setPasswordError("Password Must Be At Least 8 Characters In Length")
      }else if(e.target.value.length>60) {
        setPasswordError("Password Cannot be longer than 60 Characters In Length")
      }else{
        setPasswordError(" ")
      }
      }
      const handleConfirmPassword = e =>{
        setConfirmPassword(e.target.value);
        if(e.target.value.length<8 ){
          setConfirmPasswordError("Password Must Be At Least 8 Characters In Length")
        }else if(e.target.value.length>60) {
          setConfirmPasswordError("Password Cannot be longer than 60 Characters In Length")
        }else if(e.target.value!==password){
          setConfirmPasswordError("Passwords Must Match.")
        }else{
          setConfirmPasswordError(" ")
        }
        }
  return (
    <>
      <form class="mt-5 p-3 shadow border border-rounded border-white" onSubmit= {createUser}>
      <div className="form-group">
      </div>
        <div class="form-group" >
          <label class="mt-4"  htmlFor="birthday">Birthday:</label>
          <input
            class=" shadow border border-rounded border-primary form-control"
            name="birthday"
            required=""
            placeholder="datetime.today"
            type="date"onChange ={handleBirthday}/>
            <p class="text-danger">{birthdayError}</p>
        </div>
         <div class="form-group" >
          <label class="mt-3"   htmlFor="userName">First Name:</label>
          <input
            class=" shadow border border-rounded border-primary form-control "
            name="userName"
            placeholder="Pick a User Name"
            type="text"onChange={handleUserName}/>
            <p class="text-danger">{userNameError}</p>
        </div>
            <div class="form-group" >
          <label class="mt-3" htmlFor="First Name">First Name:</label>
          <input
            class=" shadow border border-rounded border-primary form-control"
            name="firstName"
            placeholder="Your First Name"
            type="text"onChange={handleFirstName}/>
            <p class="text-danger">{firstNameError}</p>
        </div>
        <div class="form-group" >
          <label class="mt-3" htmlFor="Last Name">Last Name:</label>
          <input
            class=" shadow border border-rounded border-primary form-control"
            type="text"
            placeholder="Your Last Name"
            name="lastName"onChange={handleLastName}/>
            <p class="text-danger">{lastNameError}</p>
        </div>
        <div class="form-group" >
          <label class="mt-3" htmlFor="Email">Email</label>
          <input
            class=" shadow border border-rounded border-primary form-control"
            type="email"
            placeholder="Your email address"
            name="email"onChange={handleEmail}/>
            <p class="text-danger">{emailError}</p>
        </div>
        <div class="form-group" >
          <label class="mt-3" htmlFor="password">Password</label>
          <input
            class=" shadow border border-rounded border-primary form-control"
            type="password"
            placeholder="Create A Password"
            name="password"onChange={handlePassword}/>
            <p class="text-danger">{passwordError}</p>
        </div>
        <div class="form-group" >
          <label class="mt-3" htmlFor="password">Password</label>
          <input
            class=" shadow border border-rounded border-primary form-control"
            type="password"
            placeholder="Create A Password"
            name="password"onChange={handleConfirmPassword}/>
            <p class="text-danger">{confirmPasswordError}</p>
        </div>
        <div class="form-group" >
          <input class=" btn btn-secondary mt-3 mb-4 shadow border border-rounded border-primary form-control"
            type="submit" name="submit" value="Create User"/>
        </div>
      </form>
    <div>
      
        <h3>New User</h3>
        <table class="table table-striped border border-rounded border-dark">
            <thead class="thead thead-dark border border-rounded">
                <th scope="col">Birthday:</th>
                <th scope="col">User Name:</th>
                <th scope="col">First Name:</th>
                <th scope="col">Last Name</th>
                <th scope="col">Eamil:</th>
                <th scope="col">Password</th>
                <th scope="col">Password</th>
            </thead>
            <tbody>
                <td>{birthday}</td>
                <td>{userName}</td>
                <td> {firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>{confirmPassword}</td> 
            </tbody>
        </table>
    </div>
    </>
  )};
  export default UserForm;
