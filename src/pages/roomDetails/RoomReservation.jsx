// import { formatDistance } from "date-fns";
// import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Button from "../../components/button/Button";
import Container from "../../components/shared/Container";
import Calender from "./Calender";

const RoomReservation = ({ room }) => {
  //   total.day * price;
  //   const totalDays = parseInt(
  //     formatDistance(new Date(room.to), new Date(room.from)).split(" ")[0]
  //   );
  //   //   console.log(totalDays);
  //   //Total   price calculation
  //   const totalPrice = totalDays * room.price;
  //   console.log(totalPrice);
  //   const [value,setValue] = useState({
  //     startDate: naw Date(room?.from)
  //     endDate: naw Date(room?.to)
  //  key:'selection'

  //   })
  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
        <div className="flex items-center gap-1 p-d">
          <div className="text-2xl font-semibold">$ {room?.price}</div>
          <div className="font-light text-neutral-600">Night</div>
        </div>
        <hr />
        <div className="flex justify-center items-center">
          <Calender></Calender>
        </div>
        <hr />
        <div className="p-4">
          <Button label={"Reserve"}></Button>
        </div>
        <hr />
        <div className="p-4 flex justify-between items-center font-semibold text-lg">
          <div>Total</div>
          {/* {totalPrice}  */}
          <div>$ {room?.price}</div>
        </div>
      </div>
    </Container>
  );
};

export default RoomReservation;
