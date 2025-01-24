import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

export default function Cart() {
  return (
    <Container>
      <div className="p-6 m-6">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />

        <div className="bg-gray-200 my-6 mx-16 p-6 rounded-md">
          <p>قیمت کل:{11}</p>
          <p>تخفیف شما:{11}</p>
          <p>قیمت نهایی:{11}</p>
        </div>
        <div className="flex justify-end mx-16">
          <Button className="bg-green-500 text-white px-5 py-1 rounded-md">
            ثبت سفارش
          </Button>
        </div>
      </div>
    </Container>
  );
}
