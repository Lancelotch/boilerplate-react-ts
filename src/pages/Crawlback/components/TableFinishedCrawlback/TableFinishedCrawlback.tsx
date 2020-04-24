import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";
import { Grid, Card } from "@material-ui/core";
import { stableSort, getSorting } from "../../../../helpers/tableSort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Header from "./Header";
import { PopupButton } from "../../../../components";
import ModalSpring from "../../../../components/Modal";
import TableJobDetail from '../TableJobDetail';

interface FinishedField {
  id: string;
  job: string;
  start: string;
  finish: string;
  dataCount: number;
}

type Order = "asc" | "desc";

interface Props {
  title?: String;
  data: Array<FinishedField>;
}

const TableFinishedCrawlback: React.FC<Props> = ({ title, data }) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof FinishedField>("job");
  const [openDetail, setOpenDetail] = useState<boolean>(false);

  const [anchorElShowDetail, setAnchorElShowDetail] = useState<any | null>(
    null
  );
  const handleClickShowDetail = (
    event: React.MouseEvent<any, MouseEvent>,
    index
  ) => {
    setAnchorElShowDetail(event.currentTarget);
  };
  const handleCloseShowDetail = function () {
    setAnchorElShowDetail(null);
  };
  const openPopupShowDetail = Boolean(anchorElShowDetail);

  const handleShowDetail = function (id: string) {
    //onFinish(data[indexActive].id);
    setOpenDetail(true)
    handleCloseShowDetail();
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof FinishedField
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
                        <TableCell
                          align="left"
                          size="small"
                          padding="default"
                          className={classes.wrap}
                        >
                          {field.job}
                          <ExpandMoreIcon
                            className={classes.moreVert}
                            onClick={(event) =>
                              handleClickShowDetail(event, index)
                            }
                          />
                          <PopupButton
                            id={field.id}
                            anchorEl={anchorElShowDetail}
                            onClose={handleCloseShowDetail}
                            onSelected={handleShowDetail}
                            open={openPopupShowDetail}
                            //loading={loadingFinished}
                          />
                        </TableCell>
                        <TableCell align="left" size="small" padding="default">
                          {field.start}
                        </TableCell>
                        <TableCell align="left" size="small" padding="default">
                          {field.finish}
                        </TableCell>
                        <TableCell align="left" size="small" padding="default">
                          {field.dataCount}
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
      <ModalSpring open={openDetail} onClose={() => setOpenDetail(false)}>
        <Card className={classes.card}>
          <TableJobDetail data={[{id: "1", job: "job", start: "start", finish: "finish", dataCount: 24}, {id: "2", job: "job", start: "start", finish: "finish", dataCount: 24}]} title="Detail Job" />
        </Card>
      </ModalSpring>
    </div>
  );
};

export default TableFinishedCrawlback;
