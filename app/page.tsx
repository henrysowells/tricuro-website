import RotatingEarth from "@/components/ui/wireframe-dotted-globe";

export default function DemoOne() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-8 gap-6">
      <h1 className="text-white font-semibold tracking-widest uppercase text-sm opacity-50">
        Wireframe Dotted Globe
      </h1>
      <RotatingEarth />
    </main>
  );
}
