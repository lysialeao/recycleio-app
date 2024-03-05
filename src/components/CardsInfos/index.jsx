import { REPORTS_INFOS } from "../../constants/reports-infos"

import { Card, CardTile, CardInfo} from './styles'

export const CardsInfos = () => {
    return (
        <>
        {
            REPORTS_INFOS.map((item, index) => {
              return (
                <Card key={index}>
                  <img src={item.icon} width='70px' height={'70px'}/>
                  <CardTile><h2>{item.residue}</h2></CardTile>
                  <CardInfo>{item.info}</CardInfo>
                </Card>
              )
            })
          }
        </>
    )}