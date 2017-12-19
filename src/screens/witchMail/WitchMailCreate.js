import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import t from "tcomb-form-native"

import { Body } from "../../components/container"
import { WITCH_MAIL_COLOR } from "../../components/colors"
import { Title } from "../../components/text"
import { getCommunities } from "../../redux/modules/community"
import { Button } from "../../components/form"
import { newWitchMail } from "../../redux/modules/witchMail"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

const Form = t.form.Form
const WitchMailFormStructGenerator = communities =>
  t.struct({
    community: t.enums(communities, "Community"),
    content: t.String,
  })

const options = {
  fields: {},
}

const mapStateToProps = state => {
  return {
    communities: state.community.data,
  }
}
const mapDispatchToProps = dispatch => ({
  getCommunities: () => dispatch(getCommunities()),
  newWitchMail: data => dispatch(newWitchMail(data)),
})

const initialValues = {
  community: "",
  content: "",
}

class WitchMailCreate extends Component {
  static propTypes = {
    communities: PropTypes.array.isRequired,
    getCommunities: PropTypes.func.isRequired,
    newWitchMail: PropTypes.func.isRequired,
  }
  static defaultProps = {
    communities: [],
  }
  state = {
    value: initialValues,
  }
  componentWillMount = () => {
    this.props.getCommunities()
  }
  onChange = value => {
    this.setState({ value })
  }
  handleSubmit = () => {
    this.props.newWitchMail(this.state.value)
    this.setState({ value: initialValues })
  }
  getStruct = () => {
    const communities = {}
    this.props.communities.forEach(community => {
      communities[community.id] = community.name
    })
    return WitchMailFormStructGenerator(communities)
  }
  render = () => {
    return (
      <Body backgroundColor={WITCH_MAIL_COLOR}>
        <KeyboardAwareScrollView>
          <Form
            options={options}
            type={this.getStruct()}
            value={this.state.value}
            onChange={this.onChange}
          />
          <Button title="ENVIAR" onPress={this.handleSubmit} color="#00678A" />
        </KeyboardAwareScrollView>
      </Body>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WitchMailCreate)
