import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="BeautyLazer" width={20} height={20} className="rounded-full" />
          <span>© 2026 BeautyLazer. Все права защищены.</span>
        </div>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-white transition">Услуги</a>
          <a href="#reviews" className="hover:text-white transition">Отзывы</a>
          <a href="#contacts" className="hover:text-white transition">Контакты</a>
        </div>
      </div>
    </footer>
  )
}
