// src/app/page.jsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <nav>
        <ul>
          <li>
            <Link href="/home/main/work">Go to Work Page</Link>
          </li>
          <li>
            <Link href="/project/123">Go to Project 1 First Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
