import React,{useState}from 'react';
import Button from "@mui/material/Button";
import axios from 'axios';


function Access() {
  const [code,setCode]=useState("");
  const [text,setText]=useState("");

  const find = async (event) => {

    event.preventDefault();
    let url ="https://ttd-one.vercel.app/find/";
    url=url.concat(code);
    console.log(url);
    axios.get(url)
    .then(function (response) {
      console.log(response.data);
      setText(response.data);
    })

  };
  return (
    <div className='bg-[#EEEEEE]' >
      <div className='pt-24 px-10'>
      <p className='text-3xl mb-2 text-[#0B2447] font-semibold max-[640px]:text-2xl'>Enter code here</p><br/>
      <input className='text-2xl mb-12 bg- rounded-lg p-1 text-[#0B2447]' value={code} onChange={(e) => setCode(e.target.value)}/>
      <br />
      <Button
            variant="contained"
            color="success"
            size="large"
            href="/access"
            onClick={find}
          >
            Click here!
          </Button>
   
      </div>
      <div>
        
        {text}
      </div>
    </div>
    
  )
}

export default Access
