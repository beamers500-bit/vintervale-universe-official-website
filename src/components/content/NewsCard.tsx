import { Calendar } from 'lucide-react';
import type { NewsPost } from '@/data/types';
import { PlaceholderTag } from '../ui/Decorations';

interface NewsCardProps {
  post: NewsPost;
  compact?: boolean;
}

export function NewsCard({ post, compact = false }: NewsCardProps) {
  return (
    <article className="group card-surface card-surface-hover rounded-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <Calendar size={14} className="text-gold-400/60" />
        <time className="font-sans text-xs text-ink-500" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
        {post.category && (
          <span className="font-sans text-[10px] uppercase tracking-widest text-vintervale-400 border border-vintervale-700/40 px-2 py-0.5 rounded-sm">
            {post.category}
          </span>
        )}
      </div>
      <h3 className={`font-display ${compact ? 'text-lg' : 'text-xl'} text-ink-50 mb-3 group-hover:text-gold-200 transition-colors`}>
        {post.title}
      </h3>
      {post.excerpt ? (
        <p className="font-serif text-ink-300 leading-relaxed line-clamp-3">{post.excerpt}</p>
      ) : post.body ? (
        <p className="font-serif text-ink-300 leading-relaxed line-clamp-3">{post.body}</p>
      ) : (
        <PlaceholderTag label="Content Forthcoming" />
      )}
    </article>
  );
}
