import React, { useEffect, useState } from "react";
import { Card, makeStyles } from "@material-ui/core";

import { Form, useForm } from "./useForm";
import controlInputs from "./inputs";
import { useDispatch } from "react-redux";
import { userAction } from "../store/actions/user/userActions";
import { getDistricts, getStates } from "../services/localeService";

const useStyles = makeStyles((theme) => ({
  form: {
    textAlign: "center",
    padding: "10px 0",
  },
}));

const ageOptions = [
  { id: 0, title: "18-44" },
  { id: 1, title: "44+" },
];

const initialState = {
  name: "",
  age: 0,
  state: "",
  district: "",
  stateId: 0,
  districtId: 0,
};

const VaccinationForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [values, setValues, onChangeHandler, errors, setErrors] =
    useForm(initialState);

  const validate = () => {
    const errors = {};
    errors.name = values.name ? "" : "Name is required";
    errors.state = values.state ? "" : "State is required";
    errors.district = values.district ? "" : "District is required";
    setErrors({ ...errors });
    return Object.values(errors).some((e) => e);
  };

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    getStates().then((s) => setStates(s));
  }, []);

  useEffect(() => {
    values.state && getDistricts(values.state).then((s) => setDistricts(s));
  }, [values.state]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!validate()) {
      const { name, age, state, district } = values;
      const user = {
        name,
        age: ageOptions[age],
        state: states.find((s) => s.id === state).title,
        district: districts.find((d) => d.id === district).title,
        stateId: state,
        districtId: district,
      };
      dispatch(userAction.createUserRequest(user));
    }
  };

  return (
    <Card className={classes.form}>
      <Form onSubmit={onSubmitHandler}>
        <controlInputs.Input
          label="Name"
          name="name"
          value={values.name}
          errorMessage={errors.name}
          onChangeHandler={onChangeHandler}
        />
        <controlInputs.Dropdown
          label="Age"
          name="age"
          items={ageOptions}
          value={values.age}
          onChangeHandler={onChangeHandler}
        />
        <controlInputs.Dropdown
          label="State"
          name="state"
          items={states}
          value={values.state}
          errorMessage={errors.state}
          onChangeHandler={onChangeHandler}
        />
        <controlInputs.Dropdown
          label="Districts"
          name="district"
          items={districts}
          value={values.district}
          errorMessage={errors.district}
          onChangeHandler={onChangeHandler}
        />
        <controlInputs.Button
          variant="contained"
          type="submit"
          text="Register"
        />
      </Form>
    </Card>
  );
};

export default VaccinationForm;
