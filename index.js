import MiraPlayground from "MiraPlayground";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Mira SDK Playground</h1>
      <p className="mb-6">Try out the Mira SDK live in your browser.</p>
      <MiraPlayground />
    </div>
  );
}
