import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section id="hero" style={{ minHeight: "100vh", paddingTop: "80px" }}>
          <div className="container">
            <p style={{ color: "var(--text-muted)" }}>scaffold — hero coming next</p>
          </div>
        </section>
      </main>
    </>
  );
}
