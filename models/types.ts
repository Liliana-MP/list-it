export type List = {
  id: string;
  name: string;
  items: Item[];
};

export type Item = {
  id: string;
  name: string;
  done: boolean;
};
