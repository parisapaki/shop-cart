import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";

export default function Store() {
  return (
    <Container>
      <div className="pt-8 m-5 text-2xl">محصولات</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to={`/products/${1}`}>
          <ProductItem />
        </Link>

        <Link to={`/products/${2}`}>
          <ProductItem />
        </Link>

        <Link to={`/products/${3}`}>
          <ProductItem />
        </Link>

        <Link to={`/products/${4}`}>
          <ProductItem />
        </Link>

        <Link to={`/products/${5}`}>
          <ProductItem />
        </Link>

        <Link to={`/products/${6}`}>
          <ProductItem />
        </Link>
      </div>
    </Container>
  );
}
