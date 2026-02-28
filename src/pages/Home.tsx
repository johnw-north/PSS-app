import { Link } from "react-router";

import Product from "../components/Card/Product";

function Home() {
  return (
    <>
    
      <div className="hero min-h-full py-5">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="font-gummy text-5xl font-bold">Welcome</h1>
            <p className="bg-base-100 p-4 py-3 m-3 rounded-2xl">
              Our goal is to make it easier and more fun for the doll
              community. To be able to access all the information, goods and
              services you could ever need to make your doll dreams a reality.
            </p>
            <Link to="/login" className="btn btn-secondary">
              Sign in
            </Link>
          </div>
        </div>
      </div>

      <section className="pb-4">
        <h2 className="text-center text-4xl font-bold font-gummy">New</h2>
        <div className="gap-2 py-4 px-2 grid grid-cols-2 sm:grid-cols-3 sm:px-4 sm:gap-4 md:grid-cols-4">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>

      <section className="pb-4">
        <h2 className="text-center text-4xl font-bold font-gummy">
          Staff Picks
        </h2>
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

export default Home;
