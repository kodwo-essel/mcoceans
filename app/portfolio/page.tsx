import Gallery from "@/components/sections/Gallery";

export const metadata = {
    title: "The Gallery | Archive of MC Daniel Oceans",
    description: "A curated collection of legacy events orchestrated across twelve nations.",
};

export default function PortfolioPage() {
    return (
        <div className="bg-black">
            <Gallery />
        </div>
    );
}
