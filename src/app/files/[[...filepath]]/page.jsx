// src/app/project/[id]/first.jsx

export default function FirstPage({ params }) {
  const { filepath } = params; // This gets the dynamic 'id' from the URL

  return (
    <div>
      <h1>Page ID: {filepath}</h1>
      <p>This is the first page for files {filepath}.</p>
    </div>
  );
}
