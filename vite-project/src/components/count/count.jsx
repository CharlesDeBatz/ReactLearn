import {useState} from "react";

export const Count = () => {
    const [value, setValue] = useState(0);

    const increase = () => {
        setValue(value + 1);
    };

    const decrease = () => {
        setValue(value - 1);
    };

    return (
        <div>
            <button onClick={decrease}>-</button>
            {value}
            <button onClick={increase}>+</button>
        </div>
    );
}