import NewsGridSection from "../../components/NewsGridSection";
import { getFeaturedNews } from "../../services/NewsApi";

function FeaturedNews() {
  return (
    <NewsGridSection
      title="Featured News"
      fetcher={getFeaturedNews}
      viewAllTo="/news/featured"
      emptyText="Abhi koi featured news available nahi hai."
    />
  );
}

export default FeaturedNews;
