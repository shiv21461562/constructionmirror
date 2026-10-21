import InterviewSection from "../../components/interview/InterviewSection";
import ExclusiveInterviews from "../../components/home/ExclusiveInterviews";
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
