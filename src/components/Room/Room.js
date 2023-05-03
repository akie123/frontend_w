import Aalhad from '../weather'
import { useState } from "react";

export default function weather() {
    const [state, setState] = useState("")
    const [data,setData] =useState(null)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState(value)
        setData(null)

    };
    const handleSubmit1 = async (event) => {
        event.preventDefault();
        setData(state)

    };
    return (
       <div className="container-fluid" style={{padding:'12%',paddingTop:"2%",textAlign:'center'}} >
           <div className="row">
               <div className="col-4" style={{padding: '180px 0'}}>
                   <h3 className="font-monospace">WEATHER APPLICATION</h3>
                   <div className="input-group rounded" >
                       <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                              name="search" onChange={handleInputChange} aria-describedby="search-addon"/>
                       <span className="input-group-text border-0" id="search-addon"  onClick={handleSubmit1}>
               <i className="fas fa-search"></i>
               </span>
                   </div>

               </div>
               <div className="col-8">
                   {data && <Aalhad   NAME={data}/>}
               </div>
           </div>


       </div>
    );
}