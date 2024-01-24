export const AllBlogsList = () => {
  return (
    <>
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
          <p className="text-sm text-orange-500 my-4">Sunday , 1 Jan 2023</p>
          <h3 className="text-2xl mb-3">UX review presentations</h3>
          <p className="text-[#C0C5D0]">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
        </div>
        <div className="pb-10">
          <img
            className="rounded-md h-56 w-80 object-cover xl:w-96"
            src="https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/portal/paginas/image-18-1706103728.png"
            alt=""
          />
          <p className="text-sm text-orange-500 my-4">Sunday , 1 Jan 2023</p>
          <h3 className="text-2xl mb-3">UX review presentations</h3>
          <p className="text-[#C0C5D0]">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
        </div>

        <div className="pb-10">
          <img
            className="rounded-md h-56 w-80 object-cover xl:w-96"
            src="https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/portal/paginas/image-19-1706104313.png"
            alt=""
          />
          <p className="text-sm text-orange-500 my-4">Sunday , 1 Jan 2023</p>
          <h3 className="text-2xl mb-3">UX review presentations</h3>
          <p className="text-[#C0C5D0]">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
        </div>
      </div>
    </>
  );
};
