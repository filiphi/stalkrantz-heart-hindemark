import { Dancing_Script } from "next/font/google";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import Translations from "./translations.json";
import flower from "../public/flower.webp";
import mountain from "../public/mountain.webp";
import wedding from "../public/wedding.webp";
import party from "../public/party.webp";

const dancing = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const useLanguage = () => {
  const searchParams = useSearchParams();
  let lang = searchParams.get("lang");

  if (!lang || !["sv", "en"].includes(lang)) {
    lang = "sv";
  }

  return lang;
};

// Single page website in sections.
// Four section - Landing, Details, FAQ, Contact
const Home = () => {
  const lang = useLanguage();
  const t = Translations[lang];
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>{"Title"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={`fixed top-0 w-full bg-white z-10 ${styles.header}`}>
        <div className="pb-2">
          <nav className="flex justify-center space-x-4">
            <Link href="#landing" className="hover:underline">
              {t["header-nav-landing"]}
            </Link>{" "}
            <Link href="#details" className="hover:underline">
              {t["header-nav-details"]}
            </Link>{" "}
            <Link href="#faq" className="hover:underline">
              {t["header-nav-faq"]}
            </Link>{" "}
            <Link href="#contact" className="hover:underline">
              {t["header-nav-contact"]}
            </Link>
            <div className="">
              <Link
                href="?lang=sv"
                className={`${lang === "sv" ? "font-bold" : ""} hover:underline`}
              >
                {t["header-language-sv"]}
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link
                href="?lang=en"
                className={`"mx-0 ${lang === "en" ? "font-bold" : ""} hover:underline`}
              >
                {t["header-language-en"]}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className={`${styles.main}`}>
        <section id="landing" className="text-center mb-8">
          <div className={"flex flex-col lg:flex-row items-center mt-5"}>
            <div className={"flex lg:w-1/2 justify-center"}>
              <div className={"mb-4 mg:mb-0"}>
                <Image src={flower} alt="Flower" height={500} />
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 justify-center lg:pl-8">
              <div>
                <h1 className={"text-3xl font-bold mb-3 " + dancing.className}>
                  {t["title"]}
                </h1>
                <p className={"mb-3"}>
                  {t["title-text-one"]}
                  <br />
                  {t["title-text-two"]}
                  <br />
                  {t["title-text-three"]}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="details" className={"text-center mb-8"}>
          <div className="flex flex-col lg:flex-row-reverse items-center">
            <div className="lg:w-1/2">
              <div className="bg-gray-200 mb-4 lg:mb-0">
                <Image src={party} alt="Flower" />
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 justify-center lg:pl-8">
              <div>
                <h2 className="text-3xl font-bold mb-3">{"Details"}</h2>
                <p className="mb-3">
                  {t["address"]}
                  <br />
                  {t["time"]}
                  <br />
                  {t["dressCode"]}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className={"text-center mb-8"}>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <div className="bg-gray-200 mb-4 lg:mb-0">
                <Image src={mountain} alt="Hiking on a mountain in spain" />
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 justify-center lg:pl-8">
              <div>
                <h2 className="text-3xl font-bold mb-3">{t["faq-title"]}</h2>
                {t["faqs"].map((faq, index) => (
                  <div key={index}>
                    <h4 className="mb-0 font-bold">{faq.question}</h4>
                    <p className="mb-3">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="details" className={"text-center mb-8"}>
          <div className="flex flex-col lg:flex-row-reverse items-center">
            <div className="lg:w-1/2">
              <div className="bg-gray-200 mb-4 lg:mb-0">
                <Image src={wedding} alt="Picture from Wedding" />
              </div>
            </div>
            <div className="lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold mb-3">{t["contact"]}</h2>
              <p className="mb-3">
                {t["email"]}
                <br />
                {t["form"]}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>{"Footer"}</footer>
    </div>
  );
};

export default Home;
