
import { useState } from 'react';

export const CarouselControl = () => {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
}
