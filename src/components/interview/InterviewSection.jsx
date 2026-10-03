import NewsGridSection from "../news/NewsGridSection";
import { getInterviews } from "../../services/interviewsApi";

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
