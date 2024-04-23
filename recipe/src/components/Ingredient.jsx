export default function Ingredient({ item }) {
  return (
    <div>
      <ul>
        <li>
          {item.name} ({item.amount} {item.unit})
        </li>
      </ul>
    </div>
  );
}
