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
export const apiResponse = new Response(new Blob([JSON.stringify(apiData)],{ type: "text/json" }).stream());

export interface DataAPIViewProps {
  data: typeof apiData;
}

export default function DataAPIView({ data }: DataAPIViewProps): Element {
  return (
    <>
      <h1 style="font-family: cursive;">Data API View Demo</h1>
      <ol>{Object.entries(data).map(([key,value]) =>
        <li>{key}: {
          <ul>{Object.entries(value).map(([key,value]) =>
            <li>{key}: {typeof value === "boolean"
              ? <code style="padding: 2px 4px; background: gray;">{value}</code>
              : value}
            </li>)}
          </ul>}
        </li>)}
      </ol>
    </>
  );
}