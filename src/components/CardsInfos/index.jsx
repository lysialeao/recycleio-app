import { REPORTS_INFOS } from "../../constants/reports-infos"

import { Card, CardTile, CardInfo} from './styles'

export const CardsInfos = () => {
    return (
        <>
        {
            REPORTS_INFOS.map((item, index) => {
              return (
                <Card key={index}>
                  <CardTile><h2>{item.residue}</h2></CardTile>
                  <CardInfo>{item.info}</CardInfo>
                  <img src={item.icon} width='50px' height={'50px'}/>
                </Card>
              )
            })
          }
        </>
    )}