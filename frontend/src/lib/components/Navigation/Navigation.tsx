import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="w-full flex justify-between">
      <div>Artladyclinic</div>
      <ul className="px-24 space-x-6 py-6 flex flex-row justify-between border border-slate-500">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/about-services">About Services</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
