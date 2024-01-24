import BlogList from "@/app/components/BlogList";
import Pagination from "@/app/components/Pagination";
import Search from "@/app/components/Search";

import { posts } from "@/app/fake-data";

export default function AboutRoute() {
  return (
    <div>
      <Search />
      <BlogList data={posts} />
      <Pagination totalPages={5}/>
    </div>
  );
}
