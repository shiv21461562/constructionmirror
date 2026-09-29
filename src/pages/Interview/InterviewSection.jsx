import NewsGridSection from "../../components/NewsGridSection";
import { getInterviews } from "../../services/NewsApi";

function InterviewSection() {
  return (
    <NewsGridSection
      title="Interviews"
      fetcher={getInterviews}
      viewAllTo="/interview"
      emptyText="Abhi koi interview available nahi hai."
    />
  );
}

export default InterviewSection;
