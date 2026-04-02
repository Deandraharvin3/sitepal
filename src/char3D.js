// import {
//     Link
// } from "react-router-dom";
import { SitePal } from 'sitepal-react-v2';

import { useState } from 'react';

import { isMobile } from 'react-device-detect';

function Char3D() {

    // const [sayAudio, setSayAudio] = useState(null)
    const [sayText, setSayText] = useState(null)
    const [silentCalled, setsilentCalled] = useState(false)

    const isSafari = navigator.userAgent.includes("Safari")
    const isCrios = navigator.userAgent.includes("CriOS")
    const isChrome = navigator.userAgent.includes("Chrome")

    // const sayAudioButton = () => {
    //     document.forms[0].message.value += "\n------- Say Audio Button Clicked ------- \n";
    //     if (!silentCalled && ((isSafari && !isCrios && !isChrome) || isMobile)) {

    //         window.saySilent(0);
    //         setsilentCalled(true);
    //     }
    //     setSayAudio(["sayAudioExample"]);
    // }

    const sayTextButton = () => {
        document.forms[0].message.value += "\n------- Say Text Button Clicked ------- \n";
        if (!silentCalled && ((isSafari && !isCrios && !isChrome) || isMobile)) {

            window.saySilent(0);
            setsilentCalled(true);
        }
        setSayText(['Hi Kids, I am Marie Van Brittan Brown. Are you ready to learn about my history?', 6, 1, 3]);
    }



    return (
        <div>
            <header className="main_header">
                <div className="left_div">
                    <div className="logo logo_heading">
                        <a href="/"><img src="/api/examples/images/logo.png" alt="SitePal" /></a>
                    </div>
                </div>
            </header>
            <table id="tblContainer" cellSpacing="0" align="center" border="0" width="50%" style={{ minHeight: '73vh' }}>
                <tbody>
                    <tr>
                        <td id="tdContent">
                            <p className="feature_entire_heading text-center f-bold h2" align="center"><b>Embed Your SitePal Scene in React</b></p>
                            {/* <p className="feature_entire_heading text-center" align="center">and Source Code</p> */}
                            <table align="center" width="90%">
                                <tbody>
                                    <tr>
                                        <td align="left">
                                            <table cellPadding='0' cellSpacing='0' border='0' width="90%">
                                                <tbody className="black10">

                                                    {/* <tr>

                                                        <td className="btn_parent">
                                                            <Link to="/api/examples/react/char2D"><button className="btn btn_child shadow " type="button" id="btn1"
                                                                value="2D ILLUSTRATED" >2D ILLUSTRATED</button></Link>
                                                            <Link to="/api/examples/react/char3D"><button className="btn btn_child shadow btn1" type="button" id="btn2"
                                                                value="3D PHOTOFACE" >3D PHOTOFACE</button></Link>
                                                            <Link to="/api/examples/react/charFB"><button className="btn btn_child shadow " type="button" id="btn3"
                                                                value="FULL BODY" >FULL BODY</button></Link>
                                                            <Link to="/api/examples/react/empty"> <button className="btn btn_child shadow " type="button" id="btn4"
                                                                value="EMPTY" >EMPTY</button></Link>
                                                            <button className="btn btn_child shadow" type="button" id="btn1"
                                                                value="SOURCE CODE" ><a className="download" href="/api/examples/react/sitepal-react.zip" download>DOWNLOAD SOURCE CODE</a></button>
                                                        </td>

                                                    </tr> */}
                                                </tbody>
                                            </table>
                                        </td>
                                        <td align="center">

                                            <table cellPadding='10' cellSpacing='0' border='0' width="350">
                                                <tbody>
                                                    <tr>
                                                        <td colSpan="2" align="center"></td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="2" align="center">
                                                            <SitePal embed='8412077,600,800,"",1,1,2774771,0,1,0,"psIaA29oSejWLdtrggWOVZa72aZh5dVr",0,0' sayText={sayText} />
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                    </tr>
                                                    <tr id="btn_disable_character" style={{ opacity: "0.5", pointerEvents: "none" }}>
                                                        {/* <td align="right">
                                                            <button onClick={sayAudioButton} className="btn btn_child shadow" type="button" id="btn1" value="SAYAUDIO" hidden>sayAudio()</button>
                                                        </td> */}
                                                        <td align="center">
                                                            <button onClick={sayTextButton}
                                                                className="btn btn_child shadow" type="button" id="btn1" value="SAYTEXT">sayText()</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td align="right">
                                            <form action="#" name="messageForm">
                                                <textarea cols="45" rows="16" name="message" className="feature_entire_heading" readOnly></textarea>
                                            </form>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <footer>
                <div className="footer-menu oddcast text-center">
                    <ul className="w-50 m-auto ">
                        <li className="w-100 f-bold ">Please feel free to use the source code of this page as an example.</li>
                        <li>To view the source code of this page, <a href="/api/examples/react/sitepal-react.zip" download>download</a> souce code
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
export default Char3D;