import logo from "@/assets/logo.png";

export default function GlobalLoader() {
  return (
    <div className="flex h-[100vh] w-[100vh] w-[100vw] flex-col items-center justify-center">
      <div className="mb-15 flex animate-bounce items-center gap-4">
        <img src={logo} alt="test" className="w-10" />
        <div className="text-2xl font-bold">아이묭</div>
      </div>
    </div>
  );
}
