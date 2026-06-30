import Fallback from "../fallback";
import Loader from "../loader";
import PostItem from "./post-item";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useInfinitePostsData } from "@/hooks/queries/use-infinite-posts-data";

export default function PoseFeed() {
  const { data, error, isPending, fetchNextPage, isFetchingNextPage } =
    useInfinitePostsData();
  const { ref, inView } = useInView();

  data?.pages;

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (error) return <Fallback />;
  if (isPending) return <Loader />;

  return (
    <div className="flex flex-col gap-10">
      {data.pages.map((page) =>
        page.map((post) => <PostItem key={post.id} {...post} />),
      )}
      {isFetchingNextPage && <Loader />}

      {/* 관측하고자 하는 div를 ref로 지정 */}
      <div ref={ref}></div>
    </div>
  );
}
