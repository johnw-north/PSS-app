import Product from "../components/Card/Product";

function Products() {
  return (
    <>
      <section className="py-4">
        <h2 className="text-center text-4xl font-bold font-gummy">New</h2>
        <div className="gap-2 py-4 px-2 grid grid-cols-2 sm:grid-cols-3 sm:px-4 sm:gap-4 md:grid-cols-4">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>

      <section className="py-4">
        <h2 className="text-center text-4xl font-bold font-gummy">All Products</h2>
        <div className="gap-2 py-4 px-2 grid grid-cols-2 sm:grid-cols-3 sm:px-4 sm:gap-4 md:grid-cols-4">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </>
  );
}

export default Products;
