import Link from 'next/link'

import { BlurFade } from '@/components/ui/BlurFade'
import { RainbowButton } from '@/components/ui/RainbowButton'

import { DATA } from '../../common/data'

export const ContactSection = () => {
  return (
    <section id="contact">
      <div className="grid w-full items-center justify-center gap-4 px-4 py-12 pt-6 text-center md:px-6">
        <BlurFade>
          <div className="space-y-3">
            <RainbowButton className="pointer-events-none">Contact</RainbowButton>
            <hgroup>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="text-muted-foreground">Want to chat or work together?</p>
            </hgroup>
            <p className="mx-auto max-w-[600px] text-sm text-muted-foreground md:text-base/relaxed lg:text-base/relaxed">
              お問い合わせ、お仕事の依頼は{' '}
              <Link href={DATA.contact.email.href} className="text-blue-500 hover:underline">
                Email
              </Link>{' '}
              か{' '}
              <Link href={DATA.contact.email.href} className="text-blue-500 hover:underline">
                Notion Form
              </Link>{' '}
              からお願いします。 <br className="hidden md:inline" />
              または、X をフォローしていただき{' '}
              <Link href={DATA.contact.x.href} className="text-blue-500 hover:underline">
                DM
              </Link>{' '}
              からお願いします。
              <br />
              随時返信させていただきます。
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
