import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import syntaxLightTheme from '../utils/syntaxHighlightingLightTheme';
import syntaxDarkTheme from 'prism-react-renderer/themes/vsDark';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { isCurrentDarkTheme } from '../utils/theme';

function replacePathname(pathname) {
  return pathname.replace(/ /, '-').toLowerCase();
}

let tableRowIndex = 1;

const components = {
  p: (props) => <p {...props} className="text-base font-light mb-4" />,
  h1: (props) => {
    return (
      <h1 className="text-2xl font-medium mb-4 mt-8">
        <a
          href={`#${replacePathname(props.children)}`}
          {...props}
          id={replacePathname(props.children)}
        />
      </h1>
    );
  },
  h2: (props) => {
    return (
      <h2 className="text-xl font-medium border-none mb-4 mt-8">
        <a
          href={`#${replacePathname(props.children)}`}
          {...props}
          id={replacePathname(props.children)}
        />
      </h2>
    );
  },
  h3: (props) => <h3 {...props} className="text-lg font-medium mb-4 mt-6" />,
  h4: (props) => <h4 {...props} className="text-md font-medium mb-4 mt-6" />,
  h5: (props) => <h5 {...props} className="text-sm font-medium mb-4 mt-6" />,
  h6: (props) => <h6 {...props} className="text-sm font-small mb-4 mt-6" />,
  strong: (props) => (
    <strong {...props} className="font-bold" style={{ display: 'inline' }} />
  ),
  a: (props) => (
    <a
      {...props}
      className="font-medium text-blue-500 hover:underline cursor-pointer"
      style={{ display: 'inline' }}
    />
  ),
  ul: (props) => <ul {...props} className="list-disc font-light ml-8 mb-4" />,
  ol: (props) => (
    <ol {...props} className="list-decimal font-light ml-8 mb-4" />
  ),
  blockquote: (props) => (
    <div
      {...props}
      role="alert"
      className="bg-blue-100 border-l-4 border-blue-500 text-blue-900 p-3 ml-4 mb-4"
    />
  ),
  table: (props) => {
    tableRowIndex = 1;
    return (
      <table {...props} className="border border-collapse table-fixed mb-4" />
    );
  },
  th: (props) => <th {...props} className="border border-collapse py-2 px-4" />,
  tr: (props, key) => {
    console.log(props.children, key);
    let extraClass = '';
    if (tableRowIndex !== 1 && tableRowIndex % 2) {
      extraClass = 'bg-gray-100';
    }
    tableRowIndex++;

    return (
      <tr
        {...props}
        className={`${extraClass} border border-collapse p-2 px-4`}
      />
    );
  },
  td: (props) => {
    return <td {...props} className="border border-collapse p-2 px-4" />;
  },
  inlineCode: (props) => (
    <code {...props} className="border rounded p-1 bg-white text-yellow-500" />
  ),
  pre: (props) => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);

    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children.trim()}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
        theme={isCurrentDarkTheme() ? syntaxDarkTheme : syntaxLightTheme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} my-4 p-4 text-sm overflow-x-auto rounded bg-gray-800`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  },
};

const MdxTemplate = ({ children }) => {
  return (
    <div className="w-3/5 bg-white px-8 py-2 dark:bg-gray-800 opacity-80">
      <MDXProvider components={components}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  );
};

export default MdxTemplate;
