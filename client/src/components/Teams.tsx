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
        const res = await axios.get("https://gentle-tor-21418.herokuapp.com/api/v1/teams");
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
      <div>
        {teams.map((t) => (
          <>
            <div className="flex" key={t.name}>
              <i className="w-10" key={t.id}>
                <img src={`/images/${t.id}`} alt=""></img>
              </i>
              {t.name}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
