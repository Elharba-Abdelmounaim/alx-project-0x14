import Head from 'next/head';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Layout from '../components/layouts/Layout';
import Button from '../components/commons/Button';
import Loading from '../components/commons/Loading';
import MovieCard from '../components/commons/MovieCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>CineSeek</title>
      </Head>

      <Layout>
        <Header />
        <main className="p-4 space-y-4">
          <h1 className="text-2xl font-bold text-center">Welcome to CineSeek 🎬</h1>
          <Button />
          <Loading />
          <MovieCard />
        </main>
        <Footer />
      </Layout>
    </>
  );
}
