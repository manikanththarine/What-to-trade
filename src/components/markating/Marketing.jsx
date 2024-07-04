import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import stoc from "../../accects/img.jpg"
import Leftsidebar from './Leftsidebar';
import Rightsidbar from './Rightsidbar';
import imag from "../../accects/paytm.jpg"
import ins from '../../accects/ins.png'



const Marketing = () => {
 
    const [blogdata, setBlogdata] = useState([
        {
            Createdby:"manikanth",
            title: "Sandur Manganese shares traded ex-bonus",
            image: stoc,
            date: "12/01/2024",
            paragraph: `Sandur Manganese shares traded ex-bonus today. As per the BSE filing of the company dated January 22, 2024,
            "Pursuant to Regulation 42 of SEBI (LODR) Regulations, 2015, the Board of Directors of the Company has fixed 
            Friday, 2 February 2024 as the Record Date for the purpose of determining the shareholders and their entitlement 
            for issue and allotment of Bonus Equity Shares.`
        },
        {
            Createdby:"manikanth",
            title: "Paytm News",
            image: imag,
            date: "02/02/2024",
            paragraph: `The role of fintechs in taking the country's economy on the path of growth is immense.
            Reserve Bank of India has given a major shock to Paytm, a major player in this segment. With this, 
            the Payments Bank, which is already struggling to survive the competitors, seems to have fallen 
            into more difficulties.`
        },
        {
            Createdby:"sri",
            title: "Way News",
            image: imag,
            date: "27/06/2024",
            paragraph: `Way2News, India's largest hyperlocal news app covers news from 400 districts and
             generating more than 4 billion screen views every month - that's 3 times the entire Indian 
             population.`
             }
    ])
    
localStorage.setItem("stock" ,JSON.stringify(blogdata))
    return (
        <>
            <Navbar />
            <marquee ><div className="marque">Today Deal login and sign up for best Contant</div></marquee>

            <div style={{ color: "black", marginLeft: "5.5%" }}>
                <Leftsidebar />
                <Rightsidbar />

                <div className='para'>
                    {/* <video width="400" controls >
                    <source src={Rama} type="video/mp4"/>

                        
                    </video> */}
                    {blogdata && blogdata.map((data, i) => {
                        return <>

                            <h1 style={{ fontSize: "bold" }}>
                                {data.title}
                            </h1>
                            <p><img style={{ width: "100%", height: "450px" }} src={data.image}></img>
                                {data.paragraph}
                            </p>
                            <hr></hr>
                            <br></br>
                        </>
                    })}


                </div>
                <hr/>

                <div >
                    <a href="https://www.instagram.com/whattotrade_wtt/"><img src={ins}  style={{width:"35px"}}></img></a>
                    <br/>
                    <br/>
                    All Rights Received @manikanth

                </div>
            </div>
        </>
    )
}

export default Marketing