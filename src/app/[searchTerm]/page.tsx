import getWikiResults from "../../../lib/getWikiResults"
import Item from "./components/Item";

type Props = {
  params: {
    searchTerm: string
  }
}

export default async function page({ params: { searchTerm } }: Props) {
  const resultData: Promise<SearchResut> = getWikiResults(searchTerm);
  const data = await resultData;
  const results: Result[] | undefined = data?.query?.pages;
  const content = (
    <main className=" bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {
        results ?
          Object.values(results).map((result) => {
            return <Item key={result.pageid} result={result} />
          })
          : <h2 className="p-2 text-xl text-[#000000]">
            {`${searchTerm} Not Found`}
          </h2>
      }
    </main>
  )
  return content
}