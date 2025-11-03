interface CategoryPageProps {
  params: {
    categoryName: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = params;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Category: {categoryName}</h1>
      <p>Here you can show products or content for {categoryName}.</p>
    </div>
  );
}
