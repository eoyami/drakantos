// import Image from "next/image";
// import { GoChevronRight } from "react-icons/go";
// import { GoChevronLeft } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import Character from "./components/Character";

export default function Home() {
  return (
      <main className="bg-black pb-4">
        <div className="flex flex-col justify-center items-center w-full bg-[url('/background_coliseu.png')] bg-cover bg-center bg-no-repeat" >
          <div className="flex flex-col h-screen justify-center items-center bg-linear-to-t from-black to-transparente w-full p-2">
            <h1 className="text-center text-white text-2xl text-shadow-md">Um MMORPG pixel art brasileiro com heróis únicos e ação em tempo real</h1>
            <div className="flex justify-center items-center mt-4 bg-black/30 p-4 rounded">
              <video autoPlay muted loop width={700}>
                <source src="/background.mp4" />
              </video>
            </div>
            <div className="flex flex-col justify-end items-center h-56">
              <GoChevronUp className="text-white text-3xl animate-bounce" />
            <p className="text-white text-xl">Arraste para cima</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto bg-[#171717] p-4 rounded">
          <div className="flex flex-col justify-center items-center mb-4 text-white">
            <h2 className="text-2xl">Conheça os Heróis</h2>
          </div>
            <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-3 text-white  flex-wrap">
              <Character src="/ozul.png" name="Ozul" alt="Ozul"/>
              <Character src="/arryn.png" name="Arryn" alt="Arryn"/>
              <Character src="/byron.png" name="Byron" alt="Byron"/>
              <Character src="/iris.png" name="Iris" alt="Iris"/>
              <Character src="/kavras.png" name="Kavras" alt="Kavras"/>
              <Character src="/korz.png" name="Korz" alt="Korz"/>
              <Character src="/ojore.png" name="Ojore" alt="Ojore"/>
              <Character src="/ophis.png" name="Ophis" alt="Ophis"/>
              <Character src="/orbryn.png" name="Orbryn" alt="Orbryn"/>
              <Character src="/reya.png" name="Reya" alt="Reya"/>
              <Character src="/thomas.png" name="Thomas" alt="Thomas"/>
              <Character src="/urijor.png" name="Urijor" alt="Urijor"/>
            </div>
            </div>
              {/* <div className="flex flex-col items-center justify-center text-white text-3xl">
                <GoChevronLeft className="bg-black/30 rounded-full hover:bg-white/30 hover:cursor-pointer"/>
              </div>
              <div className="flex justify-center bg-black/30 p-4 w-[55%]">
                <Image src="/yuki.png" width={300} height={300} priority alt="Yuki"/>
              </div>
              <div className="flex flex-col justify-center bg-black/30 w-[45%] p-4">
                <div className="flex justify-center mb-4">
                  <h3 className="text-3xl text-white">Yuki</h3>
                </div>
                  <p className="text-justify text-md">
                  Yuki é uma pequena kitsune do tipo tank, mas com uma abordagem bem diferente do convencional:
                  </p>
                    <ul className="list-disc list-inside text-justify text-md">
                      <li>Agilidade e mobilidade: em vez de se apoiar em resistência ou bloqueios, Yuki utiliza sua agilidade para esquivar de ataques, mantendo-se ofensiva enquanto evita danos.</li>
                      <li>
                      Habilidades de dano e evasão: muitas de suas habilidades causam dano e também funcionam como formas de evasão, permitindo que ela se mova rapidamente pelo campo de batalha.​
                      </li>
                      <li>
                      Poderes de gelo: Yuki possui habilidades que controlam o campo de batalha, mantendo os inimigos à distância e oferecendo suporte ao grupo.​
                      </li>
                    </ul>​ 
              </div>
              <div className="flex flex-col items-center justify-center text-white text-3xl">
                <GoChevronRight className="bg-black/30 rounded-full hover:bg-white/30 hover:cursor-pointer"/>
              </div> */}
        </div>
    </main>
  );
}
