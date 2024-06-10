import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Link
        href="/dashboard"
        className="p-2 cursor-pointer border-2 border-cyan-400 rounded-lg"
      >
        go to Dashboard
      </Link>
    </div>
  );
}
