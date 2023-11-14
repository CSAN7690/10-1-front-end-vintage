import axios from "axios";
import {v4 as uuidv4} from "uuid"
import {useState}from "react"
import { useNavigate } from "react-router-dom";


function CreatePage() {
    const [formData, setFormData] = useState({
        
        name: "",
        style: "",
        category: "",
        price: "",
    });
    const [submitForm, setSubmitForm] = useState("")

    const apiURL= (`http://localhost:4005`);
     const navigate =useNavigate()

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        });
   
    
    const handleSubmit = (event) => {
        event.preventDefault();
        

        fetch(`${apiURL}/vintage`,{
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response)=>{

         
            navigate("/vintage")
        })
        .catch((error)=>{
            console.log(error)
            setSubmitForm("error")
        })       
    
    }
    return (
        <div>
  


           
            {/* <h1>Add Vintage Clothing Item</h1> */}

                {/* Form fields */}
                {/* Rest of your form */}
                <form onSubmit={handleSubmit} >
               
                <label>
                    {" "}
                    Name:
                    <input
                    type="text"
                    value={formData.name}
                    placeholder= "Name"
                    onChange={(event)=> handleChange(event)}
                    required
                    />
                </label>
                <label>
                    Style:
                    <input
                    type="text"
                    value={formData.style}
                    placeholder= "Style"
                    onChange={(event) => handleChange(event)} 
                    required/>



                </label>
        <button type="submit">submit</button>
                
            </form>
        </div>
   ) 
}
}
export default CreatePage;   