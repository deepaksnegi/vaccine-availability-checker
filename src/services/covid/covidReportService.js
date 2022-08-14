import axios from "axios";

export const getCovidDetail = async (countryId = "IND") => {
  const response = await axios.get(
    `${process.env.REACT_APP_COVID_REPORT_API_URL}/countries/${countryId}`
  );

  const { confirmed, recovered, deaths } = response.data;

  return {
    confirmed: confirmed.value,
    recovered: recovered.value,
    deaths: deaths.value,
  };
};
