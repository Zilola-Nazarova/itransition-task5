import Errors from "./Errors";
import Region from "./Region";
import Seed from "./Seed";
import Export from "./Export";

const Navbar = () => {
  return(
    <nav>
      <Region />
      <Errors />
      <Seed />
      <Export />
    </nav>
  );
};

export default Navbar;
