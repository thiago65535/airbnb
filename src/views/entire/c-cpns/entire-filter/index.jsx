import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";
const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([]);

  function itemClickHandle(item) {
    const newSelectItems = [...selectItems];
    if (newSelectItems.includes(item)) {
      const index = newSelectItems.indexOf(item);
      newSelectItems.splice(index, 1);
    } else {
      newSelectItems.push(item);
    }
    setSelectItems(newSelectItems);
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={item}
              onClick={(e) => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
