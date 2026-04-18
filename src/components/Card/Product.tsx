interface ProductProps {
  image: string;
  title: string;
  price: number;
}

function Product({ image, title, price }: ProductProps) {
  return (
    <div className="card card-xs bg-base-100 shadow-sm rounded-2xl">
      <figure className="sm:px-3 sm:pt-3">
        <img
          src={image}
          alt="Product Image"
          className="rounded-xl border-3 border-base-300"
        />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title text-2xl">{title}</h2>
        <p>
          Tags:
          <ul className="grid grid-cols-3 space-x-1">
            <li className="badge badge-dash badge-accent badge-sm">Game</li>
            <li className="badge badge-dash badge-info badge-sm">Flexi</li>
            <li className="badge badge-dash badge-success badge-sm">Clicker</li>
          </ul>
        </p>
        <p className="text-xl">£{price}</p>
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
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
