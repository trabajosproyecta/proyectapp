import React, { Component } from "react"

import { Title } from "../../components/text"
import { Body } from "../../components/container"
import { WITCH_MAIL_COLOR } from "../../components/colors"
import { Button } from "../../components/form"
import { Actions } from "react-native-router-flux"

class WitchMailIndex extends Component {
  render = () => {
    return (
      <Body backgroundColor={WITCH_MAIL_COLOR}>
        <Title color="#00678A">Correo de Brujas</Title>
        <Button
          title="ESCRIBIR CORREO"
          onPress={() => Actions.witchMailCreate()}
          color="#00678A"
        />
        <Button
          title="BANDEJA DE ENTRADA"
          onPress={() => Actions.witchMailBox()}
          color="#00678A"
        />
      </Body>
    )
  }
}

export default WitchMailIndex
