import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://672a7424976a834dd02376e7.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка... </>;
  }
  return (
    <div className="container">
      <img
        className="pizza-block__image"
        src={"https://pngimg.com/uploads/pizza/pizza_PNG43991.png"}
      />
      <h3>{pizza.title}</h3>
      FullPizza
      <h1>{pizza.price}$</h1>
    </div>
  );
};

export default FullPizza;
