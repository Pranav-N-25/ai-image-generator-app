import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { TbRectangleFilled } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import { useRef } from "react";
import MediaQuery from "react-responsive";
import OpenRouter from "../config/OpenRouter.jsx";
import GA from "../assets/logo-ai.png";
import GA_prompt from "../assets/logo-ai.png";
import { usePollinationsImage } from "@pollinations/react";

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
  // setResponse,
  setLoading,
  submit,
  loading,
  imageUrl, setImageUrl
}) => {


  // const [Prompt,setPrompt]= useState("");
  // const [response, setResponse] = useState('');
  // const [loading, setLoading] = useState(false);
  // Model selection state
  // const [selectedModel, setSelectedModel] = useState([]);
  // const [showMenu, setShowMenu] = useState(false);

  const image = usePollinationsImage(Prompt);
  const isMobile = window.innerWidth <= 768;
  const textareaRef = useRef(null);
  // eslint-disable-next-line no-unused-vars

  // Check if the screen width is less than or equal to 768px
  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px"; // 200px max
  };

  const delay3 = () => {

    setTimeout(() => {
      setLoading(false);
    }, 3000)

  }
  const GenerateImage = () => {
    if (Prompt.trim() === "") { return }
    setLoading(true);
    setImageUrl("loading");
    const img = `${image}?t=${Date.now()}`
    setImageUrl(img);
    delay3()
    setImageUrl(image);
    console.log(Prompt);
    setSubmit(false);

    if (imageUrl) { console.log(imageUrl); setLoading(false) }

  }


  return (
    <div
      className={`${
         isMobile
          ? "px-auto w-[90%] "
          : "w-[%]"
        
        }
    
      
     w-[90%]`}
    >
      <div
        
      >
        <textarea
          ref={textareaRef}
          onInput={handleInput}
          style={{
            
            minHeight: "300px",
            maxHeight: "200px",
            overflowY: "auto",
           
          }}
          value={Prompt}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && Prompt) {

              e.preventDefault(); // Prevent default Enter key behavior
              setButton(true);
              setLoading(true);
              setSubmit(true);
              GenerateImage(Prompt);


            }
          }}
          className={`md:w-full w-[100%] mt-3.5 rounded-4xl resize-none outline-0 p-6
          bg-black/8
          md:text-lg ${!Prompt && "text-black/44"
            }`}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          placeholder="Enter your Prompt"
        />

        <div className="w-full flex flex-row gap-2 pr-2 justify-center items-center">
          {
            isMobile ? (
              <div className=" flex w-20 mt-3 h-full items-center justify-center">
                <img src={GA} className=" flex w-8 h-8 rounded-lg" />
              </div>
            ) : (
              //GA_prompt
              <div className="shrink-0 border-1 px-1 py-2 rounded-3xl flex w-55 ml-5 text-md  border-neutral-500/35 text-neutral-500/85  font-extrabold flex-nowrap h-full items-center justify-center">
                <img
                  src={GA_prompt}
                  className=" flex w-7 h-7 rounded-lg mr-2.5 opacity-85"
                />
                ImageGen
              </div>
            )
          }
          <div
            className={`z-0 flex w-full item-center px-5 justify-start"
              }`}
          >
            {/* <button
              type="button"
              className={`${
               !button && "bg-white/55 text-black/35 "
              }
                ${button && "text-black/75 "}
                ${
                  showMenu && "bg-red-100 text-black/55 hover:bg-red-100"
                } cursor-pointer duration-300 flex md:shrink-0 items-center gap-2 px-4 py-3 /bg-gray-200 rounded-xl md:text-md text-md font-semibold hover:bg-gray-300/35 focus:outline-none`}
              onClick={() => setShowMenu(!showMenu)} //setShowMenu((prev) => !prev)
            >
              <span>{selectedModel.label}</span>
              <FaChevronDown
                className={`text-xs ${showMenu && "rotate-180 "} duration-500`}
              />
            </button>
            {showMenu && (
              <ul
                className={`
                  ${ !button && "bg-white/55"}
                  absolute ${
                    button ? "right-0 bottom-13" : "left-0 bottom-13"
                  } mt-2 w-54 bg-white border-black/15 border-1 rounded-xl shadow-lg `}
              >
                <li className="px-4 py-2 rounded-t-xl border-b-2 bg-red-500 font-extrabold text-white">
                  Models
                </li>
                {modelList.map((model, index) => (
                  <li
                    key={model.value}
                    className={`px-4 py-2 cursor-pointer  hover:bg-gray-100 
                      ${index === modelList.length - 1 ? "rounded-b-xl" : ""}
                      ${
                        selectedModel.value === model.value
                          ? "bg-red-300/25 hover:bg-red-300/25 text-red-500 font-bold"
                          : ""
                      }`}
                    onClick={() => {
                      setSelectedModel(model);
                      setShowMenu(false);
                    }}
                  >
                    {model.label}
                  </li>
                ))}
              </ul>
            )} */}
          </div>

          <div
            className={` mt-3
              p-2 cursor-default ${Prompt || loading
                ? "bg-red-600  hover:bg-red-800"
                : "bg-red-400/90"
              } 
          duration-500 flex shrink-0 justify-center items-center rounded-full md:h-12 md:w-12 h-12 w-12`}
            onClick={() => {
              if (!loading) {
                setButton(true);
                setLoading(true);
                setSubmit(true);
                GenerateImage();

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptBox;