import Container from "../container/Container";
import { TbHome } from "react-icons/tb";
import { MdOutlineStorefront } from "react-icons/md";
import { LuShoppingBasket } from "react-icons/lu";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  return (
    <div className="border py-1 shadow-md text-3xl">
      <Container>
        <div className="flex justify-between items-center">
          <ul className="flex justify-start gap-5">
            <li>
              <Link to="/">
                <TbHome />
              </Link>
            </li>
            <li>
              <Link to="/store">
                <MdOutlineStorefront />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <button>
                  <LuShoppingBasket />
                </button>
              </Link>
            </li>
          </ul>
          <img src={logo} alt="logo" width={120} height={120} />
        </div>
      </Container>
    </div>
  );
}
