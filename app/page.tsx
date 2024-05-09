import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-2">
      <h1 className="text-3xl">Collabs</h1>
      <Link
        className="bg-gray-900 text-white flex px-4 py-3 rounded-md"
        href="/admin"
      >
        Login
      </Link>
    </main>
  );
}
