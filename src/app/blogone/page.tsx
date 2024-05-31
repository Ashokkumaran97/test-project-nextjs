"use client"
import './blogone.css'
import React, { useState } from "react";
import Modal from "./Modal";
export default function Blogone() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className='test_project_nextjs'>


        {/* <div className="container_test mx-auto">
          <div className="interior">
            <a className="btn" href="#open-modal">Click to Open Modal</a>
          </div>
        </div>

        <div id="open-modal" className="modal-window">
          <div>
            <a href="#" title="Close" className="modal-close">Close</a>
            Your new favorite eyedropper tool!
          </div>
        </div> */}



<div className="p-10 flex justify-center w-full">
      <button
        className="border border-neutral-300 rounded-lg
    py-1.5 px-10 my-2 bg-blue-500 hover:bg-blue-600 text-white "
        onClick={() => setOpen(true)}
      >
        Open
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Modal Title</h1>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi.
          </p>
          <p>
            Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit
            magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
            dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
            eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
            incididunt nisi consectetur esse laborum eiusmod pariatur proident
            Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
          </p>
          <hr className="border-t-solid border-1 border-grey" />
          <div className="flex flex-row justify-center">
            <button
              className="border border-neutral-300 rounded-lg py-1.5 px-10
               bg-blue-500 hover:bg-blue-600 text-white"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>



      </div>
    </>
  )
}


