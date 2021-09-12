import React from "react";
import { useGlobalContext } from "../../../context";
import { BackGroundLayout } from "./Year.style";
import Tabs from "./Tabs";
import { GPAForHKBU, LearningDetails } from "../data";
import { useParams } from "react-router";
const Year1 = () => {
  const { closeSubMenu } = useGlobalContext();
  const {year} = useParams();

  console.log(year);
  return (
    <BackGroundLayout onMouseOver={closeSubMenu}>
      <h1>{year}</h1>

      <Tabs data={GPAForHKBU} Format={1}/>
      <Tabs data={LearningDetails} Format={2} year={year}/>
    </BackGroundLayout>
  );
};

export default Year1;
