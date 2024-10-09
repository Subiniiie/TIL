import React from 'react';
import style from './Main.module.css'

export default function Main() {
  const randomIdx = Math.floor(Math.random() * 8) + 1;
  const imageUrl = `/background/background${randomIdx}.jpg`;

  const text = `I'm almost there, only one more step
                Left, right, left, right, left
                I'm moving on, I got no regrets
                Left, right, left, right, left`

  return (
    <>
        <img 
            src={imageUrl} 
            alt='image' 
            className={style.container}
        />
        <div className={style.blackContainer}>
            <p className={style.text}>{text}</p>
        </div>
    </>
  )
}
