import type { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: '1',
    time: '11:30',
    title: '활동',
    description: '플레이샵이 곧 시작됩니다! 준비해주세요.',
    icon: '🎄',
  },
  {
    id: '2',
    time: '12:00~14:00',
    title: '점심 (라세느)',
    // subtitle: '1층 호텔식 뷔페, 2층 한식당',
    description: '맛있는 점심을 즐기며 팀원들과 이야기를 나눠봐요.',
    location: '라세느',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.4536872749034!2d127.0276378!3d37.4979517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI5JzUyLjYiTiAxMjfCsDAxJzM5LjUiRQ!5e0!3m2!1sko!2skr!4v1234567890123!5m2!1sko!2skr',
    icon: '🍽️',
  },
  {
    id: '3',
    time: '14:00~14:30',
    title: '팀별 택시 이동',
    subtitle: '(라세느 → 잠실종합운동장)',
    description: '택시를 타고 편안하게 이동해주세요. 택시는 각자 법인 카드로 결제 후 정산합니다.',
    icon: '🚕',
  },
  {
    id: '4',
    time: '14:30~17:30',
    title: '팀별 액티비티 진행',
    subtitle: 'A팀: 쿠자 공연 관람 (130분) \n B팀: 마사지+도자기 트리 클래스',
    description: 'A팀은 환상적인 쿠자 공연을 관람하고, B팀은 힐링 마사지와 도자기 트리 만들기를 체험합니다.',
    location: '잠실종합운동장',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.8234!2d127.0717!3d37.5145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5a1f2f!2s0x357ca5a1f2f!5e0!3m2!1sko!2skr!4v1234567890123!5m2!1sko!2skr',
    icon: '🎭',
  },
  {
    id: '5',
    time: '17:30~18:00',
    title: '파티룸 이동 (택시 or 도보 선택)',
    description: '저녁 장소로 이동합니다.',
    icon: '🚶',
  },
  {
    id: '6',
    time: '18:00~22:00',
    title: '저녁 및 플레이샵 행사',
    subtitle: '맛있는 랍스터와 대방어 냠냠',
    description: '맛있는 저녁과 함께 즐거운 시간을 보내세요! 푸짐한 선물이 기다리고 있답니다.',
    icon: '🍕',
  },
];

