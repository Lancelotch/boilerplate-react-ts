import React from "react";
import { Button } from "@material-ui/core";
import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import useStyles from "./style";
import { SelectWithLabel } from "../../../../components";

interface ICrawlback {
  project: string ;
  worker: string ;
}

interface Props {
  onSubmit?: (payload: ICrawlback) => void;
}

const optionProjects = [
  {
    label: "Kemenhub",
    value: "kemenhub"
  },
  {
    label: "Kemenparekraf",
    value: "kemenparekraf"
  },
  {
    label: "Pelni",
    value: "pelni"
  },
  {
    label: "Kemenhub",
    value: "kemenhub"
  },
  {
    label: "Kemenpar",
    value: "kemenpar"
  },
]

const optionWorker = [
  {
    label: "Worker1",
    value: "Worker1"
  },
  {
    label: "Worker2",
    value: "Worker2"
  },
  {
    label: "Worker3",
    value: "Worker3"
  },
  {
    label: "Worker4",
    value: "Worker4"
  },
  {
    label: "Worker5",
    value: "Worker5"
  },
]

const FormSignIn: React.FC<Props> = ({ onSubmit=()=>{} }) => {
  const classes = useStyles();
  const formik = useFormik<ICrawlback>({
    initialValues: {
      project: "",
      worker: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: ICrawlback) => {
      onSubmit(values);
    },
  });
  const { handleSubmit, handleChange, values, errors, touched } = formik;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
      className={classes.form}
    >
      <div>
        <SelectWithLabel
          label="Project"
          name="project"
          onChange={handleChange}
          value={values.project}
          error={touched.project && errors.project ? true : false}
          errorMessage={touched.project && errors.project ? errors.project : ""}
          options={optionProjects}
        />
      </div>
      <div className={classes.space}>
        <SelectWithLabel
          label="Worker"
          name="worker"
          onChange={handleChange}
          value={values.worker}
          error={touched.worker && errors.worker ? true : false}
          errorMessage={touched.worker && errors.worker ? errors.worker : ""}
          options={optionWorker}
        />
      </div>
      <div className={classes.submit}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          aria-label="add"
          type="submit"
          fullWidth
        >
          Execute
        </Button>
      </div>
    </form>
  );
};

export default FormSignIn;
