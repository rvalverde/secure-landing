import { useState } from "react";
import Styles from "./Resume.module.scss";
import Collapse from "@components/Collapse/Collapse";

const Resume = ({ members }) => {
  return (
    <div className={Styles.resume}>
      <Collapse
        title={`Tienes (${members.length}) asegurados`}
        subtitle={"Resumen del plan"}
      >
        <table>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.relation}</td>
                <td>
                  <span className={Styles.resume__small}>S/</span> 40
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Pago total mensual</td>
              <td>S/ 160</td>
            </tr>
          </tfoot>
        </table>
      </Collapse>
    </div>
  );
};

export default Resume;
