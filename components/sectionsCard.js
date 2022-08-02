import Card from "./card";
export default function SectionsCard({ title }) {
  return (
    <section className="container mx-auto mt-5 px-10">
      <div>
        <h1 className="text-3xl text-white">{title}</h1>
        <div className="mt-5  flex items-center">
          <div className="w-full h-full  overflow-x-scroll scrollbar-hide  whitespace-nowrap scroll-smooth">
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}
