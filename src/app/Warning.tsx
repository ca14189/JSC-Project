import Image from 'next/image';
import Link from 'next/link';

export default function Warning({
  title = 'Warning!',
  message = 'Please proceed with caution.',
  buttonText = "Go Home",
  buttonHref = "/"
}: {
  title?: string;
  message?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <main>
      <section className="bg-white">
        <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-black">
          <Image
            src="/svg/warning.svg"
            width={25}
            height={25}
            alt="warning"
          />

          <h1 className="mt-8 text-4xl md:text-6xl">{title}</h1>
          <p className="mt-4 text-lg">{message}</p>

          <Link
            href={buttonHref}
            className="mt-4 px-4 py-2 rounded bg-black text-white"
          >
            {buttonText}
          </Link>
        </div>
      </section>
    </main>
  );
}
