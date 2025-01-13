import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";

export default function Store() {
  return (
    <Container>
      <div className="pt-8 m-5 text-2xl">محصولات</div>
      <div className="grid grid-cols-4">
        <Link to={`/product/${1}`}>
          <ProductItem />
        </Link>

        <Link to={`/product/${2}`}>
          <ProductItem />
        </Link>

        <Link to={`/product/${3}`}>
          <ProductItem />
        </Link>

        <Link to={`/product/${4}`}>
          <ProductItem />
        </Link>

        <Link to={`/product/${5}`}>
          <ProductItem />
        </Link>

        <Link to={`/product/${6}`}>
          <ProductItem />
        </Link>
      </div>
    </Container>
  );
}
