/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {View, Animated} from 'react-native';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import * as Exoflex from 'exoflex';

import styles from './styles.module.css';

const RNComponents = {View, Animated};

const COLLAPSED_SPOILER = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ultricies erat, ut imperdiet orci. Vivamus accumsan elit orci, et facilisis ante molestie a. Pellentesque ut turpis lectus. Vestibulum metus elit, ultricies eu tellus a, imperdiet mollis ante. Integer pharetra odio eu ex malesuada dapibus. Nulla risus felis, imperdiet vitae vestibulum sed, feugiat sit amet risus. Vivamus quis auctor mauris. Nunc in auctor augue. Praesent maximus libero ac metus hendrerit tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sit amet pharetra metus. In lacinia nibh nunc, finibus ornare arcu accumsan tincidunt. Fusce quis varius magna. Ut malesuada nulla erat, eget vestibulum mi fermentum a. Nam mi urna, vestibulum sit amet pellentesque non, iaculis nec orci.';

export default {
  code: (props) => {
    const {children} = props;
    const scope = {
      ...React,
      ...RNComponents,
      ...Exoflex,
      COLLAPSED_SPOILER,
    };
    if (typeof children === 'string') {
      return <CodeBlock {...props} scope={scope} />;
    }
    return children;
  },
  a: (props) => {
    if (/\.[^./]+$/.test(props.href)) {
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      return <a {...props} />;
    }
    return <Link {...props} />;
  },
  pre: (props) => <div className={styles.mdxCodeBlock} {...props} />,
  h1: Heading('h1'),
  h2: Heading('h2'),
  h3: Heading('h3'),
  h4: Heading('h4'),
  h5: Heading('h5'),
  h6: Heading('h6'),
};
