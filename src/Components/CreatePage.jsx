import {useState}from "react"
import { useNavigate } from "react-router-dom";


function CreatePage() {
    const [vintageData, setVintageData] = useState({
        
        name: "",
        style: "",
        category: "",
        price: "",
    });
    

    const apiURL= (`http://localhost:4005`);
     const navigate =useNavigate()

    const handleTextChange = (event) => {
        setVintageData({
            ...vintageData,
            [event.target.id]: event.target.value
        });
   
    
    
        fetch(`${apiURL}/vintage`,{
            method: "POST",
            body: JSON.stringify(vintageData),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response)=>{

         
            navigate("/vintage")
        })
        .catch((error)=>{
            console.log(error)
            setVintageData("error")
        })  
        const handleSubmit = (event) => {
            event.preventDefault();
             
         
    
    }
    return (
        <div>
  
            <h1>Add Vintage Clothing Item</h1>

                {/* Form fields */}
                {/* Rest of your form */}
                <form onSubmit={handleSubmit} >
               
                <label>
                    {" "}
                    Name:
                    <input
                    type="text"
                    value={vintageData.name}
                    placeholder="Name"
                    onChange={handleTextChange}
                    required
                    />
                </label>
                <label>
                    Style:
                    <input
                    type="text"
                    value={vintageData.style}
                    placeholder="Style"
                    onChange={handleTextChange} 
                    required/>
                </label>
                <label htmlFor="Category">
                    Category:
                    <input
                    type="text"
                    value={vintageData.category}
                    placeholder="Category"
                    onChange={handleTextChange}
                    required />

                </label>
                
                   
                    <label htmlFor="price">
                         Price:
                        <input
                        type="number"
                        value={vintageData.price}
                        placeholder="Price"
                        onChange={handleTextChange}
                        required />

                        </label>
                
        <button type="submit">submit</button>
                <input type="submit">submit</input>
            </form>
        </div>
   ) 
}
}
export default CreatePage;   