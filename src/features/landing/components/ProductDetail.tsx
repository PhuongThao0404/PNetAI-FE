import React, { useState } from 'react';
import { PRODUCT_DETAIL_MOCK } from '../data/mockData';

export const ProductDetail: React.FC = () => {
  const data = PRODUCT_DETAIL_MOCK;
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState(data.sizes[2]);
  const [selectedType, setSelectedType] = useState(data.types[0]);
  const [activeThumb, setActiveThumb] = useState(data.thumbs[0]);

  return (
    <section className="py-32 px-12 lg:px-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-2 text-muted text-sm">
          <span>Home</span>
          <span>/</span>
          <span>Shop</span>
          <span>/</span>
          <span className="text-ink font-medium">Product Detail</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-7xl mx-auto">
        {/* Gallery */}
        <div className="sticky top-28">
          <div className="aspect-square bg-warm rounded-[32px] flex items-center justify-center text-[160px] mb-6 overflow-hidden">
            {activeThumb}
          </div>
          <div className="flex gap-4">
            {data.thumbs.map((t, idx) => (
              <div
                key={idx}
                onClick={() => setActiveThumb(t)}
                className={`w-20 h-20 bg-warm rounded-2xl flex items-center justify-center text-4xl cursor-pointer border-2 transition-all
                  ${activeThumb === t ? 'border-caramel' : 'border-transparent hover:border-sand'}`}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] uppercase tracking-widest text-muted">{data.category}</span>
            <span className="bg-forest text-white text-[11px] px-3 py-1 rounded-full font-bold">Authentic</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-ink leading-tight mb-4">
            {data.name}
          </h1>

          <div className="flex items-center gap-2.5 mb-8">
            <span className="text-caramel text-lg">{data.stars}</span>
            <span className="text-[13px] text-muted">{data.reviews}</span>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-4">
              <span className="text-4xl lg:text-5xl font-serif font-bold text-brown">{data.price}</span>
              <span className="text-2xl text-muted line-through opacity-60 font-serif">{data.oldPrice}</span>
            </div>
            <div className="text-forest text-[13px] font-semibold mt-2">✓ Save $10.00 (19%)</div>
          </div>

          <p className="border-t border-sand pt-8 text-muted text-[15px] leading-relaxed font-light mb-10">
            {data.description}
          </p>

          <div className="space-y-8 mb-10">
            <div>
              <div className="text-[13px] font-bold text-ink mb-3 uppercase tracking-wider">Weight: <span className="text-caramel">{selectedSize}</span></div>
              <div className="flex flex-wrap gap-2">
                {data.sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-6 py-2.5 rounded-full border text-[13px] transition-all font-medium
                      ${selectedSize === s ? 'bg-brown border-brown text-white shadow-lg shadow-brown/20' : 'bg-white border-sand hover:border-brown text-ink'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[13px] font-bold text-ink mb-3 uppercase tracking-wider">Breed Type: <span className="text-caramel">{selectedType}</span></div>
              <div className="flex flex-wrap gap-2">
                {data.types.map(t => (
                  <button
                    key={t}
                    onClick={() => setSelectedType(t)}
                    className={`px-6 py-2.5 rounded-full border text-[13px] transition-all font-medium
                      ${selectedType === t ? 'bg-brown border-brown text-white shadow-lg shadow-brown/20' : 'bg-white border-sand hover:border-brown text-ink'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border border-sand rounded-full bg-white overflow-hidden h-14">
              <button 
                className="w-12 h-full hover:bg-warm transition-colors text-xl"
                onClick={() => setQty(Math.max(1, qty - 1))}
              >−</button>
              <span className="w-12 text-center text-lg font-semibold">{qty}</span>
              <button 
                className="w-12 h-full hover:bg-warm transition-colors text-xl"
                onClick={() => setQty(qty + 1)}
              >+</button>
            </div>
            <button className="flex-1 bg-brown hover:bg-ink text-white h-14 rounded-full font-bold transition-all hover:-translate-y-1 shadow-xl shadow-brown/20 flex items-center justify-center gap-2">
              🛒 Add to Cart
            </button>
            <button className="w-14 h-14 border border-sand rounded-full flex items-center justify-center text-2xl hover:border-rust hover:text-rust transition-all group">
              <span className="group-hover:scale-125 transition-transform">♡</span>
            </button>
          </div>

          <div className="border-t border-sand pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-[12px] text-muted">
                <span className="text-xl">{f.icon}</span> {f.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
