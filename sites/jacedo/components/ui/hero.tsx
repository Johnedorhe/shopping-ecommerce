import React from 'react'
import Link from 'next/link'
import { ArrowRight, ShoppingBag } from 'lucide-react'

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      
      {/* Optional: Dark overlay tint to ensure text remains readable over the background image */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />

      {/* ✅ UPDATED: Changed from a 2-column grid layout to a clean centered or left-aligned column */}
      <div className="max-pad-container w-full px-4 md:px-8 z-10 flex flex-col items-start justify-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col items-start space-y-6 text-left max-w-2xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100/90 backdrop-blur-sm rounded-full">
            <span>New Season Arrival</span>
          </div>

          <h1>
            Elevate Your <br />
            Style With JACEDO
          </h1>

          <p>
            Discover our curated, high-end collections designed to make a statement. Experience uncompromising premium quality and timeless aesthetic cuts crafted for the modern individual.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/collection" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-destructive hover:opacity-90 text-white font-medium rounded-full transition-all shadow-md shadow-destructive/20 w-full sm:w-auto text-center"
            >
              <span>Shop Collection</span>
              <ArrowRight size={18} />
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-gray-300 bg-white/80 backdrop-blur-sm hover:bg-white hover:border-black text-gray-700 hover:text-black font-medium rounded-full transition-all w-full sm:w-auto text-center"
            >
              <ShoppingBag size={18} />
              <span>Contact Agent</span>
            </Link>
          </div>

          {/* Trust Indicators / Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200/50 w-full">
            <div>
              <p>12k+</p>
              <p>Happy Customers</p>
            </div>
            <div>
              <p>80+</p>
              <p>Premium Outfits</p>
            </div>
            <div>
              <p>99%</p>
              <p>Satisfaction</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero
