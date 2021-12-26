import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from 'next/document'

function createMarkup() {
  return {
    __html: `var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?de3c29d897d6eb05db32b85de34a5db9";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();`,
  }
}
function MyComponent() {
  return <script dangerouslySetInnerHTML={createMarkup()}></script>
}

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main {...this.props} />
          <NextScript />
          <MyComponent />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
