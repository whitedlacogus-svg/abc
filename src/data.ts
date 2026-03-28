export interface Character {
  id: string;
  name: string;
  age: number;
  nation: string;
  category: string;
  position: string;
  personality: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
}

export interface Nation {
  id: string;
  name: string;
  type: string;
  location: string;
  desc: string;
  thumbnailUrl: string;
  motif: string;
  bgClass: string;
}

export const characters: Character[] = [
  {
    id: "yeonhwi",
    name: "연휘", age: 22, nation: "천무제국", category: "천무제국", position: "황제",
    personality: "ESTJ, 과묵, 무덤덤, 위압감, 강직, 현명, 결단력, 철저",
    description: "천무제국의 젊은 황제. 과묵하고 위압감 넘치는 성격으로, 철저하고 결단력 있게 제국을 통치한다.",
    imageUrl: "https://i.postimg.cc/13pwY0qW/image.png", thumbnailUrl: "https://i.postimg.cc/13pwY0qW/image.png"
  },
  {
    id: "unhwang",
    name: "운황", age: 29, nation: "천무제국", category: "천무제국", position: "재상",
    personality: "ISTJ, 야심가, 매혹, 배신성향, 음침, 통찰력, 기회주의, 치밀",
    description: "천무제국의 재상. 야심이 넘치고 기회주의적인 성향을 지녔으며, 치밀한 계획으로 권력을 쥔다.",
    imageUrl: "https://i.postimg.cc/FsxSQypR/image.png", thumbnailUrl: "https://i.postimg.cc/FsxSQypR/image.png"
  },
  {
    id: "baekcheongang",
    name: "백천강", age: 20, nation: "천무제국", category: "천무제국", position: "호위",
    personality: "ISTP, 과묵, 은둔형, 무뚝뚝, 원칙주의, 금욕, 야행성, 성실, 책임감",
    description: "천무제국의 호위무사. 원칙을 중시하며 묵묵히 자신의 책임을 다하는 성실한 성격이다.",
    imageUrl: "https://i.postimg.cc/hP3SxhPr/Kakao-Talk-20260328-211031801-12.jpg", thumbnailUrl: "https://i.postimg.cc/hP3SxhPr/Kakao-Talk-20260328-211031801-12.jpg"
  },
  {
    id: "kurosaki",
    name: "쿠로사키 겐신", age: 31, nation: "요자쿠라", category: "요자쿠라", position: "천군",
    personality: "ESTP, 리더십, 능글맞음, 호탕, 권위주의, 보수, 방종, 사치, 전통고수, 낮은자존감, 타인시선의식",
    description: "요자쿠라의 천군. 호탕하고 리더십이 뛰어나지만, 보수적이고 타인의 시선을 많이 의식하는 이면이 있다.",
    imageUrl: "https://i.postimg.cc/Wz1vqPR2/image.png", thumbnailUrl: "https://i.postimg.cc/Wz1vqPR2/image.png"
  },
  {
    id: "fujiwara",
    name: "후지와라 유키시로", age: 27, nation: "요자쿠라", category: "요자쿠라", position: "당주",
    personality: "ISFJ, 방어적, 다정다감, 수줍음, 우울, 사랑꾼, 위축",
    description: "요자쿠라의 당주. 다정다감하고 헌신적이지만, 방어적이고 다소 위축된 면이 있다.",
    imageUrl: "https://i.postimg.cc/xT72876d/image.png", thumbnailUrl: "https://i.postimg.cc/xT72876d/image.png"
  },
  {
    id: "habaki",
    name: "하바키 렌", age: 27, nation: "요자쿠라", category: "요자쿠라", position: "떠돌이 무사",
    personality: "ENTP, 독립적, 방관자, 낙천적, 솔직, 자유분방, 손재주, 자존심강함, 무책임, 잔꾀",
    description: "요자쿠라 출신의 떠돌이 무사. 자유분방하고 낙천적이며, 얽매이는 것을 싫어하는 방관자적 기질이 있다.",
    imageUrl: "https://i.postimg.cc/k5vzQhvB/image.png", thumbnailUrl: "https://i.postimg.cc/k5vzQhvB/image.png"
  },
  {
    id: "sogeon",
    name: "소건", age: 20, nation: "해무금성", category: "해무금성", position: "성왕",
    personality: "INFP, 겁쟁이, 회피형, 불안정, 예민, 조급, 미신맹신, 미성숙, 위축, 나태, 절대적 행운",
    description: "해무금성의 성왕. 예민하고 불안정한 성격으로, 절대적인 행운을 타고났으나 매사에 소심하고 회피하려 한다.",
    imageUrl: "https://i.postimg.cc/XvYmgkHC/image.png", thumbnailUrl: "https://i.postimg.cc/XvYmgkHC/image.png"
  },
  {
    id: "gaon",
    name: "가온", age: 30, nation: "해무금성", category: "해무금성", position: "사부",
    personality: "ESFJ, 간섭, 관대, 보호자, 부성애, 여유, 철학, 도덕, 내면중시, 끈기",
    description: "해무금성의 사부. 여유롭고 도덕을 중시하며, 타인을 챙기고 보호하려는 성향이 강하다.",
    imageUrl: "https://i.postimg.cc/28dtRKgX/image.png", thumbnailUrl: "https://i.postimg.cc/28dtRKgX/image.png"
  },
  {
    id: "batu",
    name: "바투", age: 24, nation: "푸른이리", category: "푸른이리", position: "소주",
    personality: "ENFJ, 마이웨이, 매혹, 상냥, 여성우대, 대범, 열정, 개방, 사랑꾼, 저돌",
    description: "푸른이리의 소주. 열정적이고 대범하며, 자신의 길을 개척해 나가는 매혹적인 인물이다.",
    imageUrl: "https://i.postimg.cc/MHC92ymC/image.png", thumbnailUrl: "https://i.postimg.cc/MHC92ymC/image.png"
  },
  {
    id: "ranmaru",
    name: "란마루", age: 28, nation: "유랑극단/요자쿠라", category: "유랑극단", position: "가객(여장남자)",
    personality: "ENTP, 마초, 고집불통, 매혹, 의리, 싸가지, 신경질, 우아, 기만, 솔직, 기분파, 도도, 완벽주의, 골초",
    description: "유랑극단의 가객. 우아하고 도도한 매력을 풍기지만, 신경질적이고 고집불통인 완벽주의자다.",
    imageUrl: "https://i.postimg.cc/28Ltc57H/image.png", thumbnailUrl: "https://i.postimg.cc/28Ltc57H/image.png"
  },
  {
    id: "goro",
    name: "고로", age: 25, nation: "유랑극단/요자쿠라", category: "유랑극단", position: "가노",
    personality: "ISTP, 고립적, 무관심, 위협적, 대인기피, 까칠, 신경질, 편협, 비관, 피해망상",
    description: "유랑극단의 가노. 대인기피증과 피해망상이 있으며, 세상에 무관심하고 고립적인 성격이다.",
    imageUrl: "https://i.postimg.cc/76LsgPLN/image.png", thumbnailUrl: "https://i.postimg.cc/76LsgPLN/image.png"
  },
  {
    id: "geumhwi",
    name: "금휘", age: 21, nation: "천보상단/천무제국", category: "천보상단", position: "상인",
    personality: "ESTP, 사기꾼, 수다, 아부, 인맥넓음, 친화력, 천진난만, 물질주의, 뻔뻔, 일중독, 잔꾀",
    description: "천보상단의 상인. 친화력이 뛰어나고 수다가 많으며, 물질주의적인 성향이 강한 일중독자다.",
    imageUrl: "https://i.postimg.cc/YCzBR9pB/image.png", thumbnailUrl: "https://i.postimg.cc/YCzBR9pB/image.png"
  },
  {
    id: "geumyo",
    name: "금요", age: 21, nation: "천보상단/천무제국", category: "천보상단", position: "상인",
    personality: "INTP, 내향형, 과묵, 비주류, 조력자, 덤덤, 개인주의, 박학다식, 결벽증, 상습지각, 포기빠름",
    description: "천보상단의 상인. 과묵하고 개인주의적이며, 박학다식하지만 귀찮은 일은 금방 포기하는 편이다.",
    imageUrl: "https://i.postimg.cc/15DkRtVN/image.png", thumbnailUrl: "https://i.postimg.cc/15DkRtVN/image.png"
  }
];

