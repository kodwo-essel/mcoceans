import Booking from "@/components/sections/Booking";

export const metadata = {
    title: "Secure the Date | Booking MC Daniel Oceans",
    description: "Inquire about securing MC Daniel Oceans for your next elite wedding or corporate gala.",
};

export default function BookingPage() {
    return (
        <div className="pt-[100px]">
            <Booking />
        </div>
    );
}
