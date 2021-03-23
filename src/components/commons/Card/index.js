import styled from 'styled-components';
import Text from '@components/foundation/Text';
import Box from '@components/foundation/layout/Box';
import Link from '../Link';

const Base = styled(Box)`
  overflow: hidden;
  background: #FFFFFF;
  box-shadow: 3px 3px 4px 1px rgba(24, 27, 51, 0.15);
  border-radius: 16px;
  transition: 0.4s ease all;
  flex-grow: 1;
  

`;
const LinkA = styled(Link)`
  text-decoration: none;

  &:hover,
  &:focus {
    opacity: .75;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Title = styled(Text)`
  width: 100%;
`;

const TextCard = styled(Text)`
  margin: 0px;
  text-align: justify;
`;

const Card = {
  Link: LinkA,
  Base,
  Img,
  Title,
  Text: TextCard,
};

export default Card;
