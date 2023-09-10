import DATA from "../data/items.json";
import Item from "../components/Item";

const Store = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold my-3 uppercase">Store</h1>
      <div className="grid md:grid-cols-3 gap-[30px]">
        {DATA.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Store;
