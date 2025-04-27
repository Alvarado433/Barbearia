import Banner from "@/components/site/Banner/Banner";
import Footer from "@/components/site/footer/footer";
import Icone from "@/components/site/Icone/Icone";
import Menu from "@/components/site/Menu/Menu";
import Promo from "@/components/site/promo/promo";
import Servico from "@/components/site/servico/servico";
import Sobrenos from "@/components/site/sobre-nos/sobre-nos";


export default function Home() {
  return (
    <div>
     <Menu />
     <Banner />
     <Sobrenos />
     <Servico />
     <Promo />
     <Footer />
    </div>
  );
}
