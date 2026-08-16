/*
 * Comparison table for /compare — ported from the legacy CompareTable, using
 * the site's shared .comparison table classes instead of inline styles.
 * D-C053: no competitor names in any rendered HTML.
 */
type CellVal = string | boolean | 'warn'
type TableRow = { feature: string; left: CellVal; right: CellVal }

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-label="Yes" className="compare-cell-icon">
      <circle cx="8" cy="8" r="7" stroke="#22c55e" strokeWidth="1.2" />
      <path d="M5 8l2.5 2.5L11 5.5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Cross({ warn }: { warn?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-label={warn ? 'Warning' : 'No'} className="compare-cell-icon">
      <circle cx="8" cy="8" r="7" stroke={warn ? '#fbbf24' : 'rgba(136,136,160,0.4)'} strokeWidth="1.2" />
      {warn ? (
        <path d="M8 4.5v5M8 11h0" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
      ) : (
        <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="rgba(136,136,160,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      )}
    </svg>
  )
}

function CellContent({ v }: { v: CellVal }) {
  if (v === true) return <Check />
  if (v === false) return <Cross />
  if (v === 'warn') {
    return (
      <span className="compare-warn">
        <Cross warn />
        <span className="compare-warn-label">Caution</span>
      </span>
    )
  }
  return <span>{v}</span>
}

export function CompareTable({ leftHead, rightHead = 'BharatStudio', rows }: {
  leftHead: string
  rightHead?: string
  rows: TableRow[]
}) {
  return (
    <div className="table-wrap">
      <table className="comparison">
        <thead>
          <tr>
            <th></th>
            <th>{leftHead}</th>
            <th className="compare-col-right">{rightHead}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ feature, left, right }) => (
            <tr key={feature}>
              <td>{feature}</td>
              <td className="compare-col-center"><CellContent v={left} /></td>
              <td className="compare-col-center compare-col-right"><CellContent v={right} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/*
 * N-column variant of the same visual pattern, added so /pricing's plan
 * comparison table (Free/Pro/Creator/Studio) shares one implementation with
 * /compare instead of duplicating the markup and .comparison CSS a second
 * time. CompareTable above is untouched — its three existing /compare call
 * sites keep the exact left/right shape they always had, zero regression
 * risk. Cell values are only centered when they render as an icon (true/
 * false/'warn'); a plain string cell stays left-aligned, matching
 * /pricing's original inline table exactly.
 */
export function MultiCompareTable({ firstHead = '', heads, rows }: {
  firstHead?: string
  heads: string[]
  rows: { feature: string; values: CellVal[] }[]
}) {
  return (
    <div className="table-wrap">
      <table className="comparison">
        <thead>
          <tr>
            <th>{firstHead}</th>
            {heads.map((h) => <th key={h}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ feature, values }) => (
            <tr key={feature}>
              <td>{feature}</td>
              {values.map((v, i) => (
                <td key={i} className={typeof v !== 'string' ? 'compare-col-center' : undefined}>
                  <CellContent v={v} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
