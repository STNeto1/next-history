import NextPageButton from '../src/components/NextPage'

export default function AnyPage({ lastPage = '' }: { lastPage: string }) {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <span className="text-black text-lg">Previous url: {lastPage}</span>
        <NextPageButton />
      </div>
    </main>
  )
}
