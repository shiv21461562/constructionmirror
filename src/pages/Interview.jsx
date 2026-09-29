import InterviewSection from "./Interview/InterviewSection";
import ExclusiveInterviews from "./Interview/ExclusiveInterviews";

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
