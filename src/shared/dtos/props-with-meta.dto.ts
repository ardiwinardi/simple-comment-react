export type PropsWithMetaDTO<T> = T & {
  limit?: number;
  skip?: number;
  total?: number;
};
