import Image from "next/image";

import tw from "tailwind-styled-components";

const ProductTitle = `flex-auto text-lg font-semibold text-slate-900`;

// interface ProductPriceColor {
//   priceColor?: "" | "text-slate-200";
// }

// const ProductPrice = tw.div<ProductPriceColor>`
// text-lg
// font-semibold
// text-slate-800
// `;

// const Wrapper = ({ children, ...props }: any) => {
//   return (
//     <div className="flex font-sans rounded-lg w-30 bg-slate-400" {...props}>
//       {children}
//     </div>
//   );
// };

export default function Home() {
  return (
    <div className="container m-auto lg:px-20 ">
      <nav className="bg-orange-600 mt-2">NavBar</nav>
      <div className="bg-green-500 flex gap-10 mt-4">
        <div className="bg-red-300 ">
          <h3>Bênto Cake - 350g</h3>
          <p>
            acompanha garfo e embalagem biodegradáveis 2 camadas de massa 1
            camada de recheio 7 cm de altura 10cm de diâmetro
          </p>
        </div>
        <div className="bg-blue-400">
          <h3>Cobertura</h3>
          <p>
            pensando na qualidade e experiência gustativa, trabalhamos
            exclusivamente com a cobertura buttercream de merengue suíco
          </p>
        </div>
      </div>
      <form encType="multipart/form-data" name="PedidosBento">
        <section className="border-solid border-2 rounded-md  mt-4 p-2 border-sky-500">
          <h3 className="p-2">Selecione o sabor do seu bolo:</h3>
          <div className="flex gap-20 px-10">
            <label className="bg-purple-700 rounded-lg max-w-sm ">
              <input
                type="radio"
                id="CHOCOLATUDO"
                value="CHOCOLATUDO"
                name="CHOCOLATUDO"
              />
              Chocolatudo
              <p>
                massa amanteigada de cacu, recheio de brigadeiro gourmet de
                chocolate meio amargo
              </p>
            </label>
            <label className="bg-purple-700 rounded-lg max-w-sm">
              <input
                type="radio"
                id="LEITE_NINHO"
                value="LEITE_NINHO"
                name="LEITE_NINHO"
              />
              Leite Ninho
              <p>
                massa amanteigada de baunilha e recheio de brigadeiro cremoso de
                leite ninho
              </p>
            </label>
            <label className="bg-purple-700 rounded-lg max-w-sm">
              <input
                type="radio"
                id="RED_VELVET"
                value="RED_VELVET"
                name="RED_VELVET"
              />
              Red Velvet
              <p>
                massa fofinha e aveludada de tom vermelho, saborizada com
                baunilha + cacau e recheio de cream cheese frosting
              </p>
            </label>
          </div>
        </section>

        <section>
          <label>
            <input
              className=" border-solid border-2 text-white  border-sky-500"
              type="text"
              id="POST-corBase"
              // name="cakeColor"
              placeholder="Cor do seu bolinho"
            />
          </label>
        </section>
        <section></section>
        <section></section>
        <footer></footer>
      </form>
    </div>
  );
}
