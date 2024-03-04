import ShipsListItem from "./ShipsListItem";

const ShipsList = ({ ships }) => {
  return (
    <>
      {ships.map(ship => {
        return <ShipsListItem key={ship.id} ship={ship} />;
      })}
    </>
  );
};

export default ShipsList;
