import React, { useState } from "react";
import { useGlobalContext } from "../../../context";
import Table from "react-bootstrap/Table";
import { BackGroundLayout } from "./Year.style";
import Tabs from "./Tabs";
const Year1 = () => {
  const { closeSubMenu } = useGlobalContext();

  const element = (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Grade</th>
            <th>Academic Performance</th>
            <th>GPA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>Excellent</td>
            <td>4.0</td>
          </tr>
          <tr>
            <td>A-</td>
            <td>Excellent</td>
            <td>3.67</td>
          </tr>
          <tr>
            <td>B+</td>
            <td>Good</td>
            <td>3.33</td>
          </tr>
          <tr>
            <td>B</td>
            <td>Good</td>
            <td>3.00</td>
          </tr>
          <tr>
            <td>B-</td>
            <td>Good</td>
            <td>2.67</td>
          </tr>
          <tr>
            <td>C+</td>
            <td>Satisfactory</td>
            <td>2.33</td>
          </tr>
          <tr>
            <td>C</td>
            <td>Satisfactory</td>
            <td>2.00</td>
          </tr>
          <tr>
            <td>C-</td>
            <td>Satisfactory</td>
            <td>1.67</td>
          </tr>
          <tr>
            <td>D</td>
            <td>Marginal Pass</td>
            <td>1.00</td>
          </tr>
          <tr>
            <td>E</td>
            <td>Conditional Pass</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>F</td>
            <td>Failure</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>DT</td>
            <td>Distinction</td>
            <td>Not Include in GPA</td>
          </tr>
          <tr>
            <td>I</td>
            <td>Distinction</td>
            <td>Not Include in GPA</td>
          </tr>
          <tr>
            <td>S</td>
            <td>Satisfactory</td>
            <td>Not Include in GPA</td>
          </tr>
          <tr>
            <td>U</td>
            <td>Unsatisfactory</td>
            <td>Not Include in GPA</td>
          </tr>
          <tr>
            <td>W</td>
            <td>Withdrawn</td>
            <td>Not Include in GPA</td>
          </tr>
          <tr>
            <td>YR</td>
            <td>Year Grade</td>
            <td>Not Include in GPA</td>
          </tr>
          <tr>
            <td>NR</td>
            <td>Not Yet Reported</td>
            <td>Not Include in GPA</td>
          </tr>
          <tr>
            <td>PR</td>
            <td>Project to be Resubmitted</td>
            <td>Not Include in GPA</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
  return (
    <BackGroundLayout onMouseOver={closeSubMenu}>
      <h1 align="center">Year 1 </h1>

      <Tabs element={element} />
    </BackGroundLayout>
  );
};

export default Year1;
