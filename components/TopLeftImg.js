import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[800px] xl:w-[800px] opacity-6 5">
      <Image
        src={"/top-left-img.png"}
        alt="Top Left Corner of the House"
        height={200}
        width={200}
        className="w-[300px] h-[300px]"
      />
    </div>
  );
};

export default TopLeftImg;
