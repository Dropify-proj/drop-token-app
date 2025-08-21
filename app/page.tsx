import Header from './components/Header';
import ReceiptProcessor from './components/ReceiptProcessor';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Turn Receipts into <span className="text-violet-400">Rewards</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Scan any receipt, earn Drop Tokens, and unlock exclusive rewards. It's that simple.
          </p>
        </div>

        <ReceiptProcessor />

        <div className="text-center mt-12">
            {/* IMPORTANT: Add your pitch deck link in the href below */}
            <a 
                href="https://g.co/gemini/share/cf103ef28bc6"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-transparent border border-violet-500 text-violet-400 font-semibold py-2 px-6 rounded-lg hover:bg-violet-500 hover:text-white transition-colors"
            >
                View Our Pitch Deck
            </a>
        </div>
      </main>

      <footer className="text-center p-6 text-gray-500 border-t border-gray-800 mt-12">
        <p>&copy; {new Date().getFullYear()} DropToken. All rights reserved.</p>
      </footer>
    </div>
  );
}