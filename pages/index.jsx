import { Dancing_Script } from "next/font/google";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import Translations from "./translations.json";
import flower from "../public/flower.png";
import mountain from "../public/mountain.JPG";
import basque from "../public/basque.JPG";
import wedding from "../public/wedding.JPEG";
import party from "../public/party.JPEG";

const dancing = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const translationsForLanguage = () => {
  const searchParams = useSearchParams();
  let lang = searchParams.get("lang");

  if (!lang || !["sv", "en"].includes(lang)) {
    lang = "sv";
  }

  return Translations[lang];
};

// Single page website in sections.
// Four section - Landing, Details, FAQ, Contact
const Home = () => {
  const t = translationsForLanguage();
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>{"Title"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className={"flex justify-center space-x-4"}>
          <Link href="#landing">Home</Link> |{" "}
          <Link href="#details">Details</Link> | <Link href="#faq">FAQ</Link> |{" "}
          <Link href="#contact">Contact</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <section id="landing" className="text-center mb-8">
          <div className={"flex flex-col lg:flex-row items-center"}>
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
                  Sell event line 1<br />
                  Sell event line 2<br />
                  Sell event line 3
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
                <Image src={basque} alt="Basque" />
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 justify-center lg:pl-8">
              <div>
                <h2 className="text-3xl font-bold mb-3">{"FAQ"}</h2>
                <h4 className="mb-3">{"Question 1"}</h4>
                <p className="mb-3">{"Answer"}</p>
                <h4 className="mb-3">{"Question 2"}</h4>
                <p className="mb-3">{"Answer"}</p>
                <h4 className="mb-3">{"Question 3"}</h4>
                <p className="mb-3">{"Answer"}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="details" className={"text-center mb-8"}>
          <div className="flex flex-col lg:flex-row-reverse items-center">
            <div className="lg:w-1/2">
              <div className="bg-gray-200 mb-4 lg:mb-0">
                <Image src={wedding} alt="Wedding" />
              </div>
            </div>
            <div className="lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold mb-3">{"contact"}</h2>
              <p className="mb-3">
                {"email@email.com"}
                <br />
                {"Form to fill out: link"}
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
