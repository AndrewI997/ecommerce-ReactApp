import React from 'react'
import s from './carousel.module.scss'
import Wrapper from '../wrapper/Wrapper';
import { hover } from '@testing-library/user-event/dist/hover';

const Carousel = ({ carouselItems, }: any) => {

    let [hoverSlide, setHoverSlide] = React.useState(false)
    let [interval, setInterval] = React.useState(0)

    const [active, setActive] = React.useState(0);
    let scrollInterval: any = null;

   

    React.useEffect(() => {
        if(!hoverSlide){
            scrollInterval = setTimeout(() => {
                 setActive((active + 1) % carouselItems.length);
            }, interval);
            if (interval === 0) {
                setInterval(3000)
            }
        } 
        // return () => clearTimeout(scrollInterval);
    });

    
    return (
        <Wrapper>
            <div className={s.carousel}>
                {carouselItems.map((item: any, i: number) => {
                    const activeClass = active === i ? s.visible : '';

                    return React.cloneElement(item, {
                        key: i,
                        className: `${s.carouselItem + ' ' + activeClass}`,
                        onMouseEnter: () => {
                            setHoverSlide(true)
                            clearTimeout(scrollInterval)
                            setInterval(0)
                        },
                        onMouseLeave: () => {setHoverSlide(false)}
                    });
                })}
            </div>
        </Wrapper>

    );
};

export default Carousel