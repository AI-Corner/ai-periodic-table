import { useState } from 'react'
import './index.css'
import PeriodicTable from './PeriodicTable'

function App() {
  return (
    <div className="app-container">
      <header style={{ marginBottom: '60px' }}>
        <h1>AI Periodic Table</h1>
        <p style={{ fontSize: '1.2em', color: '#94a3b8' }}>
          Organizing the Chaos of LLMs, RAG, and AI Agents
        </p>
      </header>

      <main>
        <section className="hero-visualization">
          {/* Placeholder for the hero image if I could generate it, otherwise a nice gradient box */}
          <div style={{
            height: '300px',
            background: 'linear-gradient(45deg, #000428, #004e92)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            border: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.4), transparent 70%)',
              zIndex: 1
            }}></div>
            <h2 style={{ zIndex: 2, fontSize: '2.5em', textShadow: '0 0 20px rgba(0,0,0,0.8)' }}>
              The Elements of AI
            </h2>
          </div>
        </section>

        <PeriodicTable />

        <div className="content-section">
          <p>
            This conceptual AI Periodic Table structures AI components like chemistry elements across rows of maturity stages and columns of functional families. This framework decodes complex architectures, predicts combinations, and evaluates AI systems.
          </p>

          <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #60a5fa', padding: '15px', margin: '20px 0', borderRadius: '4px' }}>
            <strong style={{ color: '#60a5fa', display: 'block', marginBottom: '5px' }}>🧠 How to Read This Table</strong>
            <p style={{ margin: 0, fontSize: '0.95em', color: '#cbd5e1' }}>
              Think of <strong>Columns</strong> as <em>"What it does"</em> (Capabilities)<br />
              Think of <strong>Rows</strong> as <em>"How grown up it is"</em> (Maturity: Primitives → Emerging)
            </p>
          </div>

          <h2>Table Structure: Simplified for Everyone</h2>
          <p>Imagine building with LEGOs. This table organizes the "blocks" of Artificial Intelligence into four simple levels:</p>

          <div style={{ display: 'grid', gap: '20px', margin: '30px 0' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #4facfe' }}>
              <h3 style={{ marginTop: 0, color: '#4facfe' }}>Row 1: Primitives (The Basic Bricks)</h3>
              <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#ccc' }}>"The Basic LEGO Bricks. You need these to start building anything!"</p>
              <p>These are the smallest pieces. <strong>Prompts</strong> are like instructions you give, and <strong>LLMs</strong> are the brains that understand them.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #00f2fe' }}>
              <h3 style={{ marginTop: 0, color: '#00f2fe' }}>Row 2: Compositions (Mixing the Bricks)</h3>
              <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#ccc' }}>"Mixing the Bricks. This is when you put blocks together to make cool shapes."</p>
              <p>Now we combine the basic pieces. <strong>RAG</strong> is like giving the brain a library book to read, and <strong>Guardrails</strong> are safety rules so it behaves nicely.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #a66dff' }}>
              <h3 style={{ marginTop: 0, color: '#a66dff' }}>Row 3: Deployment (Ready to Play)</h3>
              <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#ccc' }}>"Ready to Play. Your toy is finished and strong enough to show your friends."</p>
              <p>This is when we make things real. <strong>Agents</strong> can do jobs for you (like booking a flight), and <strong>Frameworks</strong> hold everything together.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ff6b6b' }}>
              <h3 style={{ marginTop: 0, color: '#ff6b6b' }}>Row 4: Emerging (Future Magic)</h3>
              <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#ccc' }}>"Future Magic. These are brand new, super-powerful blocks that are just being invented!"</p>
              <p>The newest stuff! <strong>Thinking Models</strong> can solve hard puzzles, and <strong>Multi-Agents</strong> are like a whole team of robots working together.</p>
            </div>
          </div>


          <p>
            This visual grid categorizes elements by reactivity (G1 prompts to agents) and stability (G5 models).
          </p>


          <h2>Key Families: Who Does What?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>

            <div style={{ background: 'rgba(255,107,107,0.1)', padding: '20px', borderRadius: '12px', borderTop: '4px solid #ff6b6b' }}>
              <h3 style={{ marginTop: 0, color: '#ff6b6b' }}>1. Reactive (The Doers)</h3>
              <p><strong>"The Doers. These parts start by just listening to you, but grow up to do things all by themselves!"</strong></p>
              <small style={{ display: 'block', marginTop: '10px', opacity: 0.7 }}>Examples: Prompts, Agents</small>
            </div>

            <div style={{ background: 'rgba(78,205,196,0.1)', padding: '20px', borderRadius: '12px', borderTop: '4px solid #4ecdc4' }}>
              <h3 style={{ marginTop: 0, color: '#4ecdc4' }}>2. Retrieval (The Memory Keepers)</h3>
              <p><strong>"The Memory Keepers. They help the AI remember facts, stories, and where it put its toys."</strong></p>
              <small style={{ display: 'block', marginTop: '10px', opacity: 0.7 }}>Examples: Embeddings, Vector Databases</small>
            </div>

            <div style={{ background: 'rgba(255,230,109,0.1)', padding: '20px', borderRadius: '12px', borderTop: '4px solid #ffe66d' }}>
              <h3 style={{ marginTop: 0, color: '#ffe66d' }}>3. Orchestration (The Conductors)</h3>
              <p><strong>"The Conductors. They organize all the other parts to make sure they play music together beautifully."</strong></p>
              <small style={{ display: 'block', marginTop: '10px', opacity: 0.7 }}>Examples: RAG, Frameworks like LangChain</small>
            </div>

            <div style={{ background: 'rgba(166,109,255,0.1)', padding: '20px', borderRadius: '12px', borderTop: '4px solid #a66dff' }}>
              <h3 style={{ marginTop: 0, color: '#a66dff' }}>4. Validation (The Safety Guards)</h3>
              <p><strong>"The Safety Guards. They check everything to make sure the AI is being nice, safe, and telling the truth."</strong></p>
              <small style={{ display: 'block', marginTop: '10px', opacity: 0.7 }}>Examples: Guardrails, Red Teaming</small>
            </div>

            <div style={{ background: 'rgba(69,183,209,0.1)', padding: '20px', borderRadius: '12px', borderTop: '4px solid #45b7d1' }}>
              <h3 style={{ marginTop: 0, color: '#45b7d1' }}>5. Models (The Big Brains)</h3>
              <p><strong>"The Big Brains. These are the powerful thinkers that read, write, and draw for you."</strong></p>
              <small style={{ display: 'block', marginTop: '10px', opacity: 0.7 }}>Examples: LLMs, Multimodal Models</small>
            </div>

          </div>


          <h2>Example Reactions</h2>
          <ul>
            <li><strong>Production RAG Chatbot</strong>: Em → Vx (store docs), Rg retrieves context → augments Pr → Lg generates answer + Gr for safety.</li>
            <li><strong>Agentic Loop</strong>: Ag uses Fc for tools (e.g., APIs), observes, iterates toward goals like booking flights; deployed via Fw.</li>
          </ul>
          <p>These patterns power most AI today, from image generators (Pr + Mm) to code assistants (Ft + Lg).</p>


          <h2>Real World Scenarios: How to Use This Table</h2>
          <p>It's not just a pretty chart; it's a tool for your daily work. Here is how using this table changes the game for different people.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', marginTop: '30px', marginBottom: '40px' }}>

            {/* Scenario 1: The Builder */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '25px', borderRadius: '16px', border: '1px solid rgba(78, 205, 196, 0.3)' }}>
              <h3 style={{ marginTop: 0, color: '#4ecdc4', display: 'flex', alignItems: 'center', gap: '10px' }}>
                🏗️ Scenario 1: The Builder (Student / Junior Dev)
              </h3>
              <p><strong>Goal:</strong> "I want to build a chatbot that answers questions about my history homework."</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
                <div style={{ background: 'rgba(255,107,107,0.1)', padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#ff6b6b', display: 'block', marginBottom: '5px' }}>❌ Before the Table</strong>
                  <p style={{ margin: 0, fontSize: '0.9em' }}>
                    You just write a Prompt (<strong>Pr</strong>) and send it to ChatGPT (<strong>Lg</strong>).
                    <br /><br />
                    <em>Problem:</em> It makes up lies ("Hallucinations") because it doesn't actually know your history book.
                  </p>
                </div>

                <div style={{ background: 'rgba(78, 205, 196, 0.1)', padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#4ecdc4', display: 'block', marginBottom: '5px' }}>✅ After the Table</strong>
                  <p style={{ margin: 0, fontSize: '0.9em' }}>
                    You look at the <strong>Retrieval</strong> column.
                    <br /><br />
                    <em>Solution:</em> You realize you need Embeddings (<strong>Em</strong>) to "read" the book and a Vector DB (<strong>Vx</strong>) to store it. You are adding the missing ingredients!
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 2: The Manager */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '25px', borderRadius: '16px', border: '1px solid rgba(166, 109, 255, 0.3)' }}>
              <h3 style={{ marginTop: 0, color: '#a66dff', display: 'flex', alignItems: 'center', gap: '10px' }}>
                👔 Scenario 2: The Manager (Enterprise Lead)
              </h3>
              <p><strong>Goal:</strong> "We are launching an AI support agent for our bank."</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
                <div style={{ background: 'rgba(255,107,107,0.1)', padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#ff6b6b', display: 'block', marginBottom: '5px' }}>❌ Before the Table</strong>
                  <p style={{ margin: 0, fontSize: '0.9em' }}>
                    You focus only on the cool "Magic" (Row 1 & 2). "It talks great!"
                    <br /><br />
                    <em>Risk:</em> The bot promises a user a $1,000,000 refund because you forgot safety.
                  </p>
                </div>

                <div style={{ background: 'rgba(166, 109, 255, 0.1)', padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#a66dff', display: 'block', marginBottom: '5px' }}>✅ After the Table</strong>
                  <p style={{ margin: 0, fontSize: '0.9em' }}>
                    You scan the <strong>Validation</strong> column (Group 4).
                    <br /><br />
                    <em>Solution:</em> You ask: "Where are our Guardrails (<strong>Gr</strong>)?" and "Have we done Red Teaming (<strong>Rt</strong>) to hack it ourselves first?" You built a safety net.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <h2>Why It Matters</h2>
          <p>
            Use this table to map pitches: spot missing guardrails or overkill frameworks. As of 2026, it aligns with trends like agentic AI growth, per IBM updates. Print it for quick reference in DevOps or trading AI tools.
          </p>

          <div style={{ marginTop: '50px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', fontSize: '0.9em', color: '#94a3b8' }}>
            <h3>References & Inspiration</h3>
            <p>
              This framework is based on the "AI Periodic Table" concept originally presented by <strong>Martin Keen at IBM</strong>.
            </p>
            <a
              href="https://www.youtube.com/watch?v=ESBMgZHzfG0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#646cff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '10px' }}
            >
              📺 Watch the Original Explanation Video
            </a>
          </div>
        </div>
      </main>

      <footer style={{ marginTop: '80px', borderTop: '1px solid #333', paddingTop: '20px', color: '#666' }}>
        <p>&copy; 2026 AI Periodic Table Blog</p>
      </footer>
    </div>
  )
}

export default App
