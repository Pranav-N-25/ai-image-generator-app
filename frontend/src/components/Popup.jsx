import React from 'react'
import { createPortal } from 'react-dom';
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import ImageEditor from "./ImageEditor.jsx";

const Popup = ({ type, open, index, setIndex, setOpen, Content, onSuccess, icon, _ref, title, buttonName, newImageName, setNewImageName, imageUrl, setEditedImageUrl }) => {

    React.useEffect(() => {
        if (open) {
            const preventDefault = (e) => {
                e.preventDefault();
            };

            window.addEventListener('wheel', preventDefault, { passive: false });
            window.addEventListener('touchmove', preventDefault, { passive: false });
            window.addEventListener('keydown', (e) => {
                if (['ArrowUp', 'ArrowDown', ' ', 'PageUp', 'PageDown'].includes(e.key)) {
                    e.preventDefault();
                }
            });

            return () => {
                window.removeEventListener('wheel', preventDefault);
                window.removeEventListener('touchmove', preventDefault);
            };
        }

    }, [open]);

    const mountNode = document.getElementById('portal-root');
    return (

        type === "Window" ?

            createPortal(

                <motion.div
                    initial={{ opacity: 0, transition: { duration: .3 } }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: .7 } }}
                    key={type}
                    className="fixed flex justify-center items-center md:text-lg duration-300 px-5 w-full top-0 left-0 right-0 bottom-0 inset-0 h-full backdrop-blur-lg bg-black/55 z-200">
                    <motion.div
                        initial={{ opacity: 0.8, y: 15, transition: { duration: .5 } }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15, transition: { duration: .1 } }}
                        key={type}
                        ref={_ref}
                        className={`flex w-fit flex-col p-5 rounded-3xl  ${buttonName === "Delete" ? "bg-linear-to-br from-red-200 via-white to-white" : "bg-linear-to-br from-blue-200 via-white to-white"} /bg-white`}>
                        <div className={`w-full flex justify-between items-center gap-8 p-4 text-3xl ${buttonName === "Delete" ? "text-red-500" : "text-blue-500"} `}><div className="flex gap-5 justify-center items-center">{icon}{title}</div><IoClose onClick={() => { setOpen(false); setIndex(null); }} className={`w-10 h-10 p-2 duration-500 ${buttonName === "Delete" ? " md:text-red-600/77 hover:text-red-600 text-red-600 bg-red-100 hover:bg-red-200 " : " md:text-blue-600/77 hover:text-blue-600 text-blue-600 bg-blue-100 hover:bg-blue-200 "} rounded-full cursor-pointer `} /></div>
                        <div
                            className="px-2 py-4">
                            {title === "Delete" ? <div>{Content}</div> :
                                <input
                                    type={"text"}
                                    onChange={(e) => { setNewImageName(e.target.value) }}
                                    value={newImageName}
                                    placeholder={"Enter the New Name"}
                                    className="bg-black/5 md:min-w-110 min-w-auto w-full rounded-xl h-13 focus:ring-2 ring-blue-400 duration-300 caret-blue-500 outline-0 px-3 teext-[10px] placeholder:text-sm"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && !e.shiftKey && newImageName.trim() !== "") {
                                            e.preventDefault();
                                            onSuccess();
                                        }
                                    }}
                                />
                            }
                        </div>
                        <div className="w-full flex gap-3">
                            <div
                                onClick={() => { onSuccess(); }}
                                className={` text-[15px] my-2 mt-5 select-none w-full h-full flex justify-center items-center py-3 text-white font-extrabold ${buttonName === "Delete" ? "md:bg-red-600/85 hover:bg-red-600 bg-red-600" : "md:bg-blue-600/85 hover:bg-blue-600 bg-blue-600"} cursor-pointer rounded-3xl duration-300`}>
                                {buttonName}
                            </div>
                            <div
                                onClick={() => { setOpen(false); setIndex(null); }}
                                className=" text-[15px] my-2 mt-5 select-none w-full h-full flex justify-center items-center py-3 text-black/43 font-extrabold md:bg-black/8 hover:bg-black/15 bg-black/8 cursor-pointer rounded-3xl duration-300">
                                Cancel
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                , mountNode)

            : type === "Edit" ?
                createPortal(
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={type}
                        className="fixed duration-300 w-full top-0 left-0 right-0 bottom-0 inset-0 h-full backdrop-blur-lg bg-black/55 z-200">
                        <ImageEditor onSuccess={onSuccess} source={imageUrl} setOpen={setOpen} setIndex={setIndex} setEditedImageUrl={setEditedImageUrl} />
                    </motion.div>, mountNode)
                :

                createPortal(

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={type}
                        ref={_ref} className="fixed duration-300 px-5 py-5 w-full top-0 left-0 right-0 bottom-0 inset-0 h-full backdrop-blur-lg bg-black/55 z-200">
                        <div className="w-full h-full relative flex justify-center items-center ">
                            <IoClose onClick={() => { setIndex(null); setOpen(false); }} className={` md:w-13 md:h-13 md:p-2.5 h-10 w-10 p-2 rounded-full hover:bg-red-600 bg-red-600 absolute top-1 right-1 duration-300 md:bg-black/44 hover:text-white text-white md:text-white/66 cursor-pointer `} />
                            <div className=" md:h-full h-auto flex justify-center items-center">
                                <img src={imageUrl} alt="" className=" h-full" />
                            </div>
                        </div>
                    </motion.div>
                    , mountNode)
    )
}

export default Popup