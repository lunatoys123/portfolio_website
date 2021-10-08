import React, { useState, useEffect, lazy } from "react";
import { useGlobalContext } from "../../../context";
import { BackGroundLayout } from "./Year.style";
import { GPAForHKBU, LearningDetails } from "../data";
import { useParams } from "react-router";

const Tabs = lazy(() => import("./Tabs"));
const Year = () => {
  const { closeSubMenu } = useGlobalContext();
  const [MainTitle, setMainTitle] = useState("");
  const { year } = useParams();

  useEffect(() => {
    const { MainTitle } = LearningDetails.find((Learn) => Learn.key === year);
    setMainTitle(MainTitle);
  }, [year]);

  return (
    <BackGroundLayout onMouseOver={closeSubMenu}>
      <h1>{MainTitle}</h1>

      <Tabs data={GPAForHKBU} Format={1} />
      <Tabs data={LearningDetails} Format={2} year={year} />
    </BackGroundLayout>
  );
};

export default Year;
