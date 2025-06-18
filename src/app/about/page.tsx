import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <div className=" p-4 pt-20">
      <h1 className="text-2xl font-bold mb-4">About This Project</h1>
      <p className="mb-2">
        This &quot;Basic React&quot; project demonstrates fundamental React
        concepts and techniques. It includes the following features:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <b>Counter Component:</b> A simple counter with increment and
          decrement buttons.
        </li>
        <li>
          <b>Form Handling and Validation:</b> A form with name, email,
          password, and confirm password fields.
        </li>
        <li>
          <b>API Integration:</b> Fetches data from{" "}
          <Link
            href="https://jsonplaceholder.typicode.com/todos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://jsonplaceholder.typicode.com/todos
          </Link>{" "}
          and displays the title.
        </li>
        <li>
          <b>Routing:</b> A multi-page application with Home, About, and Todos
          pages, and navigation links for switching between them.
        </li>
        <li>
          <b>Responsive Layout:</b> The layout adapts to different screen sizes,
          providing a better user experience on both desktop and mobile devices.
        </li>
      </ul>
    </div>
  );
}
