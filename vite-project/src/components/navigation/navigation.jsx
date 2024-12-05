export const Navigation = ({restaurants, selectedRestaurantId, setSelectedRestaurant}) => {
    return (
        <nav style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "10px" }}>
            {restaurants.map((restaurant) => (
                <button
                    key={restaurant.id} // Добавлен key для уникальности кнопки
                    onClick={() => setSelectedRestaurant(restaurant.id)} // Обработчик клика
                    disabled={selectedRestaurantId === restaurant.id} // Кнопка неактивна, если ресторан выбран
                >
                    {restaurant.name}
                </button>
            ))}
        </nav>
    );
};