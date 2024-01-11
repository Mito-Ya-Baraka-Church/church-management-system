"use client";

import React from "react";
import { store } from "@/store";
import { Provider } from "react-redux";

const ReduxStateProvider = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxStateProvider;
