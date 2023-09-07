export type PropsWithMeta<T> = T & {
  limit: number;
  skip: number;
  total: number;
};
