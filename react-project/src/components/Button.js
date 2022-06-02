import { Button as Buttons } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../assets/css/ButtonLike.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import axios from "axios";
import { API_URL } from "../api/config";


const Button = (props) => {
    const [likeActive, setLikeActive] = useState(false)
    const [dislikeActive, setDislikeActive] = useState(false)
    const [countLike, setCountLike] = useState(0)
    const [countDislike, setCountDisLike] = useState(0)

    const changeData = async (status) => {
        try {
            await axios.get(`${API_URL}/post/${props.id}/${status}`, { withCredentials: true })
        } catch (error) {
            console.log(error)
        }
    }


    //console.log(data)
    const handleLike = () => {
        if (likeActive) {
            setCountLike(countLike - 1)
            setLikeActive(false)
            changeData('unlike');
        } else {
            setCountLike(countLike + 1)
            setLikeActive(true)
            changeData('like');
            if (dislikeActive) {
                if (countDislike === 0) {
                    setCountDisLike(0)
                } else {
                    setCountDisLike(countDislike - 1)
                    setDislikeActive(false)
                    setCountLike(countLike + 1)
                }
            }
        }
    }
    const handleDislike = () => {
        //console.log(props.id)
        if (dislikeActive) {
            setCountDisLike(countDislike - 1)
            setDislikeActive(false)

            changeData('undislike');

        } else {
            setCountDisLike(countDislike + 1)
            setDislikeActive(true)
            changeData('dislike');
            if (likeActive) {
                if (countLike === 0) {
                    setCountLike(0)
                } else {
                    setLikeActive(false)
                    setCountDisLike(countDislike + 1)
                    setCountLike(countLike - 1)
                }
            }
        }

    }

    useEffect(() => {
        setLikeActive(props.isLiked)
        setDislikeActive(props.isDisliked)
        setCountLike(props.likeCount)
        setCountDisLike(props.dislikeCount)
        // eslint-disable-next-line
    }, [])


    return (
        <>
            <div className="container-button">
                <div className={likeActive ? "button-like-active" : "button-like"}>
                    <Buttons
                        aria-label="Like Button"
                        className="like-button"
                        onClick={
                            handleLike
                        }
                    ><ThumbUpIcon
                            color="primary"
                        /></Buttons>
                    <p aria-label="Like Count">{countLike}</p>
                </div>
                <div className={dislikeActive ? "button-dislike-active" : "button-dislike"}>
                    <Buttons
                        aria-label="Dislike Button"
                        className="dislike-button"
                        onClick={
                            handleDislike
                        }
                    ><ThumbDownIcon
                            color="primary"
                        /></Buttons>
                    <p aria-label="Dislike Count">{countDislike}</p>
                </div>
            </div>
        </>
    )
}
export default Button;