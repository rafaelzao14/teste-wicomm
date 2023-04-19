import React from 'react'
import { ButtonObjectives, CardObjective, ContainerCardObjective, LabelButton } from './style'

export default function ContainerObjectives() {
  return (
    <ContainerCardObjective>
        <CardObjective pathImage='src/assets/objetivos/image1.svg' >
            <ButtonObjectives>
                        <LabelButton>
                        Ganho de Massa
                        </LabelButton>
            </ButtonObjectives>
        </CardObjective>
        <CardObjective pathImage='src/assets/objetivos/image2.svg'>
            <ButtonObjectives>
                        <LabelButton>
                        Energia
                        </LabelButton>
                </ButtonObjectives>
        </CardObjective>
        <CardObjective pathImage='src/assets/objetivos/image3.svg'>
                <ButtonObjectives>
                        <LabelButton>
                        Recuperação Muscular
                        </LabelButton>
                    </ButtonObjectives>
        </CardObjective>
        <CardObjective pathImage='src/assets/objetivos/image4.svg'>
                <ButtonObjectives>
                        <LabelButton>
                        Emagrecimento
                        </LabelButton>
                    </ButtonObjectives>
        </CardObjective>
    </ContainerCardObjective>
  )
}
