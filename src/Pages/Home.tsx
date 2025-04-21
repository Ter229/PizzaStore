import "../scss/app.scss";
import Categories from "../Components/Categories/Categories.tsx";
import Sort from "../Components/Sort/Sort.tsx";
import PizzaBlock from "../Components/PizzaBlock/index.tsx";
import Skeleton from "../Components/PizzaBlock/Skeleton.tsx";
import React, { useCallback, useEffect, useRef } from "react";
import Pagination from "../Components/Pagination/index.tsx";
import { useSelector } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice.ts";
import { fetchPizzas } from "../redux/slices/pizzaSlice.ts";
import { useAppDispatch } from "../redux/store.ts";

const Home: React.FC = () => {
  const { categoryId, currentPage, searchValue } = useSelector(
    (state: any) => state.filter
  );
  const dispatch = useAppDispatch();
  const sortType = useSelector((state: any) => state.filter.sort.sortProperty);
  const { items, status } = useSelector((state: any) => state.pizza);
  const isSearch = useRef(false);

  const onChangeCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const getPizzas = () => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    dispatch(
      fetchPizzas({
        category,
        currentPage,
        sortType,
      })
    );
  };

  useEffect(() => {
    getPizzas();
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items
    .filter((obj: any) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }

      return false;
    })
    .map((obj: any) => <PizzaBlock {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(i) => onChangeCategory(i)}
        />
        <Sort />
      </div>
      <h2 className="content__title">
        Все пиццы
        {status === "error" ? (
          <div>
            <h2>Произошла ошибка</h2>
            <p>Не удалось получить пиццы</p>
          </div>
        ) : (
          <div className="content__items">
            {status === "loading" ? skeletons : pizzas}
          </div>
        )}
      </h2>

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
