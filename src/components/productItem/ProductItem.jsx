import Product from "../../assets/Product.jpg";
import Container from "../container/Container";
export default function ProductItem() {
  return (
    <div className="border m-5 p-3 rounded-md">
      <img src={Product} alt="Product" className=" rounded-lg" />
      <div className="flex justify-between px-1 py-3">
        <div>تونر آنوا</div>
        <div className="text-gray-600">165 هزار تومان</div>
      </div>
    </div>
  );
}
