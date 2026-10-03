import NewsGridSection from "../news/NewsGridSection";
import { getGuestArticles } from "../../services/guestArticleApi";

function GuestArticle() {
  return (
    <NewsGridSection
      title="Guest Article"
      fetcher={getGuestArticles}
      viewAllTo="/news/guest-article"
      emptyText="Abhi koi guest article available nahi hai."
    />
  );
}

export default GuestArticle;
