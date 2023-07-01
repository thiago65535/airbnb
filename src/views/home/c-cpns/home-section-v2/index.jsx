import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import { HomeSectionWrapperV2 } from "./style";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;

  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName);
  const tabNames = infoData.dest_address?.map((item) => item.name);

  const tabClickHandle = useCallback(function (index, name) {
    setName(name);
  }, []);
  return (
    <HomeSectionWrapperV2>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
      <SectionRooms
        roomList={infoData.dest_list?.[name]}
        itemWidth="33.3333%"
      />
      <SectionFooter name={name}/>
    </HomeSectionWrapperV2>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
