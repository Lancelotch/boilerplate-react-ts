import React from "react";
import useStyles from "./styles";
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

interface OngoingField {
  id: string;
  worker: string;
  job: string;
  status: string;
  progress: string;
}

type Order = "asc" | "desc";

interface HeadCell {
  disablePadding: boolean;
  id: keyof OngoingField;
  label: string;
  numeric: boolean;
  size: number;
}

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof OngoingField
  ) => void;
  order: Order;
  orderBy: string | number | symbol;
  rowCount: number;
}

const headCells: HeadCell[] = [
  {
    id: "worker",
    numeric: false,
    disablePadding: false,
    label: "Worker",
    size: 20,
  },
  {
    id: "job",
    numeric: false,
    disablePadding: false,
    label: "Job",
    size: 40,
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
    size: 20,
  },
  {
    id: "progress",
    numeric: true,
    disablePadding: false,
    label: "Progress",
    size: 20,
  },
];

const Header: React.FC<EnhancedTableProps> = ({
  classes,
  order,
  orderBy,
  onRequestSort,
}) => {
  const createSortHandler = (property: keyof OngoingField) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={uuidv4()}
            size="small"
            align="left"
            style={{ width: `${headCell.size}%` }}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              //active={true}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {orderBy === headCell.id ? (
                <React.Fragment>
                  <div style={{ color: "white", fontWeight: 700 }}>
                    {headCell.label}
                  </div>
                  <span className={classes.visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </span>
                </React.Fragment>
              ) : (
                <div style={{ color: "white" }}>{headCell.label}</div>
              )}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default Header;
