/* eslint-disable jsx-a11y/alt-text */
"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "./page.module.css";
import WishForm from "../components/forms/WishForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <div aria-hidden="true" className="">
        <img src="/banner/hero.png" alt="" className="w-full h-auto" />
      </div>
      <div className="container mx-auto">
        <section className="flex flex-col items-center">
          <h3 className="section__title text-center mt-10 md:mt-0">
            Idén Karácsonykor a TE kívánságod is teljesülhet!
          </h3>
          <div className="flex flex-col md:flex-row w-full justify-center gap-20 mt-10 md:mt-20 p-4">
            <div className="w-full md:w-6/12 md:flex md:justify-end">
              <Image src={"/images/w1.png"} width={536} height={500} alt={""} />
            </div>
            <div className="w-full md:w-6/12 text-3xl flex flex-col md:justify-center md:items-start">
              <p className="">
                Küldd el nekünk mire vágysz igazán az ünnepek közeledtével és ha
                Te vagy a szerencsés, idén a fa alatt találod!
              </p>
              <p className="mt-10 mb-3 text-2xl text-justify uppercase">
                <strong className="text-black">Korosztály:</strong>{" "}
                <span className="text-red-malom font-bold">6-14 éves</span>
              </p>
              <p className="mb-3 text-2xl text-justify uppercase">
                <strong className="text-black">Álmodozás limit:</strong>{" "}
                <span className="text-red-malom font-bold">10 000Ft</span>
              </p>
              <p className="mb-10 text-2xl text-justify uppercase">
                <strong className="text-black">Határidő:</strong>{" "}
                <span className="text-red-malom font-bold">
                  2022. december 1-12.
                </span>
              </p>
              <p>
                További részletek a{" "}
                <a
                  href="https://malomkecskemet.hu/hu/my-way"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400"
                >
                  MyWay app
                </a>
                ban.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col items-center mt-20">
        <h3 className="section__title mb-5">Kívánságlista küldése</h3>
        <div className="bg-red-malom w-full p-4 md:p-20">
          <div className="container mx-auto">
            <div className="flex flex-col items-center">
              <div className="border-b border-gray-200 bg-white px-4 py-4 md:py-20 sm:px-20 md:px-40 w-full md:w-9/12 shadow-lg">
                <WishForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center p-8 text-gray-400">
        Copyright © 2022 - Minden jog fenntartva.
      </div>
    </>
  );
}
