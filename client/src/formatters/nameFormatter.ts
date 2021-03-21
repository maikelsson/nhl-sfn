export const formatFullName = (name: string): string => {
  let arr = name.split(" ");
  return arr.length > 2 ? `${arr[0][0]}.${arr[1]} ${arr[2]}` : `${arr[0][0]}.${arr[1]}`;
};
