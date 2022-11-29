import { allInformations } from "../../constants/information";
import InformationItem from "./InformationItem";

const InformationList = () => {
  return (
    <>
      {allInformations.map((item) => {
        return (
          <InformationItem
            key={item.label}
            label={item.label}
            text={item.text}
          />
        );
      })}
    </>
  );
};

export default InformationList;
