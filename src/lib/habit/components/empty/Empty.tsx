import gymBro from "@/assets/images/Gym-bro.png";

export const Empty = () => {
	return (
		<div className="flex w-full items-center justify-center flex-col mt-3 font-bold">
			<img src={gymBro} alt="" className="w-10/12 cursor-pointer" />

			<a
				href="https://storyset.com/sport"
				className="text-zinc-600 decoration-zinc-400 font-light text-[10px] underline mt-[2px] hover:text-zinc-800"
				target="_blank"
			>
				Sport illustrations by Storyset
			</a>
		</div>
	);
};
