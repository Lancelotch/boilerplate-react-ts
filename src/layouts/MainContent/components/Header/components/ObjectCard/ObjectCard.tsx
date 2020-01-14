import React, {useState} from "react";
import {
  Card,
  Popover,
  Grid,
  Divider,
  Checkbox,
  Typography,
  FormControl,
  FormControlLabel,
  Button
} from "@material-ui/core";
import useStyles from "./styles";
import PerfectScrollbar from "react-perfect-scrollbar";
import AddIcon from "@material-ui/icons/Add";
import { useFormik } from "formik";

interface Props {
  onSubmit: (values: object) => void;
  open: boolean | false;
  anchorEl: any;
  onClose: () => void;
}

const dataObjects = [
  {
    id: "001",
    object: "#object-1"
  },
  {
    id: "002",
    object: "#object-2"
  },
  {
    id: "003",
    object: "#object-3"
  },
  {
    id: "004",
    object: "#object-4"
  },
  {
    id: "005",
    object: "#object-5"
  },
  {
    id: "006",
    object: "#object-6"
  },
  {
    id: "007",
    object: "#object-7"
  },
  {
    id: "008",
    object: "#object-8"
  }
];

const ObjectCard: React.FC<Props> = ({ onSubmit, open, anchorEl, onClose }) => {
  const classes = useStyles();
  const [selectAll, setSelectAll] = useState(true);
  const [selected, setSelected] = useState([]);
  const formik = useFormik({
    initialValues: {
      objects: []
    },
    onSubmit: (values: object) => {
      onSubmit(values);
    }
  });
  const { handleSubmit, handleChange, values, errors, touched, setFieldValue } = formik;
  const handleSelectObjects = function(objects:any){
    const selectObject = objects.map((object:any)=>{
      return object.id
    });
    return selectObject;
  }
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={onClose}
        >
          <Card className={classes.card}>
            <form 
            onSubmit={e => {
              e.preventDefault();
              handleSubmit(e);
            }}
            >
            <div className={classes.header}>
              <FormControlLabel
                control={<Checkbox checked={selectAll} onChange={() => {
                  setSelectAll(!selectAll);
                  if (selectAll) {
                    setFieldValue("objects", handleSelectObjects(dataObjects));
                  } else {
                    setFieldValue("objects", []);
                  }
                }} />}
                label={<Typography>Select All</Typography>}
              />
            </div>
            <Divider />
            <PerfectScrollbar>
              <div className={classes.body}>
                <Grid container>
                  {dataObjects.map(object => {
                    const isFind = values.objects.find((obj:any)=>{
                      return obj === object.id
                    })
                    const isChecked = isFind ? false : true;
                    return(
                    <Grid item md={6} key={object.id}>
                      <FormControlLabel
                        control={<Checkbox checked={isChecked} />}
                        label={<Typography>{object.object}</Typography>}
                      />
                    </Grid>
                  )})}
                </Grid>
              </div>
            </PerfectScrollbar>
            <Divider />
            <div className={classes.footer}>
              <Grid container alignContent="space-between">
                <Grid item md={6}>
                  <Button
                    variant="contained"
                    className={classes.buttonSubmit}
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item md={6}>
                  <Button
                    variant="contained"
                    className={classes.buttonAddAccount}
                    startIcon={<AddIcon />}
                    fullWidth
                  >
                    Add Account
                  </Button>
                </Grid>
              </Grid>
            </div>
            </form>
          </Card>
        </Popover>
      </Grid>
    </Grid>
  );
};

export default ObjectCard;