import styled from 'styled-components';
import Link from '@components/commons/Link';

const LinksProjects = styled(Link)`
    color: ${({ theme }) => theme.colors.secondary.main};
    ${({ theme }) => theme.typographyVariants.paragraph1};
    margin-top: 8px;
`;

export default LinksProjects;
