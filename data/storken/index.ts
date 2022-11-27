import { createStore } from "storken";
import { StorkenStorage } from "storken-storage";

const storage = StorkenStorage({
  storage: typeof window !== "undefined" ? window.localStorage : (null as any),
});

export const [Storken, { useStorken }] = createStore({
  storkenOptions: {
    credentials: {
      loading: true,
      plugins: { storage },
    },
    theme: {
      plugins: { storage },
    },
    lang: {
      plugins: { storage },
    },
    newsId: {
      plugins: { storage },
    },
    NewsPage: {
      plugins: { storage },
    },
    PostPanel: {
      plugins: { storage },
    },
  },
  initialValues: {
    commentText: "" as string,
  },
});

export default { Storken, useStorken };
