import React, { useState } from "react";
import { CalendarHeart, Wallet, CalendarDays, ShieldCheck } from "lucide-react";

const features = [
	{
		icon: Wallet,
		title: "Get a snapshot of your average costs",
		description:
			"Get a snapshot of your average costs, transportation, hidden charges, and packing essentials - so you're never caught off guard.",
	},
	{
		icon: CalendarHeart,
		title: "Smart Trip Planner",
		description:
			"Plan your trips with intelligent suggestions and easy scheduling.",
	},
	{
		icon: CalendarDays,
		title: "Enter your dates and destination",
		description:
			"Zephyr finds the best dates for beaches, city walks, hikes, or festivals based on local weather and events.",
	},
	{
		icon: ShieldCheck,
		title: "Travel safely and confidently",
		description:
			"Zephyr checks local customs, seasonal cautions, and neighborhood-level info to ensure your safety and comfort.",
	},
];

export default function FeaturesSection() {
	const [activeIndex, setActiveIndex] = useState(null);

	return (
		<section
			className="py-20 px-4 bg-white text-gray-800"
			style={{
				backgroundImage: "url('/feature.jpg')",
				backgroundSize: "cover",
			}}
		>
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-5xl font-bold mb-4 text-white">Features</h2>
				<p className="text-lg mb-12 text-white">
					What makes Zephyr unique?
				</p>
				<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
					{features.map((feature, index) => {
						const Icon = feature.icon;
						return (
							<div
								key={index}
								className="p-6 border-4 border-stone-600 rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col items-center"
							>
								<button
									className="mb-4 focus:outline-none"
									onClick={() =>
										setActiveIndex(
											activeIndex === index ? null : index
										)
									}
								>
									<Icon className="w-20 h-20 text-stone-600 transition-transform duration-200 hover:scale-110" />
								</button>
								{activeIndex === index && (
									<>
										<h3 className="text-xl font-semibold mb-2 text-black">
											{feature.title}
										</h3>
										<p className="text-sm text-black">
											{feature.description}
										</p>
									</>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
