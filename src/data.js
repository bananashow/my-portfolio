// TECH STACK IMAGE
export const skillImages = [
  {
    category: 'front-end',
    skillInfo: [
      {
        images: 'skill_html.png',
        title: 'HTML5',
        content: '웹 접근성을 준수하여 마크업 할 수 있어요.',
      },
      {
        images: 'skill_css.png',
        title: 'CSS3',
        content: '레이아웃을 충분히 이해하고 사용할 수 있어요.',
      },
      {
        images: 'skill_javascript.png',
        title: 'JavaScript',
        content: '문법을 이해하고, DOM 조작과 이벤트 처리가 가능해요.',
      },
      {
        images: 'skill_typescript.png',
        title: 'TypeScript',
        content: '타입을 이해하고, 코드의 안정성을 높혀요.',
      },
      {
        images: 'skill_react.png',
        title: 'React',
        content: '상태와 속성, 조건부 렌더링 등을 다룰 수 있어요.',
      },
      {
        images: 'skill_vue.png',
        title: 'Vue',
        content: '데이터 바인딩, 이벤트 처리 등을 구현해요.',
      },
      {
        images: 'skill_redux.png',
        title: 'Redux',
        content: 'Redux를 이용하여 전역 상태 관리 경험이 있어요.',
      },
      {
        images: 'skill_reactquery.png',
        title: 'React-Query',
        content: '불필요한 호출을 줄이고, 키를 효율적으로 관리해요.',
      },
      {
        images: 'skill_recoil.png',
        title: 'Recoil',
        content: 'Atom과 Selectors의 개념을 알고 사용해요.',
      },
      {
        images: 'skill_styledComponents.png',
        title: 'Styled-Components',
        content: '컴포넌트로 스타일을 관리하고 다룰 수 있어요.',
      },
    ],
  },
  {
    category: 'back-end',
    skillInfo: [
      {
        images: 'skill_supabase.png',
        title: 'Supabase',
        content: 'DB, 인증, 스토리지 기능을 활용할 수 있어요.',
      },
      {
        images: 'skill_firebase.png',
        title: 'Firebase',
        content: 'DB, 인증, 스토리지 기능을 활용할 수 있어요.',
      },
      {
        images: 'skill_java.png',
        title: 'Java',
        content: '객체 지향을 이해하고 DB를 연동할 수 있어요.',
      },
      {
        images: 'skill_springboot.png',
        title: 'SpringBoot',
        content: 'MVC 패턴으로 웹사이트를 만들 수 있어요.',
      },
      {
        images: 'skill_jsp.png',
        title: 'JSP',
        content: '원하는대로 동적인 이벤트 처리를 할 수 있어요.',
      },
      {
        images: 'skill_python.png',
        title: 'Python',
        content: '저의 입문 언어로, 문법과 함수를 학습했어요.',
      },
      {
        images: 'skill_mysql.png',
        title: 'MySQL',
        content: 'DB 생성 및 쿼리 작성, 테이블 설계, 연동을 해요.',
      },
    ],
  },
  {
    category: 'using tools',
    skillInfo: [
      {
        images: 'skill_photoshop.png',
        title: 'Photoshop',
        content: '이미지의 편집, 합성, 보정 작업을 할 수 있어요.',
      },
      {
        images: 'skill_vscode.png',
        title: 'Git',
        content: 'rule에 맞게 이슈 및 PR 생성을 통한 협업이 가능해요.',
      },
      {
        images: 'skill_figma.png',
        title: 'Figma',
        content: 'Figma를 활용해 와이어프레임을 만들어 봤어요.',
      },
    ],
  },
];

