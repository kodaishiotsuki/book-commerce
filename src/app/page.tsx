import Book from "@/components/book";
import { getAllBooks } from "@/lib/microcms/client";

export default async function Home() {
  const { contents } = await getAllBooks();
  console.log("contents", contents);
  return (
    <>
      <main className="flex flex-wrap justify-center items-center md:mt-32 mt-20">
        <h2 className="text-center w-full font-bold text-3xl mb-2">
          Book Commerce
        </h2>
        {contents.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </main>
    </>
  );
}
