import React from "react";
import useStyles from "./styles";
import { Header, Body } from "../../layouts/MainContent";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import clsx from "clsx";
import { ActionType } from "./actionType";

interface DateRange {
  dateStart: Date;
  dateEnd: Date;
}

interface ICrawlback {
  project: string | undefined;
  worker: string | undefined;
}

interface IState {
  dateRange: DateRange;
  setDateRange: (dateRange: DateRange) => void;
  project: string;
  setProject: (project: string) => void;
  onSubmit: (payload: ICrawlback) => void;
}

interface IAction {
  type: string;
  payload?: any;
}

const initialState: IState = {
  dateRange: {
    dateStart: new Date(),
    dateEnd: new Date(),
  },
  setDateRange: () => {},
  project: "Don't FOrget",
  setProject: () => {},
  onSubmit: () => {},
};

const CrawlbackContext = React.createContext<IState>({
  ...initialState,
});

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case "project":
      return {
        ...state,
        project: action.payload,
      };
    case "dateRange":
      return {
        ...state,
        dateRange: action.payload,
      };
    default:
      return state;
  }
};

const renderChildren = (children, props) => (context) =>
  React.Children.map(children, (el) =>
    React.cloneElement(el, props(context, el))
  );

export const FormContainer = ({ children }) => (
  <CrawlbackContext.Consumer>
    {renderChildren(children, (context) => ({
      onSubmit: context.onSubmit,
    }))}
  </CrawlbackContext.Consumer>
);

const CrawlbackContainer: React.FC = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  const [state, dispatch] = React.useReducer<React.Reducer<IState, IAction>>(
    reducer,
    initialState
  );

  const setDateRange = function (payload) {
    dispatch({
      type: ActionType.ChangeDateRange,
      payload: payload,
    });
  };

  const setProject = function (payload) {
    dispatch({
      type: ActionType.ChangePrject,
      payload: payload,
    });
  };

  const onSubmit = function (payload) {
    console.log(payload);
  };

  return (
    <React.Fragment>
      <div
        className={clsx({
          [classes.header]: true,
          [classes.mobileSize]: !isDesktop,
        })}
      >
        <Header title="Crawlback Panel" />
      </div>
      <Body>
        <CrawlbackContext.Provider
          value={{ ...state, setDateRange, setProject, onSubmit }}
        >
          {children}
        </CrawlbackContext.Provider>
      </Body>
    </React.Fragment>
  );
};

export default CrawlbackContainer;
