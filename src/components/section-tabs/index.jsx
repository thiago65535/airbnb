import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { SectionTabsWrapper } from "./style";
import classNames from "classnames";
import ScrollView from "@/base-ui/scroll-view";

const SectionTabs = memo((props) => {
  const { tabNames ,tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  function itemClickHandle(index,name) {
    setCurrentIndex(index);
    tabClick(index,name)
  }
  return (
    <SectionTabsWrapper>
      <ScrollView>
      {tabNames?.map((item, index) => {
        return (
          <div
            className={classNames("item",{active:index===currentIndex})}
            onClick={(e) => itemClickHandle(index,item)}
            key={item}
          >
            {item}
          </div>
        );
      })}
      </ScrollView>
    </SectionTabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick:PropTypes.func
};

export default SectionTabs;
