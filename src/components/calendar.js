import React from "react"
import { Agenda as RNAgenda } from "react-native-calendars"

import { CenterText, Title } from "./text"
import { EventContainer, DayContainer, Container } from "./container"

import { LocaleConfig } from "react-native-calendars"

LocaleConfig.locales["es"] = {
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  monthNamesShort: [
    "Ene.",
    "Feb.",
    "Mar.",
    "Abr.",
    "May.",
    "Jun.",
    "Jul.",
    "Ago.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dic.",
  ],
  dayNames: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ],
  dayNamesShort: ["D", "L", "M", "W", "J", "V", "S"],
}
LocaleConfig.defaultLocale = "es"

export const Agenda = props => {
  return (
    <RNAgenda
      renderItem={(item, firsItemInDay) => (
        <EventContainer first={firsItemInDay}>
          <CenterText>{item.community}</CenterText>
          <CenterText fontType="bold">{item.title}</CenterText>
          <CenterText fontType="light-italic">{item.description}</CenterText>
          <CenterText fontType="light">{item.time} hrs</CenterText>
        </EventContainer>
      )}
      renderEmptyDate={() => undefined}
      rowHasChanged={(r1, r2) => {
        return r1.title !== r2.title
      }}
      firstDay={1}
      pastScrollRange={0}
      futureScrollRange={0}
      scrollEnabled={false}
      {...props}
    />
  )
}
