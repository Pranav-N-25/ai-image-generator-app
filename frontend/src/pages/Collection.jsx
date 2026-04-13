import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useUser, SignInButton } from "@clerk/clerk-react";
import axios from "axios";

import { FaArrowRight } from "react-icons/fa";
import { IoResizeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { CgInfo } from "react-icons/cg";
import { MdOutlineCancel } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { MdCollections } from "react-icons/md";
import { MdOutlineCrop } from "react-icons/md";

import { useAppContext } from "../context/AppContext.jsx";
import Popup from '../components/Popup.jsx';

const Collection = () => {

  const { id, email } = useAppContext();
  const isMobile = useMediaQuery({ maxWidth: 767 });
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
  const [shadow, setShadow] = React.useState(null);
  const [preview, setPreview] = React.useState(false);
  const [previewIndex, setPreviewIndex] = React.useState(null);
  const [editImage, setEditImage] = React.useState(false);
  const [editIndex, setEditIndex] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
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

  const deleteImage = async (cloudinary_image_public_id) => {
    // console.log(cloudinary_image_public_id.slice(6, cloudinary_image_public_id + 1));
    await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/image/` + cloudinary_image_public_id.slice(5, cloudinary_image_public_id.length) + "/" + user.id);
    setDeleteIndex(null);
    setOpenDeleteConfirm(false);
    setFlag("delete");
  }

  const updateImage = async (imageId, imageName, userId) => {
    setRenameIndex(null);
    setOpenRename(false);
    await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/image/` + imageId + "/" + imageName + "/" + userId);
    setNewImageName("");
    setFlag("updated");
  }


  const uploadImage = async (file, fileName, secondaryName) => {
    setLoading(true);
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
    // console.log(data);
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/image`, { imageName: fileName, userId: id, imageUrl: data.secure_url, cloudinary_image_public_id: data.public_id, emailId: email, type: secondaryName });
    setFlag("ImageUploadAfterEdit");
    setLoading(false);

  };

  React.useEffect(() => {

    // FetchImage

    const fetchImage = async () => {
      if (user) {
        try {
          setLoading(true);
          setCollectionError(false);
          setCollection(null);
          const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/image?userId=` + id + "&emailId=" + email);
          // console.log(res);
          setCollection(res.data);
          setLoading(false);
        }
        catch (error) { "Collection Error : " + error; setCollectionError(true); }
      }

    }
    fetchImage();
    setFlag(null);
  }
    , [id, email, user, flag])

  //Handle Download

  const handleDownload = async (url, imageName) => {
    const response = await fetch(url);
    // console.log(response);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    // console.log(blobUrl);
    link.download = imageName || "SAAI-Generator-image.jpg";
    link.click();
  }

  setTimeout(() => {
    setShadow('shadow-[0px_0px_85px_15px] shadow-yellow-300');
  }
    , 500
  )

  return (
    <div className="mt-25">
      {user ?
        collection && !collectionError && !loading ?
          <div className="w-full h-full px-2 ">
            <div
              className="mb-10 grid md:grid-cols-3 gap-x-3 gap-y-3 grid-col-1 w-full h-full px-3 py-3 overflow-y-scroll scroll-smooth rounded-4xl bg-white shadow-2xl min-h-[89vh] my-6 md:my-3"
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
                    className={` select-none relative w-full h-fit `}
                  >
                    <div
                      onClick={(e) => { setTools(true); setClickIndex(index); e.stopPropagation(); }}
                      className="w-full h-full flex justify-center items-center">
                      <img
                        onLoad={() => { setImageLoaded(true) }}
                        className={`rounded-4xl duration-200 transition-all h-fit w-fit `}
                        src={col.imageUrl} />
                    </div>
                    {
                      (((isMobile ?
                        ((tools && clickIndex === index && imageLoaded) || ((index === renameIndex) || (index === infoIndex) || (index === deleteIndex) || (index === previewIndex) || (index === editIndex)))
                        :
                        (hover && index === hoverIndex && imageLoaded)) || ((index === renameIndex) || (index === infoIndex) || (index === deleteIndex) || (index === previewIndex) || (index === editIndex)))) &&
                      <div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <CgInfo
                            onClick={() => { setmoreInfo(true); setInfoIndex(index); }}
                            className={` absolute right-1 top-2  mt-4 mr-4 cursor-pointer z-1 p-3 h-12 w-12 md:p-[1vw] md:w-[4vw] md:h-[4vw] bg-black/23 hover:bg-black/35 duration-300 text-white rounded-full`}
                          />
                        </motion.div>

                        {
                          clickIndex === index && isMobile &&
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className=" ">
                            <IoCloseOutline
                              onClick={() => { setClickIndex(null); setTools(false); }}
                              className={` absolute left-5 top-2  mt-4 mr-4 cursor-pointer z-1 p-3 h-13 w-13 md:p-[1vw] md:w-[4vw] md:h-[4vw] bg-black/23 hover:bg-black/35 duration-300 text-white rounded-full`}
                            />
                          </motion.div>
                        }
                        <AnimatePresence
                          mode="wait"
                        >
                          {
                            moreInfo && index === infoIndex &&

                            <motion.div
                              key="model"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.4, visualDuration: 0.4, ease: "easeInOut" }}
                              exit={{ opacity: 0 }}
                              ref={infoRef}
                              layout
                              className="shrink-0 p-2 absolute text-sm grid grid-cols-1 md:text-sm top-0 left-0 w-full rounded-4xl scale-101.5 bg-white/55 backdrop-blur-lg z-10 h-full "
                            >
                              <div
                                className="flex justify-center items-center py-[2vh] md:py-[3vh] rounded-t-4xl bg-red-500/88 text-white">
                                <b
                                  className=" md:text-[3vw] text-[10vw]">
                                  Details
                                </b>
                              </div>

                              <div
                                className=" md:text-[1vw] text-[3vw] bg-white/55 w-full flex justify-center items-center">
                                <table>
                                  <tbody>
                                    <tr className="flex  justify-start items-center pb-1.5"><td className="flex justify-start items-center font-extrabold md:w-22 w-[20vw] text-red-500 ">Name</td><td className=""><b className="text-red-500 pr-2"> : </b> {col.imageName}</td></tr>
                                    <tr className="flex  justify-start items-center pb-1.5"><td className="flex justify-start items-center font-extrabold md:w-22 w-[20vw] text-red-500 ">ImageID</td><td className=""><b className="text-red-500 pr-2"> : </b> {col._id}</td></tr>
                                    <tr className="flex  justify-start items-center pb-1.5"><td className="flex justify-start items-center font-extrabold md:w-22 w-[20vw] text-red-500 ">CreatedAt</td><td className=""><b className="text-red-500 pr-2"> : </b> {col.createdAt}</td></tr>
                                    <tr className="flex  justify-start items-center pb-1.5"><td className="flex justify-start items-center font-extrabold md:w-22 w-[20vw] text-red-500 ">StoredIn</td><td className=""><b className="text-red-500 pr-2"> : </b> Cloudinary cloud</td></tr>
                                    <tr className="flex  justify-start items-center pb-1.5"><td className="flex justify-start items-center font-extrabold md:w-22 w-[20vw] text-red-500 ">ImageType</td><td className=""><b className="text-red-500 pr-2"> : </b> {col.type}</td></tr>
                                    <tr className="flex  justify-start items-center pb-1"><td className="flex justify-start items-center font-extrabold md:w-22 w-[20vw] text-red-500 ">Encoding</td><td className=""><b className="text-red-500 pr-2"> : </b> base64</td></tr>
                                  </tbody>
                                </table>

                              </div>

                              <div
                                onClick={() => { setmoreInfo(false); setInfoIndex(null); }}
                                className=" bg-white/55 rounded-b-3xl w-full flex justify-center items-center">
                                <div
                                  className=" cursor-pointer hover:bg-red-500 bg-transparent duration-300 border border-red-500 text-red-500 hover:text-white font-extrabold rounded-3xl p-2 px-[8vw] md:text-[1vw] text-[3vw] w-30 flex justify-center items-center">
                                  Close
                                </div>
                              </div>
                            </motion.div>
                          }
                        </AnimatePresence>

                        <div
                          className={`absolute flex justify-center items-end bottom-0 z-0 transition-all duration-200 rounded-3xl w-full h-full`}
                        >
                          <motion.div
                            initial={{ y: 4, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ bounce: .3, type: "spring", visualDuration: 0.4 }}
                            className="  justify-center bg-linear-to-b h-[20%] to-black/77 flex items-end w-full rounded-b-4xl">

                            {/* Button */}
                            <motion.div
                              className="flex gap-[3.5vw] md:gap-[2vw] "
                              initial={{ y: 30, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ bounce: .3, type: "spring", visualDuration: 0.4 }}
                            >


                              <RiDeleteBin6Line
                                onClick={() => { setOpenDeleteConfirm(!openDeleteConfirm); setDeleteIndex(index); }}
                                className={`p-3 h-12 w-12  md:p-[1vw] md:w-[4vw] md:h-[4vw] mb-6 cursor-pointer  bg-black/23 hover:bg-black/35 duration-300 text-white rounded-full `} />
                              <AnimatePresence
                                mode="wait"
                              >
                                {openDeleteConfirm && deleteIndex === index &&
                                  <Popup type={"Window"} open={openDeleteConfirm} index={deleteIndex} setOpen={setOpenDeleteConfirm} title={"Delete"} buttonName={"Delete"} setIndex={setDeleteIndex} Content={"The Image will be Deleted from your Collection, Are you Sure ? "} _ref={deleteRef} onSuccess={() => deleteImage(col.cloudinary_image_public_id)} icon={<RiDeleteBin6Line className="p-2 w-10 h-10 bg-red-400/33 rounded-full " />} />
                                }

                              </AnimatePresence>

                              <MdOutlineDriveFileRenameOutline
                                onClick={() => { setOpenRename(!openRename); setRenameIndex(prev => prev === index ? null : index); }}
                                className={`p-3 h-12 w-12  md:p-[1vw] md:w-[4vw] md:h-[4vw] mb-6 cursor-pointer bg-black/23 hover:bg-black/35 duration-300 text-white rounded-full `} />
                              <AnimatePresence
                                mode="wait"
                              >
                                {openRename && index === renameIndex &&
                                  <Popup type={"Window"} open={openRename} newImageName={newImageName} setNewImageName={setNewImageName} index={renameIndex} setOpen={setOpenRename} title={"Rename"} buttonName={"Rename"} setIndex={setRenameIndex} Content={""} _ref={renameRef} onSuccess={() => updateImage(col._id, newImageName, col.userId)} icon={<MdOutlineDriveFileRenameOutline className="p-2 w-10 h-10 bg-blue-400/33 rounded-full " />} />
                                }
                              </AnimatePresence>


                              <MdDownload
                                onClick={() => { handleDownload(col.imageUrl, col.imageName) }}
                                className={`p-3 h-12 w-12 md:p-[1vw] md:w-[4vw] md:h-[4vw] mb-6 cursor-pointer bg-black/23 hover:bg-black/35 duration-300 text-white rounded-full `}
                              />

                              <MdOutlineCrop
                                onClick={() => { setEditIndex(index); setEditImage(!preview); }}
                                className={`p-3 h-12 w-12 md:p-[1vw] md:w-[4vw] md:h-[4vw] mb-6 cursor-pointer bg-black/23 hover:bg-black/35 duration-300 text-white rounded-full `}
                              />

                              <AnimatePresence
                                mode="wait"
                              >
                                {editImage && editIndex === index &&
                                  <Popup type={"Edit"} onSuccess={uploadImage} open={editImage} setOpen={setEditImage} setIndex={setEditIndex} imageUrl={col.imageUrl} loading={loading} setLoading={setLoading} />
                                }
                              </AnimatePresence>


                              <IoResizeOutline
                                onClick={() => { setPreviewIndex(index); setPreview(!preview); }}
                                className={`p-3 h-12 w-12 md:p-[1vw] md:w-[4vw] md:h-[4vw] mb-6 rotate-90 cursor-pointer bg-black/23 hover:bg-black/35 duration-300 text-white rounded-full `}
                              />

                              <AnimatePresence
                                mode="wait"
                              >
                                {preview && previewIndex === index &&
                                  <Popup type={"Preview"} open={preview} setOpen={setPreview} setIndex={setPreviewIndex} imageUrl={col.imageUrl} />
                                }
                              </AnimatePresence>

                            </motion.div>
                          </motion.div>
                        </div>
                      </div >
                    }
                  </motion.div >
                )
              }
              )
              }
            </div >
          </div >

          :

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ visualDuration: 0.8, duration: 0.8 }}
            className="w-full h-[89vh] my-3 px-2"
          >
            <div
              className="h-full flex justify-center items-center rounded-4xl bg-white backdrop-blur-lg border border-red-500 "
            >
              <div
                className="bg-white p-6 pr-4 rounded-4xl"
              >
                <svg
                  width="58"
                  height="58"
                  aria-hidden="true"
                  role="status"
                  className=" me-3 justify-center items-center flex text-gray-100 animate-spin dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="red"
                  xmlns="http://www.w3.org/2000/svg">
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
        <motion.div initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, visualDuration: 0.4, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
          className=" w-full mt-50 mb-50 flex justify-center items-center px-3">
          <div className={`relative bg-white flex-col flex justify-center items-center rounded-[2.5em] py-2 px-5 duration-800  pt-3 ${shadow}`}>
            <MdCollections className="w-38 h-35 mt-5 mb-4 " style={{ fill: "url(#yellow-red-gradient)" }} />
            <div className="px-5 text-lg my-3 text-center"> <b className="text-red-400">SignUp / SignIn</b> to Access Collection </div>
            <SignInButton
              className={`group hover:duration-830 transition pr-8 mx-1.5 my-5.5 p-3 text-white text-md cursor-pointer font-bold hover:bg-linear-to-r  hover:from-red-500 hover:to-yellow-500 hover:text-white px-6 py-3 rounded-4xl flex justify-center items-center pl-8 mr-2 bg-red-500  `}>
              <span>
                Get Start
                <FaArrowRight className='inline-block ml-2.5 transition-all -tanslate-x-3 group-hover:translate-x-1.5 group-hover:scale-105 ' />
              </span>
            </SignInButton>
          </div>

        </motion.div>
      }



    </div>

  )
}

export default Collection