import NationalNews from "../../components/news/NationalNews";
import InternationalNews from "../../components/news/InternationalNews";

function NewsPage({ category }) {
  const limit = category ? 12 : 4;

  return (
    <>
      {category !== "international" && <NationalNews limit={limit} />}
      {category !== "national" && <InternationalNews limit={limit} />}
    </>
  );
}

export default NewsPage;