import { MainPage } from "./components/Main";
import React from 'react';
import { Issue } from "../types/Issue";

export const getMainComponent = (list : Array<Issue>) => {
  return <MainPage items={list} />;
}
