import React, { useCallback, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useGetCategoriesQuery, useGetCatsQuery } from "./store/cats.api";

function App() {
  const [limit, setLimit] = useState(10);
  const [sortById, setSortById] = useState<number>();
  const { data: categories, isLoading: areCategoriesLoading } =
    useGetCategoriesQuery("");
  const { isLoading: areCatsLoading, data: cats } = useGetCatsQuery({
    limit,
    sortById,
  });

  const handleLimit = useCallback(() => setLimit((limit) => limit + 10), []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        categories={categories}
        handleSort={setSortById}
        handleLimit={handleLimit}
        areCategoriesLoading={areCategoriesLoading}
        sortById={sortById}
      />
      {areCatsLoading ? <div>Loading...</div> : <Main cats={cats} />}
    </div>
  );
}

export default App;
