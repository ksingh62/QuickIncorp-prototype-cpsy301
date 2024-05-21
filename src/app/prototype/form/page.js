import Form from "@/components/Form/Form";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container">
        <Form />
      </div>
    </section>
  );
}

/* 
pnpm install -D @tailwindcss/forms

pnpm i zod
pnpm install react-hook-form
pnpm install @hookform/resolvers
pnpm install framer-motion
*/