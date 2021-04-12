import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { BG_COLOR } from '../style';

export const GenContainer = styled(Container)`
  height: '100%';
  background-color: ${BG_COLOR};
`;

export const Separator = () => <div style={{ height: 1, backgroundColor: /*'#e0e0e0'*/'#d1d1d1', marginBottom: '2rem' }} />