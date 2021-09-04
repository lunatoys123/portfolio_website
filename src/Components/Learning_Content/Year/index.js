import React from "react";
import { useGlobalContext } from "../../../context";
import Table from "react-bootstrap/Table";
import { TableLayout } from "./Year.style";
const Year1 = () => {
  const { closeSubMenu } = useGlobalContext();
  return (
    <div onMouseOver={closeSubMenu}>
      <h1 align="center">Year 1</h1>
      <TableLayout>
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
          </tbody>
        </Table>
      </TableLayout>
    </div>
  );
};

export default Year1;
