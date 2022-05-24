import ClassListItem from "../ClassListItem/ClassListItem"
import Container from "../Container/Container"
import Link from "../Link/Link"

const ClassListView = () =>
  <Container>
    <Link to="MyClasses" label="내 학급"/>
    <ClassListItem />
  </Container>

export default ClassListView
