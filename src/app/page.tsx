import Header from "@/components/header";
import Pronouncement from "@/components/pronouncement";
import Proposal from "@/components/proposal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-48 flex min-h-screen flex-col">
        <div className="max-w-4xl container flex flex-col gap-10 lg:gap-16">
          <Pronouncement />
          <Proposal />
        </div>
      </main>
    </>
  );
}
