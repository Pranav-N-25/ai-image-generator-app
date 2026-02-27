import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useUser, SignInButton } from "@clerk/clerk-react";
import { useAppContext } from "../context/AppContext.jsx";

import { FaArrowRight } from "react-icons/fa";
import { IoResizeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { CgInfo } from "react-icons/cg";
import { MdOutlineCancel } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";




import axios from "axios";


const Collection = () => {

  const { api, id } = useAppContext();
  const isTab = useMediaQuery({ maxWidth: 885 });
  const isMobile = useMediaQuery({ maxWidth: 597 });
  const { user } = useUser();
  const [collection, setCollection] = React.useState([]);
  const [hover, isHover] = React.useState(false);
  const [hoverIndex, setaHoverIndex] = React.useState(null);
  const [flag, setFlag] = React.useState(null);
  const [collectionError, setCollectionError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [openRename, setOpenRename] = React.useState(false);
  const [renameIndex, setRenameIndex] = React.useState(null);
  const renameRef = React.useRef(null);
  const [newImageName, setNewImageName] = React.useState("");
  const [moreInfo, setmoreInfo] = React.useState(false);
  const [infoIndex, setInfoIndex] = React.useState(null);
  const infoRef = React.useRef(null);
  const [openDeleteConfirm, setOpenDeleteConfirm] = React.useState(false);
  const [deleteIndex, setDeleteIndex] = React.useState(null);
  const deleteRef = React.useRef(null);
  const [tools, setTools] = React.useState(false);
  const [clickIndex, setClickIndex] = React.useState(null);
  const clickRef = React.useRef(null);


  const useClickOutside = (ref, callback) => {
    React.useEffect(() => {
      const handleClick = (event) => {
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

  useClickOutside(renameRef, () => { setOpenRename(false); setRenameIndex(null); });
  useClickOutside(infoRef, () => { setmoreInfo(false); setInfoIndex(null); });
  useClickOutside(deleteRef, () => { setOpenDeleteConfirm(false); setDeleteIndex(null); });
  useClickOutside(clickRef, () => { setTools(false); setClickIndex(null); });


  // FetchImage

  const fetchImage = async () => {
    if (user) {
      try {
        setCollectionError(false);
        setCollection(null);
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/image?userId=` + id);
        setCollection(res.data);
      }
      catch (error) { "Collection Error : " + error; setCollectionError(true); }
    }

  }
  const deleteImage = async (imageId) => {
    // console.log(imageId);
    const deleteResponse = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/image/` + imageId + "/" + user.id);
    console.log(deleteResponse.message);
    setFlag("delete");
  }

  const updateImage = async (imageId, imageName, userId) => {
    const putResponse = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/image/` + imageId + "/" + imageName + "/" + userId);
    console.log(putResponse.data);
    setFlag("updated");
    // fetchImage();

  }

  React.useEffect(() => {
    fetchImage();
    console.log(flag);
    setFlag(null);
  }
    , [id, flag])

  //Handle Download

  const handleDownload = async (url, imageName) => {
    const response = await fetch(url);
    console.log(response);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    console.log(blobUrl);
    link.download = imageName || "SAAI-image.png";
    link.click();
  }

  return (
    <>
      {user ?
        collection && !collectionError ?
          <div className="w-full px-2">
            <div
              className=" mb-10 grid md:grid-cols-3 gap-3 grid-col-1 w-full h-full px-3 py-3 overflow-y-scroll scroll-smooth rounded-4xl bg-white shadow-2xl min-h-[89vh] my-6 md:my-3"
            >
              {collection.map((col, index) => {
                return (
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, visualDuration: 0.3 }}
                    key={index}
                    onMouseEnter={() => { isHover(true); setaHoverIndex(index); }}
                    onMouseLeave={() => { isHover(false); setaHoverIndex(null); }}
                    className={` select-none relative w-full h-full`}
                  >

                    <img ref={clickRef} onLoad={() => { setImageLoaded(true) }} onClick={(e) => { setTools(true); setClickIndex(index); }} className={`rounded-4xl duration-200 transition-all  `} src={col.imageUrl} />

                    {(((isMobile ? (tools && clickIndex === index && imageLoaded) : (hover && index === hoverIndex && imageLoaded)) || ((index === renameIndex) || (index === infoIndex) || (index === deleteIndex)))) &&
                      <div ref={clickRef}>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className=" ">
                          <CgInfo onClick={() => { setmoreInfo(true); setInfoIndex(index); }} className={` absolute right-1 top-2  mt-4 mr-4 cursor-pointer z-1  p-3 w-13 h-13 bg-black/23 hover:bg-black/35 duration-300 text-white rounded-full`} />
                        </motion.div>

                        {clickIndex === index && isMobile &&
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className=" ">
                            <IoCloseOutline onClick={() => { setClickIndex(null); setTools(false); }} className={` absolute left-5 top-2  mt-4 mr-4 cursor-pointer z-1  p-3 w-13 h-13 bg-black/23 hover:bg-black/35 duration-300 text-white rounded-full`} />
                          </motion.div>}

                        {moreInfo && index === infoIndex &&
                          <AnimatePresence mode="wait">
                            <motion.div key="model" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, visualDuration: 0.4, ease: "easeInOut" }} exit={{ opacity: 0 }} ref={infoRef} layout
                              className="shrink-0 p-2 absolute text-sm grid grid-cols-1 md:text-sm top-0 left-0 w-full rounded-4xl scale-101.5 bg-white/55 backdrop-blur-lg z-10 h-full ">
                              <div className="flex justify-center items-center py-[2vh] md:py-[3vh] rounded-t-4xl bg-red-500/88 text-white"><b className=" md:text-[3vw] text-[10vw]">Details</b></div>
                              <div className=" md:text-[1vw] text-[3vw] bg-white/55 w-full flex justify-center items-center">
                                <table>
                                  <tbody>
                                    <tr className="flex  justify-start items-center pb-1.5"><td className="flex justify-start items-center font-extrabold md:w-22 w-[20vw] text-red-500 ">Name</td><td className=""><b className="text-red-500 pr-2"> : </b> {col.imageName}</td></tr>
                                    <tr className="flex  justify-start items-center pb-1.5"><td className="flex justify-start items-center font-extrabold md:w-22 w-[20vw] text-red-500 ">ImageID</td><td className=""><b className="text-red-500 pr-2"> : </b> {col._id}</td></tr>
                                    <tr className="flex  justify-start items-center pb-1.5"><td className="flex justify-start items-center font-extrabold md:w-22 w-[20vw] text-red-500 ">CreatedAt</td><td className=""><b className="text-red-500 pr-2"> : </b> {col.createdAt}</td></tr>
                                    <tr className="flex  justify-start items-center pb-1.5"><td className="flex justify-start items-center font-extrabold md:w-22 w-[20vw] text-red-500 ">StoredIn</td><td className=""><b className="text-red-500 pr-2"> : </b> Cloudinary</td></tr>
                                    <tr className="flex  justify-start items-center pb-1.5"><td className="flex justify-start items-center font-extrabold md:w-22 w-[20vw] text-red-500 ">ImageType</td><td className=""><b className="text-red-500 pr-2"> : </b> PNG</td></tr>
                                    <tr className="flex  justify-start items-center pb-1"><td className="flex justify-start items-center font-extrabold md:w-22 w-[20vw] text-red-500 ">Encoding</td><td className=""><b className="text-red-500 pr-2"> : </b> base64</td></tr>
                                  </tbody>
                                </table>

                                {/* <span className="flex justify-center items-center"><p className="pr-2 font-extrabold">ImageID</p><b> : </b><div className="pl-2">{col.imageName}</div></span>
                            <span className="flex justify-center items-center"><p className="pr-2 font-extrabold">CreatedAt</p><b> : </b><div className="pl-2">{col.imageName}</div></span>
                            <span className="flex justify-center items-center"><p className="pr-2 font-extrabold">StoredIn</p><b> : </b><div className="pl-2">{col.imageName}</div></span>
                            <span className="flex justify-center items-center"><p className="pr-2 font-extrabold">ImageType</p><b> : </b><div className="pl-2">{col.imageName}</div></span>
                             */}

                              </div>

                              <div onClick={() => { setmoreInfo(false); setInfoIndex(null); }} className=" bg-white/55 rounded-b-3xl w-full flex justify-center items-center">
                                <div className=" cursor-pointer hover:bg-red-500 bg-transparent duration-300 border border-red-500 text-red-500 hover:text-white font-extrabold rounded-3xl p-2 px-[8vw] md:text-[1vw] text-[3vw] w-30 flex justify-center items-center">Close</div></div>
                            </motion.div>
                          </AnimatePresence>
                        }

                        {/* <div className="flex justify-end items-center pr-5">
                          <MdOutlineCancel className="text-red-500 w-10 h-10" />
                          </div> */}
                        <div className={`absolute  flex justify-center items-end bottom-0 /bg-accent z-0 /bg-transparent transition-all duration-200 rounded-3xl w-full h-full`}>{console.log(hoverIndex, "tools :" + tools)}

                          <motion.div

                            initial={{ y: 4, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ bounce: .3, type: "spring", visualDuration: 0.4 }}
                            className="  justify-center bg-linear-to-b h-[20%] to-black/77 flex items-end w-full rounded-b-4xl">

                            {/* Button */}
                            <motion.div className="flex gap-[6vw] md:gap-[2vw] "
                              initial={{ y: 30, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ bounce: .3, type: "spring", visualDuration: 0.4 }}
                            >
                              {/* <div 
                              > */}

                              <div ref={deleteRef} className="relative ">
                                <RiDeleteBin6Line

                                  onClick={() => { setOpenDeleteConfirm(!openDeleteConfirm); setDeleteIndex(index); }}
                                  className={` p-3 w-13 h-13 mb-6 cursor-pointer  bg-black/23 hover:bg-black/35 duration-300 text-white rounded-full `} />

                                {openDeleteConfirm && deleteIndex === index &&
                                  <div className="absolute w-55 p-3  bg-white rounded-3xl -top-32 -left-12">
                                    <div className="px-2 py-2">Are you Sure ?</div>
                                    <div onClick={() => { setDeleteIndex(null); deleteImage(col._id); }} className=" text-[15px] select-none w-50 h-full flex justify-center items-center p-2 text-white font-extrabold bg-red-600/55 hover:bg-red-600 cursor-pointer rounded-3xl duration-300">Delete</div>
                                  </div>
                                }
                                {openDeleteConfirm && deleteIndex === index &&
                                  <div className=" select-none absolute -top-10 left-2 text-4xl shadow-2xl shadow-black/55 z-10 text-white "> &#9660; </div>
                                }
                              </div>
                              <div ref={renameRef} className="relative ">

                                <MdOutlineDriveFileRenameOutline

                                  onClick={() => { setOpenRename(!openRename); setRenameIndex(index); }}
                                  className={` p-3 w-13 h-13 mb-6 cursor-pointer bg-black/23 hover:bg-black/35 duration-300 text-white rounded-full `} />
                                {openRename && index === renameIndex && <div>
                                  <div className="absolute w-85 p-3 shadow-2xl shadow-black/55 bg-white z-10 rounded-3xl -top-38 -left-26 overflow-x-visible">
                                    <div className="flex justify-center items-center">
                                      {/* <div className="text-black/55 font-extrabold"></div> */}
                                      <input onKeyDown={(e) => {
                                        if (e.key === "Enter" && !e.shiftKey && newImageName.trim() !== "") {
                                          e.preventDefault();
                                          setRenameIndex(null);
                                          setOpenRename(false);
                                          updateImage(col._id, newImageName, col.userId);
                                          setNewImageName("");

                                        }
                                      }}
                                        value={newImageName} onChange={(e) => { setNewImageName(e.target.value) }} type={"text"} placeholder={"Enter the New Name"} className="bg-black/5 w-full rounded-xl h-13 outline-0 px-3 teext-[10px] placeholder:text-sm" />
                                      {/* {console.log("NewName : " + newImageName)} */}
                                    </div>
                                    <div className="flex justify-center items-center pt-3 gap-2">
                                      <div onClick={() => { setOpenRename(false); setRenameIndex(null); }} className=" text-[15px] select-none w-full h-full flex justify-center items-center p-2 bg-red-600/65 text-white hover:bg-red-600 hover:text-white duration-300 rounded-3xl cursor-pointer font-extrabold ">Cancel</div>
                                      <div onClick={() => { setRenameIndex(null); setOpenRename(false); updateImage(col._id, newImageName, col.userId); setNewImageName(""); }} className=" text-[15px] select-none w-full h-full flex justify-center items-center p-2 text-white font-extrabold bg-bluepink-1/55 hover:bg-bluepink-1 cursor-pointer rounded-3xl duration-300">Rename</div>
                                    </div>
                                  </div>
                                  <div className=" select-none absolute -top-10 left-1 text-4xl shadow-2xl shadow-black/55 z-10 text-white "> &#9660; </div>
                                </div>}

                              </div>
                              {/* </div> */}
                              <MdDownload
                                onClick={() => { handleDownload(col.imageUrl, col.imageName) }}
                                className={` p-3 w-13 h-13 mb-6 cursor-pointer bg-black/23 hover:bg-black/35 duration-300 text-white rounded-full `} />
                              <IoResizeOutline
                                onClick={() => { const link = document.createElement("a"); link.href = col.imageUrl; link.target = "_blank"; link.click(); }}
                                className={` p-3 w-13 h-13 mb-6 rotate-90 cursor-pointer bg-black/23 hover:bg-black/35 duration-300 text-white rounded-full `} />
                            </motion.div>

                          </motion.div>

                        </div>
                      </div>
                    }
                  </motion.div>
                )
              }
              )
              }
              {/* <pre className=" whitespace-normal wrap-break-word overflow-x-auto flex-wrap text-wrap">{collection}</pre> */}
            </div>
          </div>

          :

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ visualDuration: 0.8, duration: 0.8 }}
            className="w-full h-[89vh] my-3 px-2">
            <div className="h-full flex justify-center items-center rounded-4xl bg-white backdrop-blur-lg border border-red-500 ">
              <div className="bg-white p-6 pr-4 rounded-4xl">
                <svg width="58" height="58" aria-hidden="true" role="status"
                  class=" me-3 justify-center items-center flex text-gray-100 animate-spin dark:text-gray-600"
                  viewBox="0 0 100 101" fill="red" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#ff7a8b63" />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="red" />
                </svg>
              </div>
            </div>
          </motion.div>
        :
        <div className="w-full h-[87vh] flex justify-center items-center">
          <SignInButton className={`hover:duration-830 transition pr-8 mx-1.5 my-1.5 p-3 text-white text-md cursor-pointer font-bold hover:bg-gradient-to-r  hover:from-red-500 hover:to-yellow-500 hover:text-white px-6 py-3 rounded-4xl flex justify-center items-center pl-8 mr-2 bg-red-500  `}><span>Sign In <FaArrowRight className='inline-block ml-3.5 transition-all ' /></span>
          </SignInButton>
        </div>}

    </>

  )
}

export default Collection