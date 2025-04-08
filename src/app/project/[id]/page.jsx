// src/app/project/[id]/first.jsx

export default function FirstPage({ params }) {
  const { id } = params; // This gets the dynamic 'id' from the URL

  return (
    <div>
      <h1>Project ID: {id}</h1>
      <p>This is the first page for project {id}.</p>
    </div>
  );
}
