// src/app/project/[id]/first.jsx

export default function FirstPage({ params }) {
  const { required } = params; // This gets the dynamic 'id' from the URL

  return (
    <div>
      <h1>Page ID: {required}</h1>
      <p>This is {required}.</p>
    </div>
  );
}
