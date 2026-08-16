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
  if (v === 'warn') return <Cross warn />
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
