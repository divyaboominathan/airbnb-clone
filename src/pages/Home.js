import ImageCard from "./../components/ImageCard";
import { sampleImages } from "./../data/Data";

const Home = () => {
  return (
    <div className="w-full mx-auto px-2 sm:px-4 lg:px-2 ">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
        {sampleImages.map((item, index) => (
          <ImageCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
