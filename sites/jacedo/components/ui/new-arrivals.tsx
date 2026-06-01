'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, Star } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Automatically generate an array of 20 products mapping to product_1.png through product_20.png
const NEW_ARRIVALS = Array.from({ length: 20 }, (_, index) => {
  const id = index + 1
  return {
    id: id,
    name: `Premium Collection Item ${id}`,
    price: 89.99,
    rating: 4.8,
    // Safely handles the sequential product_1.png to product_20.png structure
    image: `/product_${id}.png` 
  }
})

export const NewArrivals = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-pad-container px-4 md:px-8">
        
        {/* Section Header Layout */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-destructive uppercase tracking-widest">Fresh Drops</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 mt-1">New Arrivals</h2>
          </div>
          <Link href="/collection" className="text-sm font-semibold text-gray-700 hover:text-destructive transition-colors pb-1 border-b border-gray-200 hover:border-destructive">
            View All Products
          </Link>
        </div>

        {/* Shadcn UI Base Carousel Wrapper */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {NEW_ARRIVALS.map((product) => (
              <CarouselItem 
                key={product.id} 
                // Displays 1 item on mobile, 2 on small devices, 3 on tablet, and 4 on desktop
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="group relative flex flex-col bg-gray-50/50 rounded-2xl overflow-hidden border border-gray-100 transition-all hover:shadow-lg hover:shadow-gray-200/50">
                  
                  {/* Image Container with Hover Scaling Effects */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Floating Luxury Ribbon Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-destructive rounded-md shadow-sm">
                      New
                    </div>
                  </div>

                  {/* Product Metadata Info Area */}
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
                      
                      {/* Interactive Cart Button Accent */}
                      <button 
                        aria-label="Add item to shopping cart" 
                        className="p-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-destructive hover:text-white hover:border-destructive transition-all shadow-sm cursor-pointer"
                      >
                        <ShoppingBag size={16} />
                      </button>
                    </div>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Control Paddles (Hidden visually on pure touch interface mobile views) */}
          <div className="hidden md:flex absolute -top-16 right-12 gap-2">
            <CarouselPrevious className="static translate-y-0 h-9 w-9 border-gray-200 hover:bg-gray-50 text-gray-700 cursor-pointer" />
            <CarouselNext className="static translate-y-0 h-9 w-9 border-gray-200 hover:bg-gray-50 text-gray-700 cursor-pointer" />
          </div>

        </Carousel>

      </div>
    </section>
  )
}

export default NewArrivals