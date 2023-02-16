import { URLs } from "../config/constants";
import { apiKey } from "../config/config";
import { SortDirection } from "@mui/material/TableCell";

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const getAllBreedsOfDogs = (
  pageSize: number,
  pageNumber: number,
  orderByField: string,
  orderByDir: SortDirection | string
): Promise<Response> => {
  return fetch(
    `${URLs.getAllBreeds}?limit=${pageSize}&page=${pageNumber}&sort_by=${orderByField}&order=${orderByDir}`,
    {
      method: "GET",
      headers: {
        "x-api-key": apiKey
      }
    }
  );
};

export const getDogsBySearch = (
  userSearch: string,
  pageSize: number,
  pageNumber: number,
  orderByField: string,
  orderByDir: SortDirection | string
): Promise<Response> => {
  return fetch(
    `${URLs.getDogsBySearch}?q=${userSearch}&limit=${pageSize}&page=${pageNumber}&sort_by=${orderByField}&order=${orderByDir}`,
    {
      method: "GET",
      headers: {
        "x-api-key": apiKey
      }
    }
  );
};
