import Head from 'next/head';
import Link from 'next/link';
import {Component} from 'react';
import posthog from 'posthog-js';
import {Box, Flex} from 'rebass';
import {ChatWidget, Papercups} from '@papercups-io/chat-widget';

import {RightCircleOutlined} from '../components/icons';
import {
  colors,
  Button,
  Content,
  Footer,
  Header,
  Layout,
  Menu,
  Paragraph,
  Title,
  Text,
} from '../components/common';

export default class extends Component {
  componentDidMount() {
    posthog.init('cQo4wipp5ipWWXhTN8kTacBItgqo457yDRtzCMOr-Tw', {
      api_host: 'https://app.posthog.com',
    });
  }

  render() {
    return (
      <Layout style={{background: colors.white}}>
        <Head>
          <title>Papercups | Open Source Intercom Alternative</title>
          <link rel="icon" href="/logo-eu-no-text.svg" />
          <meta
            name="description"
            content="Papercups is an open-source live chat widget. Chat with your customers to improve conversions and customer satisfaction."
          ></meta>
        </Head>

        <Header style={{background: 'transparent'}}>
          <Flex>
            <Box flex={1}>
              <Link href="/">
                <a>
                  <img
                    src="/papercups-eu.svg"
                    style={{height: 40, width: 160}}
                  />
                </a>
              </Link>
            </Box>

            <Box>
              <Menu style={{borderBottom: 'none'}} mode="horizontal">
                <Menu.Item style={{margin: '0 1em'}} key="blog">
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={{margin: '0 1em'}} key="features">
                  <a
                    href="https://github.com/papercups-io/papercups/wiki/Features"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Features
                  </a>
                </Menu.Item>
                <Menu.Item style={{margin: '0 1em'}} key="pricing">
                  <Link href="/pricing">
                    <a>Pricing</a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={{margin: '0 1em'}} key="github">
                  <a
                    href="https://github.com/papercups-io/papercups"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Menu.Item>
                <Menu.Item style={{margin: '0 1em'}} key="Sign up">
                  <a
                    href="https://app.papercups-eu.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Login
                  </a>
                </Menu.Item>
              </Menu>
            </Box>
          </Flex>
        </Header>

        <Content>
          <Box mx="auto" style={{maxWidth: 960}} py={5} px={4}>
            <Flex mb={[5, 6]} mx={[0, -4]} flexDirection={['column', 'row']}>
              <Box pt={100} flex={1} mx={[0, 4]} mb={[4, 0]}>
                <Box mb={5}>
                  <Title>
                    Open source and GDPR compliant Intercom alternative
                  </Title>

                  <Paragraph>
                    Papercups{' '}
                    <div style={{fontSize: 'smaller', display: 'inline'}}>
                      eu
                    </div>{' '}
                    is a highly customizable and open-source live customer chat
                    tool. Hosted in EU (Germany) 🇪🇺
                  </Paragraph>

                  <Flex my={3}>
                    <Box mr={2}>
                      <a
                        href="https://app.papercups-eu.io/demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button type="default" size="large">
                          Demo
                        </Button>
                      </a>
                    </Box>
                    <Box mr={2}>
                      <a
                        href="https://app.papercups-eu.io/register?redirect=/account/getting-started"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          type="primary"
                          size="large"
                          icon={<RightCircleOutlined />}
                        >
                          Sign up for free
                        </Button>
                      </a>
                    </Box>
                  </Flex>
                </Box>
              </Box>

              <Box flex={1} mx={[0, 4]}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: 320,
                    }}
                    src="eu.svg"
                  />
                </Flex>
              </Box>
            </Flex>

