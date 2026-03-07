import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Fresh-Mart Support">
      <main style={{ padding: '50px', textAlign: 'center', background: '#121212', color: 'white', minHeight: '100vh' }}>
        <h1 style={{ color: '#10b981', fontSize: '3rem' }}>Fresh-Mart Staff Portal</h1>
        <p>Official documentation and protocols for all staff members.</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
         <Link className="button button--secondary button--lg" to="/docs/lr-info/staff-promotions">LR Info</Link>
         <Link className="button button--secondary button--lg" to="/docs/mr-info/training-guide">MR Info</Link>
         <Link className="button button--secondary button--lg" to="/docs/hr-info/punishment-guide">HR Info</Link>
        </div>
      </main>
    </Layout>
  );
}