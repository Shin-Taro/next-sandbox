import Link from "next/link"

const Home = () => (
  <section className="mx-auto w-[70%]">
    <h1 className="text-first">Home page</h1>
    <ul className="mt-24 list-inside list-disc">
      <li>
        <Link href="/internal">
          <span className="text-sub hover:text-subFont">Internal page</span>
        </Link>
      </li>
      <li className="mt-10">
        <Link href="/external1">
          <span className="text-sub hover:text-subFont">First external page</span>
        </Link>
      </li>
      <li className="mt-10">
        <Link href="/external2">
          <span className="text-sub hover:text-subFont">Second external page</span>
        </Link>
      </li>
    </ul>
  </section>
)

export default Home
