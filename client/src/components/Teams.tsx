import React from "react";
import axios from "axios";

interface ITeam {
  id: number;
  name: string;
}

interface Props {}

export const Teams = (props: Props) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [teams, setTeams] = React.useState<ITeam[]>([]);

  React.useEffect(() => {
    setLoading(true);
    const getTeams = async (): Promise<void> => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/teams`);
        setTeams(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTeams();
    setLoading(false);
  }, []);

  if (!teams && loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {teams.map((t, id) => (
        <div className="flex" key={id}>
          <i className="w-10">
            <img src={`${process.env.REACT_APP_API_URL}/images/` + t.id} alt=""></img>
          </i>
          {t.name}
        </div>
      ))}
    </div>
  );
};
