export default function MePanel({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white">
      <h1 className="text-3xl font-semibold mb-8">Me</h1>
      <button
        onClick={onBack}
        className="px-6 py-3 rounded-full bg-gray-200 hover:bg-orange-400 transition"
      >
        Back →
      </button>
    </div>
  );
}
