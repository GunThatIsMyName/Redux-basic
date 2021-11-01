import React, { useState } from "react";
import styled from "styled-components"

const Modal = ()=>{
    const [isModalOpen,setModalOpen]=useState(false);
    const modalOepn=()=>{
        setModalOpen(!isModalOpen)
    }
    return(
        <>
            <div className="container">
                <h1>MODAL OPEN</h1>
                <button onClick={modalOepn} >open</button>
            </div>
            <Modaling className={`modal ${isModalOpen?"modal-open":null}`}>
                <div className="box">
                <h1 className="helo">MODAL</h1>
                <button onClick={modalOepn} >close</button>
                </div>
            </Modaling>
        </>
    )
}

const Modaling = styled.div`
    &.modal{
        position:fixed;
        top:0px;
        left: 0px;
        width:100vw;
        height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background-color:#22222290;
        visibility:hidden;
    }
    &.modal.modal-open{
        visibility:visible;
        .box{
            background-color:white;
            padding:4rem 8rem;
            text-align:center;
        }
    }
`;

export default Modal;