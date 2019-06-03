import { team } from '@/data/team.js'
export default {
  FINAL: {
    team: [team.LIVERPOOL, team.TOTTENHAM_HOTSPUR],
    children: {

    },
  },
  32: {
    "A": [
      { rank: 1, ...team.BORUSSIA_DORTMUND },
      { rank: 2, ...team.ATLETICO_MADRID },
      { rank: 3, ...team.CLUB_BRUGGE },
      { rank: 4, ...team.AS_MONACO },
    ],
    "B": [
      { rank: 1, ...team.FC_BARCELONA },
      { rank: 2, ...team.TOTTENHAM_HOTSPUR },
      { rank: 3, ...team.INTER_MILAN },
      { rank: 4, ...team.PSV_EINDHOVEN },
    ],
    "C": [
      { rank: 1, ...team.PSG },
      { rank: 2, ...team.LIVERPOOL },
      { rank: 3, ...team.NAPOLI },
      { rank: 3, ...team.NAPOLI },
      { rank: 4, ...team.Zvezda },
    ],
    "D": [
      { rank: 1, ...team.PORTO },
      { rank: 2, ...team.SCHALKE04 },
      { rank: 3, ...team.GALATASARAY },
      { rank: 4, ...team.LOKOMOTIV_MOSCOW },
    ],
    "E": [
      { rank: 1, ...team.BAYERN_MUNICH },
      { rank: 2, ...team.AFC_AJAX },
      { rank: 3, ...team.BENFICA },
      { rank: 4, ...team.AEK },
    ],
    "F": [
      { rank: 1, ...team.MANCHESTER_CITY },
      { rank: 2, ...team.OLYMPIQUE_LYONNAIS },
      { rank: 3, ...team.SHAKHTAR_DONETSK },
      { rank: 4, ...team.AEK },
    ],
    "G": [
      { rank: 1, ...team.REAL_MADRID },
      { rank: 2, ...team.OLYMPIQUE_LYONNAIS },
      { rank: 3, ...team.SHAKHTAR_DONETSK },
      { rank: 4, ...team.AEK },
    ],
    "H": [
      { rank: 1, ...team.MANCHESTER_CITY },
      { rank: 2, ...team.OLYMPIQUE_LYONNAIS },
      { rank: 3, ...team.SHAKHTAR_DONETSK },
      { rank: 4, ...team.AEK },
    ],
  },
}