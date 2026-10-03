import AdvertiseHero from "../../components/advertise/AdvertiseHero";
import AdvertiseBenefits from "../../components/advertise/AdvertiseBenefits";
import AdvertiseContact from "../../components/advertise/AdvertiseContact";

function Advertise() {
  return (
    <main className="bg-white text-slate-900">
      <AdvertiseHero />
      <AdvertiseBenefits />
      <AdvertiseContact />
    </main>
  );
}

export default Advertise;