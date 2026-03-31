import EditArticleClient from "./EditArticleClient";

// Since output: export is used, we must provide at least one static param.
// dynamicParams must be false for static export.
export const dynamicParams = false;

export async function generateStaticParams() {
  console.log("Generating static params for [id] (satisfying export check)...");
  // We return an empty or dummy list. Some versions of Next.js 15/16 
  // might explicitly check if the function exists and return something.
  return [{ id: "new" }]; 
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return <EditArticleClient params={params} />;
}
