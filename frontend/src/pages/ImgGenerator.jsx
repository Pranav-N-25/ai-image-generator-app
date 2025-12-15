import React from "react";
import { usePollinationsImage } from "@pollinations/react";
import PromptBox from "../components/PromptBox";
import LoadingFrame from "../assets/LoadingFrame.gif";
import ImageLoading from "../assets/Image-loading.gif";
export const ImageGen = () => {
  // Pass your prompt to the hook
  const [Prompt, setPrompt] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [submit, setSubmit] = React.useState(false);
  const [button, setButton] = React.useState(false);

  var l = loading;
  return (
    <>

      <div style={{ textAlign: "center", marginTop: "2rem" }} className="flex mb-25 justify-center items-center" >
        {/* {console.log(imageUrl)} */}

        <div className={`z-1 shadow-2xl w-[90%] overflow-auto duration-500 md:w-[80%] md:py-6  md:px-6 md:gap-3 py-2 px-1 bg-white border-black/15 md:rounded-4xl md:rounded-b-4xl rounded-3xl `} >
          {/* <h2 className="flex justify-center mb-6 font-extrabold text-4xl
    ">AI Generated Image</h2> */}
          <div className="flex md:flex-row flex-col justify-center items-center gap-7 " style={{ border: "none" }} >
            <PromptBox Prompt={Prompt} setPrompt={setPrompt} imageUrl={imageUrl} setImageUrl={setImageUrl} loading={loading} setLoading={setLoading} setSubmit={setSubmit} submit={submit} button={button} setButton={setButton} />

            <>
              {console.log(imageUrl)}
              <div style={{border:"none"}} className="relative  md:w-[700px] md:h-[350px] w-[280px] h-[275px]  outline-none ">
                {button && <><img src={LoadingFrame} className="absolute h-[348px] w-[445px] rounded-4xl"/><img src={ImageLoading} className="absolute h-[145px] w-[135px] rounded-4xl top-[25%] left-[35%]" /> {/*<span style={{ border: "none" }} className=" absolute z-1 top-1/2 left-[45%] border-0 bg-gray-400">Loading ... </span>*/}
                <img className="absolute z-1 w-full h-full border-none rounded-4xl decoration-0 outline-1 outline-amber-50 "
                  src={!l ? imageUrl === "" ? undefined : imageUrl : undefined}
                  key={imageUrl}
                  alt=""
                  style={{ border: "none" }}


                />
                <a href={imageUrl} className="absolute top-0 z-300" download="AI_Image.png" >Download</a></>}
              </div>
            </>

          </div>
        </div>
      </div>
    </>
  );

}
