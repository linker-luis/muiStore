import React, { useEffect, useState } from 'react'
import { CarouselContainer, CarouselImg, CarouselItem, MyIconButton } from '../styles/Carousel'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { data } from '../constant/data';

function Carousel() {
    const [index, setIndex] = useState(0)
    const {img} = data[index]
    
    const getNext = () => {
        let newIndex = index + 1
        checkIndex(newIndex)
    }

    const getPrev = () => {
        let newIndex = index - 1
        checkIndex(newIndex)
    }

    const checkIndex = (ind) => {
        if(ind < 0){
            setIndex(data.length - 1)
        }
        else if(ind > data.length - 1){
            setIndex(0)
        }
        else {
            setIndex(ind)
        }
    }

    useEffect(() => {
        const slider = setInterval(() => {
                getNext()
            }, 5000)

        return () => {
            clearInterval(slider)
        }
    })

       
  return (
    <CarouselContainer>
        <CarouselItem>           
            <CarouselImg src = {img}  />            
        </CarouselItem>

        <MyIconButton size='large' disableRipple = {true} sx = {{left: '15px'}} onClick = {getPrev}>
            <KeyboardArrowLeftIcon fontSize='inherit'/>
        </MyIconButton>
        <MyIconButton size='large' disableRipple = {true} sx = {{right: '15px'}} onClick = {getNext}>
            <ChevronRightIcon fontSize="inherit"/>
        </MyIconButton>

    </CarouselContainer>
  )
}

export default Carousel

