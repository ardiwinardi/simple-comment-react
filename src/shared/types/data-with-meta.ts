export type DataWithMeta<T> = {
  data: T;
  limit: number;
  skip: number;
  total: number;
};
