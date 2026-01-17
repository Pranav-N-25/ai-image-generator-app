import React from "react";
// import { usePollinationsImage } from "@pollinations/react";
import PromptBox from "../components/PromptBox";
import LoadingFrame from "../assets/LoadingFrame.gif";
import ImageLoading from "../assets/Image-loading.gif";
import { FaDownload } from "react-icons/fa";
import logo from '../assets/logo-ai.png';
import { motion, AnimatePresence } from "framer-motion";
import { imageFileResizer } from "react-image-file-resizer";
import { useMediaQuery } from "react-responsive";


export const ImageGen = () => {
  // Pass your prompt to the hook
  const [Prompt, setPrompt] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [resizedUrl, setResizedUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [submit, setSubmit] = React.useState(false);
  const [button, setButton] = React.useState(false);
  const [error, setError] = React.useState();
  const [imageResolution, setImageResolution] = React.useState({ label: "default" });
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
      canvas.width = imageResolution.w ? imageResolution.w : 1024;
      canvas.height = imageResolution.h ? imageResolution.h : 1024;
      const ctx = canvas.getContext("2d");

      // Draw resized image
      ctx.drawImage(img, 0, 0, imageResolution.w ? imageResolution.w : 1024, imageResolution.h ? imageResolution.h : 1024);

      // Convert to data URL
      const dataUrl = canvas.toDataURL("image/png");

      // Trigger download
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "resized-image.png";
      link.click();
    };
  };

  return (
    <>

      <motion.div style={{ textAlign: "center" }} className="flex md:my-[2%] min-h-fit justify-center items-center" >
        {/* {console.log(imageUrl)} */}

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          viewport={{ once: true }} // Ensures animation runs only once
          transition={{ type: "spring", bounce: 0.1, visualDuration: 0, duration: 0.1 }}
          className={`z-1 shadow-2xl w-full duration-500 md:w-[95%] md:py-3 md:px-3 md:gap-3 py-2.5 pb-19 px-1 bg-white border-black/15 md:rounded-[3em] `} >
          {/* <h2 className="flex justify-center mb-6 font-extrabold text-4xl
    ">AI Generated Image</h2> */}
          <div className="p-1 flex h-full md:flex-row flex-col md:justify-center items-center md:items-start w-full gap-5 " style={{ border: "none" }} >
            <PromptBox Prompt={Prompt}
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
            />


            {console.log(imageUrl)}
            <div style={{ border: "none" }} className={`relative md:w-[1053px] mt-2  md:h-[70vh] w-full h-[275px] grow outline-none ${useMediaQuery({ maxWidth: 1116 }) ? "md:h-[80vh]" : ""} `}>
              {button ?
                error ?
                  <div className="absolute justify-center  md:flex items-center p-6 w-full h-[345px] md:h-full md:w-full md:rounded-4xl bg-linear-to-r  from-red-400/35 to-yellow-200/65 animate-pulse text-wrap overflow-x-auto rounded-3xl">
                    {/*<span className="text-lg font-bold opacity-35 text-red-500 ">{error ? (typeof error === 'object' ? error.error.message ? error.error.message : JSON.stringify(error) ||error.error : error) : ""}</span> */}{JSON.stringify(error)}
                  </div>
                  :
                  <>
                    {loading && <><div className="absolute w-full h-[345px] md:h-full md:w-full md:rounded-4xl bg-linear-to-r  from-red-400/35 to-yellow-200/65 animate-pulse rounded-3xl"></div>
                      <img src={ImageLoading} className="absolute h-[255px] w-[235px] rounded-4xl top-10 left-[17%] md:top-[20%] md:left-[33%]" /></>} {/*<span style={{ border: "none" }} className=" absolute z-1 top-1/2 left-[45%] border-0 bg-gray-400">Loading ... </span>*/}

                    {!loading &&
                      <>
                        <img className=" absolute z-1 w-full h-[345px] border-none rounded-3xl md:rounded-4xl decoration-0 outline-1 outline-amber-50 "
                          src={imageUrl}
                          // key={imageUrl}
                          alt=""
                          style={{ border: "none" }}


                        />

                        <div onClick={handleDownload} className="absolute bottom-0 right-0 md:m-5 m-2 z-300 bg-red-700 shadow-sm shadow-black/22  hover:bg-red-800 rounded-full p-3 duration-500 " >
                          <FaDownload className="w-5 h-8.5 mx-1.5 text-white" /> </div>
                      </>
                    }


                  </>
                :
                <motion.div
                  initial={{ opacity: 0, scale: 0.855, x: -3 }}
                  animate={{ opacity: 1, scale: 1, x: -1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  viewport={{ once: true }} // Ensures animation runs only once
                  transition={{ type: "spring", bounce: 0.1, visualDuration: 0.3, duration: 0.3 }}
                  className="md:h-full -mt-1 h-[345px] md:w-full flex-col flex justify-center rounded-4xl items-center bg-linear-to-r from-red-500/23 to-yellow-400/25  ">
                  <img src={logo} className="  md:w-100 md:h-80 w-80 h-65" />
                  <span className="text-xl font-bold opacity-35 text-red-500">Bring your thoughts into Reality</span>
                </motion.div>}
            </div>

          </div>
        </motion.div>
      </motion.div>
    </>
  );

}
