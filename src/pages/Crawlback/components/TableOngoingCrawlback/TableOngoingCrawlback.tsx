import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import { stableSort, getSorting } from "../../../../helpers/tableSort";
import Header from "./Header";

interface OngoingField {
  id: string;
  worker: string;
  job: string;
  status: string;
  progress: string;
}

type Order = "asc" | "desc";

interface Props {
  title?: String;
  data: Array<OngoingField>;
}

const TableOngoingCrawlback: React.FC<Props> = ({ title, data }) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof OngoingField>("worker");

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof OngoingField
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Typography variant="h5" noWrap>
          {title}
        </Typography>
        <Grid item md={12}>
          <TableContainer className={classes.container} component={Paper}>
            <Table
              stickyHeader
              className={classes.table}
              aria-labelledby="tableTitle"
              aria-label="enhanced table"
            >
              <Header
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={data.length}
              />
              <TableBody>
                {stableSort(data, getSorting(order, orderBy)).map(
                  (field, index) => {
                    return (
                      <TableRow hover key={field.id}>
                        <TableCell align="left" size="small" padding="default">
                          {field.worker}
                        </TableCell>
                        <TableCell align="left" size="small" padding="default">
                          {field.job}
                        </TableCell>
                        <TableCell align="left" size="small" padding="default">
                          {field.status}
                        </TableCell>
                        <TableCell align="left" size="small" padding="default">
                          {field.progress}
                        </TableCell>
                      </TableRow>
                    );
                  }
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default TableOngoingCrawlback;
