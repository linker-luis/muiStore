import React, { useState } from 'react'
import { CarouselContainer, CarouselImg, CarouselItem, MyIconButton } from '../styles/Carousel'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Carousel() {
    const [index, setIndex] = useState(0)
    const { img} = data[index]
    
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

const data = [
    {
        title: 'content 1',
        img: 'https://home.ripley.com.pe/minisitios/home/huincha/22/04/26/webp/1.webp?v4'
    },
    {
        title: 'content 2',
        img: 'https://oechsle.vteximg.com.br/arquivos/Slider-moda-homemama-2304-desktop-b.png'
    },
    {
        title: 'content 3',
        img: 'https://oechsle.vteximg.com.br/arquivos/Slider-electro-calzadito-2304-desktop-b.png'
    },
    {
        title: 'content 4',
        img: 'https://oechsle.vteximg.com.br/arquivos/vitrina_encuentratutalla_oe_desktop.png'
    }
]