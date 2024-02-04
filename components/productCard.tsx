import Image from "next/image";

export interface ProductProp {
  id: string;
  name: string;
  image: string;
  price: string;
  kind: string;
  quantity: string;
}

interface Prop {
  product: ProductProp;
  index: number;
}

function ProductCard({ product }: Prop) {
  return (
    <div className="relative w-[calc(100%+2rem)] hover:bg-gray-950 rounded-xl p-4">
      <div className="relative w-full h-[37vh] bg-green-500 rounded-xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-black dark:text-white text-xl line-clamp-1 w-full">
            {product.name}
          </h2>
          <div className="py-1 px-2 bg-green-500 rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {product.kind}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"/>
            </svg>
            <p className="text-base text-white font-bold">
              {product.quantity || product.price}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            <p className="text-base font-bold text-[#FFAD49]">{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;