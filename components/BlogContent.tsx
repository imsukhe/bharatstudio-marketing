import type { ReactNode } from 'react'

/*
 * Lightweight inline renderer for the static blog posts' markdown-like plain
 * text (## / ### headings, | tables, ``` code fences, - / 1. lists, **bold**,
 * `code`). No MDX dependency — matches the legacy site's approach. Extended
 * here to also handle ### (h3) and ordered lists, which the source content
 * uses but the original legacy renderer did not implement.
 */
export function BlogContent({ text }: { text: string }) {
  const lines = text.split('\n')
  const elements: ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]!

    if (line.startsWith('## ')) {
      elements.push(<h2 key={i}>{line.slice(3)}</h2>)
      i++
      continue
    }

    if (line.startsWith('### ')) {
      elements.push(<h3 key={i}>{line.slice(4)}</h3>)
      i++
      continue
    }

    if (line.startsWith('```')) {
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i]!.startsWith('```')) {
        codeLines.push(lines[i]!)
        i++
      }
      elements.push(<pre key={i}>{codeLines.join('\n')}</pre>)
      i++
      continue
    }

    if (line.startsWith('|')) {
      const tableLines: string[] = [line]
      i++
      while (i < lines.length && lines[i]!.startsWith('|')) {
        tableLines.push(lines[i]!)
        i++
      }
      const rows = tableLines.filter((l) => !l.match(/^\|[-| ]+\|$/))
      elements.push(
        <div className="post-table-wrap" key={i}>
          <table>
            <tbody>
              {rows.map((row, ri) => {
                const cells = row.split('|').slice(1, -1).map((c) => c.trim())
                const Tag = ri === 0 ? 'th' : 'td'
                return (
                  <tr key={ri}>
                    {cells.map((cell, ci) => <Tag key={ci}>{cell}</Tag>)}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>,
      )
      continue
    }

    // Ordered list: "1. foo"
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [line.replace(/^\d+\.\s/, '')]
      i++
      while (i < lines.length && /^\d+\.\s/.test(lines[i]!)) {
        items.push(lines[i]!.replace(/^\d+\.\s/, ''))
        i++
      }
      elements.push(
        <ol key={i}>
          {items.map((item, idx) => <li key={idx}>{renderInline(item)}</li>)}
        </ol>,
      )
      continue
    }

    // Unordered list: "- foo" / "* foo"
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: string[] = [line.slice(2)]
      i++
      while (i < lines.length && (lines[i]!.startsWith('- ') || lines[i]!.startsWith('* '))) {
        items.push(lines[i]!.slice(2))
        i++
      }
      elements.push(
        <ul key={i}>
          {items.map((item, idx) => <li key={idx}>{renderInline(item)}</li>)}
        </ul>,
      )
      continue
    }

    if (line.trim() === '') {
      i++
      continue
    }

    elements.push(<p key={i}>{renderInline(line)}</p>)
    i++
  }

  return <div className="post-body">{elements}</div>
}

function renderInline(line: string): ReactNode {
  const parts = line.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/)
  return parts.map((part, pi) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={pi}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={pi}>{part.slice(1, -1)}</code>
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      return (
        <a key={pi} href={linkMatch[2]} target="_blank" rel="noopener noreferrer">
          {linkMatch[1]}
        </a>
      )
    }
    return part
  })
}
