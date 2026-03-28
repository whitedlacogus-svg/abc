import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ArrowLeft, Map, User } from 'lucide-react';
import { characters, worldData, Character, Nation } from './data';

// 동양풍 프레임 컴포넌트 (전체 화면용 - 심플하게)
const GlobalFrame = () => (
  <div className="fixed inset-3 md:inset-5 pointer-events-none z-50">
    {/* 심플한 이중 테두리 */}
    <div className="absolute inset-0 border border-red-900/30 shadow-[inset_0_0_30px_rgba(153,27,27,0.1)]"></div>
    <div className="absolute inset-2 border border-red-900/10"></div>
    
    {/* 깔끔한 모서리 장식 (ㄱ, ㄴ 모양) */}
    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-red-800/60"></div>
    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-red-800/60"></div>
    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-red-800/60"></div>
    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-red-800/60"></div>

    {/* 모서리 안쪽 작은 포인트 */}
    <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-amber-700/40"></div>
    <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-amber-700/40"></div>
    <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-amber-700/40"></div>
    <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-amber-700/40"></div>
  </div>
);

// 동양풍 프레임 컴포넌트 (카드/모달용 - 화려하게)
const OrientalFrame = () => (
  <div className="absolute inset-0 pointer-events-none z-10">
    <div className="absolute inset-1 border border-red-900/30"></div>
    <div className="absolute inset-2 border border-amber-900/20"></div>
    
    {/* Corner brackets */}
    <div className="absolute top-1 left-1 w-8 h-8 border-t-2 border-l-2 border-red-800/70"></div>
    <div className="absolute top-1 right-1 w-8 h-8 border-t-2 border-r-2 border-red-800/70"></div>
    <div className="absolute bottom-1 left-1 w-8 h-8 border-b-2 border-l-2 border-red-800/70"></div>
    <div className="absolute bottom-1 right-1 w-8 h-8 border-b-2 border-r-2 border-red-800/70"></div>
    
    {/* Inner corner accents */}
    <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-amber-600/50"></div>
    <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-amber-600/50"></div>
    <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-amber-600/50"></div>
    <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-amber-600/50"></div>
    
    {/* Diamond accents */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-900/50 rotate-45"></div>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-900/50 rotate-45"></div>
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-900/50 rotate-45"></div>
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-900/50 rotate-45"></div>
  </div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasEntered, setHasEntered] = useState(false);
  const [selectedNation, setSelectedNation] = useState<Nation | null>(null);
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Filter characters based on selected nation
  const filteredCharacters = selectedNation 
    ? characters.filter(char => char.category === selectedNation.name)
    : [];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-red-900/50 relative">
      <GlobalFrame />
      
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#050505] cursor-pointer"
            onClick={() => setHasEntered(true)}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,27,27,0.15)_0%,transparent_60%)]"></div>
            
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center z-10"
              >
                <div className="w-12 h-12 border-4 border-red-950 border-t-red-700 rounded-full animate-spin mb-4"></div>
                <p className="text-red-900/60 tracking-widest text-sm font-sans">세계관을 불러오는 중...</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center gap-12 z-10"
              >
                {/* 메인 타이틀 이미지 자리 */}
                <div className="w-[80vw] max-w-2xl h-[200px] border border-red-900/40 flex items-center justify-center text-red-900/60 text-sm tracking-widest bg-black/50 relative overflow-hidden">
                  <OrientalFrame />
                  <img src="https://i.postimg.cc/ZKLwDyd4/np.jpg" alt="메인 타이틀" className="w-full h-full object-contain p-4 relative z-10" referrerPolicy="no-referrer" />
                </div>
                
                {/* 화면을 눌러주세요 텍스트 */}
                <div className="mt-8 text-red-800/80 tracking-[0.5em] text-sm animate-pulse font-serif">
                  화면을 눌러주세요
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen"
          >
            {/* Background Motif for Nation View (Only Gradient, No Text) */}
            <AnimatePresence>
              {selectedNation && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`fixed inset-0 pointer-events-none bg-gradient-to-br ${selectedNation.bgClass} transition-colors duration-1000`}
                />
              )}
            </AnimatePresence>

            <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 py-16 md:py-24">
              
              <AnimatePresence mode="wait">
                {!selectedNation ? (
                  /* MAIN VIEW: MAP & NATIONS */
                  <motion.div
                    key="home-view"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-24"
                  >
                    {/* Header Placeholder */}
                    <header className="flex flex-col items-center justify-center gap-6">
                      <div className="w-[300px] md:w-[400px] h-[100px] border border-red-900/40 flex items-center justify-center text-red-900/60 text-sm tracking-widest bg-black/50 relative overflow-hidden">
                        <OrientalFrame />
                        <img src="https://i.postimg.cc/ZKLwDyd4/np.jpg" alt="메인 타이틀" className="w-full h-full object-contain p-2 relative z-10" referrerPolicy="no-referrer" />
                      </div>
                    </header>

                    {/* Factions & Map Section */}
                    <section className="flex flex-col gap-12">
                      <div className="flex flex-col items-center gap-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-serif text-red-100/90 tracking-widest">세력 및 국가</h2>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rotate-45 bg-red-900/50"></div>
                          <div className="w-16 h-px bg-red-900/50"></div>
                          <div className="w-2 h-2 rotate-45 bg-red-900/50"></div>
                        </div>
                      </div>

                      {/* Map Placeholder (1:2 Ratio) */}
                      <div className="w-full max-w-md mx-auto aspect-[1/2] border border-red-900/40 bg-black/40 flex flex-col items-center justify-center text-zinc-600 gap-4 relative group hover:bg-red-950/20 transition-colors shadow-2xl overflow-hidden">
                        <OrientalFrame />
                        <img src="https://i.postimg.cc/Y0KdT6Rq/Kakao-Talk-20260325-222246378-01.jpg" alt="세계 지도" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 relative z-10" referrerPolicy="no-referrer" />
                      </div>

                      {/* Nation Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {worldData.nations.map((nation) => (
                          <motion.div
                            key={nation.id}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedNation(nation)}
                            className="group cursor-pointer bg-black/60 border border-red-950/50 hover:border-red-800/60 overflow-hidden transition-all duration-300 shadow-lg relative"
                          >
                            <OrientalFrame />
                            {/* Nation Thumbnail Placeholder with Gradient */}
                            <div className="aspect-[16/9] bg-zinc-950 flex items-center justify-center border-b border-red-950/50 relative overflow-hidden">
                              {/* Thumbnail Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-transparent to-amber-900/20 mix-blend-overlay z-10"></div>
                              
                              {nation.thumbnailUrl ? (
                                <img src={nation.thumbnailUrl} alt={nation.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                              ) : (
                                <span className="text-xs text-red-900/40 tracking-widest">{nation.name} 썸네일 자리</span>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                              <h3 className="absolute bottom-4 left-6 text-xl font-serif text-red-100/90 tracking-widest group-hover:text-amber-500/90 transition-colors z-20">{nation.name}</h3>
                            </div>
                            <div className="p-6 flex flex-col gap-4 relative z-20">
                              <p className="text-sm text-zinc-400 leading-relaxed font-sans">{nation.desc}</p>
                              <div className="flex items-center text-xs text-red-700/70 group-hover:text-red-500 transition-colors mt-2 font-sans tracking-widest">
                                <span>인물 보기</span>
                                <ChevronRight className="w-3 h-3 ml-1" />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </section>
                  </motion.div>
                ) : (
                  /* NATION DETAIL VIEW */
                  <motion.div
                    key="nation-view"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-16"
                  >
                    {/* Back Button */}
                    <button 
                      onClick={() => setSelectedNation(null)}
                      className="self-start flex items-center gap-2 text-sm text-red-900/60 hover:text-red-500 transition-colors group font-sans tracking-widest"
                    >
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      <span>전체 지도로 돌아가기</span>
                    </button>

                    {/* Nation Header */}
                    <header className="flex flex-col gap-6 border-b border-red-950/50 pb-12 relative">
                      <div className="flex items-end gap-4">
                        <h1 className="text-4xl md:text-5xl font-serif text-red-100/90 tracking-widest">{selectedNation.name}</h1>
                        <span className="text-amber-700/60 text-sm mb-1 tracking-widest font-sans">{selectedNation.type}</span>
                      </div>
                      <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl font-sans">
                        {selectedNation.desc}
                      </p>
                    </header>

                    {/* Characters Grid */}
                    <section className="flex flex-col gap-8">
                      <h2 className="text-xl font-serif text-red-200/80 tracking-widest flex items-center gap-4">
                        소속 인물
                        <div className="h-px flex-1 bg-red-950/50"></div>
                      </h2>
                      
                      {filteredCharacters.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                          {filteredCharacters.map((char) => (
                            <motion.div
                              key={char.id}
                              whileHover={{ y: -5 }}
                              onClick={() => setSelectedChar(char)}
                              className="group cursor-pointer bg-black/60 border border-red-950/40 hover:border-red-800/60 overflow-hidden transition-all duration-300 flex flex-col shadow-lg relative"
                            >
                              <OrientalFrame />
                              {/* Character Thumbnail Placeholder with Gradient */}
                              <div className="aspect-[3/4] bg-zinc-950 flex items-center justify-center border-b border-red-950/50 relative overflow-hidden">
                                {/* Thumbnail Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-transparent to-amber-900/20 mix-blend-overlay z-10"></div>

                                {char.thumbnailUrl ? (
                                  <img src={char.thumbnailUrl} alt={char.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                                ) : (
                                  <div className="text-center flex flex-col gap-2">
                                    <User className="w-8 h-8 text-red-900/30 mx-auto" />
                                    <span className="text-xs text-red-900/40 tracking-widest px-4">{char.name}<br/>썸네일 자리</span>
                                  </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-1 z-20">
                                  <span className="text-[10px] text-amber-600/80 tracking-widest uppercase font-sans">{char.position}</span>
                                  <h3 className="text-lg font-serif text-red-100/90 tracking-widest group-hover:text-amber-500/90 transition-colors">{char.name}</h3>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <div className="py-24 text-center text-red-900/50 text-sm tracking-widest border border-red-950/40 bg-black/40 relative">
                          <OrientalFrame />
                          현재 공개된 인물이 없습니다.
                        </div>
                      )}
                    </section>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Character Detail Modal */}
      <AnimatePresence>
        {selectedChar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedChar(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#0a0a0a] border border-red-900/40 shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <OrientalFrame />
              
              {/* Image Area (Left) */}
              <div className="w-full md:w-2/5 bg-black/50 border-b md:border-b-0 md:border-r border-red-950/50 flex items-center justify-center relative min-h-[300px] md:min-h-[600px] z-20">
                {selectedChar.imageUrl ? (
                  <img src={selectedChar.imageUrl} alt={selectedChar.name} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                ) : (
                  <div className="text-red-900/50 font-sans flex flex-col items-center gap-3">
                    <User className="w-12 h-12 opacity-50" />
                    <span className="text-sm tracking-widest">캐릭터 일러스트 자리</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r"></div>
              </div>

              {/* Info Area (Right) */}
              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col relative z-20">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-3xl md:text-4xl font-serif text-red-100/90 tracking-widest">{selectedChar.name}</h2>
                    </div>
                    <p className="text-amber-600/80 font-sans text-sm tracking-widest">
                      {selectedChar.nation} · {selectedChar.position}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedChar(null)}
                    className="p-2 text-red-900/60 hover:text-red-400 bg-black/50 hover:bg-red-950/30 transition-colors border border-transparent hover:border-red-900/30"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-10 font-sans">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rotate-45 bg-red-800/60"></div>
                      <h4 className="text-xs font-bold text-red-800/80 uppercase tracking-widest">기본 정보</h4>
                      <div className="h-px flex-1 bg-red-950/30"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 pl-4">
                      <div>
                        <span className="text-zinc-600 text-xs block mb-1 tracking-widest">연령</span>
                        <span className="text-zinc-300">{selectedChar.age}세</span>
                      </div>
                      <div>
                        <span className="text-zinc-600 text-xs block mb-1 tracking-widest">소속</span>
                        <span className="text-zinc-300">{selectedChar.nation}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rotate-45 bg-red-800/60"></div>
                      <h4 className="text-xs font-bold text-red-800/80 uppercase tracking-widest">성격</h4>
                      <div className="h-px flex-1 bg-red-950/30"></div>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-4">
                      {selectedChar.personality.split(',').map((trait, i) => (
                        <span key={i} className="text-xs px-3 py-1.5 bg-black/40 text-zinc-300 border border-red-950/50 tracking-widest">
                          {trait.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rotate-45 bg-red-800/60"></div>
                      <h4 className="text-xs font-bold text-red-800/80 uppercase tracking-widest">소개</h4>
                      <div className="h-px flex-1 bg-red-950/30"></div>
                    </div>
                    <p className="text-sm text-zinc-300 leading-loose bg-black/30 p-6 border border-red-950/30 tracking-wide pl-4">
                      {selectedChar.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
