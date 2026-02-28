

function Product () {

    return (
      <div className="card card-xs bg-base-100 shadow-sm rounded-2xl">
        <figure className="sm:px-3 sm:pt-3">
          <img
            src="src/assets/Placeholder.png"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center">
          <div className="card-">
            <h2 className="card-title">Card Title</h2>
            <p className="">
              Artist: <b className="link link-hover">Haru Casting</b>
            </p>
          </div>
          <ul>
            <li>
              Tags:
              <div className="grid grid-cols-3">
                <div className="badge badge-dash badge-accent badge-sm ">
                  1/4
                </div>
                <div className="badge badge-dash badge-info badge-sm">Info</div>
                <div className="badge badge-dash badge-success badge-sm">
                  Wig
                </div>
                <div className="badge badge-dash badge-warning badge-sm">
                  Acrylic
                </div>
              </div>
            </li>
            <li className="text-xl">
              £17.40
              <span className="badge badge-xs badge-warning ms-2">
                Second Hand
              </span>
            </li>
            <li>
              Seller: <span className="link link-info">Dollz4Life</span>
            </li>
          </ul>
          <div className="card-actions">
            <button className="btn btn-sm btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={5}
                stroke="currentColor"
                className="size-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              More Info
            </button>
            <button className="btn btn-sm btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="size-[2em]">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Product