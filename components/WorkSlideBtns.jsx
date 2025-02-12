'use client'
import { useSwiper } from "swiper/react"
import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'
const WorkSlideBtns = ({containerStyles,btnSyles,iconsStyles}) => {
    const swiper = useSwiper()
  return (
    <div className={containerStyles}>
        <button className={btnSyles}>
            <PiCaretLeftBold className={iconsStyles} onClick={()=> swiper.slidePrev()}/>
        </button>
        <button className={btnSyles}>
            <PiCaretRightBold className={iconsStyles} onClick={()=> swiper.slideNext()}/>
        </button>
    </div>
  )
}

export default WorkSlideBtns