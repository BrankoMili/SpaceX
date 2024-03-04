import { useState, useEffect } from "react";
import instance from "../../services/api";
import Company from "../company/Company";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const HomeView = () => {
  const [companyInfo, setCompanyInfo] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    instance
      .get("company")
      .then(res => {
        setCompanyInfo(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch(err => {
        setError(true);
        console.error("Error:", err);
      })
      .finally(() => {
        setLoading(false); // finally se uvek poziva
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Company companyInfo={companyInfo} />
      )}
    </>
  );
};

export default HomeView;
