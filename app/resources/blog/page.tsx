import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { POSTS, type BlogPost } from './posts'

export const metadata: Metadata = {
  title: 'BharatStudio product updates',
  description: 'Product updates, creator guides, and the thinking behind BharatStudio Alerts — built for Indian streamers.',
  alternates: { canonical: 'https://bharatstudio.in/resources/blog/' },
}

const CATEGORY_CLASS: Record<BlogPost['category'], string> = {
  Product: 'cat-product',
  'Creator tips': 'cat-tips',
  Technology: 'cat-tech',
  Company: 'cat-company',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogIndexPage() {
  const featured = POSTS.find((p) => p.featured)
  const rest = POSTS.filter((p) => !p.featured)
  const categories = Array.from(
    POSTS.reduce((acc, p) => acc.set(p.category, (acc.get(p.category) ?? 0) + 1), new Map<string, number>()),
  )

  return (
    <main>
      <Nav />

      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Product updates</div>
          <h1>Useful changes, explained plainly.</h1>
          <p className="lede">
            How we build BharatStudio Alerts, tips for Indian streamers, and the technology
            behind real-time donation alerts.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container blog-layout">
          <div>
            {featured && (
              <div className="blog-featured-wrap">
                <p className="related-posts-label">Featured</p>
                <Link href={`/resources/blog/${featured.slug}/`} className="post-card featured">
                  <div className="post-meta">
                    <span className={`post-category ${CATEGORY_CLASS[featured.category]}`}>{featured.category}</span>
                    <span className="post-dot">·</span>
                    <span className="post-readtime">{featured.readMinutes} min read</span>
                  </div>
                  <h2>{featured.title}</h2>
                  <p>{featured.description}</p>
                  <div className="post-footer">
                    <span className="post-date">{formatDate(featured.publishedAt)}</span>
                    <span className="post-cta">Read →</span>
                  </div>
                </Link>
              </div>
            )}

            <div className="blog-post-list">
              {rest.map((post) => (
                <Link key={post.slug} href={`/resources/blog/${post.slug}/`} className="post-card">
                  <div className="post-meta">
                    <span className={`post-category ${CATEGORY_CLASS[post.category]}`}>{post.category}</span>
                    <span className="post-dot">·</span>
                    <span className="post-readtime">{post.readMinutes} min read</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <div className="post-footer">
                    <span className="post-date">{formatDate(post.publishedAt)}</span>
                    <span className="post-cta">Read →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <aside className="blog-sidebar">
            <p className="sidebar-label">Categories</p>
            {categories.map(([cat, count]) => (
              <div className="category-row" key={cat}>
                <span className={CATEGORY_CLASS[cat as BlogPost['category']]}>{cat}</span>
                <span>{count}</span>
              </div>
            ))}
            <div className="blog-subscribe-block">
              <p className="sidebar-label">Subscribe</p>
              <p className="blog-subscribe-copy">
                Get product updates and guides in your inbox.
              </p>
              <a href="mailto:hello@bharatstudio.in?subject=Blog subscribe" className="subscribe-box">
                Subscribe via email
              </a>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  )
}
