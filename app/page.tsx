"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Navbar from "../components/Navbar";
import WishForm from "../components/forms/WishForm";
import Hero from "../components/sections/Hero";
import Title from "../components/Title";
import InformationList from "../components/information/InformationList";
import { useState } from "react";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/20/solid";

export default function Home() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState([]);
  const [load, setLoad] = useState(false);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero
          path="/banner/hero.jpg"
          alt="Idén Karácsonykor a TE kívánságod is teljesülhet!"
        />
        <div className="container mx-auto">
          <section className="flex flex-col items-center">
            <Title text="Idén Karácsonykor a TE kívánságod is teljesülhet!" />
            <div className="flex flex-col justify-center w-full gap-20 p-4 mt-10 md:flex-row md:mt-20">
              <div className="w-full md:w-6/12 md:flex md:justify-end">
                <Image
                  src={"/images/w1.png"}
                  width={536}
                  height={500}
                  alt={""}
                />
              </div>
              <div className="flex flex-col w-full text-3xl md:w-6/12 md:justify-center md:items-start">
                <p className="mb-10">
                  Küldd el nekünk mire vágysz igazán az ünnepek közeledtével és
                  ha Te vagy a szerencsés, idén a fa alatt találod!
                </p>
                <InformationList />
                <p className="mt-7">
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
          <h3 className="mb-5 section__title">Kívánságlista küldése</h3>
          <div className="w-full p-4 bg-red-malom md:p-20">
            <div className="container mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-full px-4 py-4 bg-white border-b border-gray-200 shadow-lg md:py-20 sm:px-20 md:px-40 md:w-9/12">
                  {error.length !== 0 && (
                    <div className="p-4 mb-10 border-l-4 border-red-400 bg-red-50">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <XCircleIcon
                            className="w-5 h-5 text-red-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-3">
                          {Object.values(error).map((err) => (
                            <p key={err} className="text-red-700 text-md">
                              {err}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {success && (
                    <div className="p-4 mb-10 border-l-4 border-green-400 bg-green-50">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="w-5 h-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-lg text-green-700">
                            Sikeresen elküldted a kívánságodat!
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  <WishForm
                    setSuccess={setSuccess}
                    setError={setError}
                    load={load}
                    setLoad={setLoad}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="flex justify-center p-8 text-gray-400">
          Copyright © 2022 - Minden jog fenntartva.
        </div>
      </footer>
    </>
  );
}
