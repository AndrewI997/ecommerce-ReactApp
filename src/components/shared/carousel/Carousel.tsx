import React from 'react'
import s from './carousel.module.scss'

const Carousel = ({ carouselItems, }: any) => {

    let [onHover, setOnHover] = React.useState(false)
    const [active, setActive] = React.useState(0);
    let scrollInterval: any  = null;

    React.useEffect(() => {
        if (!onHover) {
            scrollInterval = setTimeout(() => {
                setActive((active + 1) % carouselItems.length)
            }, 3500)
        }
    })

    return (
            <div className={s.carousel}

                onMouseEnter={() => {
                    setOnHover(true)
                    clearTimeout(scrollInterval)
                }}

                onMouseLeave={() => setOnHover(false)
                }>
                {carouselItems.map((item: any, i: number) => {
                    const activeClass = active === i ? s.visible : '';

                    return React.cloneElement(item, {
                        key: i,
                        className: `${s.carouselItem + ' ' + activeClass}`,
                    })
                })}
                <div className={s.buttonPrev}
                
                    onClick={() => {
                        setActive(active !== 0 ? Math.abs((active - 1) % carouselItems.length) : carouselItems.length - 1)
                    }}
                ><span>&#10094;</span></div>
                <div className={s.buttonNext}

                    onClick={() => {
                        setActive((active + 1) % carouselItems.length)
                    }}
                ><span>&#10095;</span></div>
            </div>
    );
};

export default Carousel