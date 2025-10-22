type RowSkeletonItemsProps = {
  _id: string;
  value: number;
};

export const getRowSkeletonItems = (itemsCount: number): RowSkeletonItemsProps[] => {
  const array = Array.from(Array(itemsCount).keys());

  return array.map<RowSkeletonItemsProps>((item) => {
    return {
      _id: item.toString(),
      value: item
    };
  });
};
