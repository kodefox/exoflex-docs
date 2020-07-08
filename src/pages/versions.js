import React from 'react';

import Layout from '@theme/Layout';

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import versions from '../../versions.json';

function Version() {
  const latestVersion = versions[0];
  const pastVersions = versions.filter((version) => version !== latestVersion);

  return (
    <Layout
      permalink="/versions"
      description="React Navigation Versions page listing all documented site versions"
    >
      <div className="container margin-vert--xl">
        <h1>Exoflex documentation versions</h1>
        <div className="margin-bottom--lg">
          <h3 id="latest">Latest version (Stable)</h3>
          <p>Here you can find the latest documentation.</p>
          <table>
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <Link to={useBaseUrl('/docs/installation')}>
                    Documentation
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {pastVersions.length > 0 && (
          <div className="margin-bottom--lg">
            <h3 id="archive">Past Versions</h3>
            <p>
              Here you can find documentation for previous versions of Exoflex.
            </p>
            <table>
              <tbody>
                {pastVersions.map((version) => (
                  <tr key={version}>
                    <th>{version}</th>
                    <td>
                      <Link to={useBaseUrl(`/docs/${version}/installation`)}>
                        Documentation
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Version;
