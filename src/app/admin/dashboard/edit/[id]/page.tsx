import EditArticleClient from "./EditArticleClient";
import { PHP_API_BASE } from "@/lib/api-config";

// Must be false with output: export
export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    // Fetch all articles from API to generate static params
    const res = await fetch(`${PHP_API_BASE}/articles.php`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      console.log("Warning: Could not fetch articles for static generation");
      return [{ id: "new" }];
    }

    const articles = await res.json();

    // Generate params for each article ID plus "new"
    const params = [
      { id: "new" },
      ...articles.map((article: any) => ({ id: String(article.id) }))
    ];

    console.log(`Generated static params for ${params.length} edit pages`);
    return params;
  } catch (error) {
    console.log("Error fetching articles for static generation:", error);
    return [{ id: "new" }];
  }
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return <EditArticleClient params={params} />;
}
