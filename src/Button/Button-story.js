import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';

import CalciteTheme from '../../src/theme/CalciteTheme';
import GuideExample from '../../stories/GuideExample';

import Button from './';

const withTextDoc = `Alert doc is TBD`;
const asALinkDoc = `Alert doc is TBD`;

storiesOf('Button', module)
  .add(
    'with text',
    withInfo(withTextDoc)(() => (
      <ThemeProvider theme={CalciteTheme}>
        <Fragment>
          <GuideExample>
            <Button onClick={action('clicked')}>default</Button>
          </GuideExample>
          <GuideExample label="transparent">
            <Button transparent onClick={action('clicked')}>
              transparent
            </Button>
          </GuideExample>
          <GuideExample label="clear">
            <Button clear onClick={action('clicked')}>
              clear
            </Button>
          </GuideExample>
          <GuideExample label="clearGray">
            <Button clearGray onClick={action('clicked')}>
              clear-gray
            </Button>
          </GuideExample>
          <GuideExample label="clearWhite">
            <Button clearWhite onClick={action('clicked')}>
              clear-white
            </Button>
          </GuideExample>
          <GuideExample label="white">
            <Button white onClick={action('clicked')}>
              white
            </Button>
          </GuideExample>
          <GuideExample label="small">
            <Button small onClick={action('clicked')}>
              small
            </Button>
          </GuideExample>
          <GuideExample label="large">
            <Button large onClick={action('clicked')}>
              large
            </Button>
          </GuideExample>
          <GuideExample label="fill">
            <Button fill onClick={action('clicked')}>
              fill
            </Button>
          </GuideExample>
          <GuideExample label="half">
            <Button half onClick={action('clicked')}>
              half
            </Button>
          </GuideExample>
          <GuideExample label="red">
            <Button red onClick={action('clicked')}>
              red
            </Button>
          </GuideExample>
          <GuideExample label="green">
            <Button green onClick={action('clicked')}>
              green
            </Button>
          </GuideExample>
          <GuideExample label="disabled">
            <Button disabled onClick={action('clicked')}>
              disabled
            </Button>
          </GuideExample>
          <GuideExample label="grouped">
            <nav>
              <Button grouped onClick={action('clicked')}>
                One
              </Button>
              <Button grouped onClick={action('clicked')}>
                Two
              </Button>
              <Button grouped onClick={action('clicked')}>
                Three
              </Button>
            </nav>
          </GuideExample>
        </Fragment>
      </ThemeProvider>
    ))
  )
  .add(
    'as a link',
    withInfo(asALinkDoc)(() => (
      <ThemeProvider theme={CalciteTheme}>
        <Fragment>
          <GuideExample label="href=&quot;&quot;">
            <Button
              href="https://google.com"
              target="_blank"
              onClick={action('clicked')}
            >
              link button
            </Button>
          </GuideExample>
        </Fragment>
      </ThemeProvider>
    ))
  );
