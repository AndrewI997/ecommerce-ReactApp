import React from 'react'
import s from './carousel.module.scss'
import Wrapper from '../wrapper/Wrapper';

const Carousel = ({ carouselItems, ...rest }: any) => {
    const [active, setActive] = React.useState(0);
    let scrollInterval: any = null;

    React.useEffect(() => {
        scrollInterval = setTimeout(() => {
            setActive((active + 1) % carouselItems.length);
        }, 2000);

        return () => clearTimeout(scrollInterval);
    });

    
    return (
        <Wrapper>
            <div className={s.carousel}>
                {carouselItems.map((item: any, index: any) => {
                    const activeClass = active === index ? s.visible : '';
                    return React.cloneElement(item, {
                        ...rest,
                        className: `${s.carouselItem + activeClass}`
                    });
                })}
            </div>
        </Wrapper>

    );
};

export default Carousel