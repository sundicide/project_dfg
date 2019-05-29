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
  },
}