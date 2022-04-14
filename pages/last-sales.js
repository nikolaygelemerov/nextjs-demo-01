import { useEffect, useState } from "react";
import useSWR from "swr";

const LastSalesPage = ({ data }) => {
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    console.log(newData);
  }, [data, newData]);

  return (
    <ul>
      {newData.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: { data },
    revalidate: 10,
  };
};

export default LastSalesPage;
