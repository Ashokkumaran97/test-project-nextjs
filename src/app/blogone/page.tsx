"use client"
import './blogone.css'
import React, { useState } from "react";
import Modal from "./Modal";
export default function Blogone() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className='test_project_nextjs'>
        <div className="flex flex-row min-h-screen justify-center items-center">
          <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => setOpen(true)}>
            Click to Open the Popup
          </button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl">Dummy Text</h1>
              <p>Lorem ipsum dolor sit amet. Ea rerum sapiente in voluptates voluptas ut ipsam quis sit magni necessitatibus? 33 iste dolorum a officiis velit sed commodi debitis sed ipsum reprehenderit eos voluptas atque. </p><p>Ex suscipit quia est consequuntur voluptates hic dolorum eligendi ea consequatur consequuntur aut recusandae enim ut quis nostrum. Aut mollitia iste ut rerum voluptatem aut molestiae consequatur est ipsa temporibus sit dolor fuga. </p><p>At aliquam explicabo est voluptate obcaecati eos quos sequi ut fugiat consequuntur. Est dolor velit 33 officia voluptatem sed possimus corrupti. Et itaque aliquid aut itaque rerum ut explicabo dignissimos est quae itaque. </p>
              <div className="flex flex-row justify-center">
                <button
                  className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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


