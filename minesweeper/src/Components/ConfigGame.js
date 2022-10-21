import React from "react";
import bomb from "../Assets/bomb.png";
import luck from "../Assets/luck.png";
import check from "../Assets/check.png";
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

    //Color states of the game matrix
    //Row 0
    const [gameColor00, setGameColor00] = useState("#f1ca00");
    const [gameColor01, setGameColor01] = useState("#f1ca00");
    const [gameColor02, setGameColor02] = useState("#f1ca00");
    const [gameColor03, setGameColor03] = useState("#f1ca00");
    //Row 1
    const [gameColor10, setGameColor10] = useState("#f1ca00");
    const [gameColor11, setGameColor11] = useState("#f1ca00");
    const [gameColor12, setGameColor12] = useState("#f1ca00");
    const [gameColor13, setGameColor13] = useState("#f1ca00");
    //Row 2
    const [gameColor20, setGameColor20] = useState("#f1ca00");
    const [gameColor21, setGameColor21] = useState("#f1ca00");
    const [gameColor22, setGameColor22] = useState("#f1ca00");
    const [gameColor23, setGameColor23] = useState("#f1ca00");
    //Row 3
    const [gameColor30, setGameColor30] = useState("#f1ca00");
    const [gameColor31, setGameColor31] = useState("#f1ca00");
    const [gameColor32, setGameColor32] = useState("#f1ca00");
    const [gameColor33, setGameColor33] = useState("#f1ca00");


    //State to verify if the game is running
    const [inGame, setInGame] = useState(false);
    //State to verify the game Over
    const[gameOver,setGameOver]=useState(false);
    //State to control the game score
    const[score,setScore]=useState(0);
    
    const cleanConfig= async ()=>{
        setColor00("green");
        setButton00(true);
        setColor01("green");
        setButton01(true);
        setColor02("green");
        setButton02(true);
        setColor03("green");
        setButton03(true);
        setColor10("green");
        setButton10(true);
        setColor11("green");
        setButton11(true);
        setColor12("green");
        setButton12(true);
        setColor13("green");
        setButton13(true);
        setColor20("green");
        setButton20(true);
        setColor21("green");
        setButton21(true);
        setColor22("green");
        setButton22(true);
        setColor23("green");
        setButton23(true);
        setColor30("green");
        setButton30(true);
        setColor31("green");
        setButton31(true);
        setColor32("green");
        setButton32(true);
        setColor33("green");
        setButton33(true);
        const response = await fetch("http://localhost:5000/clean-config",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"97"}),
            }
        );
        await response.json();
    }

    const startGame= async ()=>{
        const response = await fetch("http://localhost:5000/start-game",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"98"}),
            }
        );
        await response.json();
        setInGame(true);

    }
    const gameOverBomb= async ()=>{
        const response = await fetch("http://localhost:5000/game-over",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"99"}),
            }
        );
        await response.json();
        setInGame(false);
    }
    //Plant bomb state of the config matrix
    //Row 0
    const [button00, setButton00] = useState(true);
    const changeButton00 = async () => {
        setColor00("red");
        setButton00(false);
        /*const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C00"}),
            }
        );
        await response.json();*/
    };
    const [button01, setButton01] = useState(true);
    const changeButton01 = async () => {
        setColor01("red");
        setButton01(false);
        const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C01"}),
            }
        );
        await response.json();
    };
    const [button02, setButton02] = useState(true);
    const changeButton02 = async () => {
        setColor02("red");
        setButton02(false);
        const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C02"}),
            }
        );
        await response.json();
    };
    const [button03, setButton03] = useState(true);
    const changeButton03 = async () => {
        setColor03("red");
        setButton03(false);
        const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C03"}),
            }
        );
        await response.json();
    };
    //Row 1
    const [button10, setButton10] = useState(true);
    const changeButton10 = async () => {
        setColor10("red");
        setButton10(false);
        const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C10"}),
            }
        );
        await response.json();
    };
    const [button11, setButton11] = useState(true);
    const changeButton11 = async () => {
        setColor11("red");
        setButton11(false);
        const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C11"}),
            }
        );
        await response.json();
    };
    const [button12, setButton12] = useState(true);
    const changeButton12 = async () => {
        setColor12("red");
        setButton12(false);
        const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C12"}),
            }
        );
        await response.json();
    };
    const [button13, setButton13] = useState(true);
    const changeButton13 = async () => {
        setColor13("red");
        setButton13(false);
        const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C13"}),
            }
        );
        await response.json();
    };
    //Row 2
    const [button20, setButton20] = useState(true);
    const changeButton20 = async () => {
        setColor20("red");
        setButton20(false);
        const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C20"}),
            }
        );
        await response.json();
    };
    const [button21, setButton21] = useState(true);
    const changeButton21 = async () => {
        setColor21("red");
        setButton21(false);
        const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C21"}),
            }
        );
        await response.json();
    };
    const [button22, setButton22] = useState(true);
    const changeButton22 = async () => {
        setColor22("red");
        setButton22(false);
        const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C22"}),
            }
        );
        await response.json();
    };
    const [button23, setButton23] = useState(true);
    const changeButton23 = async () => {
        setColor23("red");
        setButton23(false);
        const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C23"}),
            }
        );
        await response.json();
    };
    //Row 3
    const [button30, setButton30] = useState(true);
    const changeButton30 = async () => {
        setColor30("red");
        setButton30(false);
        const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C30"}),
            }
        );
        await response.json();
    };
    const [button31, setButton31] = useState(true);
    const changeButton31 = async () => {
        setColor31("red");
        setButton31(false);
        const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C31"}),
            }
        );
        await response.json();
    };
    const [button32, setButton32] = useState(true);
    const changeButton32 = async () => {
        setColor32("red");
        setButton32(false);
        const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C32"}),
            }
        );
        await response.json();
    };
    const [button33, setButton33] = useState(true);
    const changeButton33 = async () => {
        setColor33("red");
        setButton33(false);
        const response = await fetch("http://localhost:5000/config-bomb",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"C33"}),
            }
        );
        await response.json();
    };


    const [gameButton00, setGameButton00] = useState(true);
    const [url00, setUrl00] = useState(luck);
    const changeGame00 = async () => {
        if(!button00){
            setGameButton00(false);
            setGameColor00("red");
            setUrl00(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton00(false);
            setGameColor00("#45EE34");
            setUrl00(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G00"}),
            }
            );
            await response.json();*/
        }
    };

    const [gameButton01, setGameButton01] = useState(true);
    const [url01, setUrl01] = useState(luck);
    const changeGame01 = async () => {
        if(!button01){
            setGameButton01(false);
            setGameColor01("red");
            setUrl01(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton01(false);
            setGameColor01("#45EE34");
            setUrl01(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G01"}),
            }
            );
            await response.json();*/
        }
    };
    const [gameButton02, setGameButton02] = useState(true);
    const [url02, setUrl02] = useState(luck);
    const changeGame02 = async () => {
        if(!button02){
            setGameButton02(false);
            setGameColor02("red");
            setUrl02(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton02(false);
            setGameColor02("#45EE34");
            setUrl02(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G02"}),
            }
            );
            await response.json();*/
        }
    };
    const [gameButton03, setGameButton03] = useState(true);
    const [url03, setUrl03] = useState(luck);
    const changeGame03 = async () => {
        if(!button03){
            setGameButton03(false);
            setGameColor03("red");
            setUrl03(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton03(false);
            setGameColor03("#45EE34");
            setUrl03(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G03"}),
            }
            );
            await response.json();*/
        }
    };
    const [gameButton10, setGameButton10] = useState(true);
    const [url10, setUrl10] = useState(luck);
    const changeGame10 = async () => {
        if(!button10){
            setGameButton10(false);
            setGameColor10("red");
            setUrl10(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton10(false);
            setGameColor10("#45EE34");
            setUrl10(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G10"}),
            }
            );
            await response.json();*/
        }
    };

    const [gameButton11, setGameButton11] = useState(true);
    const [url11, setUrl11] = useState(luck);
    const changeGame11 = async () => {
        if(!button11){
            setGameButton11(false);
            setGameColor11("red");
            setUrl11(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton11(false);
            setGameColor11("#45EE34");
            setUrl11(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G11"}),
            }
            );
            await response.json();*/
        }
    };
    const [gameButton12, setGameButton12] = useState(true);
    const [url12, setUrl12] = useState(luck);
    const changeGame12 = async () => {
        if(!button12){
            setGameButton12(false);
            setGameColor12("red");
            setUrl12(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton12(false);
            setGameColor12("#45EE34");
            setUrl12(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G12"}),
            }
            );
            await response.json();*/
        }
    };
    const [gameButton13, setGameButton13] = useState(true);
    const [url13, setUrl13] = useState(luck);
    const changeGame13 = async () => {
        if(!button13){
            setGameButton13(false);
            setGameColor13("red");
            setUrl13(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton13(false);
            setGameColor13("#45EE34");
            setUrl13(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G13"}),
            }
            );
            await response.json();*/
        }
    };
    const [gameButton20, setGameButton20] = useState(true);
    const [url20, setUrl20] = useState(luck);
    const changeGame20 = async () => {
        if(!button20){
            setGameButton20(false);
            setGameColor20("red");
            setUrl20(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton20(false);
            setGameColor20("#45EE34");
            setUrl13(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G20"}),
            }
            );
            await response.json();*/
        }
    };
    const [gameButton21, setGameButton21] = useState(true);
    const [url21, setUrl21] = useState(luck);
    const changeGame21 = async () => {
        if(!button21){
            setGameButton21(false);
            setGameColor21("red");
            setUrl21(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton21(false);
            setGameColor21("#45EE34");
            setUrl21(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G21"}),
            }
            );
            await response.json();*/
        }
    };
    const [gameButton22, setGameButton22] = useState(true);
    const [url22, setUrl22] = useState(luck);
    const changeGame22 = async () => {
        if(!button22){
            setGameButton22(false);
            setGameColor22("red");
            setUrl22(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton22(false);
            setGameColor22("#45EE34");
            setUrl22(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G22"}),
            }
            );
            await response.json();*/
        }
    };

    const [gameButton23, setGameButton23] = useState(true);
    const [url23, setUrl23] = useState(luck);
    const changeGame23 = async () => {
        if(!button23){
            setGameButton23(false);
            setGameColor23("red");
            setUrl23(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton23(false);
            setGameColor23("#45EE34");
            setUrl23(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G23"}),
            }
            );
            await response.json();*/
        }
    };
    const [gameButton30, setGameButton30] = useState(true);
    const [url30, setUrl30] = useState(luck);
    const changeGame30 = async () => {
        if(!button30){
            setGameButton30(false);
            setGameColor30("red");
            setUrl30(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton30(false);
            setGameColor30("#45EE34");
            setUrl30(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G30"}),
            }
            );
            await response.json();*/
        }
    };
    const [gameButton31, setGameButton31] = useState(true);
    const [url31, setUrl31] = useState(luck);
    const changeGame31 = async () => {
        if(!button31){
            setGameButton31(false);
            setGameColor31("red");
            setUrl31(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton31(false);
            setGameColor31("#45EE34");
            setUrl31(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G31"}),
            }
            );
            await response.json();*/
        }
    };
    const [gameButton32, setGameButton32] = useState(true);
    const [url32, setUrl32] = useState(luck);
    const changeGame32 = async () => {
        if(!button32){
            setGameButton32(false);
            setGameColor32("red");
            setUrl32(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton32(false);
            setGameColor32("#45EE34");
            setUrl32(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G32"}),
            }
            );
            await response.json();*/
        }
    };
    const [gameButton33, setGameButton33] = useState(true);
    const [url33, setUrl33] = useState(luck);
    const changeGame33 = async () => {
        if(!button33){
            setGameButton33(false);
            setGameColor33("red");
            setUrl33(bomb);
            gameOverBomb();
        }else{
            setScore(score+1);
            setGameButton33(false);
            setGameColor33("#45EE34");
            setUrl33(check);
            /*const response = await fetch("http://localhost:5000/game-verify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":"G33"}),
            }
            );
            await response.json();*/
        }
    };
    if(!inGame){
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
                    <button type="button" className="btn btn-info btn-lg" onClick={cleanConfig}>Clean</button>
                </div> 
                <div className="col-md-12 text-center">
                    <br></br>
                    <button type="button" className="btn btn-warning btn-lg" onClick={startGame} >Start Game</button>
                </div>  
            </div>
        );
    }else{
        return(
            <div className="App">
                <header className="App-header">
                    <nav className="navbar navbar-light" style={{backgroundColor:"#e3f2fd"}}>
                        <h1 className="title">
                            <img src={bomb} width="110" height="110" className="d-inline-block align-top" alt=""/>
                                Minesweeper
                        </h1>
                    </nav>
                    <h1 className="configTitle">Game Score: {score}</h1>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor00,backgroundImage:`url(${url00})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton00 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton00 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton00 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton00 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton00 &&<button type="button" className="btn btn-danger" onClick={changeGame00}>Try Luck!</button>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor01,backgroundImage:`url(${url01})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton01 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton01 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton01 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton01 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton01 &&<button type="button" className="btn btn-danger" onClick={changeGame01}>Try Luck!</button>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor02,backgroundImage:`url(${url02})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton02 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton02 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton02 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton02 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton02 &&<button type="button" className="btn btn-danger" onClick={changeGame02}>Try Luck!</button>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor03,backgroundImage:`url(${url03})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton03 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton03 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton03 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton03 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton03 &&<button type="button" className="btn btn-danger" onClick={changeGame03}>Try Luck!</button>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor10,backgroundImage:`url(${url10})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton10 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton10 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton10 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton10 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton10 &&<button type="button" className="btn btn-danger" onClick={changeGame10}>Try Luck!</button>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor11,backgroundImage:`url(${url11})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton11 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton11 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton11 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton11 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton11 &&<button type="button" className="btn btn-danger" onClick={changeGame11}>Try Luck!</button>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor12,backgroundImage:`url(${url12})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton12 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton12 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton12 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton12 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton12 &&<button type="button" className="btn btn-danger" onClick={changeGame12}>Try Luck!</button>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor13,backgroundImage:`url(${url13})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton13 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton13 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton13 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton13 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton13 &&<button type="button" className="btn btn-danger" onClick={changeGame13}>Try Luck!</button>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor20,backgroundImage:`url(${url20})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton20 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton20 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton20 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton20 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton20 &&<button type="button" className="btn btn-danger" onClick={changeGame20}>Try Luck!</button>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor21,backgroundImage:`url(${url21})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton21 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton21 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton21 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton21 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton21 &&<button type="button" className="btn btn-danger" onClick={changeGame21}>Try Luck!</button>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor22,backgroundImage:`url(${url22})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton22 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton22 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton22 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton22 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton22 &&<button type="button" className="btn btn-danger" onClick={changeGame22}>Try Luck!</button>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor23,backgroundImage:`url(${url23})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton23 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton23 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton23 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton23 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton23 &&<button type="button" className="btn btn-danger" onClick={changeGame23}>Try Luck!</button>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor30,backgroundImage:`url(${url30})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton30 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton30 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton30 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton30 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton30 &&<button type="button" className="btn btn-danger" onClick={changeGame30}>Try Luck!</button>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor31,backgroundImage:`url(${url31})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton31 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton31 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton31 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton31 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton31 &&<button type="button" className="btn btn-danger" onClick={changeGame31}>Try Luck!</button>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor32,backgroundImage:`url(${url32})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton32 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton32 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton32 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton32 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton32 &&<button type="button" className="btn btn-danger" onClick={changeGame32}>Try Luck!</button>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-white  mb-3" style={{maxWidth: "12rem",backgroundColor:gameColor33,backgroundImage:`url(${url33})`,backgroundSize: "cover",backgroundPosition: "center center"}}>
                                <div className="card-body">
                                    {gameButton33 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :<h1 className="card-title" style={{textAlign:"center",color:"#f77bac"}}>.</h1>}
                                    {gameButton33 ?<h3 className="card-title" style={{textAlign:"center"}}>.</h3> :""}
                                    {gameButton33 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:<h1 className="card-text" style={{textAlign:"center",color:"black"}}>.</h1>}
                                    {gameButton33 ?    <h5 className="card-text" style={{textAlign:"center"}}>.</h5>:""}
                                    
                                </div>
                                {gameButton33 &&<button type="button" className="btn btn-danger" onClick={changeGame33}>Try Luck!</button>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <br></br>
                    <button type="button" className="btn btn-warning btn-lg" >Config Game</button>
                </div>  
            </div>
        );

    }
};

export default ConfigGame;