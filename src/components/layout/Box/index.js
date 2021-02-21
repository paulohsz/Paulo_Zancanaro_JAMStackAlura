import styled from 'styled-components';
import polygonClip from '../../../theme/utils/polygonClip';
import propToStyle from '../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('textAlign')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('borderTop')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  
  ${polygonClip('polygonBottom')}
  ${polygonClip('polygonTop')}

  background-color: ${({ theme }) => theme.colors.background.main.color};  
`;

export default Box;
