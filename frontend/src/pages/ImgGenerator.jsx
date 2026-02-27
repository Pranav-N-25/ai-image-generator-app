import React from "react";
// import { usePollinationsImage } from "@pollinations/react";
import PromptBox from "../components/PromptBox";
import LoadingFrame from "../assets/LoadingFrame.gif";
import ImageLoading from "../assets/Image-loading.webp";
import { FaDownload } from "react-icons/fa";
import logo from '../assets/logo-ai.webp';
import { motion, AnimatePresence } from "framer-motion";
import { imageFileResizer } from "react-image-file-resizer";
import { useMediaQuery } from "react-responsive";
import animatedLogo from "../assets/animation-lottie.gif";


export const ImageGen = () => {
  // Pass your prompt to the hook
  const [Prompt, setPrompt] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [resizedUrl, setResizedUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [submit, setSubmit] = React.useState(false);
  const [button, setButton] = React.useState(false);
  const [error, setError] = React.useState();
  const [fileName, setFilename] = React.useState(null);
  const [imageResolution, setImageResolution] = React.useState({ label: "default", w: "auto", h: "auto" });
  const isTab = useMediaQuery({ maxWidth: 1111 });
  const isTab2 = useMediaQuery({ maxWidth: 1332 });
  const isTab3 = useMediaQuery({ maxWidth: 1173 });
  const isTab4 = useMediaQuery({ maxWidth: 501 });
  const isMobile = useMediaQuery({ maxWidth: 597 });
  const Image_Type = ['Anime', 'Realistic', 'Cinematic', '3D', 'Painting', 'Ghibli']

  var l = loading;

  const handleDownload = () => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      // Create canvas
      const canvas = document.createElement("canvas");
      canvas.width = imageResolution.w !== "auto" ? imageResolution.w : 1024;
      canvas.height = imageResolution.h !== "auto" ? imageResolution.h : 1024;
      const ctx = canvas.getContext("2d");

      // Draw resized image
      ctx.drawImage(img, 0, 0, imageResolution.w !== "auto" ? imageResolution.w : 1024, imageResolution.h !== "auto" ? imageResolution.h : 1024);

      // Convert to data URL
      const dataUrl = canvas.toDataURL("image/png");

      // Trigger download
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = fileName || "SAAI-Generator-image.png";
      link.click();
    };
  };

  return (
    <>

      <motion.div style={{ textAlign: "center" }} className="flex md:my-[2%] justify-center items-center" >
        {/* {console.log(imageUrl)} */}

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          viewport={{ once: true }} // Ensures animation runs only once
          transition={{ type: "spring", bounce: 0.1, visualDuration: 0, duration: 0.1 }}
          className={`m-2 rounded-[2.5em] flex overflow-visible z-1 shadow-2xl w-full duration-500 md:w-[95%] md:py-3 md:px-3 md:gap-3 py-2.5 px-2 bg-white border-red-500/85 /border md:rounded-[3em] `} >
          {/* <h2 className="flex justify-center mb-6 font-extrabold text-4xl
    ">AI Generated Image</h2> */}
          <div className="p-1 flex flex-1/2 max-h-full md:flex-row flex-col md:justify-start items-center md:items-start w-full gap-4" style={{ border: "none" }} >
            <PromptBox
              Prompt={Prompt}
              setPrompt={setPrompt}
              Image_Type={Image_Type}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              resizedUrl={resizedUrl}
              setResizedUrl={setResizedUrl}
              loading={loading}
              setLoading={setLoading}
              setSubmit={setSubmit}
              submit={submit}
              button={button}
              setButton={setButton}
              error={error}
              setError={setError}
              imageResolution={imageResolution}
              setImageResolution={setImageResolution}
              isTab={isTab}
              isTab2={isTab2}
              isTab3={isTab3}
              isTab4={isTab4}
              isMobile={isMobile}
              fileName={fileName}
              setFilename={setFilename}
            />


            {console.log(imageUrl)}
            <div style={{ border: "none" }} className={`overflow-y-visible md:w-[70vw] w-full h-full  grow outline-none `}>
              {button ?
                error ?
                  <ul className=" md:w-[40vw] w-[94vw]  h-[345px] animate-none text-sm whitespace-normal  wrap-break-word md:h-full  p-6  md:rounded-4xl bg-linear-to-r  from-red-400/35 to-yellow-200/65 text-wrap overflow-x-scroll rounded-[3em]">

                    {/*<span className="text-lg font-bold opacity-35 text-red-500 ">{error ? (typeof error === 'object' ? error.error.message ? error.error.message : JSON.stringify(error) ||error.error : error) : ""}</span> JSON.stringify(error) */}
                    <pre className="block whitespace-pre-line text-start h-full">
                      <div className="text-[14px] font-light text-black/44 h-full ">
                        {/* {error.error !== undefined ? JSON.stringify(JSON.parse(error.error.split('400 ')[1]), null, .5) */}

                        {error.Status === 402 &&
                          <div className="bg-white relative opacity-65 w-full rounded-3xl  p-5 h-full ">
                            <div className="w-full flex justify-center  items-center flex-col relative ">  <img src={animatedLogo} className="w-50 h-50" />
                              <p className="text-red-600 text-2xl absolute bottom-0 font-extrabold ">Error</p>
                            </div>

                            <p className="w-full mt-2 px-2 py-1 md:text-[1.2vw] text-sm flex "><p className="text-yellow-500">Code</p><p className="pl-8 pr-2.5 font-extrabold text-yellow-500">:</p><p> {error.Code}</p></p>
                            <span className="w-full py-1 md:text-[1.2vw] text-sm flex "><p className="text-yellow-500">Message</p><p className="pl-3 pr-3 font-extrabold text-yellow-500">:</p><p> {error.Message}</p></span>
                            <span className="w-full py-1 md:text-[1.2vw] text-sm flex "><p className="text-yellow-500">Message</p><p className="pl-3 pr-3 font-extrabold text-yellow-500">:</p><p> {error.Message}</p></span>

                            {/* <div onClick={handleDownload} className="absolute bottom-0 right-0 md:m-5 m-2 z-300 bg-red-600 shadow-sm shadow-black/22  cursor-pointer hover:bg-red-800 rounded-full p-3 duration-500 " >
                          <FaDownload className="w-5 h-8.5 mx-1.5 text-white" /> </div> */}
                          </div>
                        }
                      </div>
                    </pre>
                  </ul>

                  :

                  <div className="w-full h-full relative">
                    {loading && <><div className="flex justify-center items-center md:h-full md:w-[40vw] w-[94vw] h-[345px] md:rounded-4xl bg-linear-to-r from-red-400/35 to-yellow-200/65 animate-pulse rounded-3xl "> <img src={ImageLoading} className=" h-[255px] w-[235px] rounded-4xl " /></div>
                    </>} {/*<span style={{ border: "none" }} className=" absolute z-1 top-1/2 left-[45%] border-0 bg-gray-400">Loading ... </span>*/}

                    {!loading &&
                      <>
                        <img className="  z-1  md:h-full md:w-[40vw] w-[94vw] h-[345px] border-none rounded-[2em] md:rounded-4xl decoration-0 outline-1 outline-amber-50 "
                          src={imageUrl}
                          // key={imageUrl}
                          alt=""
                          style={{ border: "none" }}


                        />

                        <div onClick={handleDownload} className="absolute bottom-0 right-0 md:m-5 m-2 z-300 bg-red-600 shadow-sm shadow-black/22  hover:bg-red-800 rounded-full p-3 duration-500 cursor-pointer " >
                          <FaDownload className="w-5 h-8.5 mx-1.5 text-white" /> </div>
                      </>
                    }


                  </div>
                :
                <motion.div
                  initial={{ opacity: 0, scale: 0.855, x: -3 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0 }}
                  viewport={{ once: true }} // Ensures animation runs only once
                  transition={{ type: "spring", bounce: 0.1, visualDuration: 0.3, duration: 0.3 }}
                  className="md:h-full  md:w-[40vw] w-[94vw]  h-[345px] flex-col flex justify-center rounded-4xl items-center bg-linear-to-r from-red-500/23 to-yellow-400/25  ">
                  <img src={logo} className="  md:w-88 md:h-80 my-[2%] w-80 h-65" />
                  <span className="md:text-xl text-lg font-bold opacity-35 text-red-500 mb-10">Bring your thoughts into Reality</span>
                </motion.div>}
            </div>

          </div>
        </motion.div>
      </motion.div>
    </>
  );

}
