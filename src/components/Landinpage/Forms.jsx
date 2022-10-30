import React, { useState } from "react";

function Forms() {

  const [FirstName, setFirstName] = useState("")

  const [LastName, setLastName] = useState("")

  const [email, setemail] = useState("")

  const [message, setmessage] = useState("")

  const [listofquery, setlistofquery] = useState([{

    field_one: "",
    field_two: "",
    field_three: "",
    field_four: "",


  }])




  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <h1 className='md-text-7xl sm:text-6xl text-4xl  text-white font-bold md:py-6'>Contact us</h1>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
            First Name
          </label>
          <input onChange={(event) => {
            setFirstName(event.target.value)
            console.log(event.target.value)
          }} className="appearance-none block w-full bg-gray-200  text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

        </div>

        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-white  text-xs font-bold mb-2" >
            Last Name
          </label>
          <input onChange={(event) => {
            setLastName(event.target.value)
          }}
            className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
            E-mail
          </label>
          <input onChange={(event) => {
            setemail(event.target.value)
          }}
            className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
          <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
        </div>
      </div>


      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-white  text-xs font-bold mb-2" >
            Message
          </label>
          <textarea onChange={(event) => {
            setmessage(event.target.value)
          }}
            className=" no-resize appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
          <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
        </div>
      </div>


      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button onClick={() => {
            setlistofquery([...listofquery, {

              field_one: { FirstName },
              field_two: { LastName },
              field_three: { email },
              field_four: { message }}])
              console.log(listofquery)
              setFirstName("")
              setLastName("")
              setemail("")
              setmessage("")
           
          }
          }
className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            Send</button>

        </div>
        <div className="md:w-2/3"></div>
      </div>

    </form>
  );
}

export default Forms;
