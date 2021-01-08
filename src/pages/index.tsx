import { NextPage } from 'next';
import styled from 'styled-components';
import useSWR from 'swr';

const Title = styled.h1`
  color: red;
  font-size: 18px;
`;

const fetcher = (url: string) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => error);
};

const Index: NextPage = () => {
  const { data, error } = useSWR('/api/user', fetcher, {
    revalidateOnFocus: false,
  });

  if (error) {
    return <div>error</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  return <Title>{data.name}</Title>;
};

export default Index;
