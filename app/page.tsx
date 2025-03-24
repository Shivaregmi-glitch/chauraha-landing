import Image from "next/image"
// import { Play } from "lucide-react"
// import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/texture-bg.png')] opacity-20 mix-blend-overlay z-20"></div>
        <Image
          src="/poster.jpg"
          alt="Chauraha Movie Poster"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="relative z-30 container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
          <div className="mb-6 transform-gpu animate-fade-in-down">
            <h1 className="font-serif text-6xl md:text-8xl text-white mb-4 tracking-wider">चौराहा</h1>
            <p className="text-xl md:text-2xl text-[#f8d8a8] font-light tracking-wide">CHAURAHA</p>
          </div>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            A tale of love, duty, and the crossroads of life
          </p>
          {/* <Button className="group bg-[#b83a1b] hover:bg-[#c84a2b] text-white rounded-full px-8 py-6 flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="font-medium">Watch Trailer</span>
          </Button> */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8f5f0] to-transparent z-20"></div>
      </section>

      {/* Synopsis Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-[#b83a1b] opacity-60"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-[#b83a1b] opacity-60"></div>

            <h2 className="text-3xl md:text-4xl font-serif text-[#5a3e2b] text-center mb-10">The Story</h2>

            <div className="bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-md border border-[#e8d5c0]">
              <p className="text-lg md:text-xl text-[#5a3e2b] leading-relaxed font-light">
                In a village where a leader is known for his sense of justice, he forms a deep bond with a woman from
                the community. As their connection grows, unexpected choices lead to consequences that change their
                lives forever. Love, duty, and regret collide in a story that unfolds in ways no one could have
                predicted.
              </p>
            </div>

            <div className="mt-16 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#b83a1b] to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-1/4 w-32 h-32 opacity-10">
          <Image src="/images/nepali-pattern-1.png" alt="Decorative Pattern" width={128} height={128} />
        </div>
        <div className="absolute right-0 bottom-1/4 w-40 h-40 opacity-10">
          <Image src="/images/nepali-pattern-2.png" alt="Decorative Pattern" width={160} height={160} />
        </div>
      </section>

      {/* Cast & Crew Section */}
      <section className="py-20 bg-[#f0e9e0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#5a3e2b] text-center mb-16">Cast & Crew</h2>

          <div className="mb-16">
            <h3 className="text-xl text-[#b83a1b] font-medium text-center mb-10">Lead Cast</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {[
                {
                  name: "Saroj Khanal",
                  role: "Lead Actor",
                  image: "/saroj-khanal.jpg",
                },
                {
                  name: "Nita Dhungana",
                  role: "Lead Actress",
                  image: "/nita-dhungana.jpg",
                },
              ].map((person, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-4 border-4 border-[#e8d5c0] shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={person.image || "/placeholder.svg"}
                      alt={person.name}
                      width={224}
                      height={224}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-medium text-[#5a3e2b]">{person.name}</h4>
                  <p className="text-[#8a6e5b]">{person.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-[#b83a1b] font-medium text-center mb-10">Key Crew</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Khagendra GC",
                  role: "Writer/Director",
                  image: "/khagendra-gc.jpg",
                },
                {
                  name: "Manisha Rana",
                  role: "Producer",
                  image: "/manisha-rana.jpg",
                },
                {
                  name: "Luktisan Shreesh",
                  role: "DOP",
                  image: "/luktisan-shreesh.jpg",
                },
                {
                  name: "Ravindra Oli",
                  role: "Editor",
                  image: "/ravindra-oli.jpg",
                },
              ].map((person, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-32 h-32 rounded-lg overflow-hidden mb-3 border-2 border-[#e8d5c0] shadow-md transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={person.image || "/placeholder.svg"}
                      alt={person.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-lg font-medium text-[#5a3e2b]">{person.name}</h4>
                  <p className="text-sm text-[#8a6e5b]">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#5a3e2b] text-[#f8d8a8]">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h2 className="font-serif text-3xl mb-2">चौराहा</h2>
            <p className="text-sm text-[#f8d8a8]/70">Coming to theaters soon</p>
          </div>
          {/* <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
          </div> */}
          <p className="text-xs text-[#f8d8a8]/50">© {new Date().getFullYear()} Chauraha Film. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

