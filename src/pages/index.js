import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Staff Portal">
      <main style={{ padding: '50px', textAlign: 'center', background: '#121212', color: 'white', minHeight: '100vh' }}>
        <h1 style={{ color: '#10b981', fontSize: '3rem' }}>Fresh-Mart Staff Portal</h1>
        <p>Official documentation and protocols for all staff members.</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
          {/* These links now include the base URL to prevent broken link errors */}
          <Link className="button button--secondary button--lg" to="/support-Fresh-Mart.co.uk/docs/lr-info/staff-promotions">LR Info</Link>
          <Link className="button button--secondary button--lg" to="/support-Fresh-Mart.co.uk/docs/mr-info/training-guide">MR Info</Link>
          <Link className="button button--secondary button--lg" to="/support-Fresh-Mart.co.uk/docs/hr-info/punishment-guide">HR Info</Link>
        </div>
      </main>
    </Layout>
  );
}