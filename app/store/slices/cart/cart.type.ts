export type CartNodeType = {
  quantity: number;
  duration: number;
  _id: string;
  name: string;
  price: number;
  guide: boolean;
  is_reneweble: boolean;
  max_duration_months: number;
  priority: number;
};

export type CartNodeLocalStorageInfoType = {
  _id: string;
  duration: number;
  quantity: number;
};

export type CartNodeQuantityType = {
  _id: string;
  quantity: number;
};
export type CartNodeDurationType = {
  _id: string;
  duration: number;
};
