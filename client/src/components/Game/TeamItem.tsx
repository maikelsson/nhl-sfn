interface IProps {
  id: number;
  name: string;
  record: string;
}

export const TeamItem = (props: IProps) => {
  return (
    <div className="flex flex-col w-32">
      <div className="flex justify-center items-center">
        <i className="w-16">
          <img src={`/images/${props.id}`} alt=""></img>
        </i>
      </div>
      <div className="mt-2 text-center leading-none text-current text-sm">
        <p>{props.name}</p>
        <p>{props.record}</p>
      </div>
    </div>
  );
};
