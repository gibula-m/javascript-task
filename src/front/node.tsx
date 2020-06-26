import { MainPage } from "./components/Main";
import React from 'react';
import { Issue } from "../types/issue";

export const getMainComponent = (list : Array<Issue>) => {
  return <MainPage items={list} />;
}
