'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/core/i18n/navigation';
import { LocaleSelector } from '@/shared/blocks/common/locale-selector';
import { AnimatedThemeToggler } from '@/shared/components/magicui/animated-theme-toggler';
import { Button } from '@/shared/components/ui/button';

export function HelloWorldLanding() {
  const t = useTranslations('landing.hello_world');

  return (
    <main className="flex min-h-[calc(100vh-200px)] items-center justify-center bg-background relative py-8">
      {/* 主题切换器 - 右上角 */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <LocaleSelector type="icon" />
        <AnimatedThemeToggler className="h-9 w-9 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground" />
      </div>

      {/* 主要内容区域 */}
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-6xl font-bold text-foreground text-center">
          <div>{t('line1')}</div>
          <div>{t('line2')}</div>
        </h1>

        {/* 登录和博客按钮 */}
        <div className="flex gap-4">
          <Button asChild variant="default">
            <Link href="/sign-in">{t('sign_in')}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog">{t('blog')}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

