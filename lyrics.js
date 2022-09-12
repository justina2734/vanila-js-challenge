const lyrics=[
    {
        lyric:"애도 어른도 아닌 나이 때 그저 ‘나’일 때 가장 찬란하게 빛이 나 어둠이 드리워질 때도 겁내지마",
        title:"팔레트",
    },
    {
        lyric:"나를 알아주지 않으셔도 돼요 찾아오지 않으셔도 다만 꺼지지 않는 작은 불빛이 여기 반짝 살아 있어요",
        title:"마음",
    },
    {
        lyric:"난 나의 보폭으로 갈게 불안해 돌아보면서도 별 큰일 없이 지나온 언제나 처럼 이번에도 그래 볼게",
        title:"unlucky",
    },
    {
        lyric:"너의 긴 밤이 끝나는 그 날 고개를 들어 바라본 그 곳에 있을게",
        title:"Love poem",
    },
    {
        lyric:"이 하루 이 지금 우리 눈부셔 아름다워 이 불꽃놀이는 끝나지 않을거야 Ooh Whatever ",
        title:"이지금",
    },
    {
        lyric:"나의 여름 가장 푸르던 빗소리가 삼킨 사랑스런 대화 조그맣게 움을 트는 마음 그림처럼 묽게 번진 여름 안에 오롯이 또렷한 너",
        title:"푸르던",
    },
    {
        lyric:"휩쓸려 길을 잃어도 자유로와 더 이상 날 가두는 어둠에 눈 감지 않아 두번 다시 날 모른 척 하지 않아 ",
        title:"아이와 나의 바다",
    },
    {
        lyric:"다시 마주하기 어려운 행운이야 온 몸에 심장이 뛰어 oh 오히려 기꺼이 헤매고픈 밤이야 너와 길 잃을 수 있다면",
        title:"strawberry moon",
    },
    {
        lyric:"내게 기대어 조각잠을 자던 그 모습 그대로 잠들었구나 무슨 꿈을 꾸니 깨어나면 이야기해 줄거지 언제나의 아침처럼",
        title:"겨울잠",
    },
    {
        lyric:"내 맘에 아무 의문이 없어 난 이 다음으로 가요 툭툭 살다보면은 또 만나게 될 거에요 그러리라고 믿어요",
        title:"에필로그",
    },
]

const lyric=document.querySelector("#lyrics span:first-child");
const title=document.querySelector("#title span:last-child");

const todaylyrics=lyrics[Math.floor(Math.random()*lyrics.length)];

lyric.innerText=todaylyrics.lyric;
title.innerText=todaylyrics.title;