/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  overview: [{ type: 'autogenerated', dirName: 'overview' }],
  networks: [
    'networks/index',
    {
      type: 'category',
      label: 'Network Architecture',
      link: { type: 'doc', id: 'networks/network-architecture/index' },
      items: [
        'networks/network-architecture/solving-blockchain-trilemma',
        'networks/network-architecture/user-safety',
        'networks/network-architecture/sustainability',
      ],
    },
    {
      type: 'category',
      label: 'Flow Networks',
      link: { type: 'doc', id: 'networks/flow-networks/index' },
      items: [
        'networks/flow-networks/accessing-mainnet',
        'networks/flow-networks/accessing-testnet',
      ],
    },
    {
      type: 'category',
      label: 'Flow Port',
      link: { type: 'doc', id: 'networks/flow-port/index' },
      items: ['networks/flow-port/staking-guide'],
    },
    'networks/governance',
    {
      type: 'category',
      label: 'Node Ops',
      link: { type: 'doc', id: 'networks/node-ops/index' },
      items: [
        {
          type: 'category',
          label: 'Accessing On-chain Data',
          items: [
            {
              type: 'category',
              label: 'Access Nodes',
              items: [
                'networks/node-ops/access-onchain-data/access-nodes/access-node-setup',
                'networks/node-ops/access-onchain-data/access-nodes/access-node-configuration-options',
                {
                  type: 'category',
                  label: 'Accessing Data',
                  items: [
                    'networks/node-ops/access-onchain-data/access-nodes/accessing-data/access-api',
                    {
                      type: 'link',
                      label: 'Access HTTP API',
                      href: 'https://developers.flow.com/http-api',
                    },
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Light Nodes',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'networks/node-ops/access-onchain-data/light-nodes',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Participating in the Network',
          items: [
            {
              type: 'autogenerated',
              dirName: 'networks/node-ops/node-operation',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Staking and Epochs',
      link: { type: 'doc', id: 'networks/staking/index' },
      items: [
        'networks/staking/epoch-terminology',
        'networks/staking/schedule',
        'networks/staking/epoch-preparation',
        'networks/staking/stake-slashing',
        'networks/staking/epoch-scripts-events',
        'networks/staking/technical-overview',
        'networks/staking/staking-scripts-events',
        'networks/staking/staking-rewards',
        'networks/staking/qc-dkg',
        'networks/staking/qc-dkg-scripts-events',
        'networks/staking/machine-account',
        'networks/staking/faq',
        'networks/staking/staking-options',
        'networks/staking/staking-collection',
        'networks/staking/staking-guide',
      ],
    },
  ],
  build: [{ type: 'autogenerated', dirName: 'build' }],
  evm: [{ type: 'autogenerated', dirName: 'evm' }],
  tutorials: [{ type: 'autogenerated', dirName: 'tutorials' }],
  tools: [{ type: 'autogenerated', dirName: 'tools' }],
  ecosystem: [{ type: 'autogenerated', dirName: 'ecosystem' }],
};

module.exports = sidebars;
