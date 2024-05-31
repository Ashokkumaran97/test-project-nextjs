import './blogone.css'
export default function Blogone() {
  return (
    <>
      <div className='test_project_nextjs'>

        <div className="container mx-auto">
          <div className="interior">
            <a className="btn" href="#open-modal">Click Here &rarr;</a>
          </div>
        </div>

        <div id="open-modal" className="modal-window">
          <div>
            <a href="#" title="Close" className="modal-close">Close</a>
          </div>
        </div>

      </div>
    </>
  )
}


