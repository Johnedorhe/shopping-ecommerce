'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, Star } from 'lucide-react'

const NEW_ARRIVALS = Array.from({ length: 20 }, (_, index) => {
  const id = index + 1
  return {
    id: id,
    name: `Premium Collection Item ${id}`,
    price: 89.99,
    rating: 4.8,
    image: `/product_${id}.png`
  }
})

export const NewArrivals = () => {
  // Duplicate items to create a seamless infinite loop
  const items = [...NEW_ARRIVALS, ...NEW_ARRIVALS]

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 80s linear infinite;
          will-change: transform;
        }

        /* Pause the scroll when user hovers anywhere over the strip */
        .marquee-viewport:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-pad-container px-4 md:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-destructive uppercase tracking-widest">Fresh Drops</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 mt-1">New Arrivals</h2>
          </div>
          <Link
            href="/collection"
            className="text-sm font-semibold text-gray-700 hover:text-destructive transition-colors pb-1 border-b border-gray-200 hover:border-destructive"
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* Full-bleed scrolling strip */}
      <div className="marquee-viewport w-full cursor-pointer select-none">
        <div className="marquee-track">
          {items.map((product, idx) => (
            <div
              key={`${product.id}-${idx}`}
              className="group relative flex flex-col bg-gray-50/50 rounded-2xl overflow-hidden border border-gray-100 transition-all hover:shadow-lg hover:shadow-gray-200/50 mx-3 flex-shrink-0"
              style={{ width: '260px' }}
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: '3/4' }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="260px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-destructive rounded-md shadow-sm">
                  New
                </div>
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-1 mb-1 text-amber-500">
                  <Star size={14} className="fill-current" />
                  <span className="text-xs font-semibold text-gray-600">{product.rating}</span>
                </div>

                <h3 className="text-sm font-bold text-gray-900 group-hover:text-destructive transition-colors line-clamp-1 mb-1">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-auto pt-2">
                  <span className="text-base font-extrabold text-gray-950">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    aria-label="Add item to shopping cart"
                    className="p-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-destructive hover:text-white hover:border-destructive transition-all shadow-sm cursor-pointer"
                  >
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewArrivals