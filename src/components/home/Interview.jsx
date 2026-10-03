import InterviewSection from "../interview/InterviewSection";
import ExclusiveInterviews from "./ExclusiveInterviews";

function Interview() {
  return (
    <main className="min-h-screen bg-white">
      {/* ================= INTERVIEWS ================= */}
      <InterviewSection />

      {/* ================= EXCLUSIVE INTERVIEWS ================= */}
      <ExclusiveInterviews />
    </main>
  );
}

export default Interview;
