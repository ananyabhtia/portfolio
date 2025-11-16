export default function SocialsPanel({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white">
      <h1 className="text-3xl font-semibold mb-8">Socials</h1>
      <button
        onClick={onBack}
        className="px-6 py-3 rounded-full bg-gray-200 hover:bg-green-300 transition"
      >
        Back ↓
      </button>
    </div>
  );
}
