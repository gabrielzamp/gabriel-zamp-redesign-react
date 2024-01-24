import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full bg-[#1A1A1A] h-full">
        <div className="w-10/12 mx-auto py-5 xl:w-8/12">
          <div className="border-t border-white border-b mb-10">
            <h1 className="text-7xl uppercase text-center my-2 lg:text-9xl">
              Blog
            </h1>
          </div>

          {/* Highlighted Blog card */}
          <div className="pb-10 xl:pb-16">
            <img
              className="md:w-full md:h-[228px] md:object-cover md:object-center rounded-md"
              src="https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/portal/paginas/image-16-1706102768.png"
              alt=""
            />
            <p className="text-sm text-orange-500 my-4">Sunday , 1 Jan 2023</p>
            <h3 className="text-2xl mb-3 xl:text-3xl">
              UX review presentations
            </h3>
            <p className="text-[#C0C5D0]">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
          </div>

          {/* All blogs section */}
          <div>
            <h2 className="text-4xl font-semibold mb-4">All blog posts</h2>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:w-full">
            <div className="pb-10">
              <img
                className="rounded-md h-56 w-80 object-cover xl:w-96"
                src="https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/portal/paginas/image-17-1706103705.png"
                alt=""
              />
              <p className="text-sm text-orange-500 my-4">
                Sunday , 1 Jan 2023
              </p>
              <h3 className="text-2xl mb-3">UX review presentations</h3>
              <p className="text-[#C0C5D0]">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
            </div>
            <div className="pb-10">
              <img
                className="rounded-md h-56 w-80 object-cover xl:w-96"
                src="https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/portal/paginas/image-18-1706103728.png"
                alt=""
              />
              <p className="text-sm text-orange-500 my-4">
                Sunday , 1 Jan 2023
              </p>
              <h3 className="text-2xl mb-3">UX review presentations</h3>
              <p className="text-[#C0C5D0]">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
            </div>

            <div className="pb-10">
              <img
                className="rounded-md h-56 w-80 object-cover xl:w-96"
                src="https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/portal/paginas/image-19-1706104313.png"
                alt=""
              />
              <p className="text-sm text-orange-500 my-4">
                Sunday , 1 Jan 2023
              </p>
              <h3 className="text-2xl mb-3">UX review presentations</h3>
              <p className="text-[#C0C5D0]">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
