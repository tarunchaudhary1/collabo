import Canvas from "./_components/canvas";
import { Room } from "@/components/room";
import Loading from "./_components/loading";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

export default function BoardIdPage({ params }: BoardIdPageProps) {
  return (
    <div className="w-full h-full">
      <Room roomId={params.boardId} fallback={<Loading />}>
        <Canvas boardId={params.boardId} />
      </Room>
    </div>
  );
}