            <Flex mb={[5, 6]} mx={[0, -4]} flexDirection={['column', 'row']}>
              <Box flex={1} mx={[0, 4]} mb={[4, 0]}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: 320,
                    }}
                    src="map.svg"
                  />
                </Flex>
              </Box>

              <Box flex={1} mx={[0, 4]} my={[4, 0]}>
                <Title level={2}>Transparent and hosted in EU </Title>
                <Paragraph className=".index_page_font">
                  Papercups is open source so you can verify exactly how we are
                  processing your customer's data. Papercups-eu is hosted in
                  Europe so it complies with local data soverignty laws
                </Paragraph>
              </Box>
            </Flex>

            <Flex
              mb={[5, 6]}
              mx={[0, -4]}
              flexDirection={['column-reverse', 'row']}
            >
              <Box flex={1} mx={[0, 4]} mb={[4, 0]}>
                <Title level={3}>GDPR compliant and no cookie banners</Title>
                <Paragraph>
                  Papercups is fully compliant with GDPR policy. Papercups
                  stores the customer conversations in local storage. We don't
                  store IP addresses or use any cookies in our{' '}
                  <a href="https://github.com/papercups-io/chat-widget">
                    chat widget
                  </a>{' '}
                  . So no need for cookie banners.
                </Paragraph>
              </Box>

              <Box flex={1} mx={[0, 4]}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: 320,
                    }}
                    src="secure.svg"
                  />
                </Flex>
              </Box>
            </Flex>
            <Flex mb={[5, 6]} mx={[0, -4]} flexDirection={['column', 'row']}>
              <Box flex={1} mx={[0, 4]}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: 320,
                    }}
                    src="customize.svg"
                  />
                </Flex>
              </Box>
              <Box pt={100} flex={1} mx={[0, 4]} mb={[4, 0]}>
                <Title level={3}>Fully customizable widget</Title>
                <Paragraph>
                  We provide a react component, vue component, Papercups is open
                  source and made with a developer in mind. We support HTML,
                  React, React Native and Flutter integrations.
                </Paragraph>
              </Box>
            </Flex>

            <Flex justifyContent="center" mb={[4, 5]} mt={[6, 0]}>
              <Title level={2}>Why use Papercups?</Title>
            </Flex>

            <Flex
              mx={-3}
              justifyContent="space-between"
              mb={6}
              flexDirection={['column', 'row']}
            >
              <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
                <Title level={3}>Quick setup</Title>
                <Paragraph>
                  Papercups is open source and built for developers by
                  developers. We know how busy your engineering team is so we
                  make our setup incredibly simple On average it takes our users
                  less than 10 minutes to setup and customize our chat widget.
                </Paragraph>
              </Flex>
              <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
                <Title level={3}>Slack and Mattermost Integration</Title>
                <Paragraph>
                  Reply directly from Slack or Mattermost. You never have to
                  leave your workspace. Most chat widgets say they have Slack or
                  Mattermost integrations but all they do is link it to their
                  dashboard.
                </Paragraph>
              </Flex>
              <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
                <Title level={3}>Enterprise</Title>
                <Paragraph>
                  Papercups offer an on premise solutions for Enterprises that
                  want complete control over your data. With Active
                  Directory/LDAP integrations to make authenticating seemless
                </Paragraph>
              </Flex>
              {/* <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column"></Flex> */}
            </Flex>

            <Flex justifyContent="center" mb={[4, 5]} mt={[6, 0]}>
              <Title level={2}>Connect with us</Title>
            </Flex>

            <Flex
              mx={-3}
              justifyContent="space-between"
              mb={6}
              flexDirection={['column', 'row']}
            >
              <Flex flex={1} mx={3} my={[3, 0]} justifyContent="center">
                <a
                  href="https://join.slack.com/t/papercups-io/shared_invite/zt-h0c3fxmd-hZi1Zp8~D61S6GD16aMqmg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="slack-v1.svg" style={{height: 144}} />
                </a>
              </Flex>
              <Flex flex={1} mx={3} my={[3, 0]} justifyContent="center">
                <a
                  href="https://github.com/papercups-io/papercups"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="github-v1.svg" style={{height: 144}} />
                </a>
              </Flex>
            </Flex>

            <Flex
              mb={5}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Title level={1}>What's new?</Title>

              <Flex my={4} mx={-2}>
                <Box mx={2}>
                  <a
                    href="https://github.com/papercups-io/papercups"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="large">Find out on Github</Button>
                  </a>
                </Box>
                <Box mx={2}>
                  <Button
                    type="primary"
                    size="large"
                    icon={<RightCircleOutlined />}
                    onClick={Papercups.toggle}
                  >
                    Ask us!
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Content>

        <Footer style={{backgroundColor: '#001529'}}>
          <Flex justifyContent="space-between" paddingRight="3">
            <Box p={3}>
              <Text style={{color: colors.white, paddingRight: '10px'}}>
                Backed by <b>Y Combinator</b>
              </Text>

              <img
                style={{
                  width: '20px',
                  height: '20px',
                }}
                src="yc-logo.png"
              />
            </Box>
            <Box p={3}>
              <a href="/privacy" className="white_link">
                Privacy
              </a>
            </Box>
          </Flex>
        </Footer>

        <ChatWidget
          title="Welcome to Papercups!"
          subtitle="Ask us anything in the chat window below 😊"
          greeting="Hi there! Send us a message and we'll get back to you as soon as we can. In the meantime, check out our [demo](https://app.papercups-eu.io/demo)!"
          emailInputPlaceholder="What's your email address?"
          newMessagesNotificationText="See new messages"
          primaryColor="#4468A5"
          accountId="eb504736-0f20-4978-98ff-1a82ae60b266"
          iconVariant="filled"
          requireEmailUpfront
          showAgentAvailability
        />
      </Layout>
    );
  }
}