export const worldData = {
  nations: [
    { id: "cheonmu", name: "천무제국", type: "패권적 강대국", location: "중앙", desc: "3천 년의 유구한 역사를 자랑하며 압도적인 황실 군대와 중앙집권적 무력으로 대륙을 호령하는 패권국입니다.", thumbnailUrl: "https://i.postimg.cc/W4tj4Vvv/image.png", motif: "모란", bgClass: "from-rose-950/40 to-black" },
    { id: "yozakura", name: "요자쿠라", type: "폐쇄적 강국", location: "동쪽", desc: "가문 연합을 중심으로 혈통과 독자적인 비술을 고수하며, 이방인을 배척하는 폐쇄적인 부계 사회입니다.", thumbnailUrl: "https://i.postimg.cc/Y2zPTVcc/image.png", motif: "벚꽃", bgClass: "from-pink-950/30 to-black" },
    { id: "haemu", name: "해무금성", type: "신흥 강국", location: "남쪽", desc: "보화각의 막대한 자본을 바탕으로 급성장 중인 개방적이고 진취적인 모계 중심의 신흥 상업 국가입니다.", thumbnailUrl: "https://i.postimg.cc/sDt5mjTk/image.png", motif: "소나무", bgClass: "from-emerald-950/30 to-black" },
    { id: "cheonbo", name: "천보상단", type: "거대 상인 집단", location: "보화각", desc: "대륙 최대의 상업 구역인 보화각의 기득권을 쥐고 거대한 유통망을 굴리는 전통적인 거대 상인 집단입니다.", thumbnailUrl: "https://i.postimg.cc/Gt3nZnqp/image.png", motif: "대나무", bgClass: "from-green-950/30 to-black" },
    { id: "yurang", name: "유랑극단", type: "거대 극단", location: "국경 이동 자유로움", desc: "가객 란마루를 중심으로 국경을 자유롭게 넘나들며, 억압받던 이들의 도피처가 되어주는 거대 극단입니다.", thumbnailUrl: "https://i.postimg.cc/fT4xjW21/image.png", motif: "나비", bgClass: "from-purple-950/30 to-black" },
    { id: "blue_wolf", name: "푸른이리", type: "유랑 상인 집단", location: "서북방 -> 해무금성", desc: "서북방의 척박한 초원과 사막을 누비며 막강한 기마 무력과 자원을 독점하고 있는 유랑 상인 집단입니다.", thumbnailUrl: "https://i.postimg.cc/nr1cD1Sg/image.png", motif: "사막", bgClass: "from-amber-950/30 to-black" }
  ]
};
