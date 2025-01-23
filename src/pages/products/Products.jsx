import { useParams } from "react-router-dom";
import Product from "../../assets/Product.jpg";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

export default function Products() {
  const { id } = useParams();
  console.log(id);

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-6 m-6 items-center">
        <div className="rounded-2xl lg:col-span-2 max-w-full overflow-hidden">
          <img
            src={Product}
            alt="Product"
            className="rounded-xl w-full h-auto"
          />
        </div>
        <div className="rounded-2xl lg:col-span-3 flex flex-col justify-between h-full mx-6 lg:mx-12">
          <div>
            <h1 className="font-bold text-3xl text-center mb-6">تونر آنوا</h1>
            <p className="text-justify leading-relaxed mb-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div className="flex flex-col items-center mb-6">
            <p className="font-bold text-2xl text-gray-800 mb-4">
              قیمت: 165 هزار تومان
            </p>
            <Button
              className="w-full sm:w-auto px-32 py-2 bg-green-600 text-white rounded-lg shadow-md transform transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => console.log("Product added to cart")}
            >
              افزودن به سبد خرید
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
