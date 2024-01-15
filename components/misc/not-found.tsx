import Link from "next/link";
// message link linkText
export default function DefaultPage({
  link = "/",
  linkText = "Go to home",
  title = "Page not found",
  message = "The page you are looking for does not exist. You may have mistyped the address or the page may have moved.",
}: {
  link?: string;
  linkText?: string;
  title?: string;
  message?: string;
}) {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h2 className="text-lg font-bold"> {title} </h2>

      <p>{message}</p>

      <div className="not-prose flex">
        <Link
          href={link}
          className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}
