export const skillLogos = [
  {
    category: "backend",
    imgURL: [],
  },
  {
    category: "frontend",
    imgURL: [],
  },
];

export const projects = [
  {
    id: 0,
    images: [
      "reactShop_01.jpg",
      "reactShop_02.jpg",
      "reactShop_03.jpg",
      "reactShop_04.jpg",
    ],
    title: "쇼핑몰",
    participation: "개인 프로젝트",
    mainContent: `react를 내 입맛대로 다룰 수 있도록 연습하려고 만들어 본 프로젝트입니다. 
    쇼핑몰 프로젝트에서는 다크모드/화이트모드로 변경이 가능하도록 구현하였고, 가상의 상품 데이터를 제공하는 Fake Store API를 활용하여 다양한 상품들을 가져왔습니다. 원하는 상품을 편리하게 찾을 수 있도록 상품 검색 기능을 넣음으로써 키워드를 입력하여 원하는 상품을 빠르게 찾을 수 있으며, 검색 결과에 따라 상품 목록이 동적으로 업데이트 됩니다.
      이 쇼핑몰은 반응형 디자인을 적용하여 모바일, 태블릿과 같은 다양한 기기에서 최적의 사용자 경험을 제공하도록 노력했습니다.
      
       Recoil로 상태 관리를 해보니 Redux보다 접근하기 쉬었으나, 단순히 Atoms과 Selectors의 기본적인 개념만 익히고 사용한 것 같아서 아쉬움이 남습니다. 추후에 Recoil을 더 깊이있게 공부하여 적용해 볼 생각입니다.`,
    tools: ["TypeScript", "React", "Styled-Components", "Recoil", "반응형"],
    site: "https://react-shop-3s211rwgb-bananashow.vercel.app/",
    gitURL: "https://github.com/bananashow/react-shop",
  },

  {
    id: 1,
    images: [
      "najangs_01.jpg",
      "najangs_02.jpg",
      "najangs_03.jpg",
      "najangs_04.jpg",
      "najangs_05.jpg",
      "najangs_06.jpg",
    ],
    title: "나의 장보기 스타일",
    participation: "팀 프로젝트(3명)",
    mainContent: `저는 이 프로젝트에서 개발과 디자인을 담당하였고, 기획자 1명과 데이터 분석가 1명과 함께 작업하였습니다.
    PoC 프로젝트 중 하나로, 회사에서 서비스 중인 앱의 유입 및 홍보를 목적으로 제작되었습니다.
    MBTI 기반으로 사용자의 장보기 스타일을 분석하고, 쇼핑할 때의 선호도와 습관을 고려하여 16가지의 결과를 도출하였습니다. 또한, 테스트와 내 결과를 카카오톡으로 공유하는 기능을 추가하여 친구들과 소소한 재미를 함께 할 수 있도록 하였습니다.
    총 테스트 사용자 수 1,434명, 앱 유입 수는 63명으로 현재는 서비스가 중단되었습니다.
    
    개발팀이 아니었지만, 선임의 배려로 실무에서 개발을 경험해 볼 수 있었던 가장 값진 경험이었습니다. 이 값진 경험이 제가 프론트엔드 개발자를 꿈꾸게 된 계기가 되었습니다.`,
    tools: ["React", "Styled-Components", "Photoshop", "나장스", "모바일 전용"],
    site: "https://my-shopping-style.vercel.app/",
    gitURL: "https://github.com/bananashow/my-shopping-style",
  },

  {
    id: 2,
    images: ["meme_01.jpg", "meme_02.jpg", "meme_03.jpg"],
    title: "이경영 밈 생성기",
    participation: "개인 프로젝트",
    mainContent: `철처하게 개인적인 사리사욕을 채우기 위해 만든 밈 생성기 입니다.
    원하는 섹션의 웹 문서 화면을 다운로드 하기 위해 'dom-to-image' 라이브러리를 사용하였고, 폰트 색상 팔레트는 react-color로 구현했습니다. 새로운 라이브러리를 사용해 본 경험은 매우 흥미로웠고, 추후에 방문자 조회수를 확인할 수 있도록 기능을 추가 할 예정입니다. 
    
    어느 정도 깨끗한 이미지들을 구하느라 고충이 있었지만, 내가 원하는 것을 만드는 데에 있어서 큰 즐거움을 느낄 수 있었습니다. 시간 될 때 백종원님 .ver도 만들어 보고 싶습니다.
    `,
    tools: [
      "React",
      "Styled-Components",
      "dom-to-image",
      "react-color",
      "반응형",
    ],
    site: "https://lgy-meme.vercel.app/",
    gitURL: "https://github.com/bananashow/LGY-meme",
  },

  {
    id: 3,
    images: ["pokemon_01.jpg", "pokemon_02.jpg"],
    title: "포켓몬 도감",
    participation: "개인 프로젝트",
    mainContent: `이 프로젝트는 TypeScript 학습을 위해 만들어진 간단한 포켓몬 도감입니다.
    PokéAPI를 활용하여 포켓몬 정보를 가져오며, 클릭하면 해당 포켓몬의 상세 정보와 능력치를 확인할 수 있습니다.
    각 포켓몬은 속성에 맞게 색상이 부여되어 있으며, 세 가지 타입의 이미지를 볼 수 있습니다.

    TypeScript로 만든 첫 프로젝트이므로 기초적인 기능을 간단하게 보여주는 것에 초점을 맞추었습니다.
    현재는 단순한 기능만 구현되어 있지만, PokéAPI를 활용하여 더 재밌는 프로젝트를 만들 수 있을 것 같아서 추후에 검색 기능과 속성에 따라 포켓몬을 필터링하는 기능 등을 추가하여 새 프로젝트를 만들어 보고 싶습니다.`,
    tools: ["React", "TypeScript", "Styled-Components"],
    site: "https://pokemon-iota-lilac.vercel.app/",
    gitURL: "https://github.com/bananashow/pokemon",
  },

  {
    id: 4,
    images: ["yurim_01.jpg", "yurim_02.jpg", "yurim_03.jpg", "yurim_04.jpg"],
    title: "유림 더 숲 인테리어",
    participation: "개인 프로젝트",
    mainContent: `스프링 MVC를 기반으로 한 인테리어 회사 웹사이트를 제작하였습니다.
    로그인 기능이 구현되어 사용자의 세션을 처리하여 관리자 로그인 시 서브 카테고리가 보여집니다.
    관리자는 각 카테고리별로 글을 작성하고 인테리어 이미지를 등록하고 수정할 수 있습니다. 또한, 문의글 관리 기능도 추가하여 고객들과 contact 할 수 있도록 하였습니다.
    
    파일 업로드를 처음 구현해 보았고, 실제 cafe24를 통해 호스팅하여 서비스를 제공하였습니다.
    현재는 서비스가 중단되었습니다.`,
    tools: ["Java", "SpringBoot", "JSP", "MySQL"],
    gitURL: "https://github.com/bananashow/yurimthesup",
  },

  {
    id: 5,
    images: [
      "library_01.jpg",
      "library_02.jpg",
      "library_03.jpg",
      "library_04.jpg",
      "library_05.jpg",
      "library_06.jpg",
      "library_07.jpg",
    ],
    title: "Wisdom's Library",
    participation: "개인 프로젝트",
    mainContent: `Wisdom's Library는 스프링 MVC 기반의 도서 관리 시스템을 구현한 웹사이트로, 관리자와 회원으로 구분하여 이용할 수 있도록 페이지를 제작하였습니다.
    작업일은 7일 소요 되었으며, 따로 쿼리문을 작성할 xml 파일을 생성하지 않고, 어노테이션으로 데이터베이스에 접근하여 mapper를 구성하였습니다.

    **관리자 : 도서 등록/수정, 대여된 도서 관리, 공지사항/자유게시판 관리, 회원 목록, 희망도서 신청 목록 관리
    **회원 : 도서 검색, 책 대여, 자유게시판 이용, 희망 도서 신청, 회원 정보 수정, 대여한 도서 목록 등`,
    tools: ["Java", "SpringBoot", "JSP", "MySQL"],
    gitURL: "https://my-portfolio-eosin-rho.vercel.app/",
  },

  {
    id: 6,
    images: ["portfolio_01.jpg", "portfolio_02.jpg", "portfolio_03.jpg"],
    title: "포트폴리오",
    participation: "개인 프로젝트",
    mainContent: `현재 보고 계신 포트폴리오 웹사이트를 제작하였습니다. 컴포넌트의 재사용성을 높이려고 노력하였고, 평소에 많이 사용해보지 않은 애니매이션 효과를 접할 수 있었습니다. Intersection Observer API를 커스텀 훅으로 활용하여 재사용성이 높은 애니메이션 효과를 구현하였으며, Vercel을 이용하여 웹사이트를 배포하였습니다.
    
    포트폴리오 웹사이트 제작 과정에서는 디자인과 색상에 대해 많은 고민을 하였습니다. 포트폴리오이기 때문에 특별한 애착을 두고 만들었으며, 색의 조화와 배색에 대한 디자인 이론적인 부분이 부족하여 어려움을 겪기도 했습니다. 하지만 이러한 어려움을 극복하면서 나만의 스타일로 첫 포트폴리오를 완성하였습니다.
    제 포트폴리오를 통해 제가 어떤 개발자인지와 디자인적인 감각을 보여주고 싶으며, 더 나아가서 더욱 풍부한 경험과 성장으로 더 멋진 프로젝트를 만들어내고 싶습니다.`,
    tools: ["React", "Styled-Components", "반응형"],
    gitURL: "https://github.com/bananashow/wisdom-library",
  },

  {
    id: 7,
    images: [
      "thumbnail_01.jpg",
      "thumbnail_02.jpg",
      "thumbnail_03.jpg",
      "thumbnail_04.jpg",
      "thumbnail_05.jpg",
      "thumbnail_06.jpg",
      "thumbnail_07.jpg",
      "thumbnail_08.jpg",
      "thumbnail_09.jpg",
      "thumbnail_10.jpg",
      "thumbnail_11.jpg",
      "thumbnail_12.jpg",
      "thumbnail_13.jpg",
      "thumbnail_14.jpg",
      "thumbnail_15.jpg",
    ],
    title: "썸네일",
    participation: "개인 프로젝트",
    mainContent: `IT 스타트업 회사에서 근무할 당시, 주 업무가 썸네일을 제작하는 일이었습니다. 평소에 디자인에도 관심이 많은 편이어서 즐겁게 업무에 임했던 기억이 납니다.
    사용자들의 관심을 끌고, 좀 더 독특하고 눈에 띄게 만들어 흥미를 유발하도록 노력했습니다.

    이 업무를 통해 디자인에 대한 역량을 키웠고, 디자인까지 가능한 프론트엔드 개발자를 욕심내게 되었습니다.
    사용자 경험을 고려한 UI/UX 디자인과 웹 개발의 조합은 저에게 큰 만족감을 주었고, 개발과 디자인을 결합하여 더욱 효율적이고 멋진 결과물을 만들 수 있음을 깨달았습니다.
    `,
    tools: ["photoshop"],
  },
];
