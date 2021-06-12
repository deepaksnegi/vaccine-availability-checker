import axios from "axios";

export const getStates = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_API_URL}/admin/location/states`
  );
  return response.data.states.map((s) => ({
    id: s.state_id,
    title: s.state_name,
  }));
};

export const getDistricts = async (stateId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_API_URL}/admin/location/districts/${stateId}`
  );

  return response.data.districts.map((d) => ({
    id: d.district_id,
    title: d.district_name,
  }));
};
