import React from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
};

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    const categories = [
      "Все",
      "Мясные",
      "Вегетарианская",
      "Гриль",
      "Острые",
      "Закрытые",
    ];

    return (
      <div className="categories">
        <ul>
          {
            categories.map((categoryName, i) => (
              <li
                key={i}
                onClick={() => onChangeCategory(i)}
                className={value === i ? "active" : ""}
              >
                {categoryName}
              </li>
            ))
            // categories.map(function(value,index){
            //   return  <li onClick={()=>{onClickCategory(index)}} className={activeIndex === index ? "active" : ""}>{value}</li>
            // })
          }
        </ul>
      </div>
    );
  }
);

export default Categories;
