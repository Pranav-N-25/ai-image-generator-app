import React from 'react'
import NavBar from "./components/NavBar";


const Amma = () => {
  const [notify, setNotify] = React.useState(false);

  return (
    <div className="w-full h-screen">
      <div className="container /border-b-1 border-gray-300 flex justify-start items-center w-full h-10 py-9 text-lg px-5">
        Appa amma
      </div>
      <hr className="mx-4 border-gray-300" />
      <Button value={notify} setValue={setNotify} />
      <SuccessAlert1 notify={notify} setNotify={setNotify} />
    </div>
  )
}

export default Amma