import type { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: '1',
    time: '11:40',
    title: '집합',
    description: '1층에서 만난 후 단체사진 같이 찍어요.',
    location: '롯데호텔월드 1층',
    mapUrl: '<div id="daumRoughmapContainer1764742070835" class="root_daum_roughmap root_daum_roughmap_landing"></div>',
    icon: '🎄',
  },
  {
    id: '2',
    time: '12:00~14:00',
    title: '점심 (라세느)',
    // subtitle: '1층 호텔식 뷔페, 2층 한식당',
    description: '맛있는 점심을 즐기며 팀원들과 이야기를 나눠봐요.',
    location: '라세느 잠실점',
    mapUrl: '<div id="daumRoughmapContainer1764057887312" class="root_daum_roughmap root_daum_roughmap_landing"></div>',
    icon: '🍽️',
  },
  {
    id: '3',
    time: '14:00~17:30',
    title: '팀별 액티비티 진행',
    subtitle: '조별로 같이 이동해주세요.',
    description: 'A팀은 환상적인 쿠자 공연을 관람하고, B팀은 힐링 마사지와 도자기 트리 만들기를 체험합니다.',
    location: '잠실종합운동장',
    mapUrl: '<div id="daumRoughmapContainer1764059872566" class="root_daum_roughmap root_daum_roughmap_landing"></div>',
    icon: '🎭',
    teamActivities: [
      {
        label: 'A팀',
        activity: '쿠자 공연 관람 (130분)',
        description: 'A팀은 환상적인 쿠자 공연을 관람하고, B팀은 힐링 마사지와 도자기 트리 만들기를 체험합니다.',
        subtitle: '택시를 타고 잠실종합운동장으로 이동해주세요 (법인카드 결제 후 정산)',
        detailedInfo: '잠실종합운동장에서 환상적인 쿠자 공연을 관람합니다.'
      },
      {
        label: 'B팀',
        activity: '마사지+도자기 트리 클래스',
        description: 'A팀은 환상적인 쿠자 공연을 관람하고, B팀은 힐링 마사지와 도자기 트리 만들기를 체험합니다.',
        subtitle: '택시를 타고 마사지 장소로 이동해주세요 (법인카드 결제 후 정산)',
        maps: [
          {
            title: '스파에이르 잠실롯데월드몰점',
            address: '서울 송파구 올림픽로 300 롯데월드몰 6층',
            time: '14:30 - 15:10 (40분)',
            members: 'Mint, Glenn, Beige, Grace',
            mapUrl: '<div id="daumRoughmapContainer1764060654477" class="root_daum_roughmap root_daum_roughmap_landing"></div>',
            timestamp: '1764060654477',
            key: 'd6vvzm2i62v'
          },
          {
            title: '더풋샵마사지 잠실역점',
            address: '서울 송파구 올림픽로 지하 265 잠실역 지하 1층',
            time: '14:30 - 15:30 (60분)',
            members: 'Kyla, Ed, Crystal, Marina, Rita',
            mapUrl: '<div id="daumRoughmapContainer1764060799169" class="root_daum_roughmap root_daum_roughmap_landing"></div>',
            timestamp: '1764060799169',
            key: 'csccwzjycom'
          },
          {
            title: 'ZNZN Ceramic Studio',
            address: '서울 송파구 백제고분로41길 42-22 2층',
            time: '16:00 - 17:30 (90분)',
            mapUrl: '<div id="daumRoughmapContainer1764060856780" class="root_daum_roughmap root_daum_roughmap_landing"></div>',
            timestamp: '1764060856780',
            key: 'cse5fmvsdbm'
          }
        ]
      }
    ]
  },
  {
    id: '4',
    time: '17:30~18:00',
    title: '파티룸 이동 (하쿠나마타타)',
    description: '저녁 장소로 이동합니다.',
    location: '서울 송파구 백제고분로7길 33 4층',
    mapUrl: '<div id="daumRoughmapContainer1764062793311" class="root_daum_roughmap root_daum_roughmap_landing"></div>',
    icon: '🚶',
  },
  {
    id: '5',
    time: '18:00~22:00',
    title: '저녁 및 플레이샵 행사',
    description: '맛있는 저녁과 함께 즐거운 시간을 보내세요! 푸짐한 선물이 기다리고 있답니다.',
    icon: '🍕',
  },
];

