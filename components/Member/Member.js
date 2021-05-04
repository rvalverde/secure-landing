import { useState, useEffect, useContext } from "react";
import { AppContext } from "context/AppContext";

import Styles from "./Member.module.scss";
import DateBirth from "@components/DateBirth/DateBirth";
import Error from "@components/Error/Error";
import Select from "@components/Select/Select";
import formatDate from "@utils/formatDate";

const Member = ({ message, setMessage }) => {
  const { data, setData } = useContext(AppContext);
  const { userMembers } = data;

  const [member, setMember] = useState({
    id: 0,
    date: "",
    relation: "",
  });

  const createMembers = (member) => {
    setData({ ...data, userMembers: [...userMembers, member] });
  };

  const { id, relation, date } = member;

  const deleteMember = (id) => {
    setData({
      ...data,
      userMembers: userMembers.filter((member) => member.id !== id),
    });
  };

  const handleChangeDate = (event) => {
    setMessage({ ...message, userMembers: "" });
    setMember({ ...member, date: event });
  };

  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const addMember = () => {
    setMessage({ ...message, userMembers: "" });

    if (!date) {
      return setMessage({
        ...message,
        userMembers: "Debe ingresar la fecha de nacimiento",
      });
    }

    createMembers(member);
    setMember({ id: id + 1, date: date, relation: relation });
  };

  useEffect(() => {
    setMember({ ...member, relation: "Esposo" });
  }, []);

  return (
    <div className="my-2">
      <h4>Datos de los familiares</h4>

      <table className={Styles.member}>
        <thead>
          <tr>
            <th>
              <Select
                customClass="border-right-0 radius-right-0"
                options={["Esposo", "Cónyuge", "Hijo"]}
                name="relation"
                value={relation}
                onChange={handleChange}
              />
            </th>
            <th>
              <DateBirth
                textHolder="Fecha de nacimiento"
                icon="icon-date"
                customClass="radius-left-0"
                selected={date}
                onChange={handleChangeDate}
              />
            </th>
            <th className={Styles.member__option}>
              <button onClick={() => addMember()}>
                <span>AGREGAR</span>
                <i className="icon-plus"></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {userMembers &&
            userMembers.map((member) => (
              <tr key={member.id}>
                <td>{member.relation}</td>
                <td>{formatDate(member.date)}</td>
                <td className={Styles.member__option}>
                  <button onClick={() => deleteMember(member.id)}>
                    <span>ELIMINAR</span>
                    <i className="icon-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {message.userMembers && (
        <Error customClass="mt-n2">{message.userMembers}</Error>
      )}
    </div>
  );
};

export default Member;
