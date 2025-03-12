import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-6">Listing Details</h1>
      <p className="text-gray-600">Details for listing ID: {id}</p>
    </div>
  );
};

export default Details;
