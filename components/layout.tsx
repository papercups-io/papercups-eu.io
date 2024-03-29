import React from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';
import Link from 'next/link';
import {Box, Flex} from 'rebass';
import {MDXProvider} from '@mdx-js/react';
import {ChatWidget} from '@papercups-io/chat-widget';
import {
  colors,
  Content,
  Divider,
  Footer,
  Header,
  Layout,
  Menu,
  Paragraph,
  Text,
  Title,
} from '../components/common';

type Props = {width?: number; title?: string; children: any};
type State = any;

export default class Container extends React.Component<Props, State> {
  storytime: any = null;

  state = {
    h1: Title,
    h2: (props: any) => <Title level={2} {...props} />,
    h3: (props: any) => <Title level={3} {...props} />,
    ul: (props: any) => <ul className="ant-typography" {...props}></ul>,
    p: Paragraph,
    hr: Divider,
  };

  componentDidMount() {
    const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
    const isStorytimeEnabled = process.env.NEXT_STORYTIME_ENABLED;

    if (gaTrackingId) {
      ReactGA.initialize(gaTrackingId);
      ReactGA.pageview(document.location.pathname);
    }

    if (typeof window !== 'undefined' && isStorytimeEnabled) {
      // NB: just testing this out, feel free to remove if anything breaks
      const {Storytime} = require('@papercups-io/storytime');

      this.storytime = Storytime.init({
        accountId: 'eb504736-0f20-4978-98ff-1a82ae60b266',
        debug: true,
      });
    }
  }

  componentWillUnmount() {
    if (this.storytime && this.storytime.finish) {
      this.storytime.finish();
    }
  }

  render() {
    return (
      <Layout style={{background: colors.white}}>
        <Head>
          <title>
            Papercups | {this.props.title || 'Open Source Intercom Alternative'}
          </title>
          <link rel="icon" href="/papercups-eu.svg" />
          <meta
            name="description"
            content="Papercups is an open-source live chat widget. Chat with your customers to improve conversions and customer satisfaction."
          ></meta>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
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
                <Menu.Item style={{margin: '0 1em'}} key="home">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </Menu.Item>
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
          <Box
            mx="auto"
            style={{maxWidth: this.props.width || 800}}
            pt={5}
            px={4}
            pb={6}
          >
            <MDXProvider components={this.state}>
              {this.props.children}
            </MDXProvider>
          </Box>
        </Content>

        <Footer style={{backgroundColor: '#001529'}}>
          <Box p={5}>
            <Text style={{color: colors.white}}>
              Made with ❤️ in SF &amp; NYC
            </Text>
          </Box>
        </Footer>

        <ChatWidget
          title="Welcome to Papercups!"
          subtitle="Ask us anything in the chat window below 😊"
          greeting="Hi there! Send us a message and we'll get back to you as soon as we can. In the meantime, check out our [demo](https://app.papercups-eu.io/demo)!"
          primaryColor="#1890ff"
          accountId="eb504736-0f20-4978-98ff-1a82ae60b266"
          iconVariant="filled"
          requireEmailUpfront
          showAgentAvailability
          setDefaultGreeting={(settings) => {
            const path = window.location.pathname;

            switch (path) {
              case '/pricing':
                return "Hi there! Let us know if you have any questions about pricing :) (we're offering deals to startups and international founders)";
              default:
                return "Hi there! Send us a message and we'll get back to you as soon as we can. In the meantime, check out our [demo](https://app.papercups-eu.io/demo)!";
            }
          }}
        />
      </Layout>
    );
  }
}
