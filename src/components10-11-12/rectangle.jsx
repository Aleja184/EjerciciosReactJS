import React , {useState} from 'react';

const Rectangle = () => {
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    
    const styleRect = {
        width : '255px',
        height : '255px',
        backgroundColor : 'black'
    }


    const [boolMO, setBoolMO] = useState(false);

    const [style, setStyle] = useState(styleRect);

    const verificationMouseOver = () =>{
        setBoolMO(true);
    }

    const verificationMouseOut = () =>{
        setBoolMO(false);
    }

    const mouseOver = () =>{
        if(boolMO){
            setTimeout(() =>{
                setStyle({
                    width : '255px',
                    height : '255px',
                    backgroundColor : `rgb(${red},${green},${blue})`
                })
            },100);
        }else{
            clearTimeout();
        }
    }

    mouseOver();

    


        
    

    return (
        <div>
            <canvas style={style} onMouseOver={verificationMouseOver} onMouseOut={verificationMouseOut} onDoubleClick={verificationMouseOut}></canvas>
        </div>
    );
}

export default Rectangle;
