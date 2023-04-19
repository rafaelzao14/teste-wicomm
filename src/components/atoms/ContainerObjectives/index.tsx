import React from 'react'
import { ButtonObjectives, CardObjective, ContainerCardObjective, LabelButton } from './style'

export default function ContainerObjectives() {
  return (
    <ContainerCardObjective>
        <CardObjective pathImage='src/assets/objetivos/image1.png' >
            <ButtonObjectives>
                        <LabelButton>
                        Ganho de Massa
                        </LabelButton>
            </ButtonObjectives>
        </CardObjective>
        <CardObjective pathImage='src/assets/objetivos/image2.png'>
            <ButtonObjectives>
                        <LabelButton>
                        Energia
                        </LabelButton>
                </ButtonObjectives>
        </CardObjective>
        <CardObjective pathImage='src/assets/objetivos/image3.png'>
                <ButtonObjectives>
                        <LabelButton>
                        Recuperação Muscular
                        </LabelButton>
                    </ButtonObjectives>
        </CardObjective>
        <CardObjective pathImage='src/assets/objetivos/image4.png'>
                <ButtonObjectives>
                        <LabelButton>
                        Emagrecimento
                        </LabelButton>
                    </ButtonObjectives>
        </CardObjective>
    </ContainerCardObjective>
  )
}
