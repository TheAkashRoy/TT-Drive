import React,{useState} from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import axios from 'axios';
function Generate() {
    const [text,setText]=useState("");
     const [code,setCode]=useState("");
    // const [data,setData]=useState(
    //   {
    //     text:""
    //   }
    // );
    // const handleChange = (e) => {
    //   const value = e.target.value;
    //   setData({
    //     ...data,
    //     [e.target.name]: value
    //   });
    // };
    // const submit=(e)=>{
    //   e.preventDefault();
    //   const userText = {
    //     text: data.text,
    //   };
    //   console.log(userText);
    //   axios.post("https://ttd-one.vercel.app/insert", userText).then((response) => {
    //     console.log(response.status, response.data);
    //   });
    // }
    // const handleSubmit=(e)=>{
    //   e.preventDefault();
    //   const userText = {
    //     text: data.text,
    //   };
    //   console.log(userText);
    //   fetch("https://ttd-one.vercel.app/insert", {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(userText)
    //   })
    //   .then(response => response.json())
    //   .then(data => console.log(userText))
    //   .catch(error => console.error(error));
    // }

    const submit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('text', text);

      axios.post('https://ttd-one.vercel.app/insert', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response.data);
        setCode(response.data);
      }).catch(error => {
        console.error(error);
      });

    };
  return (
    <div className='bg-[#EEEEEE]' >
      <form  onSubmit={submit}>
      <div className=' p-20 flex flex-col'>
      <p className='text-4xl mb-4 text-[#393E46] font-semibold pt-3 max-[640px]:text-2xl'>Enter text here</p><br/>
      <TextareaAutosize
      aria-label="minimum height"
      minRows={12}
      className=' mb-12 text-md'
      placeholder="Your text area"
      style={{ minWidth: 200,maxWidth:1800 }}
      name="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <button className=' text-slate-800 font-semibold text-2xl bg-slate-100 w-40 rounded-lg p-1 shadow-xl border-2  border-blue-800'>Upload</button>
    {
      code?(<div className='flex flex-row mt-10'>
      <p className=' text-2xl text-slate-800 font-semibold' >Your Code:</p>
      <div className='w-40 text-2xl text-slate-800 rounded-lg  ml-5'>{code}</div>
      </div>):<div></div>
    }
    <div className='flex flex-row mt-5'>
    <h2 className='font-semibold text-2xl'>If you have code</h2>
    <button className='bg-[#17417b] text-[#FFFFFF] text-xl p-2 rounded-lg ml-5 font-Montserrat font-semibold'><a href="/access">Click here</a></button>
    </div>
    </div>
    </form>
    </div>
  )
}

export default Generate
