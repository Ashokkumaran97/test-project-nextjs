"use client"
import './main.css'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import maindata from '../Data/maindata'
export default function Home() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7500);
  });

  return (
    <>
      {loading === true ? (
        <div className='test_project_loader'>
          <div className="frame">
            <div className="center">
              <div className="dot-1"></div>
              <div className="dot-2"></div>
              <div className="dot-3"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="test_project_main">
          <div className="container mx-auto">
            <div className='test_project_content'>
              <div className='test_project_card'>
                {
                  maindata.map((data) => {
                    return (
                      <div key={data.id} className='test_project_title_contents'>
                        <div className='test_project_title_contents_text'>
                          <h6>{data.title}</h6>
                          <div className='test_project_title_button'>
                            <Link href={data.route}><button className='test_project_button'>{data.button}&nbsp;&rarr;</button></Link>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      )
      }
    </>
  );
}
