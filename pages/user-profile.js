const UserProfilePage = ({ username }) => {
  return <h1>{username}</h1>;
};

export const getServerSideProps = (context) => {
  const { params, req, res } = context;

  return {
    props: {
      username: "Max",
    },
  };
};

export default UserProfilePage;
