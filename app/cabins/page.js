import Counter from "../components/Counter";

export default async function Page() {
  const response = await fetch(
    "https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json"
  );
  const data = await response.json();
  console.log(data);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Counter users={data} />
    </div>
  );
}
