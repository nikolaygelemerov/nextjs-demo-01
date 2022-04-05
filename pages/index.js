import fs from "fs/promises";
import path from "path";

const HomePage = (props) => {
  console.log("props: ", props);

  return (
    <ul>
      <li>Product 1</li>
      <li>Product 2</li>
      <li>Product 3</li>
    </ul>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  console.log("data: ", data);

  return { props: { products: data.products } };
};

export default HomePage;
