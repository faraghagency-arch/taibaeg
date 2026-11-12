import React from 'react';
import { useData } from '../context/DataContext';
import { Article } from '../types';
import { X, Clock, Calendar, User, Tag } from 'lucide-react';

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const { language } = useData();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD0] my-8 max-h-[90vh] flex flex-col">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-stone-200">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C99A42]">
            <span>{article.category[language] || article.category.ar}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-400 font-mono">{article.publishedDate}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-[#183B56] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-stone-100">
            <img
              src={article.coverImage}
              alt={article.title[language] || article.title.ar}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-4 text-xs text-stone-500">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#C99A42]" />
                <span>{article.author[language] || article.author.ar}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C99A42]" />
                <span>{article.readTimeMin} min read</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#183B56] font-cairo leading-snug">
              {article.title[language] || article.title.ar}
            </h1>
          </div>

          <div className="prose max-w-none text-stone-700 text-sm sm:text-base leading-relaxed space-y-4 border-t border-stone-100 pt-6">
            <p className="font-medium text-[#183B56] text-base leading-relaxed italic">
              «{article.excerpt[language] || article.excerpt.ar}»
            </p>
            <p className="leading-loose">
              {article.content[language] || article.content.ar}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-20 flex justify-end px-6 py-4 bg-white border-t border-stone-200">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold bg-[#183B56] text-white rounded-xl hover:bg-[#102738] transition-colors cursor-pointer"
          >
            {language === 'ar' ? 'إغلاق القراءة' : 'Close Article'}
          </button>
        </div>

      </div>
    </div>
  );
};
