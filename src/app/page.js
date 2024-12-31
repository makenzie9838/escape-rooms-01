import Image from "next/image";

export default function Home() {

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <Image
        src="/graveyard-background.gif"
        alt="Background"
        fill="True"
        priority
      />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col gap-8 row-start-2 items-center sm:items-start w-full sm:w-auto p-8">
        {/* Game Logo */}
        <Image
          className="dark:invert"
          src="/haunted-house.svg"
          alt="Escape Rooms logo"
          width={180}
          height={38}
          priority
        />

        {/* Game Name */}
        <h1 className="text-xs sm:text-5xl font-bold text-center sm:text-left font-[family-name:var(--font-geist-mono)] mb-0">
          Escape Rooms
        </h1>

        <div className="flex w-full sm:w-auto gap-8 justify-center sm:justify-start">
          {/* Inventory Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold">Inventory</h2>
            <div className="space-y-4">
              {/* Weapons */}
              <h3 className="text-2xl font-semibold">Weapons</h3>
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="odd:bg-gray-400">
                    <th className="px-4 py-2 border">Weapon</th>
                    <th className="px-4 py-2 border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-transparent">
                    <td className="px-4 py-2 border">
                      <Image
                        className="dark:invert"
                        src="/revolver.svg"
                        alt="Revolver"
                        width={50}
                        height={50}
                        priority
                      />
                    </td>
                    <td id="gunStatus" className="px-4 py-2 border"></td>
                  </tr>
                  <tr className="odd:bg-transparent">
                    <td className="px-4 py-2 border">
                      <Image
                        className="dark:invert"
                        src="/bat.svg"
                        alt="Revolver"
                        width={50}
                        height={50}
                        priority
                      />
                    </td>
                    <td id="batStatus" className="px-4 py-2 border"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Clothing*/}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Clothing</h3>
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="odd:bg-gray-400">
                    <th className="px-4 py-2 border">Garment</th>
                    <th className="px-4 py-2 border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-transparent">
                    <td className="px-4 py-2 border">
                      <Image
                        className="dark:invert"
                        src="/fur-coat.svg"
                        alt="Revolver"
                        width={50}
                        height={50}
                        priority
                      />
                    </td>
                    <td id="furStatus" className="px-4 py-2 border"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            {/* Story Output */}
            <div
              id="storyOutput"
              className="bg-[url('/story-screen.png')] bg-cover bg-center bg-black text-white p-8 w-[640px] h-[384px] flex justify-center items-center mb-4 border-4 border-neutral-700 rounded-lg"
            >
              Story Output
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 items-center justify-items-center mt-4">
              {" "}
              <button className="bg-green-500 hover:bg-green-950 text-white font-bold py-2 px-4 border-b-4 border-green-300 hover:border-green-500 rounded items-center justify-items-center">
                Yes/Left
              </button>
              <button className="bg-red-500 hover:bg-red-950 text-white font-bold py-2 px-4 border-b-4 border-red-300 hover:border-red-500 rounded items-center justify-items-center">
                No/Right
              </button>
            </div>
          </section>

          <section>
            {/* Assistant*/}
            <div
              id="assistantOutput"
              className="bg-slate-300 text-black p-8 w-[750px] h-[384px] flex justify-center items-center mb-4 border-4 border-neutral-700 rounded-lg"
            >
              Assistant Output
            </div>
            <textarea
              id="assistantInput"
              className="bg-slate-300 text-black p-4 w-[750px] h-[150px] mb-4 border-4 border-neutral-700 rounded-lg resize-none focus:border-yellow-300"
              placeholder="Type your input here..."
            ></textarea>
            <button className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 border-b-4 border-slate-300 hover:border-slate-500 rounded items-center justify-items-center">
              Enter
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}
