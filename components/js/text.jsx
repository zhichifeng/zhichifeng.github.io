"use client";
import  { useState, useEffect } from 'react';
import { TextAnimate } from "@/components/ui/TextAnimate" // 假设TextAnimate组件已经定义
const TextsComponent = () => {
    const texts = ["123", "456", "789"];
    const [currentIndex,setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if(currentIndex === texts.length - 1){
            setCurrentIndex(0);
        }else{
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
        // setCurrentIndex((currentIndex) => (currentIndex + 1) % texts.length);
      }, 2000);
  
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    return (
      <div>
        {/* {texts.map((text, index) => ( */}
            
          <TextAnimate
            key={currentIndex}
            text={texts[currentIndex]}
            type="fadeInUp"
            visible={ currentIndex ? 'true' : 'false'}
          />
        {/* ))} */}
      </div>
    );
  };


export default TextsComponent;