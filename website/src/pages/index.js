import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Open docs
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/ai-connect/overview">
            AI Connect (MCP)
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description="EthGasStation documentation for alerts, API, and AI Connect (MCP).">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--4">
              <h2>Alerts</h2>
              <p>Configure notifications when gas hits your thresholds.</p>
              <Link to="/docs/intro">Get started →</Link>
            </div>
            <div className="col col--4">
              <h2>API</h2>
              <p>Integrate EthGasStation stats and alerts into your own systems.</p>
              <Link to="/docs/api/overview">API overview →</Link>
            </div>
            <div className="col col--4">
              <h2>AI Connect</h2>
              <p>Connect ChatGPT via MCP to read stats and manage alerts from chat.</p>
              <Link to="/docs/ai-connect/overview">AI Connect →</Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
