import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { BlogContent } from '@/components/BlogContent'
import { getPost, POSTS } from '../posts'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Not found' }
  return {
    title: `${post.title} — BharatStudio Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
    },
    alternates: { canonical: `https://bharatstudio.in/resources/blog/${slug}/` },
  }
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <main>
      <Nav />

      <section className="post-header-section">
        <nav className="post-breadcrumb">
          <Link href="/resources/blog/">Blog</Link>
          <span>/</span>
          <span>{post.category}</span>
        </nav>

        <div className="eyebrow">{post.category}</div>
        <h1>{post.title}</h1>
        <p className="lede">{post.description}</p>

        <div className="post-author-row">
          <div className="post-avatar">B</div>
          <div>
            <p className="post-author-name">BharatStudio Team</p>
            <p className="post-author-meta">
              {new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              {' '}· {post.readMinutes} min read
            </p>
          </div>
        </div>
      </section>

      <hr className="post-divider" />

      <section className="post-body-section">
        <article>
          <BlogContent text={post.content} />
        </article>

        {related.length > 0 && (
          <>
            <hr className="post-related-divider" />
            <p className="related-posts-label">More from the blog</p>
            <div className="grid grid-two">
              {related.map((p) => (
                <Link key={p.slug} href={`/resources/blog/${p.slug}/`} className="related-card">
                  <p className="post-category">{p.category}</p>
                  <h3>{p.title}</h3>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>

      <Footer />
    </main>
  )
}
