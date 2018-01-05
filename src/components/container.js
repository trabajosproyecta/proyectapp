import styled from "styled-components/native"
import { Card } from "react-native-elements"

export const Body = styled.View`
  flex: 1;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  align-items: stretch;
  justify-content: center;
  padding: 30px 30px;
`

export const ScrollBody = styled.ScrollView`
  flex: 1;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  padding: 30px 30px;
`

export const Container = styled.View`
  display: flex;
  flex: ${props => (props.flex ? props.flex : "1")};
`

export const Row = styled(Container)`
  flex-flow: row nowrap;
  justify-content: space-around;
`
export const NoFlexRow = styled.View`
  flex-flow: row nowrap;
  justify-content: space-around;
`

export const CenterRow = styled(Row)`
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled(Container)`
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;
`

export const EventContainer = styled(Card)`
  justify-content: center;
  align-items: center;
  background-color: white;
`

export const DayContainer = styled(Container)`
  flex: 1;
  max-width: 20%;
  min-height: 100px;
`

export const IconContainer = styled.View`
  padding: 5px;
`
