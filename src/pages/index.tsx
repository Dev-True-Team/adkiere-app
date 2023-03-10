import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Seccion1 from "../../components/Seccion1";
import Seccion2 from "../../components/Seccion2";
import Seccion3 from "../../components/Seccion3";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar ></Navbar>
      <Seccion1></Seccion1>
      <Seccion2></Seccion2>
      <Seccion3></Seccion3>
      {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          
          <div className="flex flex-col items-center gap-2">
            <AuthShowcase />
          </div>
        </div>
      </main> */}
      <Footer></Footer>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: Houses } = api.House.getHouses.useQuery({
    limit: 100,
  });

  const { mutate: createHouse, data } = api.House.createHouse.useMutation();

  return (
    
    <div className="flex flex-col items-center justify-center gap-4">
      
      <p className="text-center text-2xl text-white">
        {Houses?.houses && (
          <div className="flex flex-col gap-y-4">
            {Houses.houses.map((house) => (
              <div key={house.id} className="grid grid-cols-4 gap-x-2">
                <div className="border-2 border-slate-200 p-4">
                  {house.propertyData.title}
                </div>
                <div className="border-2 border-slate-200 p-4">
                  {house.propertyData.description}
                </div>
                <div className="border-2 border-slate-200 p-4">
                  {house.propertyData.price}
                </div>
                <div className="border-2 border-slate-200 p-4">
                  {house.propertyData.location.country}
                </div>
              </div>
            ))}
          </div>
        )}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={() => {
          for (let i = 5; i < 20; i++) {
            createHouse({
              propertyData: {
                title: "test " + i.toString(),
                description: "test" + i.toString(),
                price: 1000 + i,
                location: {
                  country: "test" + i.toString(),
                  state: "test" + i.toString(),
                  city: "test" + i.toString(),
                  neighborhood: "test" + i.toString(),
                  street: "test" + i.toString(),
                  zipCode: "test" + i.toString(),
                  latitude: 11,
                  longitude: 11,
                },
                propertyStatus: "SALE",
                totalRods: 11,
                totalConstructionRods: 11,
                totalMeters: 11,
                totalConstructionMeters: 11,
              },
              housingData: {
                bedrooms: 1,
                bathrooms: 1,
                floors: 1,
                year: 1,
                remodeled: 1,
                cistern: true,
                water: true,
                electricity: true,
                gas: true,
                furnished: true,
                terrace: true,
              },
              garage: true,
              pool: true,
              garden: true,
              houseType: "HOUSE",
            });
          }
        }}
      >
        create house
      </button>
      {data && (
        <p className="font-semibold text-white no-underline">
          {data.house && data.house.id}
        </p>
      )}
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
