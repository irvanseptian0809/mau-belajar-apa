import styled, { css } from "styled-components";

// COMPONENTS
import {
  Button,
  Typography,
} from "../../atoms"

// ICONS
import { ReactComponent as ArrowLeft } from "../../../assets/icons/ArrowLeft.svg"

const Container = styled.div`
  width: 100%;
  background: white;
`

const Header = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  height: 92px;
  background: white;
  align-items: center;
`

const Title = styled.div`
  border-left: 1px solid #BCC0D0;
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
`

// const BackButton = styled.Button`
//   border-radius: unset;
//   border-right: 1px solid #BCC0D0;
// `

export default function HeaderView({
  title,
}) {
  return <Container>
    <Header>
      <Button>
        <ArrowLeft />
      </Button>
      <Title>
        <Typography size={18} weight={600}>{title}</Typography>
      </Title>
    </Header>
  </Container>
}