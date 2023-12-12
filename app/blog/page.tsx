import BlogList from "@/app/components/BlogList";
import Pagination from "@/app/components/Pagination";
import Search from "@/app/components/Search";

export default function AboutRoute() {
  return (
    <div>
      <Search />
      <BlogList />
      <Pagination />
    </div>
  );
}
