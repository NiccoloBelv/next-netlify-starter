import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Niccolò Belvedere - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hello, I am Niccolò Belvedere. Welcome to my personal portfolio!" />

        <section>
          <h2 style={{ textAlign: 'center' }}>About Me</h2>
          <p style={{ textAlign: 'center' }}>
            As a passionate student with a proven track record in Business Development, I specialize in Tech Sales. 
            My innovative solutions have driven measurable results in my previous experiences, demonstrating a deep understanding of customers and markets. 
            Committed to continuous learning, I stay ahead in the dynamic tech landscape.
          </p>
        </section>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <section style={{ textAlign: 'center' }}>
            <h2>My Photo</h2>
            <img
              src="/Picture.png"
              alt="Niccolò Belvedere"
              style={{
                maxWidth: '25%',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </section>

          <section style={{ textAlign: 'center' }}>
            <h2>Download my CV</h2>
            <p>
              <a href="/CV.pdf" download>
                Click here to download!
              </a>
            </p>
          </section>

          <section style={{ textAlign: 'center' }}>
            <h2>Projects</h2>
            {/* Aggiungi qui i componenti del tuo progetto */}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
