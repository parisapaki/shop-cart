import Container from "../container/Container";
import Product from "../../assets/Product.jpg";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export default function CartItem() {
  return (
    <Container>
      <div className="flex border-b">
        <img
          src={Product}
          alt=""
          srcset=""
          width={150}
          height={150}
          className=" rounded-lg my-3"
        />

        <div className="mx-3">
          <h2>عنوان محصول</h2>
          <button className="bg-amber-400 p-1.5 rounded-md">
            <FaPlus />
          </button>
          <button className="mx-2">{2}</button>
          <button className="bg-amber-400 p-1.5 rounded-md">
            <FaMinus />
          </button>
          <button className="bg-red-500 p-1.5 rounded-md mx-2">
            <FaRegTrashCan />
          </button>
        </div>
      </div>
    </Container>
  );
}
