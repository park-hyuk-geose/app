import {SafeAreaView, Text} from "react-native";
import Container from "../Container/Container";

const AccountPage = () =>
  <SafeAreaView>
    <Container>
      <Text>이메일주소</Text>
      <Text>pmh_only@pmh.codes</Text>
    </Container>
    <Container>
      <Text>휴대폰 번호</Text>
      <Text>010-1234-5678</Text>
    </Container>
    <Container>
      <Text>역할</Text>
      <Text>학생</Text>
    </Container>
    <Container>
      <Text>아이디</Text>
      <Text>pmh_only</Text>
    </Container>
  </SafeAreaView>

export default AccountPage
