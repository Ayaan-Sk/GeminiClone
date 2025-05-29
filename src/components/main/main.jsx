import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">

        {!showResult
        ?<> 
            <div className="greet">
            <p><span>Hello, User</span></p>
            <p>How can I Help you Today</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>generate an beautiful image</p>
                <img src={assets.compass_icon} alt="" />
            </div>
             <div className="card">
                <p>summerize paragraph for me</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
             <div className="card">
                <p>suggest beautiful places to see on road trip</p>
                <img src={assets.message_icon} alt="" />
            </div>
             <div className="card">
                <p>what is java script</p>
                <img src={assets.code_icon} alt="" />
            </div>   
        </div>
        </>
        :<div className='result'>
            <div className='result-title'>
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading
                ?<div className='loader'>
                    <hr />
                    <hr />
                    <hr /> 
                </div>
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
            </div>
        </div>
        }

        
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">This is an clone of Gemini made by Ayaan Sheikh you can check out my GitHub and give a Star</p>
        </div>
      </div>
    </div>
  )
}

export default main
