import React from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Grid
} from "@material-ui/core";
import useStyles from "./styles";
import FieldContent from "../FieldContent";
import FieldEngagement from "../FieldEngagement";

interface Props {
  title: string;
  data: any;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0)
];

const TablePostmade: React.FC<Props> = ({ data, title }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
        <Grid item md={12}>
          <Typography variant="subtitle2" className={classes.subTitle}>
            {title}
          </Typography>
        </Grid>
        <Grid item md={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    size="medium"
                    style={{ width: "5%" }}
                  >
                    No.
                  </TableCell>
                  <TableCell
                    align="center"
                    size="medium"
                    style={{ width: "55%" }}
                  >
                    Content
                  </TableCell>
                  <TableCell
                    align="center"
                    size="medium"
                    style={{ width: "10%" }}
                  >
                    Type
                  </TableCell>
                  <TableCell
                    align="center"
                    size="medium"
                    style={{ width: "10%" }}
                  >
                    Reach
                  </TableCell>
                  <TableCell
                    align="center"
                    size="medium"
                    style={{ width: "20%" }}
                  >
                    Total Engagement
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell align="center" size="small">
                      {index + 1}
                    </TableCell>
                    <TableCell align="left" size="small">
                      <FieldContent />
                    </TableCell>
                    <TableCell align="center" size="small">
                      {row.fat}
                    </TableCell>
                    <TableCell align="center" size="small">
                      {row.carbs}
                    </TableCell>
                    <TableCell align="center" size="small">
                      <FieldEngagement />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TablePostmade;
