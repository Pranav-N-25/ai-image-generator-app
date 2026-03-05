import { useState, useRef, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { TbRectangleFilled } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import MediaQuery from "react-responsive";
import OpenRouter from "../config/OpenRouter.jsx";
import GA from '../assets/logo-ai.webp'
import GA_prompt from '../assets/logo-ai.webp'
import { motion, AnimatePresence } from "framer-motion";
import { Sketch, Wheel } from '@uiw/react-color';
import { RiColorFilterAiLine } from "react-icons/ri";
import Resizer from "react-image-file-resizer";
import puter from "@heyputer/puter.js";
import { useAppContext } from "../context/AppContext.jsx";
import axios from "axios";
import credit from "../assets/creditPoint.webp";
import creditLock from "../assets/coinIcon.png";
// import { usePollinationsImage } from "@pollinations/react";
// const modelList = [
//   { label: "Gemma 3B", value: "google/gemma-3-27b-it:free" },
//   { label: "Mistral 7B", value: "mistralai/mistral-7b-instruct" },
//   { label: "Microsoft MAI", value: "microsoft/mai-ds-r1:free" },
//   { label: "Deepseek R1", value: "deepseek/deepseek-r1-0528:free" },
//   { label: "Deepcoder 14B", value: "agentica-org/deepcoder-14b-preview:free" },
// ];



const PromptBox = ({
  button,
  setButton,
  Prompt,
  setPrompt,
  setSubmit,
  setLoading,
  submit,
  loading,
  imageUrl, setImageUrl,
  Image_Type,
  error,
  setError,
  resizedUrl,
  setResizedUrl,
  imageResolution,
  setImageResolution,
  isTab,
  isTab2,
  isTab3,
  isTab4,
  isMobile,
  fileName,
  setFilename,
  tiggedSignInButton,
  setTriggedSignInButton
}) => {

  const [userCredits, setUserCredits] = useState(null);

  const PuterLoginStatus = puter.auth.isSignedIn();

  const userDetails = async () => {
    const response = await puter.auth.getMonthlyUsage();
    setUserCredits(response.allowanceInfo);
  }

  useEffect(() => { if (PuterLoginStatus) { userDetails(); } }, [imageUrl]);

  const icons = {
    "google":
      <svg
        fill="currentColor"
        fillRule="evenodd"
        width={25}
        style={{
          flex: "none",
          lineHeight: 1,
        }}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{"Gemini"}</title>
        <path fill="#f56565"
          d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" />
      </svg>,
    "grok":
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 512 492"
        width={25}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M197.76 315.52l170.197-125.803c8.342-6.186 20.267-3.776 24.256 5.803 20.907 50.539 11.563 111.253-30.08 152.939-41.621 41.685-99.562 50.816-152.512 29.994l-57.834 26.816c82.965 56.768 183.701 42.731 246.656-20.33 49.941-50.006 65.408-118.166 50.944-179.627l.128.149c-20.971-90.282 5.162-126.378 58.666-200.17 1.28-1.75 2.56-3.499 3.819-5.291l-70.421 70.507v-.214l-243.883 245.27m-35.072 30.528c-59.563-56.96-49.28-145.088 1.515-195.926 37.568-37.61 99.136-52.97 152.874-30.4l57.707-26.666a166.554 166.554 0 00-39.019-21.334 191.467 191.467 0 00-208.042 41.942c-54.038 54.101-71.04 137.301-41.856 208.298 21.802 53.056-13.931 90.582-49.92 128.47C23.104 463.915 10.304 477.333 0 491.541l162.56-145.386"
          fill="#f56565" />
      </svg>
    ,
    "stable":
      <svg
        className="niftybutton-stable-diffusion"
        width={25}
        style={{
          display: "block",
          fill: "currentColor",
        }}
        data-donate="true"
        data-tag="stable-diffusion"
        data-name="Stable Diffusion"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 300 299.999988"  >
        <path
          fill="#f56565"
          d="M 131.824219 23.335938 C 115.492188 25.414062 97.269531 29.941406 83.515625 35.332031 C 44.207031 50.75 15.570312 83.476562 7.726562 121.949219 C 4.550781 137.527344 5.339844 158.195312 9.460938 167.378906 C 13.328125 175.996094 21.691406 181.773438 33.132812 183.742188 C 39.894531 184.90625 62.410156 184.390625 74.199219 182.800781 C 81.308594 181.839844 82.714844 181.878906 87.234375 183.132812 C 93.46875 184.867188 97.367188 187.273438 101.871094 192.167969 C 107.984375 198.808594 111.78125 207.765625 118.21875 230.714844 C 122.757812 246.886719 125.628906 253.265625 130.617188 258.253906 C 137.890625 265.527344 147.027344 268.238281 164 268.160156 C 177.558594 268.09375 187.058594 266.492188 200.496094 262 C 229.464844 252.316406 253.316406 235.507812 270.425781 212.722656 C 285.628906 192.46875 292.699219 171.136719 292.699219 145.496094 C 292.699219 127.074219 289.476562 112.546875 281.824219 96.433594 C 270.675781 72.972656 247.730469 50.789062 222.332031 38.917969 C 198.628906 27.84375 180.28125 23.734375 152.449219 23.265625 C 142.691406 23.101562 133.410156 23.132812 131.824219 23.335938 M 140.25 44.476562 C 136.339844 45.730469 130.648438 51.0625 128.621094 55.375 C 122.15625 69.128906 133.539062 85.808594 148.464844 84.457031 C 156.734375 83.707031 163.097656 78.523438 166.105469 70.089844 C 167.574219 65.980469 167.566406 62.789062 166.085938 57.820312 C 162.859375 47.011719 151.171875 40.976562 140.25 44.476562 M 84.792969 65.660156 C 75.320312 68.542969 69.210938 77.320312 70.175781 86.667969 C 71.304688 97.597656 79.746094 105.59375 90.160156 105.59375 C 104.863281 105.59375 114.539062 89.570312 107.832031 76.332031 C 103.679688 68.132812 92.96875 63.171875 84.792969 65.660156 M 198.171875 66.058594 C 188.066406 70.460938 183.289062 83.3125 188.023438 93.378906 C 190.226562 98.070312 196.207031 103.386719 200.613281 104.574219 C 215.058594 108.464844 228.808594 95.65625 225.738281 81.167969 C 223.695312 71.523438 215.503906 64.859375 205.773438 64.921875 C 202.988281 64.941406 199.566406 65.453125 198.171875 66.058594 M 228.039062 123.027344 C 216.507812 127.136719 211.394531 140.683594 217.292969 151.519531 C 225.957031 167.4375 248.507812 164.984375 253.605469 147.566406 C 258.023438 132.472656 242.726562 117.789062 228.039062 123.027344 M 48.601562 126.800781 C 36.625 129.484375 34.503906 146.058594 45.425781 151.628906 C 53.785156 155.894531 63.734375 150.613281 64.777344 141.351562 C 65.816406 132.117188 57.648438 124.769531 48.601562 126.800781 M 200.976562 182.347656 C 191.460938 184.953125 184.335938 195.378906 185.804688 204.554688 C 186.445312 208.570312 189.632812 214.902344 192.171875 217.214844 C 198.175781 222.679688 207.742188 224.199219 214.746094 220.808594 C 219.542969 218.488281 223.945312 213.28125 225.480469 208.121094 C 227.101562 202.65625 227.019531 200.28125 225.011719 194.921875 C 221.390625 185.242188 210.742188 179.671875 200.976562 182.347656 "
          fillOpacity={1}
          fillRule="evenodd"
        />
      </svg>
    ,
    "gpt": <svg
      width={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      className="h-6 w-6"
      viewBox="-0.17090198558635983 0.482230148717937 41.14235318283891 40.0339509076386">
      <text x="-9999" y="-9999">ChatGPT</text>
      <path
        d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835A9.964 9.964 0 0 0 18.306.5a10.079 10.079 0 0 0-9.614 6.977 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 7.516 3.35 10.078 10.078 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.243-11.813zM22.498 37.886a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.496zM6.392 31.006a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744zM4.297 13.62A7.469 7.469 0 0 1 8.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.01L7.04 23.856a7.504 7.504 0 0 1-2.743-10.237zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .113-.01l8.052 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.65-1.132zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.5v5l-4.331 2.5-4.331-2.5V18z"
        fill="#f56565" />
    </svg>
    ,
    "flux": <svg
      fill="currentColor"
      fillRule="evenodd"
      height="1em"
      viewBox="0 0 24 24"
      width={25}
      className="h-6 w-6"

      xmlns="http://www.w3.org/2000/svg" >
      <title>Flux</title>
      <path d="M0 20.683L12.01 2.5 24 20.683h-2.233L12.009 5.878 3.471 18.806h12.122l1.239 1.877H0z" fill="#f56565">
      </path>
      <path d="M8.069 16.724l2.073-3.115 2.074 3.115H8.069zM18.24 20.683l-5.668-8.707h2.177l5.686 8.707h-2.196zM19.74 11.676l2.13-3.19 2.13 3.19h-4.26z">
      </path>
    </svg >
  }


  const modelList = [
    { label: "Google Nano Banana Pro", value: "google/imagen-4.0-ultra", icon: icons.google },
    { label: "Google Nano Banana Fast", value: "google/imagen-4.0-fast", icon: icons.google },
    { label: "DALL-E 3", value: "dall-e-3", icon: icons.gpt },
    { label: "GPT Image 1.5", value: "gpt-image-1.5", icon: icons.gpt },
    { label: "GPT Image 1 Mini", value: "gpt-image-1-mini", icon: icons.gpt },
    { label: "Stable Diffusion 3", value: "stability-ai/stable-diffusion-3", icon: icons.stable },
    { label: "Stable Diffusion XL (SDXL)", value: "stability-ai/stable-diffusion-xl", icon: icons.stable },
    { label: "Grok 2 Image", value: "grok-2-image", icon: icons.grok },
    { label: "Flux 1.1 Pro", value: "black-forest-labs/flux-1.1-pro", icon: icons.flux },
    { label: "Flux.1 Kontext", value: "black-forest-labs/flux-1-kontext", icon: icons.flux },
    { label: "Flux.1 Schnell", value: "black-forest-labs/flux-1-schnell", icon: icons.flux }
  ];

  const resolution = [
    { label: "1:1", w: 1080, h: 1080 },
    { label: "3:4", w: 1080, h: 1440 },
    { label: "4:3", w: 1024, h: 768 },
    { label: "9:16", w: 720, h: 1280 },
    { label: "16:9", w: 1280, h: 720 },
  ]

  const { id, email } = useAppContext();
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

  const uploadImage = async (file) => {
    setFilename(null);
    const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_NAME; // Your Cloudinary cloud name
    const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET;
    const FOLDER = "SAAI"; // The folder you want to use

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("folder", FOLDER); // Optional if set in preset

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData }
    );

    const data = await response.json();
    console.log(data);
    const img_upload_res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/image`, { imageName: `${data.display_name}.png`, userId: id, imageUrl: data.secure_url, cloudinary_image_public_id: data.public_id, emailId: email });
    setFilename(data.imageName);
    console.log(img_upload_res);
    return data.secure_url; // Retrieve the final URL
  };

  // const [Prompt,setPrompt]= useState("");
  // const [response, setResponse] = useState('');
  // const [loading, setLoading] = useState(false);

  // Model selection state
  const [selectedModel, setSelectedModel] = useState(modelList[0]);
  const [showMenu, setShowMenu] = useState(false);
  const [on, isOn] = useState(false);
  const textareaRef = useRef(null);
  const colorRef = useRef(null);
  const menuRef = useRef(null);
  const [selected, setSelected] = useState(null);
  // const [imageResolution, setImageResolution] = useState({ label: "default" });
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [colour, setColour] = useState("#ffff");
  // eslint-disable-next-line no-unused-vars

  // Check if the screen width is less than or equal to 768px
  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px"; // 200px max
  };



  const useClickOutside = (ref, callback) => {
    useEffect(() => {
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

  useClickOutside(colorRef, () => setOpenColorPicker(false));
  useClickOutside(menuRef, () => setShowMenu(false))




  const GenerateImage = async () => {

    if (id) {
      setButton(true);
      setLoading(true);
      setImageUrl(null);
      setError(null);
      setInput(null);
      setInput2(null);


      try {


        if (!window.puter) { console.log("Image is not Loaded ! "); }
        // console.log("prompt :" + Prompt);
        setInput((selected ? ", and style of the image is * " + selected : "") + (on ? " with Image Color Scheme " + colour : "") + (imageResolution.w === "auto" ? "" : ", and encode the aspect ratio of image with " + imageResolution.w + "x" + imageResolution.h + " for resizing the generated image"))


        // if (Prompt && selected) {
        //   if (imageResolution.h === "auto") { setInput(Prompt + ", and style of the image is *" + selected); }
        //   else { setInput(Prompt + ", and style of the image is *" + selected + ", and encode the aspect ratio of image with" + imageResolution.w + "x" + imageResolution.h + " for resizing the generated image"); }
        // }
        // else {
        //   if (imageResolution.h === "auto") { setInput(Prompt); }
        //   else { setInput(Prompt + ", and encode the aspect ratio of image with" + imageResolution.w + "x" + imageResolution.h + " for resizing the generated image"); }
        // }

        // setInput2(input + (on ? (" The Image Color style is " + colour) : ("")));

        // console.log("Input : " + input + "\n Colour Toggle : " + on + "\n Colour :" + colour);
        // console.log("Width : " + imageResolution.w + " Height : " + imageResolution.h, "Selected Model : " + selectedModel.value + "\n Input : " + (Prompt + input));

        // {!PuterLoginStatus && }

        const imageElement = await puter.ai.txt2img((Prompt + input), { model: selectedModel.value }); //puter.ai.txt2img("A peaceful mountain landscape at sunset", { model: "gemini-2.5-flash-image-preview" });
        setInput2((Prompt + input));
        if (id) {
          const CloudinaryImageUrl = await uploadImage(imageElement);
          // console.log(CloudinaryImageUrl ? "Upload Successfull : " + CloudinaryImageUrl : " Upload is not performed");

        }
        setImageUrl(imageElement);


        setSubmit(false);
        setLoading(false);
        // uploadImage(imageElement);
      }

      catch (error) {
        setLoading(false);
        setSubmit(false);
        setError(
          { "Status": error.error.status, "Code": error.error.code, "Message": error.error.message, });
        // console.log(error);
      }

    }

    else {
      setTriggedSignInButton(true);
    }
    // if (imageElement) { console.log(imageElement); setLoading(false) }

  }






  return (
    <div
      className={` ${isMobile ? "px-1 w-full " : 'w-full'}
    w-[98%]`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.855 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        viewport={{ once: true }} // Ensures animation runs only once
        transition={{ bounce: 0.25, visualDuration: 0.235, duration: 0.2 }}

      >
        <textarea
          ref={textareaRef}
          onInput={handleInput}
          style={{

            minHeight: "265px",
            maxHeight: "200px",
            overflowY: "auto",

          }}
          value={Prompt}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && Prompt.trim() !== "") {

              e.preventDefault(); // Prevent default Enter key behavior
              // setLoading(true);
              // setSubmit(true);
              setPrompt(e.target.value);
              GenerateImage();


            }
          }}
          className={`backdrop-blur-3xl md:w-full w-full rounded-4xl resize-none outline-0 p-6
          bg-black/8
          md:text-lg ${!Prompt && "text-black/44"
            }`}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          placeholder="Enter your Prompt"
        />






        <div className={` `}>
          <div className="flex flex-wrap justify-center items-center">
            {
              Image_Type.map((type, index) => {
                return (
                  <motion.div key={index} initial={{ opacity: 0, scale: 0, y: -30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }} // Ensures animation runs only once
                    exit={{ opacity: 0, scale: 0, y: -300 }}
                    transition={{ bounce: 0.25, visualDuration: 0.2, duration: 0.2 }}
                    onClick={() => { selected == Image_Type[index] ? setSelected(null) : setSelected(type) }}
                    className={` select-none my-2 m-2 h-fit border rounded-2xl px-3 border-gray-500/46 duration-300 text-gray-600/68 ${selected == type ? "border-red-500/66 text-red-600/88 bg-red-300/35" : ""} text-sm py-1 cursor-pointer`}>{type}</motion.div>
                )
              })
            }

            {
              PuterLoginStatus && userCredits && id &&
              <motion.div
                initial={{ opacity: 0, scale: 0, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }} // Ensures animation runs only once
                exit={{ opacity: 0, scale: 0 }}
                transition={{ bounce: 0.25, visualDuration: 0.2, duration: 0.2 }}
                className={`text-sm cursor-default font-bold hover:bg-linear-to-r py-2 px-3 rounded-4xl border m-2 ${(Math.round(userCredits.remaining) / 1000000) < 10 ? "bg-red-300/35 text-red-600/88 border-red-500/66" : "bg-green-300/35 text-green-600/88 border-green-500/66"} transition duration-300 `}>
                <span className="flex justify-center items-center w-full"> <img src={userCredits ? credit : creditLock} className="w-5 h-5 mr-2 inline-block" /> {userCredits ? `${Math.round(userCredits.remaining / 1000000)} / ${userCredits.monthUsageAllowance / 1000000}` : "Credits will be allocated after Initial Request from puter.js "}</span>
              </motion.div>
            }
          </div>




          <div className={`flex justify-center items-center w-full `}>
            <div className={` relative flex flex-wrap justify-center items-center `}>

              {
                resolution.map((size, index) => {
                  return (
                    <ul key={index} className=" inline-block ">
                      <motion.li
                        initial={{ opacity: 0, scale: 0, y: -30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }} // Ensures animation runs only once
                        exit={{ opacity: 0, scale: 0, y: -300 }}
                        transition={{ bounce: 0.25, visualDuration: 0.2, duration: 0.2 }}
                        key={index}
                        onClick={() => { imageResolution.label == size.label ? setImageResolution({ label: "default", w: "auto", h: "auto" }) : setImageResolution(size) }}
                        className={`my-3 mx-3 border-gray-500/46 duration-300 text-gray-600/68  ${imageResolution.label == size.label ? "border-yellow-500/66 text-yellow-600/88 bg-yellow-300/35" : ""} ${isMobile ? "px-[15.8px]" : "px-[35px]"}  select-none cursor-pointer text-sm py-1 md:py-1.5 m-1 md:w-10 flex justify-center items-center border rounded-xl `}>
                        {size.label}
                        {/* {console.log(imageResolution.label + "\n" + "Width : " + imageResolution.w + "Height : " + imageResolution.h, "Selected Model : " + selectedModel.value)} */}

                      </motion.li>
                    </ul>
                  )

                })
              }


              <motion.div
                ref={colorRef}
                initial={{ opacity: 0, scale: 0, y: -35, x: -5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }} // Ensures animation runs only once
                exit={{ opacity: 0, scale: 0, y: -300 }}
                transition={{ bounce: 0.25, visualDuration: 0.3, duration: 0.2 }}
                className={` ${isTab4 ? "flex ml-2" : ""} 
                 select-none ml-3 h-11 bg-linear-to-r from-red-500 via-yellow-300 to-blue-500  border-transparent p-[1px] rounded-full cursor-pointer
                 `}>
                <div
                  onClick={() => setOpenColorPicker(!openColorPicker)}
                  className={`duration-600   rounded-full ${openColorPicker ? "backdrop-blur-lg bg-yellow-400/15" : "bg-white"}`}>
                  <span
                    className={`duration-300 flex md:w-35 justify-center items-center border p-2 px-8 rounded-full  font-extrabold
                      ${openColorPicker ? "text-white border-transparent" : "bg-linear-to-r from-red-500 via-yellow-300 to-blue-800 bg-clip-text text-transparent"}
                     ${isTab4 ? "w-25 px-0 p-2.5 py-2.5 " : ""}
                     `}>
                    <RiColorFilterAiLine className={`w-5 h-5 ${!openColorPicker ? "text-red-500" : "text-white"} duration-300 font-extrabold md:mr-2`} />
                    {isTab4 ? null : "Color"}
                  </span>
                </div>
                <AnimatePresence>
                  {openColorPicker &&
                    <motion.div
                      initial={{ opacity: 0, y: isMobile ? -340 : -330, x: -22 }}
                      animate={{ opacity: 1, y: isMobile ? -348 : -345 }}
                      exit={{ opacity: 0, y: -10 }}
                      viewport={{ once: true }} // Ensures animation runs only once
                      transition={{ type: "spring", bounce: 0.25, visualDuration: 0.1, duration: 0.15 }}
                      className={`absolute duration-400  translate-y-9 md:-translate-y-3 md:-translate-x-14 -translate-x-10 rounded-3xl`}>
                      <Sketch color={colour} onChange={(newColor) => setColour(newColor.hex)} width={253} />
                      {/* {console.log(colour)} */}
                      <div>
                        <button
                          className={`cursor-pointer absolute bottom-0 right-0 m-1 rounded-full flex w-10 h-6 ${on ? "bg-red-200/55" : "bg-gray-200/85"} items-center `}
                          onClick={() => isOn(!on)}
                        >
                          {/*motion.*/}<div
                            className={`${on ? "translate-x-4.5 bg-red-500/45" : "translate-x-0.5 bg-gray-400/55"} rounded-full flex duration-200 transition-all  w-5 h-5`}
                          // layout
                          // initial={false}
                          // animate={{ opacity: 1, }}
                          // transition={{
                          //   x: 0, y: 0, type: "string", visualDuration: 0.2, duration: 0.2
                          // }}
                          />
                        </button></div>
                      <div className={`absolute right-12 text-sm bottom-2 bg-linear-to-r ${on ? "from-red-500 to-yellow-300 duration-500 transition-all bg-clip-text text-transparent" : "text-gray-400"}`}>Apply</div>


                    </motion.div>
                  }
                </AnimatePresence>
              </motion.div>
            </div>




          </div>
        </div>



        <div
          className={` w-full h-full select-none grow flex flex-row pr-4 justify-center items-center`}>
          {

            <motion.div
              initial={{ opacity: 0, scale: 0, x: 335 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: -300 }}
              viewport={{ once: true }} // Ensures animation runs only once
              transition={{ type: "spring", bounce: 0.155, visualDuration: 0.235, duration: 0.14 }}
              className={`mt-3 pointer-default shrink-0  py-1.5  flex ${isMobile ? "border w-15 ml-2 py-2.5 rounded-full" : "ml-2 w-45 rounded-3xl"} text-[16px]  border-neutral-500/35 text-neutral-500/85  flex-nowrap h-full items-center justify-center`}>
              <motion.img

                initial={{ opacity: 0, scale: 0, x: 335 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: -300 }}
                viewport={{ once: true }} // Ensures animation runs only once
                transition={{ type: "spring", bounce: 0.155, visualDuration: 0.235, duration: 0.14 }}
                src={GA_prompt}
                className=" flex w-7 h-7 rounded-lg md:mr-2.5 opacity-85"
              />
              {!isMobile ? "ImageGen" : null}
            </motion.div>
            // )
          }


          <div
            className={`z-0 flex w-full item-center px-5 justify-start"
              }`}
          >


          </div>
          <motion.button
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: 30 }}
            viewport={{ once: true }} // Ensures animation runs only once
            transition={{ type: "spring", bounce: 0.3, visualDuration: 0, duration: 0.01 }}
            type="button"
            ref={menuRef}
            className={`mr-2 relative border-[1.5px] border-red-500/35 hover:border-red-500/10  ${!button && "text-red-600/55 hover:bg-red-500/10"
              }
                ${button && "text-black/75 "}
                ${showMenu && " bg-red-100 text-black/55"
              } cursor-pointer duration-300  flex shrink-0 items-center mt-3 gap-2 px-4 py-2.5 /bg-gray-200 rounded-3xl md:text-md text-md hover:bg-gray-300/35 focus:outline-none`}
            onClick={() => setShowMenu(!showMenu)} //setShowMenu((prev) => !prev)
          >
            <span className="flex gap-2 text-red-500/53">{selectedModel.icon}{isTab ? "" : selectedModel.label}</span>
            <FaChevronDown
              className={`text-xs text-red-500/53 ${showMenu && "rotate-180"} duration-500`}

            />
            <AnimatePresence>
              {showMenu &&
                <motion.ul
                  key="modelsList"
                  initial={{ opacity: 0, y: -103, x: 165 }}
                  animate={{ opacity: 1, y: -113, x: 165 }}
                  exit={{ opacity: 1, y: -100, x: 165 }}
                  viewport={{ once: true }} // Ensures animation runs only once
                  transition={{ type: "easeInOut", visualDuration: 0.1, duration: 0.2 }}
                  className={`${showMenu && "md:-translate-y-38 md:translate-x-1.5 -translate-x-43 -translate-y-40"}
                  absolute -left-25 duration-500 transition-all z-1
                   -mx-15 mb-5 w-68 text-left bg-white border-black/15 border rounded-xl shadow-lg `}
                >
                  <li className="px-4 py-2 flex justify-center items-center rounded-t-xl border-b-2 bg-red-500 font-extrabold text-white">
                    Models
                  </li>
                  {modelList.map((model, index) => (
                    <li
                      key={model.value}
                      className={`px-2 py-2 cursor-pointer  hover:bg-gray-100 
                      ${index === modelList.length - 1 ? "rounded-b-xl" : ""}
                      ${selectedModel.value === model.value
                          ? "bg-red-300/25 hover:bg-red-300/25 text-red-500 "
                          : ""
                        }`}
                      onClick={() => {
                        setSelectedModel(model);
                        setShowMenu(false);
                      }}
                    >
                      <span className="flex gap-2 ">{model.icon}{model.label}</span>
                    </li>
                  ))}
                </motion.ul>
              }
            </AnimatePresence>

          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.855, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            viewport={{ once: true }} // Ensures animation runs only once
            transition={{ type: "spring", bounce: 0.25, visualDuration: 0, duration: 0.15 }}
            className={` mt-3 
              p-2 cursor-default ${Prompt.trim() !== "" || loading
                ? "bg-red-600  hover:bg-red-800"
                : "bg-red-400/90"
              } 
          duration-500 flex shrink-0 justify-center items-center rounded-full md:h-13 md:w-13 h-12 w-12`}
            onClick={() => {
              if (!loading && Prompt.trim() !== "") {
                // setButton(true);
                // setLoading(true);
                // setSubmit(true);
                GenerateImage();

              }
              else {
                setButton(false);
                setLoading(false);
                setSubmit(false);
                setImageUrl(null)
              }

            }}
          >
            {!loading ? (
              <FaArrowUp className={`text-white w-7 h-7 `} />
            ) : (
              <TbRectangleFilled
                className={` text-white w-7 h-7 ${loading && "rotate-180 "} `}
              />
            )}


          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PromptBox;