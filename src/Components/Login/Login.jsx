import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";


export default function Login() {





  const[info,setInfo]= useState([])

  
  
  const initialValue = { email: "", password: ""};
  const [user, setUser] = useState(initialValue);
  const [usererror, setUsererror] = useState({});
  const [submitted, setsubmitted] = useState(false);

  const newInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitData = async e => {
    e.preventDefault();
    setUsererror(validation(user));

    setsubmitted(true);


  };
  useEffect(() => {
    if (Object.keys(usererror).length == 0 && submitted) {
      alert("Signed Up Successfully");

      
    }
  }, [usererror]);


  const validation = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const pregex =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!values.email) {
      errors.email = "* email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "*valid email required";
    }

    if (!values.password) {
      errors.password = "*password is required";
    } else if (!pregex.test(values.password)) {
      errors.password ="should be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
    } 

    return errors;
  };


  const data = async()=>{
  //   const api = "https://62aacca1a62365888bcd0348.mockapi.io/user"; 
  // let token = 
  // console.log("dsssss",user.data.id)
  // token = user.data.id; 
  // axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })

    const response = await axios.get("https://62aacca1a62365888bcd0348.mockapi.io/user");
    const userdata=(response.data);
    setInfo(userdata)
  };
  useEffect(()=>{
    data();

  },[])


// info.map((user1)=>{
//   return console.log(user1);
// })

 
// const api = "https://62aacca1a62365888bcd0348.mockapi.io/user"; 
// let token = JSON.parse(sessionStorage.getItem('data'));
// token = user.data.id; /*take only token and save in token variable*/
// axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })

  return (

<>
    <div className="login_page">
    <ul>
            {info.map(item => (
              // <li key={item.id}>
              //   {item.email} {item.password}
              // </li>
              console.warn("this is data",item.user[0])
            ))}
          </ul>
      
      <form onSubmit={submitData}>
        <h1>Login</h1>
        <div className="details">
          <h4>*E-mail Id:</h4>
          <input
            type="text"
            placeholder="Enter your email-id"
            className="box"
            name="email"
            value={user.email}
            onChange={newInput}
          />
          <br />
          <p>{usererror.email}</p>

          <h4>*Password:</h4>
          <input
            type="password"
            placeholder="Enter your password"
            className="box"
            name="password"
            value={user.password}
            onChange={newInput}
          />
          <br />
          <p>{usererror.password}</p>

          <div className="send">
            <button type="submit" id="button">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

