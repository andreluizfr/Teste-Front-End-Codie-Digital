import Header from '../Header';
import Footer from '../Footer';
import { HTMLAttributes } from 'react';
import { PageWrapper } from './styles';

export default function Layout({ children }: HTMLAttributes<HTMLElement>) {
  return (
    <PageWrapper>
      <Header />
      {children}
      <Footer />
    </PageWrapper>
  )
}