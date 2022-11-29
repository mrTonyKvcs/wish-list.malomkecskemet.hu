import { Item } from "../../types/Information";

const InformationItem = ({ label, text }: Item) => {
  return (
    <p className="mb-3 text-2xl text-justify uppercase">
      <strong className="text-black">{label}:</strong>{" "}
      <span className="font-bold text-red-malom">{text}</span>
    </p>
  );
};

export default InformationItem;