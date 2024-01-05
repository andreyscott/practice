
import {parseMarkdownToReactEmail, ReactEmailMarkdown} from "md-to-react-email"
import {Head, Email, Section} from "react-email"


export default function EmailTemplate() {
const markdown = `# Hello World`
// const parsedReactMail = parseMarkdownToReactEmail(markdown)
  return (
          <>
        
          <Email>
                  <Head />
                  <Section>
                  <ReactEmailMarkdown markdown={`# Hello, World!`} />
                  </Section>
          </Email>

          </>
  )
  }