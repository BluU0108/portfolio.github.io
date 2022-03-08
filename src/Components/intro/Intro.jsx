import React from 'react'
import "./intro.css"
import nobackground from "../../images/nobackground.png"
import mobilebg from "../../images/mobilebg.PNG"

import Typewriter from 'typewriter-effect'
const Intro = () => {
  return (
    <div className='i'>
         <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hi, My name is </h2>
                <h1 className='i-name'>Nikolas, and i am a:</h1>
                <div className='i-title'>
                  <div className='i-title-wrapper'>
                     <Typewriter
                      options={{
                        strings: ['React Developer',
                         'Solidity Developer','Web3.0 Developer',
                         'UI/UX Designer','NFT & Cryptocurency Developer' ],
                        autoStart: true,
                        loop: true,
                      }}

                     onInit={(typewriter) => {
                       typewriter.typeString("React Developer")
                       .deleteAll()
                       .typeString("Solitity Developer")
                       .deleteAll()
                       .typeString("Web3.0 Developer")
                       .deleteAll()
                       .typeString("UI/UX Designer")
                       .deleteAll()
                       .typeString("NFT & Cryptocurency Developer")
                       .start();
                     }}
                     />   
                 </div>
               </div>
               <p className='i-desc'>
                 I have a passion for Cryptocurrency and Blockchain technology as well as front end development,
                   and UI design. I am proficient in all the latest 
                   tech within those fields such as React.js, Programming smart contracts in Solidity
                   and Building Dapps with Moralis SDK.
               </p>
            </div>
          </div>
         <div className='i-right'>
           <div className='i-bg'></div>
            <img src={nobackground} alt="" className='i-nobackground' />

         </div>
         <div className='i-right-mobile'>
           <img src={mobilebg} alt="" className='i-mobilebg' />

                    </div>
    </div>
  )
}

export default Intro