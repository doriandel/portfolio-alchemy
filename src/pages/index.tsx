import { useTranslation } from 'next-i18next';

export const HomePage = () => {
  const { t } = useTranslation('common');

  return <h1 color="gray.800">Welcome to Next.js! On {t('home')}</h1>;
};

export default HomePage;
