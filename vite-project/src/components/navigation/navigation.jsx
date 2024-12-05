import {useState} from "react";

export const Navigation = ({restaurants, setSelectedRestaurant}) => {
    return (
        <nav style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "10px" }}>
            {restaurants.map((restaurant) => (
                <button
                    key={restaurant.id} // Добавлен key для уникальности кнопки
                    onClick={() => setSelectedRestaurant(restaurant)} // Обработчик клика
                >
                    {restaurant.name}
                </button>
            ))}
        </nav>
    );
};