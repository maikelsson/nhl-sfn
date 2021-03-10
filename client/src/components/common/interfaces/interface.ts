export type DropDownOptions = {
  header: string;
  content: string[];
};

export interface DropDownProps {
  options: DropDownOptions;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>, value: string) => void;
  current: string;
}
