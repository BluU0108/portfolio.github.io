import React from 'react'
import "./about.css"
import bluu from "../../images/bluu.png"


const About = () => {
  return (
    <div className='a'>
        
        <section className='a-aboutme'>
           <h1 className='a-title'>
              About <span className='me'>Me </span>
           </h1>
           <img src={bluu} alt="avatar" className='a-img-bluu' />
           <p className='a-description'>
           I am a highly motivated self taught programmer,
           my main interests include front-end web development
           design and blockchain technologies. I was first 
           properly introduced to crypto back in 2020. 
           I instantly saw how revolutionary and ground 
           breaking this technology is. From Bitcoin being
           a superior store of wealth asset which in my
           opinion beats gold, to Ethereum being a 'world computer'
           allowing for the development and deployment of
           decentralized applications such as decentralized exchanges,
           crowd funding, non fungible tokens, Decentralized Autonomous Organizations (DAO's)
           just to name a few. I recognise the opportunities that this space has presented and
           I am excited to be a part of the Web 3.0 revolution.
        </p>
       </section>
       
            <ul className='a-skills'>
                  My skills:
              <li>HTML/CSS/JS</li>
              <li>React.js</li>
              <li>Solidity / Ethereum Virtual Machine Development</li>
              <li>Serverless Dapps With Moralis</li>
              <li>Truffle Suite</li>
              <li>IPFS File hosting</li>
              <li>Web API's</li>
              <li>ERC-Token standards / NFT's and Cryptocurrency tokens</li>
              <li>Decentralized Finance</li>
              <li>Token economics</li>
              <li>Liquidity Pools</li>
              <li>Responsive User Interface Design</li>
              <li>Through understanding of Blockchain tech and web3</li>
            </ul>
           <div className='a-pointer-container'>
               <h1 className='a-pointer-text'>See some of my projects below!</h1>
           </div>
            

    </div>
  )
}

export default About