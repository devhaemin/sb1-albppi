import React from 'react';
import { Star, Music4, ChevronRight } from 'lucide-react';
import NavBar from './components/NavBar';
import FeatureCard from './components/FeatureCard';
import PricingCard from './components/PricingCard';
import StatsCard from './components/StatsCard';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          당신 만의 음악을<br />현실로 만드세요
        </h1>
        <p className="text-gray-400 mb-8">
          최고의 작곡가와 함께 특별한 음악을 만들어보세요
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-all">
          시작하기
        </button>
      </section>

      {/* DAW Preview */}
      <section className="relative max-w-6xl mx-auto px-4 mb-32">
        <div className="relative rounded-lg overflow-hidden border border-gray-800">
          <img 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=2000&q=80" 
            alt="DAW Interface" 
            className="w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </section>

      {/* Rating Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl mb-4">수백만명이 신뢰하는<br />작곡 프로그램 서비스</h2>
        <div className="flex justify-center items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p className="text-3xl font-bold">4.8/5</p>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={<Music4 />}
          title="프로페셔널한 음악 제작"
          description="최고의 도구로 전문적인 음악을 만들어보세요"
        />
        <FeatureCard 
          title="실시간 오디오 처리"
          description="지연 없는 완벽한 사운드 처리"
        />
        <FeatureCard 
          icon={<ChevronRight />}
          title="손쉬운 워크플로우"
          description="직관적인 인터페이스로 빠른 작업"
        />
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard number="10M+" label="다운로드" />
        <StatsCard number="150+" label="프리셋" />
        <StatsCard number="24/7" label="지원" />
      </section>

      {/* Pricing Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">
          더 쉽고, 더 편리한<br />작곡프로그램, 서비스
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PricingCard 
            title="기본 작곡 프로그램"
            features={[
              "기본 음원 제작 기능",
              "100+ 프리셋",
              "실시간 렌더링",
              "MIDI 지원"
            ]}
            isPopular={false}
          />
          <PricingCard 
            title="시그니처"
            features={[
              "모든 프리미엄 기능",
              "무제한 프로젝트",
              "프로 믹싱 도구",
              "우선 지원"
            ]}
            isPopular={true}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-2xl font-bold mb-4">당신의 음악이 시작되는 순간</h2>
          <p className="text-gray-200 mb-8">지금 바로 시작하고 특별한 혜택을 받아보세요</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all">
            무료로 시작하기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Music4 className="w-6 h-6 text-indigo-600" />
            <span className="font-bold">Soundary</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">이용약관</a>
            <a href="#" className="hover:text-white">개인정보처리방침</a>
            <a href="#" className="hover:text-white">고객센터</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;