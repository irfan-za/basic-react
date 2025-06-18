"use client";

import Counter from "@/components/Counter";
import RegistrationForm from "@/components/RegistrationForm";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col space-y-5 md:space-y-0 pt-12 md:pt-0 md:flex-row justify-evenly items-center">
      <Counter />
      <RegistrationForm />
    </main>
  );
}
