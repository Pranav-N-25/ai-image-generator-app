import React from "react";
import { useMediaQuery } from "react-responsive";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { SignInButton } from "@clerk/clerk-react";

import logo from '../assets/logo-ai.webp';
import LoadingFrame from "../assets/LoadingFrame.gif";
import ImageLoading from "../assets/Image-loading.webp";
import animatedLogo from "../assets/animation-lottie.gif";
import { Images2 } from "../assets/index2.jsx";

import { FaDownload, FaArrowRight } from "react-icons/fa";
import { PiUserCirclePlusFill } from "react-icons/pi";
import { PiUserCircleGearFill } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";

import PromptBox from "../components/PromptBox";

export const ImageGen = () => {
  // Pass your prompt to the hook
  const [Prompt, setPrompt] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [tiggedSignInButton, setTriggedSignInButton] = React.useState(false);
  const [tiggedPuterSignInButton, setTriggedPuterSignInButton] = React.useState(false);
  const PuterLoginStatus = puter.auth.isSignedIn();
  const [resizedUrl, setResizedUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [submit, setSubmit] = React.useState(false);
  const [button, setButton] = React.useState(false);
  const [error, setError] = React.useState();
  const [fileName, setFilename] = React.useState(null);
  const signInButtonRef = React.useRef();
  const [imageResolution, setImageResolution] = React.useState({ label: "default", w: "auto", h: "auto" });
  const isTab = useMediaQuery({ maxWidth: 1111 });
  const isTab2 = useMediaQuery({ maxWidth: 1332 });
  const isTab3 = useMediaQuery({ maxWidth: 1173 });
  const isTab4 = useMediaQuery({ maxWidth: 501 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const Image_Type = ['Anime', 'Realistic', 'Cinematic', '3D', 'Painting', 'Ghibli'];

  const ImageDemonstration = [
    {
      ImageType: "3D",
      Image: Images2._3D,
      Description: "A high-fidelity, three-dimensional masterpiece featuring a mechanical butterfly with iridescent, translucent wings made of layered polymer glass. The creature is perched atop a glowing, levitating core of liquid chrome that ripples with realistic fluid physics and high-gloss reflections. Every gear and micro-joint of the butterfly is rendered with intricate mechanical detail. The lighting setup uses multiple soft-box sources to create a sophisticated \"rim light\" effect, while deep ambient occlusion shadows define the tight spaces between the moving parts. The entire scene is set against a dark, minimalist studio background, ray-traced refractions, and a professional."
    },
    {
      ImageType: "Ghibli",
      Image: Images2.Gihbli,
      Description: "A breathtakingly lush valley viewed from a grassy hilltop, where a fleet of small, propeller-driven wooden airships floats lazily toward a distant, cloud-wrapped castle. The grass is a vibrant, hand-painted emerald green, swaying in a gentle breeze that carries scattered pink flower petals across the frame. Towering \"cumulus\" clouds with soft, rounded edges dominate a brilliant sapphire sky, while the sun casts a warm, golden-hour glow that softens the entire landscape. The aesthetic is purely nostalgic, defined by whimsical character and the unmistakable peace of a rural, magical world."
    },
    {
      ImageType: "Anime",
      Image: Images2.Anime,
      Description: "A high-octane action sequence frozen in time, featuring a protagonist mid-dash through a rain-slicked Neo-Tokyo street. Their eyes are wide and glowing with blue spiritual energy, while jagged bolts of electricity arc from their hands, illuminating the dark, cel-shaded environment. Bold, thick ink outlines define the character's silhouette against a background of blurred neon signs and exploding debris. The color palette is hyper-saturated with magentas and electric cyans, using dramatic speed lines and particle effects to convey a sense of explosive movement and supernatural power."
    },
    {
      ImageType: "Painting",
      Image: Images2.Painting,
      Description: "A heavy-textured oil painting of an ancient, gnarled oak tree standing alone in a misty autumn field at twilight. The canvas is thick with visible \"impasto\" brushwork, where the paint has been layered with a palette knife to create physical ridges on the bark and golden leaves. Rich, earthy tones of burnt sienna and deep umber bleed into a soft, foggy background rendered in delicate, hazy watercolor washes. This piece emphasizes the tactile, handmade nature of art, where every stroke is an intentional expression of mood, light, and timeless classical technique."
    },
    {
      ImageType: "Cinematic",
      Image: Images2.Cinematic,
      Description: "A wide 2.39:1 anamorphic shot of a lone astronaut standing on the edge of a colossal, crystalline crater on a dark moon. The only light source is the harsh, reflected glow of a nearby ringed planet, creating a dramatic \"rim light\" effect that outlines the astronaut’s silhouette against the pitch-black sky. Subtle lens flares, a slight film-grain texture, and a moody teal-and-charcoal color grade give the scene a high-budget sci-fi aesthetic. The composition uses a deep depth of field to emphasize the terrifyingly vast scale of the alien landscape and the isolation of the journey."
    },
    {
      ImageType: "Realistic",
      Image: Images2.Realistic,
      Description: " An ultra-macro photograph of a ruby-throated hummingbird frozen in mid-air with staggering, high-fidelity detail. Every microscopic barbule of its feathers, the moisture on its beak, and the individual pollen grains on the flower are visible with pin-sharp clarity. Natural, diffused sunlight creates realistic \"catchlights\" in its tiny black eye, while a creamy \"bokeh\" background separates the lifelike subject from the lush, green garden."
    }
  ]

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


  const useClickOutside = (ref, callback) => {
    React.useEffect(() => {
      const handleClick = (event) => {
        // Check if the click target is NOT inside the element (ref.current)
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      // Add listener to the entire document
      document.addEventListener("mousedown", handleClick);

      // Cleanup: Remove listener when component unmounts
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, [ref, callback]);
  };

  useClickOutside(signInButtonRef, () => setTriggedSignInButton(false));


  return (
    <div className="pt-4 pb-30 mt-20 ">

      <motion.div style={{ textAlign: "center" }} className=" flex md:my-[2%] md:px-2 px-1 justify-center items-center" >
        {/* {console.log(imageUrl)} */}


        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          viewport={{ once: true }} // Ensures animation runs only once
          transition={{ type: "spring", bounce: 0.1, visualDuration: 0, duration: 0.1 }}
          className={` m-2 rounded-[2.5em] md:rounded-[3em] flex overflow-x z-1 shadow-2xl w-full duration-500 md:p-3 p-1.5 bg-white border-red-500/85 /border relative `} >
          {/* <h2 className="flex justify-center mb-6 font-extrabold text-4xl
         ">AI Generated Image</h2> */}
          <div className={`p-1 flex flex-1/2 max-h-full flex-col md:flex-row md:justify-start items-center md:items-start w-full gap-4`} style={{ border: "none" }} >
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
              tiggedSignInButton={tiggedSignInButton}
              setTriggedSignInButton={setTriggedSignInButton}
              setTriggedPuterSignInButton={setTriggedPuterSignInButton}
              PuterLoginStatus={PuterLoginStatus}
            />


            {/* {console.log(imageUrl)} */}
            <div style={{ border: "none" }} className={`overflow-y-visible md:w-[70vw] w-full h-full  grow outline-none `}>
              {button ?
                error ?
                  <ul className=" md:w-[40vw] w-[94vw]  animate-none text-sm whitespace-normal  wrap-break-word md:h-full p-6 md:rounded-4xl bg-linear-to-r  from-red-400/35 to-yellow-200/65 text-wrap overflow-x-scroll rounded-[3em]">

                    {/*<span className="text-lg font-bold opacity-35 text-red-500 ">{error ? (typeof error === 'object' ? error.error.message ? error.error.message : JSON.stringify(error) ||error.error : error) : ""}</span> JSON.stringify(error) */}
                    <pre className="block whitespace-pre-line text-start h-full">
                      <div className="text-[14px] font-light text-black/44 h-full ">
                        {/* {error.error !== undefined ? JSON.stringify(JSON.parse(error.error.split('400 ')[1]), null, .5) */}


                        <div className="bg-white overflow-auto relative opacity-65 w-full rounded-3xl  p-5 h-full ">
                          <div className="w-full flex justify-center  items-center flex-col relative ">  <img src={animatedLogo} className="w-50 h-50" />
                            <p className="text-red-600 text-2xl absolute bottom-0 font-extrabold ">Error</p>
                          </div>
                          {

                            error.error?.error?.status ?

                              <>
                                <p className="w-full mt-2 px-2 py-1 md:text-[1.2vw] text-sm flex "><p className="text-yellow-500">Code</p><p className="pl-8 pr-2.5 font-extrabold text-yellow-500">:</p><p> 402 - {error.Code} {`(Credits)`}</p></p>
                                <span className="w-full py-1 md:text-[1.2vw] text-sm flex "><p className="text-yellow-500">Message</p><p className="pl-3 pr-3 font-extrabold text-yellow-500">:</p><p> {error.Message}</p></span>
                                <span className="w-full py-1 md:text-[1.2vw] text-sm flex "><p className="text-yellow-500">Note</p><p className="pl-10 pr-3 font-extrabold text-yellow-500">:</p><p> Fund will be reallocated after 24 Hours and the allocation fund is managed and allocated by puter.js </p></span>
                              </>
                              :
                              <pre className="text-wrap mt-10">{JSON.stringify(error.error)}</pre>

                          }
                          {/* <div onClick={handleDownload} className="absolute bottom-0 right-0 md:m-5 m-2 z-300 bg-red-600 shadow-sm shadow-black/22  cursor-pointer hover:bg-red-800 rounded-full p-3 duration-500 " >
                          <FaDownload className="w-5 h-8.5 mx-1.5 text-white" /> </div> */}
                        </div>

                      </div>
                    </pre>
                  </ul>

                  :

                  <div className="w-full h-full relative">
                    {loading && <><div className="flex justify-center items-center md:h-full md:w-full h-[345px] md:rounded-4xl bg-linear-to-r from-red-400/35 to-yellow-200/65 animate-pulse rounded-3xl "> <img src={ImageLoading} className=" h-[255px] w-[235px] rounded-4xl " /></div>
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
                  className="md:h-full w-full aspect-square/ h-[345px] flex-col flex justify-center rounded-4xl items-center bg-linear-to-r from-red-500/23 to-yellow-400/25  ">
                  <img src={logo} className="  md:w-88 md:h-80 my-[2%] w-80 h-65" />
                  <span className="md:text-xl text-lg font-bold opacity-35 text-red-500 mb-10 px-4">Bring your thoughts into Reality</span>
                </motion.div>}
            </div>

          </div>


          <AnimatePresence>
            {tiggedSignInButton &&
              <div

                className=" absolute rounded-[2.5em] md:rounded-[3em] shadow-2xl duration-500  w-full z-5 inset-0 h-full flex justify-center items-center ">

                <div
                  className=" backdrop-blur-sm bg-black/2 w-full h-full flex justify-center items-center rounded-[2.5em] md:rounded-[3em] px-3 ">

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, visualDuration: 0.4, ease: "easeInOut" }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    ref={signInButtonRef}
                    key="signup"
                    className="relative bg-white flex-col flex justify-center items-center rounded-[2.5em] py-2 px-5 shadow-2xl pt-15">
                    <IoIosClose onClick={() => setTriggedSignInButton(false)} className="absolute w-10 h-10 right-4 top-4 text-red-600 hover:text-white cursor-pointer p-1 rounded-full bg-red-300/45 hover:bg-red-500/88 duration-300" />
                    <PiUserCirclePlusFill style={{ fill: "url(#yellow-red-gradient)" }}
                      className={`w-38 h-35 /text-yellow-300`} />
                    <div className="px-5 text-lg my-3 mb-4 text-center"> <b className="text-red-400">SignUp / SignIn</b> to Access & Generate Images </div>
                    <SignInButton
                      className={` group hover:duration-830 transition pr-8 mx-1.5 my-3.5 p-3 text-white text-md cursor-pointer font-bold hover:bg-linear-to-r  hover:from-red-500 hover:to-yellow-500 hover:text-white px-6 py-3 rounded-4xl flex justify-center items-center pl-8 mr-2 bg-red-500  `}>
                      <span>
                        Get Start
                        <FaArrowRight className='inline-block ml-3 transition-all -tanslate-x-3 group-hover:translate-x-1.5 group-hover:scale-105 ' />
                      </span>
                    </SignInButton>
                  </motion.div>
                </div>
              </div>

            }
            {tiggedPuterSignInButton &&
              <div

                className=" absolute rounded-[2.5em] md:rounded-[3em] shadow-2xl duration-500  w-full z-5 inset-0 h-full flex justify-center items-center ">

                <div
                  className=" backdrop-blur-sm bg-black/2 w-full h-full flex justify-center items-center rounded-[2.5em] md:rounded-[3em] px-3 ">

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, visualDuration: 0.4, ease: "easeInOut" }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    ref={signInButtonRef}
                    key="signup"
                    className="relative bg-white flex-col flex justify-center items-center rounded-[2.5em] py-2 px-5 shadow-2xl md:pt-15 pt-12">
                    <IoIosClose onClick={() => setTriggedPuterSignInButton(false)} className="absolute w-10 h-10 right-4 top-4 text-violet-600 hover:text-white cursor-pointer p-1 rounded-full bg-violet-300/45 hover:bg-violet-500/88 duration-300" />
                    <PiUserCircleGearFill style={{ fill: "url(#violet-pink-gradient)" }}
                      className={`w-38 h-35 /text-yellow-300`} />
                    <p></p>
                    <div className="px-5 md:text-base text-sm md:my-3 my-2 pb-3 md:pb-0 md:mb-4 mb-0 text-center"> <b className="text-violet-400">SignUp / SignIn</b> to Puter.js Account for accessing {!isMobile && <br />} Image Generator Models and for allocating user allowance by puter.js . </div>
                    <button onClick={() => { puter.auth.signIn(); setTriggedPuterSignInButton(false); } }
                      className={` group hover:duration-830 transition pr-8 mx-1.5 md:my-3.5 my-1 md:mb-5 mb-3 p-3 text-white text-md cursor-pointer font-bold hover:bg-linear-to-r  hover:from-violet-500 hover:to-pink-500 hover:text-white px-6 py-3 rounded-4xl flex justify-center items-center pl-8 mr-2 bg-violet-500  `}>
                      <span>
                        Puter Account
                        <FaArrowRight className='inline-block ml-3 transition-all -tanslate-x-3 group-hover:translate-x-1.5 group-hover:scale-105 ' />
                      </span>
                    </button>
                  </motion.div>
                </div>
              </div>

            }
          </AnimatePresence >

        </motion.div>

      </motion.div>

      <div className="px-5 w-full md:pt-30 pt-20">

        <motion.div initial={{ opacity: 0, y: 250 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.1, visualDuration: 0.6, duration: 0.6 }} className=" bg-white mt-10 mb-8 w-full flex justify-center py-4 text-red-500/88 rounded-full  items-center text-center md:text-[5vw] text-[8.5vw] font-extrabold ">
          Pick Your Vision
        </motion.div>
      </div>
      <div className="px-5 w-full flex flex-col gap-15 md:pt-20 pt-5 ">
        {ImageDemonstration.map((key, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -250 }}
              viewport={{ once: true }} // Ensures animation runs only once
              transition={{ type: "spring", bounce: 0.1, visualDuration: 0.6, duration: 0.6 }}
              key={index}
              className="w-full grid md:grid-cols-2 grid-cols-1 md:rounded-[4em] rounded-[3em] bg-white md:p-5 p-2 ">

              {!isMobile
                ?
                index === 0 ?
                  <>
                    <div className="w-full flex justify-center items-center aspect-[1/0.8] h-full shrink-0 ">
                      <img src={key.Image} className="w-full h-full rounded-[2.5em] md:rounded-[3.5em] " alt={key.ImageType} />
                    </div>
                    <div className="flex-1/2 w-full md:px-8 px-4 md:py-6 py-0 ">
                      <div className="w-full md:text-[4vw] text-[6vw] md:py-[1vw] pt-3.5 pb-2 text-center text-black/66 ">{key.ImageType}</div>
                      <div className="w-full md:text-[1.3vw] text-[3vw] text-black/55 ">{key.Description}</div>
                    </div>
                  </>
                  :
                  index % 2 == 0 ?
                    <>
                      <div className="w-full flex justify-center items-center aspect-[1/0.8] h-full shrink-0 ">
                        <img src={key.Image} className="w-full h-full rounded-[2.5em] md:rounded-[3.5em] " alt={key.ImageType} />
                      </div>
                      <div className="flex-1/2 w-full md:px-8 px-4 md:py-6 py-0 ">
                        <div className="w-full md:text-[4vw] text-[6vw] md:py-[1vw] pt-3.5 pb-2 text-center text-black/66 ">{key.ImageType}</div>
                        <div className="w-full md:text-[1.3vw] text-[3vw] text-black/55 ">{key.Description}</div>
                      </div>
                    </>
                    :
                    <>

                      <div className="flex-1/2 w-full md:px-8 px-4 md:py-6 py-0 ">
                        <div className="w-full md:text-[4vw] text-[6vw] md:py-[1vw] pt-3.5 pb-2 text-center text-black/66 ">{key.ImageType}</div>
                        <div className="w-full md:text-[1.3vw] text-[3vw] text-black/55 ">{key.Description}</div>
                      </div>
                      <div className="w-full flex justify-center items-center aspect-[1/0.8] h-full shrink-0 ">
                        <img src={key.Image} className="w-full h-full rounded-[2.5em] md:rounded-[3.5em] " alt={key.ImageType} />
                      </div>
                    </>
                :
                <>
                  <div className="w-full flex justify-center items-center h-full aspect-square shrink-0 ">
                    <img src={key.Image} className="w-full h-full  /shrink-0 rounded-[2.5em] md:rounded-[3.5em] " alt={key.ImageType} />
                  </div>
                  <div className="flex-1/2 w-full md:px-8 px-6 md:py-6 pb-8 ">
                    <div className="w-full md:text-[4vw] text-[6vw] md:py-[1vw] pt-3.5 pb-2 text-center text-black/66 ">{key.ImageType}</div>
                    <div className="w-full md:text-[1.3vw] text-[3vw] text-black/55 ">{key.Description}</div>
                  </div>
                </>
              }
            </motion.div>
          )
        })}
      </div>
    </div >
  );

}
