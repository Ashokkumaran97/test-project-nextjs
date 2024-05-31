"use client"
import './main.css'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import maindata from '../Data/maindata'
export default function Home() {

  return (

    <>
          <div className="test_project_main">
            <div className="container mx-auto">
              <div className='test_project_content'>
                <div className='test_project_card'>
                  {
                    maindata.map((data) => {
                      return (
                        <div className='test_project_title_contents'>
                          <div className='test_project_title_contents_text'>
                            <h6>{data.title}</h6>
                            <div className='test_project_title_button'>
                              <Link href={data.route}><button className='test_project_button'>{data.button}</button></Link>
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
    </>
  );
}
