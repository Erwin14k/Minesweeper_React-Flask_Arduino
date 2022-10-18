import React from "react";
import bomb from "../Assets/bomb.png";
import { useState } from "react";
import "../index.css";

const ConfigGame = ({ data }) => {
    //Color states of the config matrix
    //Row 0
    const [color00, setColor00] = useState('green');
    const [color01, setColor01] = useState('green');
    const [color02, setColor02] = useState('green');
    const [color03, setColor03] = useState('green');
    //Row 1
    const [color10, setColor10] = useState('green');
    const [color11, setColor11] = useState('green');
    const [color12, setColor12] = useState('green');
    const [color13, setColor13] = useState('green');
    //Row 2
    const [color20, setColor20] = useState('green');
    const [color21, setColor21] = useState('green');
    const [color22, setColor22] = useState('green');
    const [color23, setColor23] = useState('green');
    //Row 3
    const [color30, setColor30] = useState('green');
    const [color31, setColor31] = useState('green');
    const [color32, setColor32] = useState('green');
    const [color33, setColor33] = useState('green');


    //Plant bomb state of the config matrix
    //Row 0
    const [button00, setButton00] = useState(true);
    function changeButton00() {
        setColor00("red");
        setButton00(false);
        
    }
    const [button01, setButton01] = useState(true);
    function changeButton01() {
        setColor01("red");
        setButton01(false);
    }
    const [button02, setButton02] = useState(true);
    function changeButton02() {
        setColor02("red");
        setButton02(false);
    }
    const [button03, setButton03] = useState(true);
    function changeButton03() {
        setColor03("red");
        setButton03(false);
    }
    //Row 1
    const [button10, setButton10] = useState(true);
    function changeButton10() {
        setColor10("red");
        setButton10(false);
    }
    const [button11, setButton11] = useState(true);
    function changeButton11() {
        setColor11("red");
        setButton11(false);
    }
    const [button12, setButton12] = useState(true);
    function changeButton12() {
        setColor12("red");
        setButton12(false);
    }
    const [button13, setButton13] = useState(true);
    function changeButton13() {
        setColor13("red");
        setButton13(false);
    }
    //Row 2
    const [button20, setButton20] = useState(true);
    function changeButton20() {
        setColor20("red");
        setButton20(false);
    }
    const [button21, setButton21] = useState(true);
    function changeButton21() {
        setColor21("red");
        setButton21(false);
    }
    const [button22, setButton22] = useState(true);
    function changeButton22() {
        setColor22("red");
        setButton22(false);
    }
    const [button23, setButton23] = useState(true);
    function changeButton23() {
        setColor23("red");
        setButton23(false);
    }
    //Row 3
    const [button30, setButton30] = useState(true);
    function changeButton30() {
        setColor30("red");
        setButton30(false);
    }
    const [button31, setButton31] = useState(true);
    function changeButton31() {
        setColor31("red");
        setButton31(false);
    }
    const [button32, setButton32] = useState(true);
    function changeButton32() {
        setColor32("red");
        setButton32(false);
    }
    const [button33, setButton33] = useState(true);
    function changeButton33() {
        setColor33("red");
        setButton33(false);
    }
    return(
        <div className="App">
            <header className="App-header">
                <nav className="navbar navbar-light" style={{backgroundColor:"#e3f2fd"}}>
                    <h1 className="title">
                        <img src={bomb} width="110" height="110" className="d-inline-block align-top" alt=""/>
                            Minesweeper
                    </h1>
                </nav>
                <h1 className="configTitle">Game Config</h1>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color00,backgroundImage:button00!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button00 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>0,0</h1>}
                                {button00 ?    <h5 className="card-text" style={{textAlign:"center"}}>0,0</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                                
                            </div>
                            {button00 &&<button type="button" className="btn btn-danger" onClick={changeButton00}>Implant Bomb</button>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color01,backgroundImage:button01!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button01 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>0,1</h1>}
                                {button01 ?    <h5 className="card-text" style={{textAlign:"center"}}>0,1</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                            </div>
                            {button01 &&<button type="button" className="btn btn-danger" onClick={changeButton01}>Implant Bomb</button>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color02,backgroundImage:button02!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button02 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>0,2</h1>}
                                {button02 ?    <h5 className="card-text" style={{textAlign:"center"}}>0,2</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                            </div>
                            {button02 &&<button type="button" className="btn btn-danger" onClick={changeButton02}>Implant Bomb</button>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color03,backgroundImage:button03!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button03 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>0,3</h1>}
                                {button03 ?    <h5 className="card-text" style={{textAlign:"center"}}>0,3</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                            </div>
                            {button03 &&<button type="button" className="btn btn-danger" onClick={changeButton03}>Implant Bomb</button>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color10,backgroundImage:button10!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button10 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>1,0</h1>}
                                {button10 ?    <h5 className="card-text" style={{textAlign:"center"}}>1,0</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                            </div>
                            {button10 &&<button type="button" className="btn btn-danger" onClick={changeButton10}>Implant Bomb</button>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color11,backgroundImage:button11!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button11 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>1,1</h1>}
                                {button11 ?    <h5 className="card-text" style={{textAlign:"center"}}>1,1</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                            </div>
                            {button11 &&<button type="button" className="btn btn-danger" onClick={changeButton11}>Implant Bomb</button>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color12,backgroundImage:button12!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button12 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>1,2</h1>}
                                {button12 ?    <h5 className="card-text" style={{textAlign:"center"}}>1,2</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                            </div>
                            {button12 &&<button type="button" className="btn btn-danger" onClick={changeButton12}>Implant Bomb</button>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color13,backgroundImage:button13!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button13 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>1,3</h1>}
                                {button13 ?    <h5 className="card-text" style={{textAlign:"center"}}>1,3</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                            </div>
                            {button13 &&<button type="button" className="btn btn-danger" onClick={changeButton13}>Implant Bomb</button>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color20,backgroundImage:button20!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button20 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>2,0</h1>}
                                {button20 ?    <h5 className="card-text" style={{textAlign:"center"}}>2,0</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                            </div>
                            {button20 &&<button type="button" className="btn btn-danger" onClick={changeButton20}>Implant Bomb</button>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color21,backgroundImage:button21!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button21 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>2,1</h1>}
                                {button21 ?    <h5 className="card-text" style={{textAlign:"center"}}>2,1</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                            </div>
                            {button21 &&<button type="button" className="btn btn-danger" onClick={changeButton21}>Implant Bomb</button>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color22,backgroundImage:button22!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button22 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>2,2</h1>}
                                {button22 ?    <h5 className="card-text" style={{textAlign:"center"}}>2,2</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                            </div>
                            {button22 &&<button type="button" className="btn btn-danger" onClick={changeButton22}>Implant Bomb</button>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color23,backgroundImage:button23!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button23 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>2,3</h1>}
                                {button23 ?    <h5 className="card-text" style={{textAlign:"center"}}>2,3</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                            </div>
                            {button23 &&<button type="button" className="btn btn-danger" onClick={changeButton23}>Implant Bomb</button>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color30,backgroundImage:button30!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button30 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>3,0</h1>}
                                {button30 ?    <h5 className="card-text" style={{textAlign:"center"}}>3,0</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                            </div>
                            {button30 &&<button type="button" className="btn btn-danger" onClick={changeButton30}>Implant Bomb</button>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color31,backgroundImage:button31!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button31 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>3,1</h1>}
                                {button31 ?    <h5 className="card-text" style={{textAlign:"center"}}>3,1</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                            </div>
                            {button31 &&<button type="button" className="btn btn-danger" onClick={changeButton31}>Implant Bomb</button>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color32,backgroundImage:button32!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button32 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>3,2</h1>}
                                {button32 ?    <h5 className="card-text" style={{textAlign:"center"}}>3,2</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                            </div>
                            {button32 &&<button type="button" className="btn btn-danger" onClick={changeButton32}>Implant Bomb</button>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:color33,backgroundImage:button33!==true? `url(${bomb})`: '',backgroundSize: "cover",backgroundPosition: "center center"}}>
                            <div className="card-body">
                                {button33 ?<h3 className="card-title" style={{textAlign:"center"}}>Safe Place</h3> :<h1 className="card-title" style={{textAlign:"center"}}>3,3</h1>}
                                {button33 ?    <h5 className="card-text" style={{textAlign:"center"}}>3,3</h5>:<h1 className="card-text" style={{textAlign:"center"}}>.</h1>}
                            </div>
                            {button33 &&<button type="button" className="btn btn-danger" onClick={changeButton33}>Implant Bomb</button>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 text-center">
                <br></br>
                <button type="button" className="btn btn-warning btn-lg" >Start Game</button>
            </div>    
        </div>
    );
};

export default ConfigGame;