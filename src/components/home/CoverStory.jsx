import NewsGridSection from "../news/NewsGridSection";
import { getCoverStories } from "../../services/coverStoryApi";

function CoverStorySection() {
  return (
    <NewsGridSection
      title="Cover Story"
      fetcher={getCoverStories}
      viewAllTo="/cover-story"
      emptyText="Abhi koi cover story available nahi hai."
    />
  );
}

export default CoverStorySection;
