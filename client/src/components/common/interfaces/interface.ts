export type IDropDownOptions = {
  header: string;
  content: string[];
};

export interface IDropDownProps {
  options: IDropDownOptions;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>, value: string) => void;
  current: string;
}
