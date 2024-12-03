import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
	return (
		<main className="flex flex-col items-start justify-between p-28 max-md:p-8 overflow-hidden relative">
			<h1 className="text-5xl tracking-normal my-2 w-1/3 leading-tight text-primary">Google Developer Groups</h1>
			<p className="text-2xl py-4 text-muted-foreground max-md:text-lg">On Campus RBU</p>
			<p className="text-2xl tracking-normal my-2 w-2/4 leading-tight text-muted-foreground max-md:w-full max-md:text-[1.1rem]">
				On Campus Developer Groups are university based community groups for students interested in Google developer
				technologies.
			</p>
			<Link href="/signup">
			<Button
				className="max-md:hidden uppercase my-6 px-4 rounded-none text-md border-primary max-md:my-2"
				variant="outline"
			>
				Join Us!
			</Button>
			</Link>
			<Image
				src="/sidebar.svg"
				alt="Sidebar"
				height={200}
				width={200}
				className="absolute md:w-1/5 right-0 top-0 z-20 max-md:-right-20 overflow-x-hidden max-md:top-8 max-md:h-80 max-md:-z-10"
			/>
		</main>
	);
}