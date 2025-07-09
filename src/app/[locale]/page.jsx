import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] h-full items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <h2 className="text-primary">
        {t('title')}
      </h2>

      <Button className={"bg-primary"}>
        {t('about')}
      </Button>
    </div>
  );
}
