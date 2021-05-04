import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Styles from "./DateBirth.module.scss";

import Input from "@components/Input/Input";
import { subYears } from "date-fns";
import es from "date-fns/locale/es";

registerLocale("es", es);

const DateBirth = ({
  selected,
  onChange,
  onClick,
  textHolder,
  icon,
  customClass,
  name,
  adult,
}) => {
  const ageAdult = adult ? 18 : 0;
  const ageYear = subYears(new Date(), ageAdult);

  return (
    <DatePicker
      locale="es"
      wrapperClassName={Styles.datebirth}
      calendarClassName={Styles.datebirth__calendar}
      maxDate={ageYear}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      selected={selected}
      onChange={onChange}
      dateFormat="dd/MM/yyyy"
      name={name}
      customInput={
        <Input
          customClass={customClass}
          textHolder={textHolder}
          value={selected}
          onClick={onClick}
          onChange={onChange}
          icon={icon}
          name={name}
        />
      }
    />
  );
};

export default DateBirth;
