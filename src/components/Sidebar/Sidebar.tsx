import React, { memo } from "react";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  categories?: ICategory[];
  handleSort: React.Dispatch<React.SetStateAction<number | undefined>>;
  handleLimit: VoidFunction;
  areCategoriesLoading: boolean;
  sortById?: number;
}

const Sidebar = ({
  categories,
  handleLimit,
  handleSort,
  areCategoriesLoading,
  sortById,
}: SidebarProps) => (
  <div className={styles.sidebar}>
    <button className={styles.sidebar_button} onClick={handleLimit}>
      LIMIT IMAGE
    </button>

    {areCategoriesLoading && (
      <p className="text-center font-bold">Categories are loading....</p>
    )}

    {categories?.map((item) => (
      <button
        onClick={() => handleSort(item.id)}
        key={item.id}
        className={
          item.id === sortById
            ? styles.sidebar_button
            : styles.sidebar_button_active
        }
      >
        {item.name.toUpperCase()}
      </button>
    ))}
  </div>
);

export default memo(Sidebar);
