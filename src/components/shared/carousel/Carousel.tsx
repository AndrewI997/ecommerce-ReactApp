import React from 'react'
import s from './carousel.module.scss'
import Wrapper from '../wrapper/Wrapper';

const Carousel = ({ carouselItems, }: any) => {

    let [onHover, setOnHover] = React.useState(false)
    const [active, setActive] = React.useState(0);
    let scrollInterval: any = null;

    React.useEffect(() => {
        if (!onHover) {
            scrollInterval = setTimeout(() => {
                setActive((active + 1) % carouselItems.length)
            }, 3000)
        }
    })

    return (
        <Wrapper>
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
                <span className={s.buttonPrev}
                
                    onClick={() => {
                        setActive(active !== 0 ? Math.abs((active - 1) % carouselItems.length) : 2)
                    }}
                >PREV</span>
                <span className={s.buttonNext}

                    onClick={() => {
                        setActive((active + 1) % carouselItems.length)
                    }}
                >NEXT</span>
            </div>
        </Wrapper>

    );
};

export default Carousel