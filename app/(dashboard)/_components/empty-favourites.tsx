import Image from "next/image";

export default function EmptyFavourites() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image src="/empty-favourites.png" height={500} width={500} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">No favourite boards</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favouriting a board
      </p>
    </div>
  );
}
