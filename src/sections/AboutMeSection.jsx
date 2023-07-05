import Link from 'next/link'
import React from 'react'
import { ForwardArrowIcon } from '@/configs/icons'

const AboutMeSection = () => {
  return (
    <section className="mt-24">
      <h3 className="text-2xl md:text-3xl mb-8 text-fore-primary border-b border-b-slate-200 dark:border-b-gray-600 w-fit">
      私について
      </h3>
      <p className="text-fore-primary mb-8 ">
      こんにちは、私は最近完成した です。
       私は WebApp、API、デスクトップ アプリ、Android アプリを開発してきました。
       .NET Core、Node.js、React などの Web テクノロジを改善したいと考えています。
      </p>
      <p className="text-fore-primary mb-8">
      商業出身の私は、コードを書くのは秘密のソースを入れるようなものだとすぐに気づきました
         ボーカルミックスで。 必ずしも単一の方法があるわけではなく、
         キーボードの背後にいる人は、自分のスタイルを表現する力を持っています。
         素晴らしい解決策。
      </p>
      <Link href="/about">
        <a className="flex items-center text-accent underline underline-offset-2 cursor-pointer hover:opacity-70 transition hover:translate-x-1 w-fit">
          <span className="mr-1">
            <ForwardArrowIcon />
          </span>
          もっと詳しく知る
        </a>
      </Link>
    </section>
  )
}

export default AboutMeSection
