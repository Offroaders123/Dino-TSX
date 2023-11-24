// Makeshift `fetch()` call for demonstrations
const apiData: Record<string, Record<string, string | boolean>> = {
  Noice: {
    Heya: true,
    Haha: "gg"
  },
  Why: {
    whynot: false,
    aaggh: "random-data"
  }
};
const apiResponse = new Response(new Blob([JSON.stringify(apiData)],{ type: "text/json" }).stream());

export default async function DataAPIView(): Promise<Element> {
  const data: typeof apiData = await apiResponse.json();
  return (
    <>
      {await <h1 style="font-family: cursive;">Data API View Demo</h1>}
      {await <ol>
        {await Promise.all(Object.entries(data).map(async ([key,value]) => <li>{key}: {
          await <ul>
            {await Promise.all(Object.entries(value).map(async ([key,value]) => <li>{key}: {typeof value === "boolean" ? await <code style="padding: 2px 4px; background: gray;">{value}</code> : value}</li>))}
          </ul>
        }</li>))}
      </ol>}
    </>
  );
}