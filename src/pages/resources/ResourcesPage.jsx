import ResourcesHero from "../../components/resources/ResourcesHero";
import ResourcesContent from "../../components/resources/ResourcesContent";
import ResourcesNewsletter from "../../components/resources/ResourcesNewsletter";

const ResourcesPage = () => {
  return (
    <main className="bg-[#F7F8FA]">
      <ResourcesHero />
      <ResourcesContent />
      <ResourcesNewsletter />
    </main>
  );
};

export default ResourcesPage;