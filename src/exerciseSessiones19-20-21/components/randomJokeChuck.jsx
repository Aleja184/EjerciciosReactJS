import React ,{useState,useEffect} from 'react';
import getRandomJoke from '../service/axiosService';
import { Checkbox, checkboxClasses } from '@mui/material';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';


const RandomJokeChuck = () => {
    const [check, setCheck] = useState(true);
    const [checkLike, setCheckLike] = useState(check);
    const [joke, setJoke] = useState(null);
    const [likes, setLikes] = useState(0);  
    const [dislikes, setDislikes] = useState(0);
    const [checkDislike, setCheckDislike] = useState(false);

    const obtainJoke = () =>{
        setCheck(true);
        if(checkLike){
            setCheckLike(false);
        }
        if(checkDislike){
            setCheckDislike(false);
        }
        getRandomJoke()
            .then((response)=>{
                setJoke(JSON.parse(response.data));
            })
    }

    function incrementLikes (){
        setCheck(!check);
        setCheckLike(check);
        if(check){
            setLikes(likes+1);
        }        
    }

    function incrementDislikes () {
        setCheck(!check);
        setCheckDislike(check);
        if(check){
            setDislikes(dislikes+1);
        }
    }

    
    return (
        <div>
            <h1>Random Jokes of Chuck Norris</h1>
            {joke ? 
            
                (<div>
                    <p>{joke.value}</p>
                    <Checkbox icon={<ThumbUpOffAltIcon></ThumbUpOffAltIcon>} checkedIcon={<ThumbUpAltIcon/>} onClick={incrementLikes} checked={checkLike}></Checkbox>
                    <Checkbox icon={<ThumbDownOffAltIcon />} checkedIcon={<ThumbDownAltIcon/>} onClick={incrementDislikes} checked={checkDislike}/>
                    <p>likes: {likes}</p>
                    <p>Dislikes: {dislikes}</p>
                </div>
                )
            
            : <p></p>}

            <button onClick={obtainJoke}>New joke</button>
        </div>
    );
}

export default RandomJokeChuck;
