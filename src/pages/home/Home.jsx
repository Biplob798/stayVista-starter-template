import { Helmet } from "react-helmet-async";
import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/rooms/Rooms";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Home & condo Rentals</title>
      </Helmet>
      {/* Category section */}
      <Categories></Categories>
      {/* Room section */}
      <Rooms></Rooms>
    </div>
  );
};

export default Home;
