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
              We’re a two-person team based on the windy Fylde Coast, bringing
              a little extra joy to your desk and home. We craft and 3D print
              adorable, quirky items that smile right back at you. Have a
              look around and find your new favorite fidget friend!
            </p>
            <Link
              to="/aboutus"
              className="btn btn-secondary"
              onClick={(e) => e.currentTarget.blur()}>
              About Us
            </Link>
          </div>
        </div>
      </div>

      <section className="pb-4">
        <h2 className="text-center text-4xl font-bold font-gummy">Popular</h2>
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