// WORKS
export const projects = [
  {
    id: 10,
    images: ['yurim_01.jpg', 'yurim_02.jpg', 'yurim_03.jpg', 'yurim_04.jpg', 'yurim_05.jpg', 'yurim_06.jpg'],
    title: '유림 더 숲 인테리어',
    participation: '개인 프로젝트',
    mainContent: `현재 진행 중인 프로젝트는 실제 서비스로 이어질 수 있도록 틈틈이 작업 중입니다. 백엔드 관리를 최소화하기 위해 Supabase를 활용하고 있습니다. 데이터베이스에는 캐러셀, 견적 요청, 카테고리별 포스팅을 다루기 위한 테이블이 구축되었으며, 사용자 인증은 이메일을 통한 로그인 후 토큰을 받아오고 있습니다. 이미지 관리를 위해 스토리지를 활용하고 있으며, 이미지와 로고 등은 현재 임시 데이터로 대체되어 있습니다.
    추가적으로 로그인 및 관리자 페이지를 구현하여 관리자가 카테고리별 데이터를 직접 입력, 수정, 삭제할 수 있도록 만들었고, 견적 요청 리스트를 확인할 수 있도록 하였습니다. 
    현재 검색 기능과 인스타그램 API를 활용한 추가 기능 및 기획이 필요한 상태입니다.`,
    tools: ['TypeScript', 'React', 'Vite', 'Recoil', 'React-Query', 'Supabase', 'MUI'],

    site: 'https://yurim.vercel.app',
    gitURL: 'https://github.com/bananashow/yurim',
  },
  {
    id: 9,
    images: ['fridge_01.jpg', 'fridge_02.jpg', 'fridge_03.jpg', 'fridge_04.jpg', 'fridge_05.jpg'],
    title: '냉장고를 부탁해',
    participation: '팀 프로젝트 (FE:2명, BE:3명)',
    mainContent: `웹 상에 냉장고를 만들어 구입한 재료를 관리하고, 가지고 있는 재료를 기반으로 만들 수 있는 레시피를 추천해주는 웹 서비스를 구현했습니다. 회원가입의 경우 Email 인증 회원가입과 구글 OAuth 방식으로 구현되었고, 이메일 인증을 하지 않거나, 로그인 유저가 아닌 경우에는 레시피 조회 기능만 사용할 수 있고, 레시피 등록, 북마크, 냉장고 관리 등의 기능은 이메일 인증이 완료된 유저만 사용할 수 있도록 하였습니다.
    인가 처리는 JWT Token 기반으로 구현됐고, 서버에서 Access Token과 Refresh Token을 넘겨주면 세션과 쿠키로 저장을 했습니다. Access Token이 만료되면 401을 응답 받고, Refresh Token과 함께 재발급 API를 호출합니다. 서버에 저장되어 있는 Refresh Token과 요청한 Token을 비교해 유효하면 Access Token을 재발급 받고, Refresh Token도 만료된 경우 똑같이 401을 응답 받습니다. 이 경우에는 재로그인을 유도했습니다.
    알림 기능은 클라이언트에서 주기적으로 데이터를 요청하는 polling 방식을 사용하면 성능적인 문제가 있을 거라 판단해 서버에서 단방향으로 데이터를 전송하는 SSE를 이용해 알림 기능을 구현했습니다. 단일 서버에서는 문제가 없지만 서버를 확장했을 때 서로 다른 서버에서 발행된 알림을 수신할 수 있도록 Redis pub/sub 기능도 함께 사용했습니다. `,
    tools: ['TypeScript', 'React', 'Vite', 'Recoil', 'React-Query'],

    gitURL: 'https://github.com/fridge-rescue/fridge-rescue-client',
    notionURL: 'https://towering-august-3d2.notion.site/8af31275ddec478d95ecb2db0cf17a49?pvs=4',
  },
  {
    id: 8,
    images: ['foodmate_01.jpg', 'foodmate_02.jpg', 'foodmate_03.jpg', 'foodmate_04.jpg'],
    title: 'FoodMate',
    participation: '팀 프로젝트 (FE:3명, BE:4명)',
    mainContent: `바쁜 현대 사회속에서 혼밥러들이 증가하면서, 함께 밥을 먹으며 소통을 하고 만남을 가질 수 있는 커뮤니티의 필요성을 느껴서 해당 프로젝트를 기획하게 되었습니다.
        다양한 검색 조건(실시간 현재 위치 기반 주변 모임, 지역·날짜별 모임 필터링 등)을 통해 최적화된 모임을 찾아주며, 다대다 채팅 기능을 통해 모임 전 소통이 가능합니다. 해당 프로젝트에서 공용 컴포넌트 생성 및 foodmate 구해요 페이지, 프로필 모달, 게시글 및 댓글 CRUD, 내 근처 모임 페이지, 신청 내역 및 요청 조회 페이지, 회원 가입 및 로그인, 개인 정보를 수정하는 마이페이지 등 전반적인 부분을 맡았습니다.
        협업 중 FE 사이에서 소통의 문제와 갈등이 있었는데, 이를 해결하려고 노력하였고 해결 방안을 모색하여 결국엔 기능 축소를 최소화하여 최대한 완성도를 높여 프로젝트 발표를 진행할 수 있었습니다.
        첫 협업 경험이었는데, rule에 맞게 이슈와 PR을 작성하고 코드 리뷰를 했던 경험이 가장 특별했습니다. API 명세서를 확인하며 데이터를 요청하는 과정에서 React-Query의 활용과 토큰을 담아 보내는 fetchCall 함수를 만들어 사용한 것도 매우 흥미로웠습니다.
        `,
    tools: ['TypeScript', 'React', 'Vite', 'Recoil', 'React-Query'],

    gitURL: 'https://github.com/bananashow/foodmate-frontend',
    notionURL: 'https://www.notion.so/FoodMate-f9d44a00e2364986807490db42258d5f',
  },

  {
    id: 7,
    images: ['safeReturn_01.jpg', 'safeReturn_02.jpg'],
    title: 'Safe-Return',
    participation: '개인 프로젝트',
    mainContent: `Safe-Return은 실시간 전국의 실종자 정보를 확인할 수 있는 사이트입니다.
    실종자 검색 기능 및 필터링을 동적으로 구현하려면 전체 데이터가 필요한데, 사용하려는 api의 ‘요청 시 가져올 수 있는 데이터의 수(필수값)’가 최대 100개로 한정되어 있었습니다. 반복문으로 page를 증가시키며 전체 데이터를 꺼냈는데, 로딩시간이 15초나 걸렸습니다. 현재는 Promise.all()을 통해 병렬로 데이터를 가져오도록 수정하여 5~8초로 단축된 상태입니다.
    Cloudflare Workers로 CORS error를 해결했으며, Firebase 인증을 통해 '이메일/비밀번호 로그인'과 '구글 계정으로 로그인'을 구현했습니다. Firestore로 유저의 정보와 게시글, 댓글을 관리하고 있습니다.
    실종 관련 뉴스를 최신순으로 띄웠으나 Newsapi.org가 로컬 API 호출만 무료로 허용하도록 서비스를 변경한 사실을 알게되어 네이버 뉴스 API로 대체하였고, 해당 API는 뉴스 이미지를 제공하지 않기 때문에 캐러셀 미니 뉴스로 UI를 변경했습니다.`,
    tools: ['JavaScript', 'React', 'Styled-Components', 'Recoil', 'firebase'],

    site: 'https://safe-return.vercel.app',
    gitURL: 'https://github.com/bananashow/safe-return',
    notionURL: 'https://towering-august-3d2.notion.site/16aa24afa0ee4aa8a6126e75530702ee?pvs=4',
  },

  {
    id: 6,
    images: ['reactShop_01.jpg', 'reactShop_02.jpg', 'reactShop_03.jpg', 'reactShop_04.jpg'],
    title: '쇼핑몰',
    participation: '개인 프로젝트',
    mainContent: `쇼핑몰 프로젝트에서는 다크모드/화이트모드로 변경이 가능하도록 구현하였고, 가상의 상품 데이터를 제공하는 Fake Store API를 활용하여 다양한 상품들을 가져왔습니다. 원하는 상품을 편리하게 찾을 수 있도록 상품 검색 기능을 넣음으로써 키워드를 입력하여 원하는 상품을 빠르게 찾을 수 있으며, 검색 결과에 따라 상품 목록이 동적으로 업데이트 됩니다.
      이 쇼핑몰은 반응형 디자인을 적용하여 모바일, 태블릿과 같은 다양한 기기에서 최적의 사용자 경험을 제공하도록 노력했습니다.
      Recoil을 사용한 이유는 Redux보다 구조가 단순하고, 상태 업데이트 시 직관적인 편이라 접근하기 용이했으나 단순히 Atoms과 Selectors의 기본적인 개념만 익히고 사용한 것 같아서 아쉬움이 남습니다. 추후에 Recoil을 더 깊이있게 공부하여 적용해 볼 생각입니다.`,
    tools: ['TypeScript', 'React', 'Styled-Components', 'Recoil', '반응형'],
    site: 'https://react-shop-3s211rwgb-bananashow.vercel.app/',
    gitURL: 'https://github.com/bananashow/react-shop',
  },

  {
    id: 5,
    images: [
      'najangs_01.jpg',
      'najangs_02.jpg',
      'najangs_03.jpg',
      'najangs_04.jpg',
      'najangs_05.jpg',
      'najangs_06.jpg',
    ],
    title: '나의 장보기 스타일',
    participation: '팀 프로젝트(3명)',
    mainContent: `저는 이 프로젝트에서 개발과 디자인을 담당하였고, 기획자 1명과 데이터 분석가 1명과 함께 작업하였습니다.
    PoC 프로젝트 중 하나로, 회사에서 서비스 중인 앱의 유입 및 홍보를 목적으로 제작되었습니다.
    MBTI 기반으로 사용자의 장보기 스타일을 분석하고, 쇼핑할 때의 선호도와 습관을 고려하여 16가지의 결과를 도출하였습니다. 또한, 테스트와 내 결과를 카카오톡으로 공유하는 기능을 추가하여 친구들과 소소한 재미를 함께 할 수 있도록 하였습니다.
    총 테스트 사용자 수 1,434명, 앱 유입 수는 63명으로 현재는 서비스가 중단되었습니다.
    
    개발팀이 아니었지만, 선임의 배려로 실무에서 개발을 경험해 볼 수 있었던 가장 값진 경험이었습니다. 이 값진 경험이 제가 프론트엔드 개발자를 꿈꾸게 된 계기가 되었습니다.`,
    tools: ['React', 'Styled-Components', 'Photoshop', '나장스', '모바일 전용'],
    site: 'https://my-shopping-style.vercel.app/',
    gitURL: 'https://github.com/bananashow/my-shopping-style',
  },

  {
    id: 4,
    images: ['meme_01.jpg', 'meme_02.jpg', 'meme_03.jpg'],
    title: '이경영 밈 생성기',
    participation: '개인 프로젝트',
    mainContent: `철처하게 개인적인 사리사욕을 채우기 위해 만든 밈 생성기 입니다.
    원하는 섹션의 웹 문서 화면을 이미지로 변환하여 다운로드 하기 위해 'dom-to-image' 라이브러리를 사용하였고, 폰트 색상 팔레트는 react-color로 구현했습니다.
    
    카카오톡 브라우저와 같은 인앱 브라우저 환경에서 파일 다운로드가 정상적으로 동작하지 않는 이슈가 발생했는데, 이는 보안 및 브라우저 정책 때문에 발생할 수 있는 제한 사항이었습니다.
      1️⃣ 새창 띄워서 다른 브라우저로 접속 시도 
      → 자동으로 사용자의 브라우저를 제어하여 다른 브라우저로 접속시키는 것은 보안 및 개인정보 문제 발생
      2️⃣ 카카오톡 고객센터에 문의에 대한 답변 검색 
      → "아이폰 인앱브라우저는 wkwebview 를 사용하는데, 기본적으로 download attirbute 나 dataurl 을 지원하지 않습니다. ios 14.5 에서 이런 걸 할 수 있는 기능이 추가되긴 했는데 톡의 os 최소 지원 버전이 아직 14.0 이라서 14.5 이상으로 올라가는 하반기에 기능 추가를 고려 예정입니다."
    
    임시로 페이지에 해당 사항에 대한 안내를 추가했지만, 이는 사용자 경험을 해치는 것으로 다른 대안이 필요한 상태입니다.

    `,
    tools: ['React', 'Styled-Components', 'dom-to-image', 'react-color', '반응형'],
    site: 'https://lgy-meme.vercel.app/',
    gitURL: 'https://github.com/bananashow/LGY-meme',
  },

  {
    id: 3,
    images: ['pokemon_01.jpg', 'pokemon_02.jpg'],
    title: '포켓몬 도감',
    participation: '개인 프로젝트',
    mainContent: `이 프로젝트는 TypeScript 학습을 위해 만들어진 간단한 포켓몬 도감입니다.
    PokéAPI를 통해 포켓몬 정보를 가져오며, 클릭하면 해당 포켓몬의 상세 정보와 능력치를 확인할 수 있습니다.
    각 포켓몬은 속성에 맞게 색상이 부여되어 있으며, 세 가지 타입의 이미지를 볼 수 있습니다.

    TypeScript로 만든 첫 프로젝트이므로 기초적인 기능을 간단하게 보여주는 것에 초점을 맞추었습니다.
    현재는 단순한 기능만 구현되어 있지만, PokéAPI를 활용하여 더 재밌는 프로젝트를 만들 수 있을 것 같아서 추후에 검색 기능과 속성에 따라 포켓몬을 필터링하는 기능 등을 추가하여 새 프로젝트를 만들어 보고 싶습니다.`,
    tools: ['React', 'TypeScript', 'Styled-Components'],
    site: 'https://pokemon-iota-lilac.vercel.app/',
    gitURL: 'https://github.com/bananashow/pokemon',
  },

  {
    id: 2,
    images: [
      'library_01.jpg',
      'library_02.jpg',
      'library_03.jpg',
      'library_04.jpg',
      'library_05.jpg',
      'library_06.jpg',
      'library_07.jpg',
    ],
    title: "Wisdom's Library",
    participation: '개인 프로젝트',
    mainContent: `Wisdom's Library는 스프링 MVC 기반의 도서 관리 시스템을 구현한 웹사이트로, 관리자와 회원으로 구분하여 이용할 수 있도록 페이지를 제작하였습니다.
    작업일은 7일 소요 되었으며, 따로 쿼리문을 작성할 xml 파일을 생성하지 않고, 어노테이션으로 데이터베이스에 접근하여 mapper를 구성하였습니다.

    **관리자 : 도서 등록/수정, 대여된 도서 관리, 공지사항/자유게시판 관리, 회원 목록, 희망도서 신청 목록 관리
    **회원 : 도서 검색, 책 대여, 자유게시판 이용, 희망 도서 신청, 회원 정보 수정, 대여한 도서 목록 등`,
    tools: ['Java', 'SpringBoot', 'JSP', 'MySQL'],
    gitURL: 'https://github.com/bananashow/wisdom-library',
  },

  {
    id: 1,
    images: ['portfolio_01.jpg', 'portfolio_02.jpg', 'portfolio_03.jpg'],
    title: '포트폴리오',
    participation: '개인 프로젝트',
    mainContent: `현재 보고 계신 포트폴리오 웹사이트를 제작하였습니다. 컴포넌트의 재사용성을 높이려고 노력하였고, 평소에 많이 사용해보지 않은 애니매이션 효과를 접할 수 있었습니다. Intersection Observer API를 커스텀 훅을 활용하여 애니메이션 효과를 주었으며, react-scroll으로 섹션 이동을 처리했습니다.
    
    포트폴리오 웹사이트 제작 과정에서 디자인과 색상에 대해 많은 고민을 하였습니다. 포트폴리오이기 때문에 특별한 애착을 가지고 만들었으며, 색의 조화와 배색에 대한 디자인 이론적인 부분이 부족하여 어려움을 겪기도 했습니다.
    포트폴리오를 통해 제가 어떤 개발자이고, 동시에 디자인적인 감각을 어떻게 담고 싶었는지를 보여주고자 했습니다. 더 나아가, 더욱 풍부한 경험과 성장을 통해 더 멋진 프로젝트를 구현하고자 하는 욕심이 있습니다.`,
    tools: ['React', 'Styled-Components', '반응형'],
    site: 'https://my-portfolio-eosin-rho.vercel.app/',
    gitURL: 'https://github.com/bananashow/my-portfolio',
  },

  {
    id: 0,
    images: [
      'thumbnail_01.jpg',
      'thumbnail_02.jpg',
      'thumbnail_03.jpg',
      'thumbnail_04.jpg',
      'thumbnail_05.jpg',
      'thumbnail_06.jpg',
      'thumbnail_07.jpg',
      'thumbnail_08.jpg',
      'thumbnail_09.jpg',
      'thumbnail_10.jpg',
      'thumbnail_11.jpg',
      'thumbnail_12.jpg',
      'thumbnail_13.jpg',
      'thumbnail_14.jpg',
      'thumbnail_15.jpg',
    ],
    title: '썸네일',
    participation: '개인 프로젝트',
    mainContent: `IT 스타트업 회사에서 근무할 당시, 주 업무가 썸네일을 제작하는 일이었습니다. 평소에 UX/UI에도 관심이 많은 편이어서 즐겁게 업무에 임했던 기억이 납니다.
    사용자들의 관심을 끌고, 좀 더 독특하고 눈에 띄게 만들어 흥미를 유발하도록 노력했습니다.

    이 업무를 통해 디자인에 대한 역량을 키웠고, 디자인까지 가능한 프론트엔드 개발자를 욕심내게 되었습니다.
    `,
    tools: ['photoshop'],
  },
];
