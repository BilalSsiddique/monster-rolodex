import "./card-list.style.css";
import Card from "../card/card.component";

const CardList = (props) => {
  const { monsterss } = props;
  return (
    <div className="card-list">
      {monsterss.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
