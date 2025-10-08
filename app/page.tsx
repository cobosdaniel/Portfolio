import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="row-start-2 flex w-full max-w-5xl mx-auto flex-col gap-10">
        {/* Hero */}
        <section className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Image
            src="/avatar.jpg"
            alt="Daniel Cobos"
            width={200}
            height={200}
            className="rounded-full ring-1 ring-black/10 dark:ring-white/10"
            priority
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Daniel Cobos
            </h1>
            <p className="text-sm sm:text-base text-black/100 dark:text-white mt-1">
              Software Engineer — Full-Stack, Mobile, and Cloud.
              <br /><br />
              I am very passionate about anime, gaming, streaming & content creation. When working on my personal projects, I like to incorporate my other passions with my coding skills.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="mailto:cobos.r.daniel@gmail.com"
                className="inline-flex h-10 items-center rounded-xl border px-4 text-lg hover:bg-black/5 dark:hover:bg-white/10"
              >
                Contact
              </Link>
              <Link
                href="https://github.com/cobosdaniel"
                className="inline-flex h-10 items-center rounded-xl border px-4 text-lg hover:bg-black/5 dark:hover:bg-white/10"
                target="_blank"
              >
                GitHub
              </Link>
              <Link
                href="/Daniel Cobos Resume.pdf"
                className="inline-flex h-10 items-center rounded-xl border px-4 text-lg hover:bg-black/5 dark:hover:bg-white/10"
                target="_blank"
              >
                Resume
              </Link>
              <Link
                href="https://www.linkedin.com/in/daniel-cobos-7164a9286/"
                className="inline-flex h-10 items-center rounded-xl border px-4 text-lg hover:bg-black/5 dark:hover:bg-white/10"
                target="_blank"
              >
                Linkedin
              </Link>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <article className="rounded-2xl border p-4 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <h3 className="font-medium">Big John’s Books</h3>
              <p className="text-sm text-black/70 dark:text-white/70 mt-1">
                Flask + MySQL bookstore with inventory, carts, and checkout.
              </p>
              <div className="mt-3 flex gap-3 text-sm">
                {/* <Link href="https://github.com/youruser/big-johns-books" target="_blank" className="underline">
                  Code
                </Link> */}
                <span className="text-black/50 dark:text-white/50">Python · SQL · Cloud Infrastructure (Digital Ocean)</span>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-4 text-sm text-black/60 dark:text-white/60">
        <Link href="https://github.com/cobosdaniel/portfolio" target="_blank" className="hover:underline">
          View this site’s source
        </Link>
        <span>·</span>
        <span>© {new Date().getFullYear()} Daniel Cobos</span>
      </footer>
    </div>
  );
}
