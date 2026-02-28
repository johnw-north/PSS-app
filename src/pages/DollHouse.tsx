import { Link } from "react-router";

function DollHouse() {
  return (
    <div className="hero min-h-full py-5">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="font-gummy text-5xl font-bold">Coming Soon</h1>
          <p className="bg-base-100 p-4 py-3 m-3 rounded-2xl">
            It is exciting what we have planned, but it takes time (just 2 of us) and server fees can be harsh. If you want to and are able, you can support us by clicking below.
          </p>
          <Link to="/donate" className="btn btn-secondary">
            Donate
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DollHouse;