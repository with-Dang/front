import { PurDetailData } from "./PurDetail.const";
import PurDetailInfo from "./PurDetailInfo";
import PurDetailMain from "./PurDetailMain";
import PurDetailMap from "./PurDetailMap";

const PurDetail = () => {
  const { id, name, location, price, rate, people, totalPeople } =
    PurDetailData;
  return (
    <>
      <PurDetailMain
        id={id}
        name={name}
        location={location}
        price={price}
        rate={rate}
        people={people}
        totalPeople={totalPeople}
      />
      <PurDetailMap />
      <PurDetailInfo />
    </>
  );
};

export default PurDetail;
