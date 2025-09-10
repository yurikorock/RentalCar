export default function CarList() {
  return (
    <div>
      <ul>
        {carList.map((item) => (
          <li key={item.id}>
            <CarListItem data={item}/>
          </li>
        ))}
      </ul>
      <button type="button"></button>
    </div>
  );
}
