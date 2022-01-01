import CategoryItem from './CategoryItem';

function CategoryList({ catalog = [] }) {
  return (
    <>
      {/* //TODO: goback button */}
      <button className="btn">Go back</button>
      <div className="list">
        {catalog.map((el) => (
          <CategoryItem key={el.idCategory} {...el} />
        ))}
      </div>
    </>
  );
}

export default CategoryList;
