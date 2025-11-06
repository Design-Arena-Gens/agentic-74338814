export const metadata = {
  title: "Incredible India ? Tourism Pitch Deck",
  description: "A concise, data-led pitch deck highlighting India's tourism opportunity."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <div className="brand">Incredible India ? Pitch Deck</div>
            <div className="small">Use <span className="kbd">?</span> <span className="kbd">?</span> to navigate</div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
