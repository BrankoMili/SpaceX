import LaunchesListItem from "./LaunchesListItem";

const LaunchesList = ({ launches }) => {
  return (
    <>
      {launches.map(launch => {
        return <LaunchesListItem key={launch.id} launch={launch} />;
      })}
    </>
  );
};

export default LaunchesList;
