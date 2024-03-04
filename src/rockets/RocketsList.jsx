import RocketsListItem from "./RocketsListItem";

const RocketsList = ({ rockets }) => {
  return (
    <>
      {rockets.map(rocket => {
        return <RocketsListItem key={rocket.id} rocket={rocket} />;
      })}
    </>
  );
};

export default RocketsList;
