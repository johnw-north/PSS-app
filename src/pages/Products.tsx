import Product from "../components/Card/Product";

function Products() {
  return (
    <>
      <section className="py-4">
        <h2 className="text-center text-4xl font-bold font-gummy">New</h2>
        <div className="gap-2 py-4 px-2 grid grid-cols-2 sm:grid-cols-3 sm:px-4 sm:gap-4 md:grid-cols-4">
          <Product
            image="PSS-app/Products/IMG-20260228-WA0002.jpg"
            title="Fantasy Books"
            price={10}
          />
          <Product
            image="PSS-app/Products/IMG-20260228-WA0004.jpg"
            title="Cat in a Box"
            price={12}
          />
          <Product
            image="PSS-app/Products/IMG-20260228-WA0007.jpg"
            title="Daisy"
            price={10}
          />
          <Product
            image="/PSS-app/Products/IMG-20260228-WA0008.jpg"
            title="Strawberry Cream TikTakToe"
            price={25}
          />
        </div>
      </section>

      <section className="py-4">
        <h2 className="text-center text-4xl font-bold font-gummy">
          All Products
        </h2>
        <div className="gap-2 py-4 px-2 grid grid-cols-2 sm:grid-cols-3 sm:px-4 sm:gap-4 md:grid-cols-4">
          <Product
            image="/PSS-app/Products/IMG-20260228-WA0010.jpg"
            title="Choco Bar"
            price={12}
          />
          <Product
            image="/PSS-app/Products/IMG-20260228-WA0011.jpg"
            title="Ice Cream Cone"
            price={8}
          />
          <Product
            image="/PSS-app/Products/IMG-20260228-WA0012.jpg"
            title="Pizza Slice"
            price={6}
          />
          <Product
            image="/PSS-app/Products/IMG-20260228-WA0012.jpg"
            title="Pizza Slice"
            price={6}
          />
          <Product
            image="/PSS-app/Products/IMG-20260228-WA0000.jpg"
            title="Coffee Cup & 1 Cinnamon Roll"
            price={25}
          />
          <Product
            image="/PSS-app/Products/IMG-20260228-WA0001.jpg"
            title="Cookie Dominoes"
            price={30}
          />
          <Product
            image="/PSS-app/Products/IMG-20260228-WA0009.jpg"
            title="Small Yeti"
            price={10}
          />
          <Product
            image="/PSS-app/Products/IMG-20260228-WA0006.jpg"
            title="Large Blueberry turtle"
            price={15}
          />
          <Product
            image="/PSS-app/Products/IMG-20260228-WA0002.jpg"
            title="Fantasy Books"
            price={10}
          />
          <Product
            image="/PSS-app/Products/IMG-20260228-WA0004.jpg"
            title="Cat in a Box"
            price={12}
          />
          <Product
            image="/PSS-app/Products/IMG-20260228-WA0007.jpg"
            title="Daisy"
            price={10}
          />
          <Product
            image="/PSS-app/Products/IMG-20260228-WA0008.jpg"
            title="Strawberry Cream TikTakToe"
            price={25}
          />
        </div>
      </section>
    </>
  );
}

export default Products;
